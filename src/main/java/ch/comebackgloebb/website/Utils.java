package ch.comebackgloebb.website;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Utils {
    public static final String FROM = "santichlaus@comebackgloebb.ch";
    public static final String SUBJECT = "Santichlaus-Anmeldung";
    public static final String[] RECIPIENTS = new String[] { "ahanikel@gmail.com" };
    public static final String SMTPHOST = "comebackgloebb.ch";
    
    public static void sendRegistrationMail(String message) throws Exception {
        postMail(RECIPIENTS, SUBJECT, message, FROM);
    }
    
    public static void sendConfirmationMail(String recipient, String message) throws MessagingException {
        postMail(new String[] { recipient }, SUBJECT, message, FROM);
    }
    
    public static void postMail(String[] recipients, String subject, String message, String from) throws MessagingException {
        boolean debug = false;
        Properties props = new Properties();
        props.put("mail.smtp.host", SMTPHOST);
        Session session = Session.getDefaultInstance(props, null);
        session.setDebug(debug);
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
}
