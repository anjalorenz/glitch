/* Anhand dieses Beispielsdialogs siehst Du, wie der Textbot funktioniert. Ersetze ihn durch Deinen Text.
 */

/* Auswahlfrage
  3: {
        text: 'Lieber einfach oder lieber spannend 😀',
        options: [
            {
                text: "Lieber erst einmal einfach!",
                next: 4
            },
            {
                text: "Was wären denn spannende Tools?.",
                next: 11
            }
        ]
    },
*/

/* Zwischentext
  2: {
        text: 'Was für ein Tool suchst Du denn?',
        next: 3
    },
*/

const chat = {
  1: {
    text:
      "Kannst Du Dir etwas unter Brute-Force- und Wörterbuchangriffen etwas vorstellen?",
    options: [
      {
        text: "✔️ Ja, damit habe ich mich gerade beschäftigt.",
        next: 3
      },
      {
        text: "🚫 Nein, was ist das?",
        next: 2
      }
    ]
  },
  2: {
    text:
      "🔙 Dann gehe eine Lektion zurück. Dort wird es erklärt. Komm danach hierher zurück und mache weiter.<br> (Du kannst natürlich auch gleich weitermachen und mit 'Ja' antworten, aber besser ist es, Du schaust Dir die vorherige Lektion an).",
    next: 1
  },
  3: {
    text: "Schön, dann kannst Du mir bestimmt folgende Frage beantworten:",
    next: 4
  },
  4: {
    text: "🤔 Warum sind solche Angriffe so erfolgreich?",
    options: [
      {
        text:
          "🔀 Die Stärke liegt darin, dass die Wahrscheinlichkeit, zufällig das richtige Passwort zu finden, durch umfassende Wörterbücher sehr hoch wird.",
        next: 5
      },
      {
        text:
          "⏭️ Die Stärke solcher Angriffe liegt darin, dass mit den Programmen extrem viele Passwörter in extrem kurzer Zeit (nach menschlichem Empfinden) systemantisch durchgetestet werden können.",
        next: 6
      }
    ]
  },
  5: {
    text:
      "🚫 Nein, Wörterbuchangriffe sind sehr systematisch und basieren nicht auf Zufälligkeit.",
    next: 4
  },
  6: {
    text:
      "✔️ Genau. Es ist schnell und effektiv. Aber bei langen Passwörtern kann ein Angreifer schon so ein paar Jahre warten...",
    next: 7
  },
  7: {
    text:
      "🎯 Daher verlegen sich Angreifer, die auf fremde Accounts zugreifen wollen, gern auf das <b>Raten von Passwörtern.</b>",
    options: [
      {
        text: "🤔 Meinst Du das ernst?",
        next: 9
      }
    ]
  },
  8: {},
  9: {
    text: "Jupp! 😯",
    next: 10
  },
  10: {
    text:
      "Dazu kann man beim Angriff zum Beispiel einfach die <b>beliebtesten Passwörter</b> testen. Hat man damit kein Glück, versucht man zum Beispiel, <b>Namen oder Geburtsdaten</b> aus dem Umfeld des Opfers auszuprobieren.",
    options: [
      {
        text: "😠 Der Angreifer kennt mein Umfeld doch gar nicht!",
        next: 11
      },
      {
        text:
          "😕 Aber meine Passwörter haben gar nichts mit meinem Geburtstag zu tun – wie soll das gehen?",
        next: 13
      }
    ]
  },
  11: {
    text:
      "Dieses Vorgehen ist natürlich nur dann praktikabel, wenn der Angreifer Dein Umfeld – und Dich – kennt!",
    options: [
      {
        text: "😳 Ahhh!",
        next: 12
      }
    ]
  },
  12: {
    text:
      "Häufig kommen Angreifer damit schon ans Ziel, wenn die Partnerin des Opfers z.&nbsp;B. Marie heißt, am 13.06.1965 geboren wurde und das gesuchte Passwort 'Marie13665' ist.",
    next: 15
  },
  13: {
    text:
      "🤫 Psst! Verrate doch nicht, was Deine Passwörter beinhalten – oder eben auch nicht beinhalten!",
    next: 14
  },
  14: {
    text: "Abgesehen davon: Viele Menschen nutzen solche Passwörter.",
    options: [
      {
        text:
          "🤔 Das stimmt, aber auch dann kennt der Angreifer mein Umfeld doch gar nicht!",
        next: 11
      }
    ]
  },
  15: {
    text:
      "Kannst Du Dir vorstellen, warum bei diesem Passwort das clevere Raten erfolgreicher ist als der Brute-Force-Angriff?",
    options: [
      {
        text:
          "Weil 90% der verheirateten Männer den Namen und Geburtstag ihrer Frau als Passwort wählen – so vergessen sie den wenigstens nicht.",
        next: 16
      },
      {
        text:
          "Weil ein Brute-Force-Angriff bei diesem Passwort ca. 12 Jahre zum Entschlüsseln brauchen würde.",
        next: 17
      }
    ]
  },
  16: {
    text:
      "🚫 Nun ja, ganz so schlimm ist es um die Einfallslosigkeit bei Passwörtern wohl doch nicht bestellt... 😉.",
    options: [
      {
        text:
          "🤔 Dann brauchen Brute-Force-Angriff bei diesem Passwort tatsächlich ca. 12 Jahre zum Entschlüsseln? 📅",
        next: 17
      }
    ]
  },
  17: {
    text:
      "✔️ Richtig. Zumindest mit der Rechenkapazitität, die wir in dem Rechenbeispiel der letzten Lerneinheit vorausgesetzt haben.",
    options: [{ text: "🤔 Wie lange würde das denn dauern?", next: 18 }]
  },
  18: {
    text:
      "Ein Brute-Force-Angriff würde für ein 10-stelliges Passwort (wie 'Marie13665'), das aus Buchstaben und Zahlen besteht, ca. 12 Jahre zum Entschlüsseln brauchen.",
    next: 19
  },
  19: {
    text:
      "Mit cleverem Raten kann eine Angreiferin oder ein Angreifer also viel schneller zum Ziel kommen als mit der Brute-Force-Methode.",
    options: [
      {
        text: "🤔 Warum ist das so?",
        next: 20
      }
    ]
  },
  20: {
    text:
      "Cleveres Raten ist auch deshalb erfolgsversprechend, weil <b>viele Informationen über das Opfer möglicherweise sogar online</b> und damit einfach herauszufinden sind.",
    next: 21
  },
  21: {
    text:
      "Beispielsweise findet man sie über <b>persönliche Webseiten</b> oder <b>öffentliche Profile auf Social-Media-Plattformen</b>.",
    options: [
      { text: "😏 Und wenn man online gar nichts über mich findet?", next: 22 }
    ]
  },
  22: {
    text:
      "Wird man hier nicht fündig, könnten die Angreifenden auch versuchen, das Opfer selbst oder dessen Familie oder Bekannte <b>geschickt auszufragen</b>.",
    next: 23
  },
  23: {
    text:
      "Wie nennt man dieses Vorgehen, wenn man persönlich Menschen ausfragt?",
    options: [
      {
        text: "Social Managing",
        next: 24
      },
      {
        text: "Social Engineering",
        next: 25
      },
      {
        text: "Socializing",
        next: 24
      },
      {
        text: "Smart Engineering",
        next: 24
      }
    ]
  },
  24: {
    text: "🚫 Nope, versuch's nochmal.",
    next: 23
  },
  25: {
    text:
      "✔️ Genau!<br> <b>Social Engineering</b> ist die geschickte Beeinflussung von anderen Menschen mit dem Ziel, dass sie bestimmte Handlungen ausführen.",
    options: [
      {
        text: "🤔 Wie verbreitet ist Social Engineering?",
        next: 28
      }
    ]
  },
  27: {},
  28: {
    text:
      "Rate mal, wie viele Unternehmen in einer Umfrage angaben, einen Angriff durch Social Engineering erfahren zu haben!",
    options: [
      {
        text: "28%",
        next: 29
      },
      {
        text: "47%",
        next: 30
      },
      {
        text: "89%",
        next: 29
      }
    ]
  },
  29: {
    text: "🚫 Nein, versuche es nochmal.",
    next: 28
  },
  30: {
    text: "✔️ Richtig!",
    next: 31
  },
  31: {
    text:
      "Was meinst Du, welchen Rang damit Social Engineering in der Liste der häufigsten Angriffsarten einnimmt?",
    options: [
      {
        text: "Platz 1",
        next: 32
      },
      {
        text: "Platz 2",
        next: 32
      },
      {
        text: "Platz 3",
        next: 33
      },
      {
        text: "Platz 4",
        next: 32
      }
    ]
  },
  32: {
    text: "🚫 Leider falsch geraten, versuche es nochmal.",
    next: 31
  },
  33: {
    text: "✔️ Jawoll!",
    next: 34
  },
  34: {
    text:
      "Diese Zahlen entstammen einer Studie von KPMG, die 2017 in österreichischen Unternehmen durchgeführt wurde.",
    next: 36
  },
  35: {},
  36: {
    text: "🎓 Ok, bis hier hin die Theorie.",
    next: 37
  },
  37: {
    text:
      "Schauen wir uns als nächstes an, wie Social Engineering funktioniert.",
    next: 38
  },
  38: {
    text: "(weiter geht es unter diesem Chat-Fenster) 🔚"
  }
};
