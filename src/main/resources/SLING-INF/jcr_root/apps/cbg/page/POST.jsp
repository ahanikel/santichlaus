<%@page import="ch.comebackgloebb.website.santichlaus.Utils"%><%
%><%@page import="org.apache.sling.api.resource.*"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/html" pageEncoding="UTF-8" session="true"%><%
%><sling:defineObjects/><%

    String pw = "";
    Resource res = resourceResolver.getResource("/etc/mailconfig");

    if (res != null) {
        ValueMap props = res.adaptTo(ValueMap.class);
        pw = props.get("password", "");
    }

    Utils.sendRegistrationMail("Hello Axel!", pw);

    response.sendRedirect(request.getPathInfo());
%>