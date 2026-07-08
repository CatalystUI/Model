<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 4.2 Domeny :: Wizualna

## Omówienie pogłębione

Tam, gdzie domena **symboliczna** opisuje dane przed przypisaniem do konkretnego zmysłu, domena **wizualna** opisuje dane ukształtowane dla wzroku. Dane wizualne to informacje przeznaczone do zobaczenia: obraz, wyrenderowany tekst, widoczna kontrolka, animacja albo układ na ekranie. Ważne nie jest to, czy dane _mogłyby_ kiedyś pojawić się na ekranie, lecz czy ich obecna rola w interakcji polega na komunikowaniu przez widzenie.

Nie należy więc mylić danych wizualnych z zapisanym formatem stojącym za nimi. Plik zawierający obraz pozostaje symboliczny, dopóki istnieje tylko jako przechowywana informacja. Akapit tekstu pozostaje symboliczny, dopóki jest tylko znakami, znacznikami lub abstrakcyjną reprezentacją. Staje się wizualny wtedy, gdy system przedstawia go w formie, którą użytkownik może zobaczyć i zinterpretować.

### Rozumienie danych wizualnych

Praktycznym sposobem rozumienia danych wizualnych jest spojrzenie na **położenie**, **wygląd** i **stan**. Nie są to formalne poddomeny Modelu CatalystUI, ale pomagają rozpoznać, jak informacja wizualna niesie znaczenie.

**Położenie** opisuje, gdzie dane wizualne się pojawiają i jak odnoszą się do informacji wokół nich. Nagłówek nad akapitem komunikuje przynależność. Przycisk obok formularza komunikuje powiązanie. Menu nad treścią komunikuje tymczasowy priorytet. Użytkownik nie postrzega widocznych obiektów w izolacji; widzi relacje między nimi.

**Wygląd** opisuje, jak dane przedstawiają się użytkownikowi. Kształt, kolor, typografia, kontrast i obrazy wpływają na to, co użytkownik sądzi, że widzi. Ten sam tekst może wyglądać jak tytuł, ostrzeżenie albo link. Prostokąt może wyglądać jak przycisk, panel lub dekoracja, zależnie od obramowania, odstępów i kontekstu.

**Stan** opisuje bieżący warunek komunikowany wizualnie. Kontrolka może wyglądać na aktywną, wyłączoną, zaznaczoną, sfokusowaną, ładującą się lub ukrytą. Te stany są ważne, ponieważ następny krok użytkownika często zależy od tego, co interfejs wydaje się gotowy zrobić.

### Znaczenie wizualne

Wyjście wizualne wyraża znaczenie, ale nie jest samym znaczeniem. Czerwona ramka może komunikować błąd, ale ramka nie jest błędem. Ikona może reprezentować akcję, ale ikona nie jest akcją. Układ może pokazywać hierarchię, lecz układ nie jest strukturą bazową. Dane wizualne są zmysłowym wyrazem znaczenia, a nie całym jego źródłem.

To rozróżnienie pomaga uniknąć częstego błędu projektowego: powierzania zbyt dużej odpowiedzialności temu, jak coś wygląda, bez zachowania tego, co naprawdę znaczy. Jeśli interfejs używa wyłącznie koloru do komunikowania błędu, znaczenie zostaje zamknięte w jednym sygnale wizualnym. Jeśli ikona nie ma etykiety, opisu lub dostępnego znaczenia, system może wyglądać czysto, ale być trudniejszy do zrozumienia.

### Dane wizualne i dostępność

Domena wizualna ułatwia myślenie o dostępności, ponieważ pokazuje, kiedy informacja jest komunikowana wyłącznie przez wzrok. Jeśli błąd jest pokazany tylko kolorem, wykres tylko obrazem, a postęp tylko animacją, znaczenie może nie być dostępne dla każdego użytkownika. Problemem nie jest sama komunikacja wizualna; problemem jest to, że znaczenie może wymagać przetłumaczenia do innej formy.

Domeny pomagają pytać, gdzie obecnie znajduje się znaczenie. Czy jest tylko wizualne? Czy może być reprezentowane symbolicznie? Czy powinno być dostępne przez dźwięk, dotyk albo inną formę wyjścia? Takie pytania pozwalają zachować to samo znaczenie dla różnych sposobów percepcji.

### Dane wizualne w szerszych doświadczeniach

Dane wizualne mogą uczestniczyć w doświadczeniach, które nie są wyłącznie wizualne. Odtwarzacz wideo łączy ruchomy obraz z dźwiękiem. Gra łączy grafikę, muzykę i sprzężenie kontrolera. System operacyjny łączy okna, alerty i urządzenia wejściowe w większą wymianę. W takich sytuacjach domena wizualna wskazuje tę część doświadczenia, która jest przeznaczona dla wzroku.

Krótko mówiąc, domena wizualna opisuje przejście od reprezentacji symbolicznej do wyjścia czytelnego dla wzroku. Dzięki niej można omawiać widoczne informacje bez sprowadzania wszystkich interfejsów do grafiki.
