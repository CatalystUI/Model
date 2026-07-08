<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.1 Stos :: Data Storage

## Omówienie pogłębione

Warstwa **Data Storage** jest implikowaną granicą u góry Stosu. Reprezentuje miejsce, w którym dane mogą istnieć poza aktywnym przepływem interfejsu. Może to być plik na dysku, rekord w bazie danych, obiekt w pamięci trwałej, odpowiedź przechowywana w usłudze sieciowej, zapis w systemie konfiguracji albo dowolny inny mechanizm pozwalający informacji pozostać dostępnej, zanim interfejs zacznie z nią aktywnie pracować.

### Granica implikowana

Warstwa jest „implikowana”, ponieważ Model CatalystUI nie musi bezpośrednio reprezentować każdego możliwego mechanizmu przechowywania. Istnienie danych przed wejściem do interfejsu wynika z samego przepływu informacji. Jeżeli interfejs ma coś przedstawić, zmodyfikować lub zapisać, ta informacja musi skądś pochodzić albo dokądś wracać. Data Storage jest nazwą tej zewnętrznej dostępności.

### Dostępność zapisana i aktywna reprezentacja

Ważne jest rozróżnienie między danymi przechowywanymi a danymi aktywnie obsługiwanymi przez interfejs. Plik tekstowy na dysku jest magazynem. Gdy program go otwiera i zaczyna pracować z jego zawartością, ta zawartość wchodzi do Stosu jako Digital Data. Baza danych może przechowywać rekordy przez lata, ale dopiero zapytanie, odpowiedź lub załadowana reprezentacja staje się częścią aktywnego przepływu.

Data Storage jest więc miejscem dostępności, a nie jeszcze miejscem interpretacji. Może przechowywać dokładne dane, ale samo przechowywanie nie mówi Modelowi, jak te dane mają być rozumiane, pokazane lub zmienione.

### Trwałość i transformacja

Przechowywanie często wiąże się z trwałością, ale nie każda forma Data Storage musi być wieczna. Pamięć podręczna, sesja, lokalny plik tymczasowy lub zdalny stan mogą być krótkotrwałe, a mimo to pełnić rolę magazynu względem aktywnego przepływu. Liczy się to, że dane mogą istnieć poza bieżącym krokiem interakcji.

Kiedy informacja wychodzi z magazynu, zwykle zostaje przekształcona w formę możliwą do użycia przez program. Kiedy interakcja użytkownika zmienia stan, wynik może wrócić do magazynu, aby stać się dostępny później. Data Storage jest więc zarówno potencjalnym źródłem, jak i potencjalnym miejscem powrotu.

### Przykłady w kontekście

W edytorze tekstu plik `.txt` na dysku należy do Data Storage. Po otwarciu pliku jego zawartość staje się Digital Data. Po edycji i zapisaniu zmieniona zawartość wraca do Data Storage.

W aplikacji internetowej dane użytkownika mogą znajdować się w bazie danych na serwerze. Po pobraniu przez API odpowiedź JSON wchodzi do aktywnego przepływu. Gdy użytkownik zmienia ustawienie, aplikacja może wysłać zaktualizowane dane z powrotem do serwera.

W systemie drzwi automatycznych ustawienia czułości lub opóźnienia mogą być przechowywane w konfiguracji kontrolera. W trakcie działania system ładuje je, interpretuje i używa do podejmowania decyzji.

### Dlaczego rozdzielenie ma znaczenie

Oddzielenie Data Storage od Digital Data pomaga uniknąć pomieszania „gdzie coś jest przechowywane” z „jak jest używane teraz”. Ten sam plik może być przechowywany w jednym miejscu, ale przedstawiony wizualnie, odczytany na głos, przesłany dalej lub zmodyfikowany przez kontrolkę. Magazyn nie jest całym interfejsem; jest granicą, z której informacja może wejść do przepływu i do której może powrócić.
