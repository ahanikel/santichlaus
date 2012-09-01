<%@page import="java.util.Date" %><%
%><%@page import="ch.comebackgloebb.website.Utils"%><%
%><%@page contentType="text/html" pageEncoding="UTF-8" session="true"%><%
%><%
    if (request.getMethod().equals("POST")) {
        Utils.sendRegistrationMail("Hello Axel!");
%><jsp:forward page="<%= request.getPathInfo()%>"/><%
} else {
%>
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Santichlaus-Anmeldung <%= new Date().getYear() + 1900%></title>
        <link href="http://comebackgloebb.ch/content/modules/system/defaults.css" media="all" rel="stylesheet" type="text/css">
        <link type="text/css" rel="stylesheet" media="all" href="cbg/garland.css">
        <link rel="stylesheet" type="text/css" href="cbg/santi.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="http://yui.yahooapis.com/3.4.1/build/yui/yui-min.js"></script>
    </head>
    <body class="sidebar-left">
        <script>
            var switchTo = {
                currentPage : 0,
                pages : [
                    function() {
                        switchTo.currentPage = 0;
                        $('#prev').hide();
                        $('#next').show();
                        $('div.page').hide();
                        $('div.page#intro').show('slow');
                    },
                    function() {
                        switchTo.currentPage = 1;
                        $('#prev').show();
                        $('#next').show();
                        $('div.page').hide();
                        $('div.page#form').show('slow');
                    },
                    function() {
                        switchTo.currentPage = 2;
                        $('#prev').show();
                        $('#next').hide();
                        $('div.page').hide();
                        $('div.page#table').show('slow');
                    }
                ],
                pageNo : function(no) {
                    switchTo.pages[no]();
                },
                prev : function() {
                    switchTo.pages[(--switchTo.currentPage + switchTo.pages.length) % switchTo.pages.length]();
                },
                next : function() {
                    switchTo.pages[++switchTo.currentPage % switchTo.pages.length]();
                }
            };
            $(document).ready(function(){
                switchTo.pageNo(0);
                $("#next").click(function(event){
                    event.preventDefault();
                    switchTo.next();
                });
                $("#prev").click(function(event){
                    event.preventDefault();
                    switchTo.prev();
                });
            });
        </script>
        <div id="header-region" class="clear-block"></div>
        <div id="wrapper">
            <div id="container" class="clear-block">
                <div id="header">
                    <div id="logo-floater">
                        <h1>
                            <a href="http://comebackgloebb.ch/">
                                <img src="http://comebackgloebb.ch/content/sites/default/files/garland_logo.png" alt="" id="logo">
                            </a>
                        </h1>
                    </div>
                    <ul class="links primary-links">
                        <li class="menu-122 first"><a href="http://comebackgloebb.ch/content/node/5" title="Willkommen beim Come Back Glöbb Allschwil">Willkommen</a></li>
                        <li class="menu-115 active-trail"><a href="http://comebackgloebb.ch/content/node" title="Aktuelles rund um den Glöbb">Aktuelles</a></li>
                        <li class="menu-123"><a href="http://comebackgloebb.ch/content/node/6" title="Projekte">Projekte</a></li>
                        <li class="menu-124"><a href="http://comebackgloebb.ch/content/node/7" title="Mitglieder">Mitglieder</a></li>
                        <li class="menu-170 last"><a href="http://comebackgloebb.ch/content/node/103" title="Archiv">Archiv</a></li>
                    </ul>                                  
                </div>
                <div id="sidebar-left" class="sidebar"></div>
                <div id="center">
                    <div id="squeeze">
                        <div class="right-corner">
                            <div class="left-corner">
                                <div class="clear-block">
                                    <div id="node-393" class="node">
                                        <div class="content clear-block">
                                            <div id="buttons">
                                                <button id="prev"> &lt;--- </button>
                                                <button id="next"> ---&gt; </button>
                                            </div>
                                            <div id="intro" class="page">
                                                <h1>
                                                    Dr Santichlaus chunnt!
                                                </h1>
                                                <p><b>Liebe Eltern,</b></p>
                                                <p>Dr Santichlaus und sein Schmutzli werden auch
                                                    in diesem Jahr zu Ihnen unterwegs sein! Das erfahrene Chlause-Team des Come Back Glöbb
                                                    (ehemals Jungwacht und Blauring St. Peter &amp; Paul, Allschwil) würde sich freuen, auch in diesem Jahr
                                                    zu Ihnen in die gute Stube zu kommen, und Ihren Kindern und/oder Ihren Gästen eine Freude
                                                    zu bereiten. Wir sind ganz nette, aufgestellte Chläuse.</p>
                                                <p><strong>In diesem Jahr sind wir unterwegs am:</strong></p>
                                                <p><strong>6. Dezember von 16.30 bis 20.00 Uhr</strong></p>
                                                <p><strong>Anmeldeschluss ist der 1. Dezember 2011</strong></p>
                                                <p>Möchten Sie unseren Santichlaus buchen? Ja?</p>
                                                <p>Dann beachten Sie bitte folgende «Spielregeln»:</p>
                                                <ol>
                                                    <li>
                                                        Für Ihre <strong>definitive Anmeldung</strong> füllen Sie bitte unser Web-Anmeldeformular aus. Sie gelangen
                                                        dort hin, indem Sie oben "weiter zur Anmeldung" anklicken. Falls Sie sich lieber auf
                                                        herkömmlichem Weg anmelden möchten, gibt es auch ein <a href="/santichlaus/resource/Formular_Anmeldung_2011.pdf" target="_blank">Anmeldeformular im PDF-Format</a>, das Sie
                                                        herunterladen, ausdrucken und per Post schicken können.
                                                    </li>
                                                    <li>
                                                        Falls der gewünschte Zeitpunkt für den Chlaus-Besuch <strong>nicht mehr frei</strong> ist, werden
                                                        wir Sie rechtzeitig per Mail oder telefonisch informieren.
                                                    </li>
                                                    <li>
                                                        Bitte haben Sie Verständnis: <strong>dr Santichlaus kann Verspätung haben</strong>, wenn sein Esel plötzlich bockt bzw.
                                                        wenn es (hoffentlich nur ganz kleine) Verzögerungen gibt.
                                                    </li>
                                                    <li>
                                                        Geschenke für Ihre Kleinen
                                                        übergeben Sie dem Santichlaus, <strong>bevor</strong> er Ihre Wohnung betritt. Eine nette, chlausmässige
                                                        Verpackung macht den Kindern Spass!
                                                    </li>
                                                    <li>
                                                        Nach wie vor bestimmen Sie den Preis für den Besuch vom Santichlaus. Da es
                                                        aber in den letzten Jahren zu Unsicherheiten bezüglich der Höhe des Betrags
                                                        gekommen ist, erlauben wir es uns, Ihnen eine Empfehlung abzugeben.
                                                        Mit ca. 20 Franken pro Kind sind unsere
                                                        Auslagen gedeckt, und wir können weiterhin wichtige <a href="/http://comebackgloebb.ch/content/node/6" target="_top"><strong>Projekte</strong></a> – ganz im Sinne von St.
                                                        Nikolaus – grosszügig unterstützen.
                                                    </li>
                                                </ol>
                                                <p><strong>Wir freuen uns schon jetzt auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen!</strong></p>
                                                <p><b><i>Ihr Come Back Glöbb</i></b></p>
                                            </div>
                                            <form method="post">
                                                <div id="form" class="page">
                                                    <address>
                                                        <label for="name">Name</label><input type="text" id="name" name="name">
                                                        <label for="vorname">Vorname</label><input type="text" id="vorname" name="vorname">
                                                        <label for="adresse">Strasse Nr</label><input type="text" id="adresse" name="adresse">
                                                        <label for="ort">PLZ Ort</label><input type="text" id="ort" name="ort">
                                                        <label for="telefon">Telefon</label><input type="tel" id="telefon" name="telefon">
                                                        <label for="email">E-Mail</label><input type="email" id="email" name="email">
                                                        <label for="zeit">Zeit</label>
                                                        <select id="zeit" name="zeit">
                                                            <option>17:00</option>
                                                            <option>17:30</option>
                                                            <option>18:00</option>
                                                            <option>18:30</option>
                                                            <option>19:00</option>
                                                            <option>19:30</option>
                                                            <option>20:00</option>
                                                            <option>20:30</option>
                                                        </select>
                                                    </address>
                                                    <script>
                                                        var address = {
                                                            name : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie Ihren Familiennamen an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            vorname : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie Ihren Vornamen an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            adresse : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie Ihre Adresse an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            ort : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie Ihren Wohnort an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            telefon : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie für Rückfragen Ihre Telefonnummer an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            email : {
                                                                required: true,
                                                                invalidMessage: "Bitte geben Sie für Rückfragen Ihre E-Mail-Adresse an",
                                                                validator : function(input) {
                                                                    var re = /^.../;
                                                                    return false;
                                                                }
                                                            },
                                                            zeit : {
                                                                required: true,
                                                                invalidMessage: "Bitte wählen Sie eine Zeit aus der Dropdown-Liste",
                                                                options : [
                                                                    "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",  "20:00"
                                                                ],
                                                                init : function() {
                                                                    $.each(address.zeit.options, function(val, text) {
                                                                        $('#zeit').append(new Option(text, val));
                                                                    });
                                                                },
                                                                validator : function(input) {
                                                                    var re = /^1[6-9]:[03]0$/;
                                                                    return false;
                                                                }
                                                            }
                                                        }
                                                    </script>
                                                </div>
                                                <div id="table" class="page">
                                                    <div>
                                                        <button>Hilfe zur Anmeldung</button>
                                                        <button type="submit">Anmeldung abschicken</button>
                                                    </div>
                                                    <div id="tableframe">
                                                        <div id="tabledata"></div>
                                                        <div id="details">
                                                            <table>
                                                                <tr><td><label for="kindname">Name des Kindes</label></td><td><input type="text" id="kindname" name="kindname"></td></tr>
                                                                <tr><td><label for="alter">Alter</label></td><td><input type="text" id="alter" name="alter"></li></td></tr>
                                                                <tr><td><label for="loben">Zu loben</label></td><td><textarea id="loben" name="loben"></textarea></li></td></tr>
                                                                <tr><td><label for="tadeln">Zu tadeln</label></td><td><textarea id="tadeln" name="tadeln"></textarea></li></td></tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <script>
                                                        // Create a new YUI instance and populate it with the required modules.
                                                        YUI().use('datatable', function (Y) {
                                                            // DataTable is available and ready for use. Add implementation
                                                            // code here.
                                                            // Creates a Columnset with 3 Columns. "cost" is not rendered.
                                                            var cols = ["id","name","price"];

                                                            // Columns must match data parameter names
                                                            var data = [
                                                                {id:"ga-3475", name:"gadget", price:"$6.99", cost:"$5.99"},
                                                                {id:"sp-9980", name:"sprocket", price:"$3.75", cost:"$3.25"},
                                                                {id:"wi-0650", name:"widget", price:"$4.25", cost:"$3.75"}
                                                            ];

                                                            // Creates a DataTable with 3 columns and 3 rows
                                                            var table = new Y.DataTable.Base({
                                                                columnset: cols,
                                                                recordset: data
                                                            }).render("#tabledata");
                                                        });
                                                    </script>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="clear-block">
                                            <div class="meta">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
<% }%>