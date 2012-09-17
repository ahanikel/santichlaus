package ch.comebackgloebb.website.santichlaus;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;

@Service(MailService.class)
public class MailService {

  public static final String FROM = "santichlaus@comebackgloebb.ch";
  public static final String SUBJECT = "Santichlaus-Anmeldung";
  public static final String[] RECIPIENTS = new String[]{"santichlaus@comebackgloebb.ch"};
  public static final String SMTPHOST = "mail.comebackgloebb.ch";

  @Reference
  public ResourceResolver resAdmin;

  public void sendRegistrationMail(String message) throws Exception {
    postMail(RECIPIENTS, SUBJECT, message, FROM);
  }

  public void sendConfirmationMail(String recipient, String message) throws MessagingException {
    postMail(new String[]{recipient}, SUBJECT, message, FROM);
  }

  public void postMail(final String[] recipients, final String subject, final String message, final String from) throws MessagingException {
    Properties props = new Properties();
    props.put("mail.smtp.host", SMTPHOST);
    props.put("mail.smtp.port", "587");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    Session session = Session.getDefaultInstance(props, new Authenticator() {
      @Override
      public PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(from, getSMTPPassword());
      }
    });
    session.setDebug(false);
    Message msg = new MimeMessage(session);
    InternetAddress addressFrom = new InternetAddress(from);
    msg.setFrom(addressFrom);
    InternetAddress[] addressTo = new InternetAddress[recipients.length];
    for (int i = 0; i < recipients.length; i++) {
      addressTo[i] = new InternetAddress(recipients[i]);
    }
    msg.setRecipients(Message.RecipientType.TO, addressTo);
    msg.addHeader("X-Santichlaus-Mailing-Central", "Schwarzwald");
    msg.setSubject(subject);
    msg.setContent(message, "text/plain");
    Transport.send(msg);
  }

  private String getSMTPPassword() {
    String pw = "";
    Resource res = resAdmin.getResource("/etc/mailconfig");

    if (res != null) {
      ValueMap props = res.adaptTo(ValueMap.class);
      pw = props.get("password", "");
    }

    return pw;
  }
}
