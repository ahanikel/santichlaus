<%@page import="java.util.Date" %><%
%><%@page import="ch.comebackgloebb.website.santichlaus.SantichlausService"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/csv;header=present;charset=UTF-8" pageEncoding="UTF-8" session="false"%><%
%><sling:defineObjects/><%
  SantichlausService svc = sling.getService(SantichlausService.class);
%><%= svc.getRegistrationsAsCSV() %>