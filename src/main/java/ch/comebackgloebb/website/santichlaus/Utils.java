package ch.comebackgloebb.website.santichlaus;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Utils {
    public static final String FROM = "santichlaus@comebackgloebb.ch";
    public static final String SUBJECT = "Santichlaus-Anmeldung";
    public static final String[] RECIPIENTS = new String[] { "santichlaus@comebackgloebb.ch" };
    public static final String SMTPHOST = "mail.comebackgloebb.ch";
    
    public static void sendRegistrationMail(String message, String password) throws Exception {
        postMail(RECIPIENTS, SUBJECT, message, FROM, password);
    }
    
    public static void sendConfirmationMail(String recipient, String message, String password) throws MessagingException {
        postMail(new String[] { recipient }, SUBJECT, message, FROM, password);
    }
    
    public static void postMail(final String[] recipients, final String subject, final String message, final String from, final String password) throws MessagingException {
        Properties props = new Properties();
        props.put("mail.smtp.host", SMTPHOST);
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        Session session = Session.getDefaultInstance(props, new Authenticator() {
            @Override
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
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
}
