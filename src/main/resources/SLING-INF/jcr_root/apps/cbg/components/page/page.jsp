<%@page import="java.util.Date, java.util.List, org.apache.sling.api.request.RequestParameter" %><%
%><%@page import="ch.comebackgloebb.website.santichlaus.SantichlausService"%><%
%><%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0"%><%
%><%@page contentType="text/html" pageEncoding="UTF-8" session="false"%><%
%><sling:defineObjects/><%
  SantichlausService svc = sling.getService(SantichlausService.class);
%><!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Santichlaus-Anmeldung <%= new Date().getYear() + 1900%></title>
    <link href="http://comebackgloebb.ch/content/modules/system/defaults.css" media="all" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" media="all" href="santichlaus/garland.css">
    <link rel="stylesheet" type="text/css" href="santichlaus/santi.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="santichlaus/jquery.blockUI.js"></script>
  </head>
  <body class="sidebar-left">
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
        <div id="sidebar-left" class="sidebar"><img src="/content/santichlaus/santichlaus.png"/></div>
        <div id="center">
          <div id="squeeze">
            <div class="right-corner">
              <div class="left-corner">
                <div class="clear-block">
                  <div id="node-393" class="node">
                    <div class="content clear-block">
                      <div id="buttons" class="twobuttons">
                        <button type="button" id="prev"> ← zurück </button>
                        <button type="button" id="next" class="alignright"> ➝ weiter </button>
                        <button type="button" id="send" class="submitbutton alignright" disabled="disabled">Anmeldung abschicken</button>
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
                        <p><strong>6. Dezember von 17.30 bis 20.00 Uhr</strong></p>
                        <p><strong>Anmeldeschluss ist der 1. Dezember <%= new Date().getYear() + 1900%></strong></p>
                        <p>Möchten Sie unseren Santichlaus buchen? Ja?</p>
                        <p>Dann beachten Sie bitte folgende «Spielregeln»:</p>
                        <ol>
                          <li>
                            Für Ihre <strong>definitive Anmeldung</strong> füllen Sie bitte unser Web-Anmeldeformular aus. Sie gelangen
                            dort hin, indem Sie oben "weiter" anklicken.
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
                            Auslagen gedeckt, und wir können weiterhin wichtige <a href="http://comebackgloebb.ch/content/node/6" target="_top"><strong>Projekte</strong></a> – ganz im Sinne von St.
                            Nikolaus – grosszügig unterstützen.
                          </li>
                        </ol>
                        <p><strong>Wir freuen uns schon jetzt auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen!</strong></p>
                        <p><b><i>Ihr Come Back Glöbb</i></b></p>
                      </div>
                      <div id="form" class="page">
                        <fieldset>
                          <legend>Adresse</legend>
                          <table>
                            <tr>
                              <td><label for="name">Name</label></td>
                              <td><input id="name" class="validateSomething" name="name" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie Ihren Familiennamen an</td>
                            </tr>
                            <tr>
                              <td><label for="vorname">Vorname</label></td>
                              <td><input id="vorname" class="validateSomething" name="vorname" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie Ihren Vornamen an</td>
                            </tr>
                            <tr>
                              <td><label for="strasse">Strasse Nr</label></td>
                              <td><input id="strasse" class="validateSomething" name="strasse" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie Ihre Adresse an</td>
                            </tr>
                            <tr>
                              <td><label for="ort">Plz Ort</label></td>
                              <td><input id="ort" class="validateSomething" name="ort" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie Ihren Wohnort an</td>
                            </tr>
                            <tr>
                              <td><label for="telefon">Telefon</label></td>
                              <td><input id="telefon" class="validateSomething" name="telefon" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie für Rückfragen Ihre Telefonnummer an</td>
                            </tr>
                            <tr>
                              <td><label for="email">E-Mail</label></td>
                              <td><input id="email" class="validateEmail" name="email" type="text"/></td>
                              <td class="invalidMessage">Bitte geben Sie für Rückfragen Ihre E-Mail-Adresse an</td>
                            </tr>
                          </table>
                        </fieldset>
                        <fieldset>
                          <legend>Gewünschte Uhrzeit</legend>
                          <p>Ich wünsche den Besuch des Santichlauses am 6. Dezember 2012 um:</p>
                          <table>
                            <tr>
                              <td><label>Uhrzeit</label></td>
                              <td>
                                <select id="zeit" class="validateTime">
                                  <option></option><%
                                  List<String> times = svc.getAvailableTimes();
                                  for (String time : times) {
                                    out.print("<option>");
                                    out.print(time.replace(".",":"));
                                    out.print("</option>");
                                  }
