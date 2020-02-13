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
    text: "Studierst Du an einem Standort der Virtuellen Fachhochschule?",
    options: [
      {
        text: "🎓 Ja, das tue ich.",
        next: 2
      },
      {
        text: "🌌 Nein, ich bin nicht eingeschrieben.",
        next: 3
      }
    ]
  },
  2: {
    text:
      "In diesem Fall brauchst Du die nachfolgenden Ausführungen nicht lesen, sie gelten nur für Teilnehmende des Kurses, die nicht an der VFH eingeschrieben sind und vielleicht auch ein Zertifikat erhalten möchten.",
    next: 17
  },
  3: {
    text:
      "Ist es Dir wichtig, ein Hochschulzertifikat für diesen Kurs zu bekommen? 👨‍🎓 👩‍🎓 ",
    options: [
      {
        text: "📜 Ja, das ist mir wichtig.",
        next: 4
      },
      {
        text: "🖨️ Nein, ein Teilnahmezertifikat würde mir reichen.",
        next: 12
      },
      {
        text: "🦄 Nein, Zertifikate sind mir völlig egal.",
        next: 14
      },
      {
        text: "🤔 Ich weiß es noch nicht.",
        next: 4
      }
    ]
  },
  4: {
    text: "🎓 Ein Hochschulzertifikat würde von der TH Lübeck ausgestellt werden.",
    next: 5
  },
  5: {
    text: "📜 Es bescheinigt den Workload über 150&nbsp;h, das sind 5&nbsp;ECTS.",
    options: [
      {
        text: "Und die 5&nbsp;ECTS kann ich auf ein Studium anrechnen lassen?",
        next: 6
      }
    ]
  },
  6: {
    text: "⚖️ Das entscheidet immer der für Dich zuständige Prüfungsausschuss.",
    next: 7
  },
  7: {
    text:
      "💯 Um das Hochschulzertifikat zu erlangen, sind Prüfungsleistungen erforderlich.",
    options: [
      {
        text: "❓ Was muss ich tun?",
        next: 8
      }
    ]
  },
  8: {
    text:
      "🖱️ Du absolvierst alle 3 Kurse der Reihe 'Digitaler Selbstschutz' (d.&nbsp;h. 80% aller Aufgaben bearbeiten).",
    next: 9
  },
  9: {
    text:
      "📝 Dazu fertigst Du für alle 3 Kurse einen Report an und reichst ihn zur Beurteilung ein.",
    next: 10
  },
  10: {
    text:
      "💬 Am Ende präsentierst Du den Report vor Ort in Lübeck oder online in einer Web-Konferenz.",
    options: [
      {
        text: "💲 Ist das kostenpflichtig?",
        next: 11
      }
    ]
  },
  11: {
    text:
      "Ja, eine Gebühr fällt an, nachdem Du Dich für die Prüfung angemeldet hast. Einzelheiten erfährst Du im Text unter diesem Fenster.",
    options: [
      {
        text: "😀 Danke, das reicht mir.",
        next: 17
      },
      {
        text: "🖨️ Erzähle mir mehr zum Teilnahmezertifikat!",
        next: 12
      }
    ]
  },
  12: {
    text:
      "Das Teilnahmezertifikat wird automatisch generiert, wenn Du 80% des Kurses erfolgreich bearbeitet hast. 🖨️",
    options: [
      {
        text: "📝 Muss ich dafür auch einen Report verfassen?",
        next: 13
      }
    ]
  },
  13: {
    text:
      "Nein, das ist nicht nötig. Wir empfehlen Dir aber, die Aufgaben für den Report zu lesen und für Dich zu beantworten.",
    options: [
      {
        text: "😀 Danke, das reicht mir.",
        next: 17
      },
      {
        text: "📜 Erzähl mir mehr zum Hochschulzertifikat!",
        next: 4
      }
    ]
  },
  14: {
    text: "✨ Dann bearbeite den Kurs gern so, wie es Dir gefällt.",
    next: 15
  },
  15: {
    text:
      "Auch wenn Du zu nichts verpflichtet bist, empfehlen wir Dir, die Aufgaben für den Report zu lesen und für Dich zu beantworten.",
    next: 16
  },
  16: {
    text:
      "Und auch für Dich wird automatisch ein Teilnahmezertifikat erstellt, wenn Du genügend Aufgaben erfolgreich bearbeitet hast.",
    options: [
      {
        text: "🖨️ Erzähl mir mehr zum Teilnahmezertifikat!",
        next: 12
      },
      {
        text: "📜 Erzähl mir mehr zum Hochschulzertifikat!",
        next: 4
      },
      {
        text: "😀 Danke, das reicht mir.",
        next: 17
      }
    ]
  },
  17: {
    text: "🚀 Viel Spaß beim Lernen!"
  }
};
