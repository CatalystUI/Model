<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.2 Stos :: Digital Data

## Omówienie pogłębione

**Digital Data** jest pierwszą jawną warstwą Stosu. Reprezentuje informację po wejściu do aktywnego przepływu interfejsu w formie czytelnej dla komputera, ale zanim Model zinterpretuje ją, zorganizuje, przypisze do domeny zmysłowej lub przedstawi użytkownikowi. To dane jako aktywna reprezentacja binarna, tekstowa, strumieniowa lub dokumentowa, z którą program może zacząć pracować.

### Pierwsza jawna warstwa

Data Storage mówi, że informacja istnieje gdzieś poza przepływem. Digital Data mówi, że ta informacja została już wprowadzona do przepływu. Może to być zawartość pliku, odpowiedź z sieci, bajty obrazu, pakiet audio, tekst w pamięci, rekord pobrany z bazy albo inna reprezentacja możliwa do przetworzenia przez maszynę.

Warstwa ta jest „jawna”, ponieważ od tego miejsca Model zaczyna opisywać aktywną ścieżkę interfejsu. Dane nie są już tylko dostępne; są obecne w procesie, który może je interpretować i przekształcać.

### Reprezentacja czytelna dla komputera

Digital Data nie oznacza, że dane są jeszcze znaczące dla użytkownika. Bajty pliku obrazu mogą zawierać pełny obraz, ale użytkownik nie widzi go, dopóki system go nie zinterpretuje i nie wyrenderuje. Ciąg znaków może zawierać wiadomość, ale może zostać pokazany, przeczytany, wysłany albo przekształcony dopiero przez kolejne warstwy.

Na tym etapie dane są możliwe do przetworzenia, lecz ich rola w interakcji nie została jeszcze w pełni ustalona. To komputerowa reprezentacja przed nadaniem struktury i semantyki.

### Przed strukturą i semantyką

Digital Data nie definiuje samodzielnie reguł swojego rozumienia. Plik może mieć rozszerzenie, nagłówek, metadane lub kontekst, ale sama obecność danych nie gwarantuje, że system wie, jak je odczytać. Następna warstwa, Structure & Semantics, określa, jakie reguły interpretacji należy zastosować i jaki zorganizowany kształt powstaje po ich zastosowaniu.

To rozróżnienie jest ważne. „Mamy dane” nie znaczy jeszcze „rozumiemy dane”. Dostęp do bajtów nie jest tym samym co znaczenie.

### Górny punkt zwrotny

Digital Data jest górnym punktem zwrotnym aktywnego przepływu. Z góry dane mogą zejść przez Stos i stać się postrzegalnym doświadczeniem. Z dołu interakcja użytkownika może wspiąć się przez Stos i zmienić dane cyfrowe, które następnie mogą wrócić do Data Storage.

Dzięki temu warstwa ta działa w obie strony. Może być źródłem treści przedstawianej użytkownikowi, ale może też być wynikiem zamiaru użytkownika przetworzonego przez interfejs.

### Digital Data i domeny

Digital Data zwykle nie jest jeszcze przypisana do domeny zmysłowej. Plik tekstowy może później stać się wizualny, gdy zostanie wyświetlony, albo słuchowy, gdy zostanie odczytany przez syntezator mowy. Plik audio może stać się słuchowy po odtworzeniu, ale jako przechowywany i załadowany format nadal zaczyna jako reprezentacja cyfrowa.

Domena zależy więc od roli danych w interakcji, a nie tylko od typu pliku. Digital Data daje materiał, który późniejsze warstwy mogą ukształtować.

### Dlaczego warstwa ma znaczenie

Warstwa Digital Data pozwala Modelowi odróżnić aktywną, komputerowo czytelną informację od zarówno magazynu, jak i interpretacji. Pomaga pytać: czy dane zostały już załadowane? Czy są tylko bajtami lub znakami? Czy system wie, jak je rozumieć? Czy zostały już przypisane do formy doświadczenia użytkownika?

Bez tej warstwy łatwo byłoby mieszać przechowywanie, interpretację i prezentację. Dzięki niej przepływ informacji pozostaje czytelny.
