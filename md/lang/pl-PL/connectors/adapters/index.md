<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.3 Łączniki :: Adapter

## Omówienie pogłębione

Łącznik **Adapter** znajduje się między **Layer 5: Components, Controls, & Layouts** a **Layer 4: Graphs & Frames**. Jego zadaniem jest przystosowanie użytecznych części interfejsu do szerszego kontekstu organizacyjnego. Adapter przeprowadza interfejs od pojedynczych elementów do relacji, grafów i ram.

### Od użycia do kontekstu

Komponenty, kontrolki i układy opisują części, z którymi program może pracować. Same części nie wystarczą jednak do zrozumienia całego interfejsu. System musi wiedzieć, jak elementy są połączone, gdzie należą, jakie mają granice, w jakim kontekście działają i jak przygotować je dla renderera. Adapter pomaga przejść z poziomu elementu do poziomu zorganizowanego kontekstu.

### Adaptowanie komponentów do grafów

Adapter może wziąć kolekcję komponentów i umieścić je w grafie komponentów, scenie, drzewie dokumentu, grafie audio lub innym modelu relacji. Może ustalić rodziców i dzieci, kolejność, widoczność, aktywność, identyfikatory, zależności lub inne informacje potrzebne Graphs & Frames.

To nie jest tylko mechaniczne opakowanie. Adaptacja zachowuje znaczenie części, jednocześnie przedstawiając je w formie odpowiedniej dla szerszej organizacji.

### Layout nie jest całym kontekstem

Layout porządkuje elementy, ale nie zastępuje grafu ani ramy. Układ może powiedzieć, że elementy są pionowo ułożone. Graf może powiedzieć, że należą do konkretnej części interfejsu, a rama może powiedzieć, jaki jest aktywny kontekst, rozmiar, stan i cel renderowania. Adapter pomaga przełożyć układy i komponenty do tej większej struktury.

### Połączenie z ramą

Adapter często musi uwzględnić dane potrzebne ramie: granice, obszary aktywne, kolejność warstw, relacje fokusowania, kontekst wejścia lub stan widoczności. Dzięki temu frame może później przygotować informację dla renderera i trasować interakcje z powrotem do właściwych kontrolek.

### Ponowne użycie przez adaptację

Adapter pozwala tym samym komponentom działać w różnych kontekstach. Komponent tekstowy może zostać zaadaptowany do grafu wizualnego, odczytu słuchowego albo reprezentacji dostępności. Kontrolka może działać w różnych układach bez znajomości całego środowiska. To wzmacnia modularność i utrzymuje odpowiedzialności w czystości.

### Powrót do komponentów

W przepływie interakcji Adapter pomaga kierować informacje z Graphs & Frames z powrotem do komponentów lub kontrolek, które mogą je obsłużyć. Jeśli graf ustali, że kliknięcie należy do konkretnego przycisku, Adapter pomaga zachować ścieżkę między kontekstem a aktywnym elementem.

### Zachowywanie tożsamości

Podczas adaptacji ważne jest zachowanie tożsamości. Komponent nie powinien „zgubić się” w grafie. System musi wiedzieć, która przygotowana reprezentacja odpowiada któremu elementowi, aby stany, interakcje i aktualizacje mogły wrócić do właściwego miejsca.

### Dlaczego łącznik ma znaczenie

Adapter wyjaśnia, jak użyteczne części interfejsu stają się zorganizowanym kontekstem. Bez niego komponenty byłyby izolowane, a Graphs & Frames musiałoby znać zbyt wiele szczegółów ich wewnętrznego działania.
