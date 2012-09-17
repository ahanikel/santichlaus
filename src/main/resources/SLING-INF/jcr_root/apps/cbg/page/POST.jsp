<%@page import="ch.comebackgloebb.website.santichlaus.MailService"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/html" pageEncoding="UTF-8" session="false"%><%
%><sling:defineObjects/><%
  MailService mailService = sling.getService(MailService.class);
  mailService.sendRegistrationMail("Hello Axel!");
  response.sendRedirect(request.getPathInfo());
%>