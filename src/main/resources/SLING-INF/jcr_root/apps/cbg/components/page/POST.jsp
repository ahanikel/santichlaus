<%@page import="ch.comebackgloebb.website.santichlaus.SantichlausService"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/html" pageEncoding="UTF-8" session="false"%><%
%><sling:defineObjects/><%
SantichlausService svc = sling.getService(SantichlausService.class);
svc.register(request);
%>