%>                                </select>
                              </td>
                              <td class="invalidMessage">Bitte wählen Sie eine Zeit aus der Dropdown-Liste</td>
                            </tr>
                            <tr>
                              <td><label for="remarks">Bemerkungen</label><p>(z.B. «Wo findet der Santichlaus den Sack.»)</p></td>
                              <td><textarea id="remarks" class="validateAnything" cols="30" rows="10"></textarea></td>
                            </tr>
                          </table>
                        </fieldset>
                      </div>
                      <div id="table" class="page">
                        <div id="tableframe">
                          <div id="tabledata"></div>
                          <div id="details">
                            <fieldset>
                              <legend>Angaben zum Kind / zu den Kindern</legend>
                              <p>
                                Klicken Sie auf "+ Kind hinzufügen", um ein neues Kind zu erfassen. Wenn Sie fertig sind, klicken Sie auf "Meine Eingaben übernehmen". Der
                                Name und das Alter des Kindes erscheinen nun links unter den "+ Kind hinzufügen" und "- Kind löschen" Knöpfen. Auf dieselbe
                                Art können Sie nun weitere Kinder erfassen.
                              </p>
                              <p>
                                Um einen Eintrag zu bearbeiten, klicken Sie auf den entsprechenden Namen und nehmen dann rechts Ihre
                                Änderungen vor. Klicken Sie anschliessend "Meine Eingaben übernehmen", um die Änderungen zu übernehmen, oder "Abbrechen", um
                                Ihre Änderungen zu verwerfen.
                              </p>
                              <p>
                                Wenn Sie einen Eintrag aus der Liste löschen möchten, wählen Sie ihn mit einem Klick aus (der Hintergrund
                                ist nun blau) und klicken dann auf "- Kind löschen".
                              </p>
                              <p>
                                Unter "zu loben" und "zu tadeln" geben Sie uns bitte eine stichwortartige Liste, das ist für den Santichlaus am
                                übersichtlichsten. Also zum Beispiel:<br>
                                - Ist super in der Schule<br>
                                - Ist schnell im Sport<br>
                                - Musiziert täglich<br>
                              </p>
                              <table id="layout-children">
                                <tr>
                                  <td>
                                  </td>
                                  <td>
                                    <table id="list-children">
                                      <thead>
                                        <tr>
                                          <th colspan="5">Erfasste Kinder</th>
                                        </tr>
                                        <tr>
                                          <td class="childname">Name</td>
                                          <td class="childage">Alter</td>
                                          <td class="childsex">Geschlecht</td>
                                          <td class="childpos">Zu loben</td>
                                          <td class="childneg">Zu tadeln</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr height="70">
                                  <td>
                                  </td>
                                  <td valign="bottom">
                                    <button type="button" id="add"><img src="santichlaus/list-add.png" alt="Kind hinzufügen"/>Kind hinzufügen</button>
                                    <button type="button" id="del"><img src="santichlaus/list-remove.png" alt="Kind löschen"/>Kind löschen</button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  </td>
                                  <td>
                                    <table id="details-children" class="editable">
                                      <tr>
                                        <td><button type="button" id="ok" class="okbutton">Meine Eingaben übernehmen</button></td>
                                        <td><button type="button" id="cancel" class="cancelbutton">Abbrechen</button></td>
                                      </tr>
                                      <tr>
                                        <td><label for="kindname">Name des Kindes</label></td>
                                        <td><input id="kindname" name="kindname"/></td>
                                      </tr>
                                      <tr>
                                        <td><label for="kindalter">Alter des Kindes</label></td>
                                        <td><input id="kindalter" name="kindalter"/></td>
                                      </tr>
                                      <tr>
                                        <td><label for="kindgeschlecht">Geschlecht</label></td>
                                        <td>
                                          <input type="radio" name="kindgeschlecht" value="m"/><span>männlich</span>
                                          <input type="radio" name="kindgeschlecht" value="w"/><span>weiblich</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><label for="zuloben">Zu loben</label></td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2"><textarea id="zuloben" cols="120" rows="15"></textarea></td>
                                      </tr>
                                      <tr>
                                        <td><label for="zutadeln">Zu tadeln</label></td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td colspan="2"><textarea id="zutadeln" cols="120" rows="15"></textarea></td>
                                        <td></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div id="success" class="page">
                        <h1>Vielen Dank für Ihre Anmeldung!</h1>
                        <p style="font-size: larger; margin-top: 5ex; font-weight: bold;">
                          Dr Santichlaus und dr Schmutzli werden um <span id="timeconfirm"></span> Uhr bei Ihrer Familie vorbeikommen.
                        </p>
                        <p>
					                Bitte haben Sie Verständnis: der Santichlaus kann Verspätung haben, wenn sein Esel plötzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine)
					                Verzögerungen gibt. Falls der gewünschte Zeitpunkt für den Chlaus-Besuch nicht mehr frei ist, werden wir Sie rechtzeitig
					                per Mail informieren. Bitte informieren auch Sie uns rechtzeitig über Änderungen Ihrerseits. Bitte vergessen Sie nicht,
					                die Gaben für die Kinder am angegebenen Ort rechtzeitig zu hinterlegen.
                        </p>
                        <p>
                          Wir freuen uns jetzt schon auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen...
                          Für weitere Fragen stehen wir gerne zur Verfügung: <a href="mailto:santichlaus@comebackgloebb.ch">santichlaus@comebackgloebb.ch</a>.
                        </p>
                        <p>
                          Das OK Santichlaus-Aktion
                        </p>
                        <p>
                          Come Back Glöbb Allschwil
                        </p>
                      </div>
                      <div id="error" class="page">
                        <h1>Fehler: Anmeldung wurde nicht registriert!</h1>
                        <p>
                          Beim Registrieren Ihrer Anmeldung ist leider ein Fehler aufgetreten. Bitte versuchen Sie es nochmals,
					                oder melden Sie sich direkt via E-Mail an <a href="mailto:santichlaus@comebackgloebb.ch">santichlaus@comebackgloebb.ch</a>.
                          Vielen Dank und sorry für die Umstände!
                        </p>
					              <p><b>Das OK Santichlaus-Aktion</b></p>
                        <p><b>Come Back Glöbb Allschwil</b></p>
                      </div>
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
    <script>
      $(document).ready(function(){

        $('.editable').addClass('readonly');
        $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
        $('.editable input[type="radio"]').removeAttr('checked');
        $('.cancelbutton, .okbutton, #del').attr('disabled', 'disabled');
        $('.invalidMessage').addClass('show');

        var switchTo = {
          currentPage : 0,
          pages : [
            function() {
              switchTo.currentPage = 0;
              $('#prev').hide();
              $('#next').show();
              $('#send').hide();
              $('div.page').hide();
              $('div.page#intro').show();
            },
            function() {
              switchTo.currentPage = 1;
              validateAll();
              $('#prev').show();
              $('#next').show();
              $('#send').hide();
              $('div.page').hide();
              $('div.page#form').show();
            },
            function() {
              switchTo.currentPage = 2;
              $('#prev').show();
              $('#next').hide();
              $('#send').show();
              $('div.page').hide();
              $('div.page#table').show();
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
          },
          success : function() {
            $('#prev').hide();
            $('#next').hide();
            $('#send').hide();
            $('div.page').hide();
            $('div.page#success').show();
          },
          error : function() {
            $('#prev').show();
            $('#next').hide();
            $('#send').hide();
            $('div.page').hide();
            $('div.page#error').show();
          }
        };

        $("#next").click(function(event){
          event.preventDefault();
          switchTo.next();
        });
        $("#prev").click(function(event){
          event.preventDefault();
          switchTo.prev();
        });

        function getChildren() {
          var ret = [];
          $('#list-children tbody tr').each(function() {
            var tmp = {};
            $(this).children('td').each(function() {
              tmp[$(this).attr('class')] = $(this).text();
            });
            ret.push(tmp);
          });
          return ret;
        }

        function initInput() {
          var json = eval(<%
            RequestParameter idParam = sling.getRequest().getRequestParameter("id");
            if (idParam != null) {
              String id = idParam.getString();
              if (id != null && !"".equals(id)) {
                 out.print(svc.getRegistrationAsJson(id));
              }
              else {
                out.print("\"\"");
              }
            }
            else {
              out.print("\"\"");
            }
          %>);
          if (json) {
            for (var key in json) {
              if (key.indexOf("child") == 0) {
                var child = json[key];
                var html = [];
                html.push('<tr class="lastInserted">');
                for (var childkey in child) {
                  html.push('<td class="');
                  html.push(childkey);
                  html.push('">');
                  html.push(child[childkey]);
                  html.push('</td>');
                }
                html.push('</tr>');
                $('#list-children tbody').append(html.join(''));
                $('.lastInserted')
                  .click(function(e) {
                    if ($('#list-children').attr('disabled')) {
                      return;
                    }
                    if ($(this).hasClass('selected')) {
                      $('#list-children tr.selected').removeClass('selected');
                    } else {
                      $('#list-children tr.selected').removeClass('selected');
                      $(this).addClass('selected');
                      var childIndex = $('#list-children tbody tr').index(e.currentTarget);
                      editChild(childIndex);
                    }
                  })
                  .removeClass('lastInserted');
                }
                else {
                $('#' + key)
                  .val(json[key])
                  .parent().parent().find(".invalidMessage").removeClass("show");
              }
            }
            if ($('#zeit').val() != json["zeit"]) {
              $('#zeit').append("<option>" + json["zeit"] + "</option>");
              $('#zeit').val(json["zeit"]);
            }
            switchTo.pageNo(1);
          }
          else {
            switchTo.pageNo(0);
          }
        }

        function getInput() {
          var ret = {};
          $('#form input, #form select, #remarks').each(function() {
            ret[$(this).attr('id')] = $(this).val();
          });
          ret['children'] = getChildren();
          ret['_charset_'] = 'utf-8';
          return ret;
        }

        function validateAll() {
          if (switchTo.currentPage == 1) {
            if ($('.page:eq(1) .invalidMessage.show').length > 0) {
              $('#prev').attr('disabled', 'disabled');
              $('#next').attr('disabled', 'disabled');
            }
            else {
              $('#prev').removeAttr('disabled');
              $('#next').removeAttr('disabled');
            }
          }
          if ($('.page .invalidMessage.show').length > 0 || $('#list-children tbody tr').length == 0)
            $('#send').attr("disabled", "disabled");
          else
            $('#send').removeAttr("disabled");
        }

        function validate(regexp, element) {
          if ($(element).val().match(regexp)) {
            $(element).parent().parent().find(".invalidMessage").removeClass("show");
          }
          else {
            $(element).parent().parent().find(".invalidMessage").addClass("show");
          }
          validateAll();
        }

        function validateSomething(event) {
          validate(/^.../, event.target);
        }

        function validateEmail(event) {
          validate(/^.+@..+\...+/, event.target);
        }

        function validateTime(event) {
          return validate(/[12][0-9][:.][03]0/, event.target);
        }

        $(".validateSomething").blur(validateSomething);

        $(".validateEmail").blur(validateEmail);

        $(".validateTime").change(validateTime);

        $(".validateAnything").blur(validateAll);

        $("#add").click(function(e) {
          $('.editable').removeClass('readonly');
          $('.editable input[type!="radio"], .editable textarea').removeAttr('readonly').val('');
          $('.editable input[type="radio"]').removeAttr('checked');
          $('.cancelbutton, .okbutton').removeAttr('disabled');
          $('#list-children tr.selected').removeClass('selected');
          $('#details-children').removeAttr('modify');
          $('#add, #del, #send').attr('disabled', 'disabled');
        });

        $('#del').click(function(e) {
          var sel = $('tbody tr.selected');
          if (sel.length > 0)
            sel.remove();
          else
            $('tbody tr:last !.editable').remove();
          $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
          $('.editable').addClass('readonly');
          $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
          $('.editable input[type="radio"]').removeAttr('checked');
          $('#details-children').removeAttr('modify');
          $('#del').attr('disabled', 'disabled');
          $('#add, #list-children').removeAttr('disabled');
          validateAll();
        });

        /**
         * Edit the childRow-th child
         */
        function editChild(childIndex) {
            var theRow = $('#list-children tbody tr').eq(childIndex);
            $('#kindname').val(theRow.children('td.childname').text());
            $('#kindalter').val(theRow.children('td.childage').text());
            if (theRow.children('td.childsex').text() == "m") {
              $('input[name="kindgeschlecht"][value="m"]').attr('checked', 'checked');
            }
            else {
              $('input[name="kindgeschlecht"][value="w"]').attr('checked', 'checked');
            }
            $('#zuloben').val(theRow.children('td.childpos').text());
            $('#zutadeln').val(theRow.children('td.childneg').text());
            $('#details-children').attr('modify', childIndex);
            $('.cancelbutton, .okbutton').removeAttr('disabled');
            $('.editable').removeClass('readonly');
            $('.editable input, .editable textarea').removeAttr('readonly');
            $('#add, #send, #list-children').attr('disabled', 'disabled');
            $('#del').removeAttr('disabled');
        }

        $('.okbutton').click(function(e) {
          $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
          var modify = $('#details-children').attr('modify');
          var htmlCode = [
            '<tr class="lastInserted"><td class="childname">',
            $('#kindname').val(),
            '</td><td class="childage">',
            $('#kindalter').val(),
            '</td><td class="childsex">',
            $('input[name="kindgeschlecht"]:checked').val(),
            '</td><td class="childpos">',
            $('#zuloben').val(),
            '</td><td class="childneg">',
            $('#zutadeln').val(),
            '</td></tr>'
          ].join('');

          if (!isNaN(modify)) {
              $('#list-children tbody tr').eq(modify).replaceWith(htmlCode);
          } else {
              $('#list-children tbody').append(htmlCode);
          }

          $('.lastInserted')
          .click(function(e) {
            if ($('#list-children').attr('disabled')) {
              return;
            }
            if ($(this).hasClass('selected')) {
              $('#list-children tr.selected').removeClass('selected');
            } else {
              $('#list-children tr.selected').removeClass('selected');
              $(this).addClass('selected');
              var childIndex = $('#list-children tbody tr').index(e.currentTarget);
              editChild(childIndex);
            }
          })
          .removeClass('lastInserted');
          $('.editable').addClass('readonly');
          $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
          $('.editable input[type="radio"]').removeAttr('checked');
          $('#details-children').removeAttr('modify');
          $('#add, #list-children').removeAttr('disabled');
          $('#del').attr('disabled', 'disabled');
          validateAll();
        });

        $('.cancelbutton').click(function(e) {
          $('.cancelbutton, .okbutton').attr('disabled', 'disabled');
          $('.editable').addClass('readonly');
          $('.editable input[type!="radio"], .editable textarea').attr('readonly', 'readonly').val('');
          $('.editable input[type="radio"]').removeAttr('checked');
          $('#details-children').removeAttr('modify');
          $('#list-children tr.selected').removeClass('selected');
          $('#add, #list-children').removeAttr('disabled');
          $('#del').attr('disabled', 'disabled');
          validateAll();
        });

        $('#send').click(function(e) {
          $('#send').attr("disabled", "disabled");
          $.blockUI({ css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .5, 
            color: '#fff' 
          }, message: "Mails werden versendet (~15 sec)..."
          }); 
          $.post('#', getInput(), function(ret) {
          })
          .success(function() { $.unblockUI(); $('#timeconfirm').text($('#zeit').val()); switchTo.success(); })
          .error(function() { $.unblockUI(); switchTo.error(); });
        })

        initInput();
      });
    </script>
  </body>
</html>
