			$confirmationtplemail = 
					"Vielen Dank für Ihre Anmeldung!\n\nDr Santichlaus und dr Schmutzli werden um %s Uhr bei Ihrer Familie vorbeikommen.\n\n" .
					"Bitte haben Sie Verständnis: der Santichlaus kann Verspätung haben, wenn sein Esel plötzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine) " .
					"Verzögerungen gibt. Falls der gewünschte Zeitpunkt für den Chlaus-Besuch nicht mehr frei ist, werden wir Sie rechtzeitig " .
					"per Mail informieren. Bitte informieren auch Sie uns rechtzeitig über Änderungen Ihrerseits. Bitte vergessen Sie nicht, " .
					"die Gaben für die Kinder am angegebenen Ort rechtzeitig zu hinterlegen.\n\nWir freuen uns jetzt schon auf eine fröhliche Stimmung " .
					"in Ihrer guten Stube und auf viele grosse Kinderaugen... Für weitere Fragen stehen wir gerne zur Verfügung: " .
					"santichlaus@comebackgloebb.ch\n\n\nDas OK Santichlaus-Aktion\n\nCome Back Glöbb Allschwil\n\n\n";
			$confirmationtextemail = sprintf($confirmationtplemail, $params[0]->time);
			mail($a->{"E Mail"}, "Ihre Santichlaus-Anmeldung 2010", $confirmationtextemail . $mailtext, $content_type . "From: Santichlaus <santichlaus@comebackgloebb.ch>\n");
			$confirmationtpl = 
					"<h1>Vielen Dank für Ihre Anmeldung!</h1><p>Dr Santichlaus und dr Schmutzli werden um %s Uhr bei Ihrer Familie vorbeikommen.</p>" .
					"<p>Bitte haben Sie Verständnis: der Santichlaus kann <b>Verspätung</b> haben, wenn sein Esel plötzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine) " .
					"Verzögerungen gibt.</p><p>Falls der gewünschte Zeitpunkt für den Chlaus-Besuch nicht mehr frei ist, werden wir Sie rechtzeitig " .
					"per Mail informieren.</p><p>Bitte informieren auch Sie uns rechtzeitig über Änderungen Ihrerseits.</p><p>Bitte vergessen Sie nicht, " .
					"die Gaben für die Kinder am angegebenen Ort rechtzeitig zu hinterlegen.</p><p>Wir freuen uns jetzt schon auf eine fröhliche Stimmung " .
					"in Ihrer guten Stube und auf viele grosse Kinderaugen...</p><p>Für weitere Fragen stehen wir gerne zur Verfügung: " .
					"<a href=\"mailto:santichlaus@comebackgloebb.ch\">santichlaus@comebackgloebb.ch</a></p><p><b>Das OK Santichlaus-Aktion</b></p><p><b>Come Back Glöbb Allschwil</b></p>";
			$confirmationtext = sprintf($confirmationtpl, $params[0]->time);
			return $confirmationtext;
		}
		else
			return 		"<h1>Fehler: Anmeldung wurde nicht registriert!</h1><p>Beim Versenden Ihrer Anmeldung ist leider ein Fehler aufgetreten. Bitte versuchen Sie es nochmals, " .
					"oder melden Sie sich direkt via E-Mail an <a href=\"mailto:santichlaus@comebackgloebb.ch\">santichlaus@comebackgloebb.ch</a>. Vielen Dank und sorry für die Umstände!</p>" .
					"<p><b>Das OK Santichlaus-Aktion</b></p><p><b>Come Back Glöbb Allschwil</b></p>";
	}
