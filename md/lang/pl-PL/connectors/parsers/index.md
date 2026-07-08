<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.2 Łączniki :: Parser

## Omówienie pogłębione

Łącznik **Parser** znajduje się między **Layer 6: Structure & Semantics** a **Layer 5: Components, Controls, & Layouts**. Jego zadaniem jest przekształcenie stabilnie zinterpretowanych danych w mutowalne, użyteczne części interfejsu. Parser jest przejściem od znaczenia do użycia.

### Od struktury do użycia

Structure & Semantics opisuje, co dane znaczą po zastosowaniu reguł. To jednak nie wystarcza, aby użytkownik lub program mogli wygodnie z nimi pracować w interfejsie. Parser bierze strukturę i tworzy komponenty, kontrolki lub układy, które mogą reprezentować tę informację w aktywnym systemie.

### Parsowanie do komponentów

Dokument może zawierać nagłówek i akapity; parser może utworzyć komponenty tekstowe. Formularz może zawierać definicje pól; parser może utworzyć kontrolki wejściowe. Plik audio może mieć zinterpretowane metadane i próbki; parser może utworzyć komponent ścieżki z metodami odtwarzania, pauzy lub przewijania.

Parser nie tylko kopiuje dane. Wyraża je ponownie w formie właściwej dla interfejsu.

### Gdy różnica wygląda mało

Czasami struktura i komponent mogą wyglądać niemal identycznie. Może istnieć obiekt `TextDocumentStructure` i obiekt `TextDocumentComponent`, które mają podobne pola. To nie znaczy, że warstwy są zbędne. Struktura jest stabilną interpretacją danych. Komponent jest częścią żywego interfejsu, która może mieć stan, metody, interakcje i zależności od układu.

Różnica dotyczy odpowiedzialności, nie zawsze wyglądu kodu.

### Siła ponownego wyrażenia

Parser pozwala temu samemu znaczeniu zostać wyrażonym w różnych formach interfejsu. Ta sama struktura tekstu może stać się edytorem wizualnym, odczytem głosowym, widokiem tylko do odczytu albo reprezentacją dla technologii asystującej. Parser jest miejscem, gdzie system decyduje, jaka użyteczna forma ma powstać z interpretowanych danych.

### Powrót do struktury

Parser może działać również w drugą stronę. Jeśli użytkownik zmienia komponent, system może potrzebować przekształcić tę zmianę z powrotem w strukturę. Edycja pola tekstowego, zmiana ustawienia lub przesunięcie elementu może wymagać aktualizacji interpretowanej struktury, aby później mogła zostać zapisana jako Digital Data.

### Zachowywanie zamiaru

Najważniejszą odpowiedzialnością Parsera jest zachowanie zamiaru i znaczenia. Jeśli struktura mówi, że element jest ostrzeżeniem, komponent powinien zachować to znaczenie, nawet jeśli wybierze inną formę prezentacji. Jeśli dane mają kolejność, zależności lub ograniczenia, parser powinien przekazać je w formie, którą komponenty mogą respektować.

### Dlaczego łącznik ma znaczenie

Parser wyjaśnia, jak zinterpretowane dane stają się użytecznym interfejsem. Chroni granicę między stabilną strukturą a mutowalnymi częściami, dzięki czemu Model może opisywać zarówno źródłowe znaczenie, jak i aktywne zachowanie.
