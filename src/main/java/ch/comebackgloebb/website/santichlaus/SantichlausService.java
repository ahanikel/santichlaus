package ch.comebackgloebb.website.santichlaus;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;
import java.util.logging.Level;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestParameterMap;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
@Service(SantichlausService.class)
public class SantichlausService {

  public static class RegistrationException extends Exception {

    public RegistrationException(Exception e) {
      super(e);
    }
  }

  private static final Logger log = LoggerFactory.getLogger(SantichlausService.class);
  private static final String[] FIELDS = {"name", "vorname", "strasse", "ort", "telefon", "email", "zeit", "remarks"};
  private static final String[] CHILDFIELDS = {"childname", "childage", "childpos", "childneg"};

  @Reference
  private ResourceResolverFactory resFactory;

  @Reference
  private MailService mailService;

  public List<String> getAvailableTimes() {

    List<String> ret = new ArrayList<String>();
    try {
      ResourceResolver resAdmin = resFactory.getAdministrativeResourceResolver(null);
      Resource times = resAdmin.getResource("/etc/times");
      for (Iterator<Resource> it = times.listChildren(); it.hasNext();) {
        ret.add(it.next().getName());
      }
    }
    catch (LoginException ex) {
      log.error(ex.getMessage());
    }
    return ret;
  }

  public boolean register(HttpServletRequest request) throws Exception {

    SlingHttpServletRequest req = (SlingHttpServletRequest) request;
    ResourceResolver resAdmin = null;

    try {
      resAdmin = resFactory.getAdministrativeResourceResolver(null);
      Resource registrationResource = resAdmin.getResource("/apps/cbg/components/registrationmail");
      String registrationMessageHeader = ((Node) registrationResource.adaptTo(Node.class)).getProperty("header").getString();
      String registrationMessageBody = ((Node) registrationResource.adaptTo(Node.class)).getProperty("body").getString();

      StringBuilder sbRegistration = new StringBuilder();
      List<String> fields = new ArrayList<String>();
      for (String field : FIELDS) {
        fields.add(req.getParameter(field));
      }
      sbRegistration.append(String.format(registrationMessageHeader, (Object[]) fields.toArray(new String[0])));
      sbRegistration.append("\n\n");

      final Map<String, Map<String, String>> children = parseChildrenFromRequestParams(req);
      for (Entry<String, Map<String, String>> child : children.entrySet()) {
        List<String> childfields = new ArrayList<String>();
        for (String field : CHILDFIELDS) {
          childfields.add(child.getValue().get(field));
        }
        sbRegistration.append(String.format(registrationMessageBody, (Object[]) childfields.toArray(new String[0])));
      }
      String registrationMessage = sbRegistration.toString();

      Resource confirmationResource = resAdmin.getResource("/apps/cbg/components/confirmationmail");
      String confirmationMessageBody = ((Node) confirmationResource.adaptTo(Node.class)).getProperty("text").getString();
      String confirmationMessage = String.format(confirmationMessageBody, req.getParameter("zeit"));

      registerInternal(req);

      if (mailService != null) {
        String subject = "Santichlaus-Anmeldung " + req.getParameter("name");
        mailService.sendRegistrationMail(subject, registrationMessage);
        mailService.sendConfirmationMail(req.getRequestParameter("email").getString(), confirmationMessage + "\n\n\n" + registrationMessage);
      }
      else {
        throw new IllegalStateException("Mail service not present");
      }
    }
    finally {
      if (resAdmin != null) {
        resAdmin.close();
      }
    }
    return true;
  }

  private void registerInternal(SlingHttpServletRequest req) throws RegistrationException {

    String key = req.getRequestParameter("name") + "-" + req.getRequestParameter("email");
    log.info("Got registration request for " + key);

    Node registrations;
    ResourceResolver resAdmin = null;
    Node registration = null;

    try {

      // get the registration root node
      try {
        resAdmin = resFactory.getAdministrativeResourceResolver(null);
        log.info(resAdmin.toString());
        Resource res = resAdmin.getResource("/etc/registrations");
        log.info(res.toString());
        registrations = res.adaptTo(Node.class);
        log.info(registrations.toString());
      }
      catch (LoginException ex) {
        log.error(ex.getMessage());
        throw new RegistrationException(ex);
      }
  
      // see if there's already a registration with that key
      // and create a new one if there isn't
      try {
        registration = registrations.getNode(key);
      }
      catch (Exception ex) {
        try {
          registration = registrations.addNode(key);
          registration.addMixin("mix:versionable");
          log.info(registration.toString());
        }
        catch (Exception e) {
          log.error(e.getMessage());
          throw new RegistrationException(e);
        }
    
        try {
          registration.getSession().save();
        }
        catch (Exception e) {
          log.error(e.getMessage());
          throw new RegistrationException(e);
        }
      }

      // create a new version of the registration
      try {
        registration.checkout();
      }
      catch (Exception ex) {
        log.error(ex.getMessage());
        throw new RegistrationException(ex);
      }

      // add the simple fields
      for (String field : FIELDS) {
        try {
          registration.setProperty(field, req.getRequestParameter(field).getString());
        }
        catch (Exception e) {
          log.error(e.getMessage());
          throw new RegistrationException(e);
        }
      }

      // delete existing child nodes
      try {
        for (NodeIterator it = registration.getNodes(); it.hasNext(); ) {
          Node n = it.nextNode();
          if (n.getName().startsWith("child")) {
            n.remove();
          }
        }
      }
      catch (RepositoryException ex) {
        // ignore
      }

      // add child(ren)
      final Map<String, Map<String, String>> children = parseChildrenFromRequestParams(req);
      for (Entry<String, Map<String, String>> child : children.entrySet()) {
  
        log.info("child: " + child.toString());
        Node childNode = null;
        String childKey = "child" + child.getKey();
  
        try {
          childNode = registration.addNode(childKey);
          log.info(childNode.toString());
        }
        catch (Exception ex) {
          log.error(ex.getMessage());
          throw new RegistrationException(ex);
        }
  
        Map<String, String> fields = child.getValue();
        log.info("fields: " + fields.toString());
  
        for (String fieldName : CHILDFIELDS) {
          try {
            childNode.setProperty(fieldName, fields.get(fieldName));
          }
          catch (Exception ex) {
            log.error(ex.getMessage());
            throw new RegistrationException(ex);
          }
        }
      }
    }
    finally {
      if (registration != null) {
        try {
          registration.getSession().save();
          registration.checkin();
        }
        catch (Exception ex) {
          log.error(ex.getMessage());
        }
      }
      if (resAdmin != null) {
        log.info("Closing session");
        resAdmin.close();
        resAdmin = null;
      }
    }
  }

  private Map<String, Map<String, String>> parseChildrenFromRequestParams(SlingHttpServletRequest req) {

    final Map<String, Map<String, String>> children = new TreeMap<String, Map<String, String>>();
    final RequestParameterMap params = req.getRequestParameterMap();
    final Pattern regex = Pattern.compile("children\\[(\\d+)\\]\\[([^\\]]*)\\]");

    for (String param : params.keySet()) {

      if (param.startsWith("children")) {
        log.debug("Trying to match <" + param + ">" + " with " + regex.pattern());
        Matcher m = regex.matcher(param);
        m.find();
        String number = m.group(1);
        String field = m.group(2);
        Map<String, String> fields = children.get(number);

        if (fields == null) {
          fields = new HashMap<String, String>();
          children.put(number, fields);
        }
        fields.put(field, params.getValue(param).toString());
      }
    }

    return children;
  }
}
