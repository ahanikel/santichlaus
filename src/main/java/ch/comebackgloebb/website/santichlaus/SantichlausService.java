package ch.comebackgloebb.website.santichlaus;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.jcr.ItemExistsException;
import javax.jcr.Node;
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
  private static final String[] FIELDS = {"name", "vorname", "strasse", "ort", "telefon", "email", "zeit"};
  private static final String[] CHILDFIELDS = {"childname", "childage", "childpos", "childneg"};

  @Reference
  private ResourceResolverFactory resFactory;

  public void register(HttpServletRequest request) throws RegistrationException {

    SlingHttpServletRequest req = (SlingHttpServletRequest) request;
    String key = req.getRequestParameter("name") + "-" + req.getRequestParameter("email");
    log.info("Got registration request for " + key);

    Node registrations;
    try {
      ResourceResolver resAdmin = resFactory.getAdministrativeResourceResolver(null);
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

    Node registration = null;
    try {
      registration = registrations.addNode(key);
      log.info(registration.toString());
    }
    catch (ItemExistsException ex) {
      log.info("Updating existing registration for " + key);
      updateRegistration(request);
      return;
    }
    catch (Exception ex) {
      log.error(ex.getMessage());
      throw new RegistrationException(ex);
    }

    try {
      registration.getSession().save();
    }
    catch (Exception ex) {
      log.error(ex.getMessage());
      throw new RegistrationException(ex);
    }

    final Map<String, Map<String, String>> children = parseChildrenFromRequestParams(req);

    for (Entry<String, Map<String, String>> child : children.entrySet()) {

      log.info("child: " + child.toString());
      Node childNode = null;

      try {
        childNode = registration.addNode("child" + child.getKey());
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

      try {
        childNode.getSession().save();
      }
      catch (Exception ex) {
        log.error(ex.getMessage());
        throw new RegistrationException(ex);
      }
    }
  }

  public void updateRegistration(HttpServletRequest request) {

    SlingHttpServletRequest req = (SlingHttpServletRequest) request;
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
