<%@page import="java.util.Date, org.apache.sling.api.request.*" %><%
%><%@page import="ch.comebackgloebb.website.santichlaus.SantichlausService"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/plain" pageEncoding="UTF-8" session="true"%><%
%><sling:defineObjects/><%
%>Santichlaus-Anmeldung
=====================

Name:         <%= slingRequest.getRequestParameter("name") %>
Vorname:      <%= slingRequest.getRequestParameter("vorname") %>
Strasse / Nr: <%= slingRequest.getRequestParameter("strasse") %>
PLZ / Ort:    <%= slingRequest.getRequestParameter("ort") %>
Telefon:      <%= slingRequest.getRequestParameter("telefon") %>
E-Mail:       <%= slingRequest.getRequestParameter("email") %>
Bemerkungen:  <%= slingRequest.getRequestParameter("remarks") %>

Wir wünschen den Besuch des Santichlauses am 6. Dezember <%= new Date().getYear() + 1900%> um

        <%= slingRequest.getRequestParameter("time") %>
        
Uhr.

<%
  RequestParameter[] children = slingRequest.getRequestParameters("child");

   if (children != null) for (RequestParameter child : children) {
%>
----------------------------------------------------------------------
<%= child %> (%s Jahre)
----------------------------------------------------------------------

Zu loben:

%s


Zu tadeln:

%s

<%
   }
%>
