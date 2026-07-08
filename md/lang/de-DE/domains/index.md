<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 4. Domains

## High-Level-Übersicht

Um das CatalystUI-Modell zu beschreiben, müssen wir zuerst mit Domains beginnen. Eine _Domain_ beschreibt die Kategorie der Daten, die während einer Interaktion verarbeitet werden. Sie ist der erste Schritt, um den Informationsfluss aufzuschlüsseln. Sie identifiziert, mit welcher _Art_ von Information das System arbeitet. Ein Türsensor an einem Ladeneingang kann visuelle oder räumliche Hinweise verwenden, um Bewegung zu erkennen. Ein Gamecontroller könnte taktile Informationen nutzen, um haptisches Feedback zu erzeugen. Ein Smart Speaker arbeitet möglicherweise mit auditiven Informationen, wenn er Sprache verarbeitet. In fast allen Fällen stimmen die Domains damit überein, wie Menschen die Welt wahrnehmen. Das Modell berücksichtigt auch Daten, bevor sie einem bestimmten Sinn zugeordnet werden, sowie Daten, die mehrere Sinne gleichzeitig umfassen. Daher werden die sieben Domains als „symbolisch“, „visuell“, „auditiv“, „taktil“, „olfaktorisch“, „gustatorisch“ und „multisensorisch“ definiert.

Domains sind nützlich, weil sie den Informationsfluss leichter erkennbar, diagnostizierbar und an die Bedürfnisse des Benutzers anpassbar machen. Wenn wir erkennen, zu welcher Domain die Information gehört, können wir klarer sehen, was das System tut, was es nicht tut und welche Teile der Benutzererfahrung möglicherweise fehlen. Das ist besonders wichtig für Barrierefreiheit: Wenn eine Schnittstelle nur visuell kommuniziert, hilft uns das Modell zu erkennen, dass auch taktile, auditive oder andere Formen von Information berücksichtigt werden müssen. Weil Domains beschreiben, wie Information an der Erfahrung des Benutzers teilnimmt, muss die Klassifizierung von Daten in eine Domain zuerst mit der Frage beginnen, welche Rolle sie in der Interaktion spielen. Wenn Daten gesehen werden sollen, sind sie visuell; wenn sie gehört werden sollen, sind sie auditiv; wenn sie gefühlt werden sollen, sind sie taktil. Wenn die Daten noch keinem bestimmten Sinn zugeordnet wurden, wie bei einer Textdatei, sind sie symbolisch. Wenn mehrere Sinneskategorien gemeinsam als eine Erfahrung wirken, etwa ein Videospiel, das Bild, Ton und Controller-Vibration kombiniert, ist sie multisensorisch.

## Die Rolle der Domains im Modell

Sobald Daten einer Domain zugeordnet wurden, hat die Interaktion einen klareren Ausgangspunkt. Wir wissen, welche Informationen das System verarbeitet, welche Erfahrung der Benutzer haben wird und ob andere Kommunikationsformen berücksichtigt werden müssen. Wenn diese Kategorie feststeht, kann das Modell von der Identifizierung der Datenart dazu übergehen, zu beschreiben, wie sie durch die Schnittstelle selbst fließt.
