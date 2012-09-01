/*
#asset(qx/icon/${qx.icontheme}/22/actions/list-add.png)
#asset(qx/icon/${qx.icontheme}/22/actions/list-remove.png)
#asset(santiglaus/santi1.jpg)
*/

qx.Class.define("santiglaus.Application", {
	
	extend : qx.application.Standalone,

	members : {

		main : function() {
			// Call super class
			this.base(arguments);

			// Enable logging in debug variant
			if (qx.core.Variant.isSet("qx.debug", "on")) {
				// support native logging capabilities, e.g. Firebug for Firefox
				qx.log.appender.Native;
				// support additional cross-browser console. Press F7 to toggle visibility
				qx.log.appender.Console;
			}

			var intro = {
				label : new qx.ui.basic.Label([
					'				<h1>',
					'					Dr Santichlaus chunnt!',
					'					<br/><br/>',
					'					<b>Liebe Eltern,</b>',
					'					<br/>',
					'				</h1>',
					'				<div align="justify">',
					'					<span class="text" align="justify">',
					'						Dr Santichlaus und sein Schmutzli werden auch',
					'						in diesem Jahr zu Ihnen unterwegs sein! Das erfahrene Chlause-Team des Come Back Glöbb',
					'						(ehemals Jungwacht und Blauring St. Peter & Paul, Allschwil) würde sich freuen, auch in diesem Jahr zu Ihnen',
					'						in die gute Stube zu kommen, und Ihren Kindern und/oder Ihren Gästen eine Freude',
					'						zu bereiten. Wir sind ganz nette, aufgestellte Chläuse.',
					'					<br/><br/>',
					'					</span>',
					'				</div>',
					'				<table width="535" border="0" cellspacing="0" cellpadding="0" class="text">',
					'					<tr>',
					'						<td><span class="text" align="justify"><b>In diesem Jahr sind wir unterwegs am:</b></span></td>',
					'						<td colspan="2">',
					'							<span class="text" align="justify"><b>6. Dezember von 16.30 bis 20.00 Uhr</b></span>',
					'						</td>',
					'					</tr>',
					'					<tr>',
					'						<td><span class="text" align="justify"></span></td>',
					'						<td colspan="2"><span class="text" align="justify">Anmeldeschluss ist der 1. Dezember 2011</span></td>',
					'					</tr>',
					'					<tr>',
					'						<td height="19" colspan="3">',
					'							<span class="text" align="justify">',
					'								<br/>',
					'								Möchten Sie unseren Santichlaus buchen? Ja?',
					'								<br/><br/>',
					'								Dann beachten Sie bitte folgende «Spielregeln»</b>:',
					'								<br/>',
					'								<br/>',
					'							</span>',
					'						</td>',
					'					</tr>',
					'				</table>',
					'				<table width="535" border="0" cellspacing="0" cellpadding="0" class="text">',
					'					<tr valign="top">',
					'						<td width="21">',
					'							<b class="text">1.&nbsp;&nbsp;</b>',
					'							<br/><br/>',
					'						</td>',
					'						<td class="text" width="514">',
					'							<div align="justify">',
					'								<span class="text" align="justify">',
					'									Für Ihre <b>definitive Anmeldung</b> füllen Sie bitte unser Web-Anmeldeformular aus. Sie gelangen',
					'									dort hin, indem Sie oben "weiter zur Anmeldung" anklicken. Falls Sie sich lieber auf',
					'									herkömmlichem Weg anmelden möchten, gibt es auch ein <a href="/santichlaus/resource/Formular_Anmeldung_2011.pdf" target="_blank">Anmeldeformular im PDF-Format</a>, das Sie',
					'									herunterladen, ausdrucken und per Post schicken können.',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'					<tr valign="top">',
					'						<td width="21">',
					'							<b class="text">2.&nbsp;&nbsp;</b>',
					'							<br/><br/>',
					'						</td>',
					'						<td width="514">',
					'							<div align="justify">',
					'								<span class="text" align="justify">',
					'									Falls der gewünschte Zeitpunkt für den Chlaus-Besuch <b>nicht mehr frei</b> ist, werden',
					'									wir Sie rechtzeitig per Mail oder telefonisch informieren.',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'					<tr valign="top">',
					'						<td width="21">',
					'							<b class="text">3.&nbsp;&nbsp;</b>',
					'							<br/><br/>',
					'						</td>',
					'						<td width="514">',
					'							<div align="justify">',
					'								<span class="text" align="justify">',
					'									Bitte haben Sie Verständnis: <b>dr Santichlaus kann Verspätung haben</b>, wenn sein Esel plötzlich bockt bzw.',
					'									wenn es (hoffentlich nur ganz kleine) Verzögerungen gibt.',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'					<tr valign="top">',
					'						<td width="21">',
					'							<b class="text">4.&nbsp;&nbsp;</b>',
					'							<br/><br/>',
					'						</td>',
					'						<td width="514">',
					'							<div align="justify">',
					'								<span class="text" align="justify">',
					'									Geschenke für Ihre Kleinen',
					'									übergeben Sie dem Santichlaus, <b>bevor</b> er Ihre Wohnung betritt. Eine nette, chlausmässige',
					'									Verpackung macht den Kindern Spass…',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'					<tr valign="top">',
					'						<td width="21">',
					'							<b class="text">5.&nbsp;&nbsp;</b>',
					'							<br/><br/>',
					'						</td>',
					'						<td width="514">',
					'							<div align="justify">',
					'								<span class="text" align="justify">Nach wie vor bestimmen Sie den Preis für den Besuch vom Santichlaus. Da es',
					'									aber in den letzten Jahren zu Unsicherheiten bezüglich der Höhe des Betrags',
					'									gekommen ist, erlauben wir es uns, Ihnen eine Empfehlung abzugeben.',
					'									<br/><br/>',
					'								</span>',
					'								<span class="text" align="justify">Mit ca. 20 Franken pro Kind sind unsere',
					'									Auslagen gedeckt, und wir können weiterhin wichtige <a href="/content/node/6" target="_top"><b>Projekte</b></a> — ganz im Sinne von St.',
					'									Nikolaus — grosszügig unterstützen.',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'				</table>',
					'				<table width="535" border="0" cellspacing="0" cellpadding="0">',
					'					<tr valign="top">',
					'						<td>',
					'							<div align="justify">',
					'								<span class="text" align="justify">',
					'									<b>Wir freuen uns schon jetzt auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen…</b>',
					'									<br/><br/>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'					<tr>',
					'						<td>',
					'							<div align="justify">',
					'								<span class="text">',
					'									<b><i>Ihr Come Back Glöbb</i></b>',
					'								</span>',
					'							</div>',
					'						</td>',
					'					</tr>',
					'				</table>'
				].join('\n')),
				image : new qx.ui.basic.Image("santiglaus/santi1.jpg"),
				panel : new qx.ui.container.Composite().set({ layout: new qx.ui.layout.Basic() }),
				button: new qx.ui.form.Button("weiter zur Anmeldung ---->"),
				actions : {
					init : function() {
						intro.label.set({ rich: true, width: 600 });
						intro.panel.add(intro.image, { left: 10, top: 38 });
						intro.panel.add(intro.label, { left: 200, top: 20 });
						intro.button.addListener("execute", intro.actions.proceed);
						intro.panel.add(intro.button, {left: 600, top: /*70*/0 });
					},
					proceed : function() {
						var el = intro.panel.getContentElement().getDomElement();
						var drop = new qx.fx.effect.combination.Drop(el);
						drop.set({
							direction: "west",
							xAmount: 200
						});
						drop.addListener("finish", function() {
							intro.panel.hide();
							ui.panel.show();
						});
						drop.start();
					}
				}
			};
			
			var ui = {
				
				address : {
					fields : {
						"Name": 		new qx.ui.form.TextField("").set({ width: 300, required: true, valid: false, invalidMessage: "Bitte geben Sie Ihren Familiennamen an" }),		
						"Vorname": 		new qx.ui.form.TextField("").set({ required: true, valid: false, invalidMessage: "Bitte geben Sie Ihren Vornamen an" }),
						"Strasse Nr": 	new qx.ui.form.TextField("").set({ required: true, valid: false, invalidMessage: "Bitte geben Sie Ihre Adresse an" }),
						"PLZ Ort": 		new qx.ui.form.TextField("").set({ required: true, valid: false, invalidMessage: "Bitte geben Sie Ihren Wohnort an" }),
						"Telefon": 		new qx.ui.form.TextField("").set({ required: true, valid: false, invalidMessage: "Bitte geben Sie für Rückfragen Ihre Telefonnummer an" }),
						"E Mail": 		new qx.ui.form.TextField("").set({ required: true, valid: false, invalidMessage: "Bitte geben Sie für Rückfragen Ihre E-Mail-Adresse an" })
					},
					form : new qx.ui.form.Form(),
					timeSelector : {
						widget : new qx.ui.form.ComboBox().set({ required: true, valid: false, invalidMessage: "Bitte wählen Sie eine Zeit aus der Dropdown-Liste" }),
						panel : new qx.ui.container.Composite().set({ layout: new qx.ui.layout.HBox() })
					},
					remarks : new qx.ui.form.TextArea(),
					panel : new qx.ui.groupbox.GroupBox("Adresse").set({ layout: new qx.ui.layout.VBox(10) })
				},
				
				table : {
					toolbar : {
						part : new qx.ui.toolbar.Part(),
						buttonAdd : new qx.ui.toolbar.Button("Neues Kind erfassen", "icon/22/actions/list-add.png"),
						buttonRemove : new qx.ui.toolbar.Button("Eintrag löschen", "icon/22/actions/list-remove.png"),
						widget : new qx.ui.toolbar.ToolBar()
					},
					model : new qx.ui.table.model.Simple(),
					widget : new qx.ui.table.Table().set({ width: 640, height: 200, decorator: null, statusBarVisible: false }),
					panel : new qx.ui.groupbox.GroupBox("Kinder").set({ layout : new qx.ui.layout.VBox() })
				},
				
				details : {
					fields : {
						"Name des Kindes": new qx.ui.form.TextField().set({ width: 200, required: true, valid: false, invalidMessage: "Bitte geben Sie den Namen des Kindes ein" }),
						"Alter": new qx.ui.form.TextField().set({ width: 100, required: true, valid: false, invalidMessage: "Bitte geben Sie das Alter des Kindes ein" }),
						"Zu loben": new qx.ui.form.TextArea().set({ width: 450, height: 200, required: true, valid: false, invalidMessage: "Bitte machen Sie ein paar Angaben...", placeholder: "\"Was uns an Dir besonders gefallen hat in diesem Jahr...\"" }),
						"Zu tadeln": new qx.ui.form.TextArea().set({ width: 450, height: 200, required: true, valid: false, invalidMessage: "Bitte machen Sie ein paar Angaben...", placeholder: "\"Was uns an Dir nicht so gefallen hat in diesem Jahr...\"" })
					},
					form: new qx.ui.form.Form(),
					helpButton: new qx.ui.form.Button("Hilfe zur Anmeldung"),
					okButton : new qx.ui.form.Button("Anmeldung abschicken"),
					panel: new qx.ui.groupbox.GroupBox("Angaben zum Kind / zu den Kindern").set({ layout: new qx.ui.layout.Canvas() }),
					validator: new qx.ui.form.validation.Manager()
				},
				
				panel : new qx.ui.container.Composite().set({ layout: new qx.ui.layout.VBox(10), backgroundColor: "white" }),
				
				buttonPanel : new qx.ui.container.Composite().set({ layout: new qx.ui.layout.HBox(), backgroundColor: "white" }),
				
				validator : new qx.ui.form.validation.Manager(),
				
				actions : {
					// When the user selects a different row in the children table...
					changeTableSelection : function(ev) {
						if (ui.table.model.getRowCount() <= 1 || ui.details.validator.validate()) {
							if (ev.getTarget().getSelectedCount() > 0) {
								for (var fieldName in ui.details.fields) {
									var val = ui.table.model.getValueById(fieldName, ev.getTarget().getSelectedRanges()[0].minIndex);
									if (val != undefined) {
										ui.details.fields[fieldName].setValue(val);
									}
									else
										ui.details.fields[fieldName].setValue('');
								}
								ui.actions.showDetailFields();
								ui.actions.changeTableSelection.lastSelection = ev.getTarget().getSelectedRanges()[0].minIndex;
							}
							else {
								ui.actions.hideDetailFields();
							}
						}
						else {
							if (ui.actions.changeTableSelection.lastSelection)
								ev.getTarget().setSelectionInterval(ui.actions.changeTableSelection.lastSelection, ui.actions.changeTableSelection.lastSelection);
						}
					},

					// When the user wants help...
					help: function() {
						qx.bom.Window.open("http://comebackgloebb.ch/santichlaus/resource/Anleitung_Anmeldung_Santichlaus.pdf");
					},
					
					// When the user clicks the submit button...
					submit : function() {
						if (ui.validator.validate() && ui.details.validator.validate()) {
							var addressData = {};
							for (addressField in ui.address.fields) {
								addressData[addressField] = ui.address.fields[addressField].getValue();
							}
							var payload = {
								address: addressData,
								time: ui.address.timeSelector.widget.getValue(),
								remarks: ui.address.remarks.getValue(),
								children: ui.table.model.getData()
							};
							var rpc = new qx.io.remote.Rpc("http://comebackgloebb.ch/services/index.php", "santi");
							try {
								var result = rpc.callSync("sendMail", payload);
								thankyou.label.set({ value: result });
								var el = ui.panel.getContentElement().getDomElement();
								var drop = new qx.fx.effect.combination.Drop(el);
								drop.set({
									direction: "west",
									xAmount: 200
								});
								drop.addListener("finish", function() {
									ui.panel.hide();
									thankyou.panel.show();
								});
								drop.start();
							}
							catch(ex) {
								alert("Fehler: " + ex.toSource());
							}
						}
						else {
							alert("Bitte überprüfen Sie das Formular auf Fehler (roter Rahmen im entsprechenden Feld). Haben Sie eine gültige E-Mail-Adresse angegeben?");
						}
					},

					// Update the table model when the focus changes
					// This is a generator which yields the handler function for the field numbered nField
					changeDetailFocus : function(nField) {
						return function(ev) {
							ui.details.validator.validate();
							var range = ui.table.widget.getSelectionModel().getSelectedRanges()[0];
							if (range) {
								ui.table.model.setValue(nField, range.minIndex, ev.getData());
							}
						}
					},

					// Hide detail fields when no child is selected in the table
					hideDetailFields : function() {
						for (fieldName in ui.details.fields) {
							ui.details.fields[fieldName].hide();
						}
					},

					// Show detail fields when a child is selected in the table
					showDetailFields : function() {
						for (fieldName in ui.details.fields) {
							ui.details.fields[fieldName].show();
							ui.details.validator.validate();
						}
					},

					getValidator : function(re, errorMessage) {
						return function(value) {
							if (!re.test(value)) {
								throw new qx.core.ValidationError("ValidationError", errorMessage);
							}
							return true;
						}
					},
					
					// Initialize widgets
					init : function() {
						
						// ui.address.form
						for (var fieldName in ui.address.fields) {
							if (fieldName == "E Mail") {
								ui.validator.add(ui.address.fields[fieldName], ui.actions.getValidator(/^.+@..+\...+/, ui.address.fields[fieldName].getInvalidMessage()));
							}
							else {
								ui.validator.add(ui.address.fields[fieldName], ui.actions.getValidator(/^.../, ui.address.fields[fieldName].getInvalidMessage()));
							}
							ui.address.form.add(ui.address.fields[fieldName], fieldName);
							ui.address.fields[fieldName].addListener("changeValue", function() {
								ui.validator.validate();
							});
						};
						
						// ui.address.timeSelector
						var times = new qx.type.BaseArray(
							"16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",  "20:00"
						);
						times.forEach(function(item) {
							ui.address.timeSelector.widget.add(new qx.ui.form.ListItem(item));
						});		
						ui.validator.add(ui.address.timeSelector.widget, ui.actions.getValidator(/^(1[6-9]|20):[03]0$/, ui.address.timeSelector.widget.getInvalidMessage()));
						ui.address.timeSelector.widget.addListener("changeValue", function() {
							ui.validator.validate();
						});

						ui.address.timeSelector.panel.add(ui.address.timeSelector.widget);
						ui.address.timeSelector.panel.add(new qx.ui.basic.Label("     (bitte Zeit auswählen)"));

						// ui.address.panel
						new qx.type.BaseArray(
							ui.address.form.createView(),
							new qx.ui.basic.Label("Ich wünsche den Besuch des Santichlauses am Dienstag, 6. Dezember 2011 um"),
							ui.address.timeSelector.panel,
							new qx.ui.basic.Label("Bemerkungen (z.B. wo findet der Chlaus den Sack)"),
							ui.address.remarks
						).forEach(function(item) {
							ui.address.panel.add(item);
						});

						// ui.table.model
						var detailsFieldNames = [];
						for (var fieldName in ui.details.fields) {					
							detailsFieldNames.push(fieldName);
						}
						ui.table.model.setColumns(detailsFieldNames);				
						for (var i = 0; i < detailsFieldNames.length; ++i)
							ui.table.model.setColumnEditable(i, false);

						// ui.table.widget
						ui.table.widget.setTableModel(ui.table.model);
						ui.table.widget.setColumnWidth(0, 250);
						ui.table.widget.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
						ui.table.widget.getSelectionModel().addListener("changeSelection", ui.actions.changeTableSelection);

						// ui.table.toolbar
						ui.table.toolbar.buttonAdd.addListener("execute", function(ev) {
							var nNewRow = ui.table.model.getRowCount();
							if (nNewRow == 0 || ui.details.validator.validate()) {
								ui.table.model.addRows([[]]);
								ui.table.widget.getSelectionModel().setSelectionInterval(nNewRow, nNewRow);
							}
						});
						ui.table.toolbar.part.add(ui.table.toolbar.buttonAdd);

						ui.table.toolbar.buttonRemove.addListener("execute", function(ev) {
							var range = ui.table.widget.getSelectionModel().getSelectedRanges()[0];
							if (range) {
								ui.table.model.removeRows(range.minIndex, 1);
								ui.actions.hideDetailFields();
								var nLastRow = ui.table.model.getRowCount() - 1;
								if (nLastRow >= 0)
									ui.table.widget.getSelectionModel().setSelectionInterval(nLastRow, nLastRow);
							}
						});
						ui.table.toolbar.part.add(ui.table.toolbar.buttonRemove);
						ui.table.toolbar.widget.add(ui.table.toolbar.part);
						ui.table.toolbar.widget.setToolTip(new qx.ui.tooltip.ToolTip([
							"Erfassen Sie ein neues Kind mit dem entsprechenden Button und füllen Sie die Angaben im Formular weiter unten",
							"aus. Wenn Sie mehrere Kinder erfassen, kann im Formular jeweils dasjenige bearbeitet werden, das in der",
							"Tabelle ausgewählt ist. Sie können beliebig zwischen Einträgen wechseln, bereits getätigte Eingaben",
							"gehen nicht verloren."
						].join("<br/>")).set({ rich: true, hideTimeout: 10000 }));

						// ui.table.panel
						ui.table.panel.add(ui.table.toolbar.widget);
						ui.table.panel.add(ui.table.widget);

						// ui.details
						ui.details.helpButton.addListener("execute", ui.actions.help);
						ui.details.okButton.addListener("execute", ui.actions.submit);

						var i = 0;
						for (var fieldName in ui.details.fields) {
							ui.details.form.add(ui.details.fields[fieldName], fieldName);
							ui.details.fields[fieldName].addListener("changeValue", ui.actions.changeDetailFocus(i++));
							ui.details.fields[fieldName].hide();
							if (fieldName == "Alter")
								ui.details.validator.add(ui.details.fields[fieldName], ui.actions.getValidator(/^[0-9]/, ui.details.fields[fieldName].getInvalidMessage()));
							else
								ui.details.validator.add(ui.details.fields[fieldName], ui.actions.getValidator(/.../, ui.details.fields[fieldName].getInvalidMessage()));
						}

						ui.details.panel.add(ui.details.form.createView());
						
						ui.buttonPanel.add(new qx.ui.core.Spacer(600));
						ui.buttonPanel.add(ui.details.helpButton);
						ui.buttonPanel.add(new qx.ui.core.Spacer(20));
						ui.buttonPanel.add(ui.details.okButton);

						ui.panel.add(ui.buttonPanel);
						ui.table.panel.add(ui.details.panel);
						ui.panel.add(ui.address.panel);
						ui.panel.add(ui.table.panel);
						ui.panel.hide();
						ui.validator.validate();
					}
				}
			};
			
			var thankyou = {
				label : new qx.ui.basic.Label(""),
				image : new qx.ui.basic.Image("santiglaus/santi1.jpg"),
				panel : new qx.ui.container.Composite().set({ layout: new qx.ui.layout.Basic() }),
				actions : {
					init : function() {
						thankyou.label.set({ rich: true, width: 600 });
						thankyou.panel.add(thankyou.image, { left: 10, top: 38 });
						thankyou.panel.add(thankyou.label, { left: 200, top: 20 });
						thankyou.panel.hide();
					}
				}
			};
			
			intro.actions.init();
			ui.actions.init();
			thankyou.actions.init();
			
			var doc = this.getRoot();
			doc.set({ backgroundColor: "white" });
			doc.add(intro.panel, { left: 50, top: 10 });
			doc.add(ui.panel, { left: 50, top: 10 });
			doc.add(thankyou.panel, { left: 50, top: 10 });
		}
	}
});
