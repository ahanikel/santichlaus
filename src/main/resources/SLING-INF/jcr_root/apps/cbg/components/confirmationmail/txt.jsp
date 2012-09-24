			$confirmationtplemail = 
					"Vielen Dank f�r Ihre Anmeldung!\n\nDr Santichlaus und dr Schmutzli werden um %s Uhr bei Ihrer Familie vorbeikommen.\n\n" .
					"Bitte haben Sie Verst�ndnis: der Santichlaus kann Versp�tung haben, wenn sein Esel pl�tzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine) " .
					"Verz�gerungen gibt. Falls der gew�nschte Zeitpunkt f�r den Chlaus-Besuch nicht mehr frei ist, werden wir Sie rechtzeitig " .
					"per Mail informieren. Bitte informieren auch Sie uns rechtzeitig �ber �nderungen Ihrerseits. Bitte vergessen Sie nicht, " .
					"die Gaben f�r die Kinder am angegebenen Ort rechtzeitig zu hinterlegen.\n\nWir freuen uns jetzt schon auf eine fr�hliche Stimmung " .
					"in Ihrer guten Stube und auf viele grosse Kinderaugen... F�r weitere Fragen stehen wir gerne zur Verf�gung: " .
					"santichlaus@comebackgloebb.ch\n\n\nDas OK Santichlaus-Aktion\n\nCome Back Gl�bb Allschwil\n\n\n";
			$confirmationtextemail = sprintf($confirmationtplemail, $params[0]->time);
			mail($a->{"E Mail"}, "Ihre Santichlaus-Anmeldung 2010", $confirmationtextemail . $mailtext, $content_type . "From: Santichlaus <santichlaus@comebackgloebb.ch>\n");
			$confirmationtpl = 
					"<h1>Vielen Dank f�r Ihre Anmeldung!</h1><p>Dr Santichlaus und dr Schmutzli werden um %s Uhr bei Ihrer Familie vorbeikommen.</p>" .
					"<p>Bitte haben Sie Verst�ndnis: der Santichlaus kann <b>Versp�tung</b> haben, wenn sein Esel pl�tzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine) " .
					"Verz�gerungen gibt.</p><p>Falls der gew�nschte Zeitpunkt f�r den Chlaus-Besuch nicht mehr frei ist, werden wir Sie rechtzeitig " .
					"per Mail informieren.</p><p>Bitte informieren auch Sie uns rechtzeitig �ber �nderungen Ihrerseits.</p><p>Bitte vergessen Sie nicht, " .
					"die Gaben f�r die Kinder am angegebenen Ort rechtzeitig zu hinterlegen.</p><p>Wir freuen uns jetzt schon auf eine fr�hliche Stimmung " .
					"in Ihrer guten Stube und auf viele grosse Kinderaugen...</p><p>F�r weitere Fragen stehen wir gerne zur Verf�gung: " .
					"<a href=\"mailto:santichlaus@comebackgloebb.ch\">santichlaus@comebackgloebb.ch</a></p><p><b>Das OK Santichlaus-Aktion</b></p><p><b>Come Back Gl�bb Allschwil</b></p>";
			$confirmationtext = sprintf($confirmationtpl, $params[0]->time);
			return $confirmationtext;
		}
		else
			return 		"<h1>Fehler: Anmeldung wurde nicht registriert!</h1><p>Beim Versenden Ihrer Anmeldung ist leider ein Fehler aufgetreten. Bitte versuchen Sie es nochmals, " .
					"oder melden Sie sich direkt via E-Mail an <a href=\"mailto:santichlaus@comebackgloebb.ch\">santichlaus@comebackgloebb.ch</a>. Vielen Dank und sorry f�r die Umst�nde!</p>" .
					"<p><b>Das OK Santichlaus-Aktion</b></p><p><b>Come Back Gl�bb Allschwil</b></p>";
	}
