<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.1 Łączniki :: Data

## Omówienie pogłębione

Łącznik **Data** znajduje się między **Layer 7: Digital Data** a **Layer 6: Structure & Semantics**. Jest pierwszym przejściem w aktywnym przepływie informacji: bierze dane czytelne dla komputera i pomaga przekształcić je w formę, którą można zinterpretować według określonych reguł.

### Pierwsze tłumaczenie

Digital Data może być plikiem, strumieniem, odpowiedzią sieciową, ciągiem znaków lub inną aktywną reprezentacją. Sam dostęp do tych danych nie oznacza jeszcze, że system je rozumie. Łącznik Data jest odpowiedzialny za rozpoczęcie przejścia od „mamy dane” do „możemy nadać im strukturę i semantykę”.

### Praca z Data Storage

Chociaż Data Storage jest warstwą implikowaną, łącznik Data często znajduje się blisko granicy przechowywania. Może otwierać plik, odczytywać strumień, pobierać rekord, wysyłać zapytanie lub przygotowywać dane do zapisu. Nie oznacza to, że Data Storage staje się jawną warstwą Stosu; oznacza tylko, że wejście do Digital Data często wymaga operacji dostępu.

### Dostęp to nie zrozumienie

Najważniejsze rozróżnienie brzmi: dostęp nie jest zrozumieniem. Możemy odczytać bajty pliku, ale nadal nie wiedzieć, czy są obrazem, dokumentem, dźwiękiem czy uszkodzonym formatem. Możemy pobrać tekst, ale nie wiedzieć, czy jest JSON-em, Markdownem, kodem czy zwykłą wiadomością. Łącznik Data nie powinien udawać, że sam rozwiązuje całą interpretację; powinien przygotować dane do następnej warstwy.

### Wytwarzanie struktury

W praktyce łącznik Data może przekazać dane do semantyki lub struktury, która potrafi je odczytać. Może też wykonać podstawowe wykrywanie formatu, sprawdzenie nagłówka, wybór kodowania, kontrolę dostępności lub obsługę błędów wejścia. Wynikiem powinno być coś, co Structure & Semantics może uporządkować.

### Zachowywanie znaczenia

Podczas przejścia dane powinny zachować swoje znaczenie. Jeśli plik zawiera tekst w konkretnym kodowaniu, łącznik nie powinien go przypadkowo uszkodzić. Jeśli strumień ma kolejność, długość lub metadane, przejście powinno je respektować. Błędy na tym poziomie często powodują, że późniejsze warstwy otrzymują informację zniekształconą jeszcze przed interpretacją.

### Powrót do Digital Data

Łącznik Data działa również w drugą stronę. Gdy interakcja użytkownika prowadzi do zmiany struktury, ta zmiana może wymagać zapisania z powrotem jako Digital Data. Łącznik musi wtedy pomóc przekształcić interpretowaną informację w odpowiedni zapis: tekst, bajty, rekord, dokument lub strumień.

### Walidacja i niepowodzenia

Ponieważ łącznik Data dotyka granicy wejścia i zapisu, musi radzić sobie z niepowodzeniami. Dane mogą być niedostępne, uszkodzone, niekompletne, źle zakodowane, zablokowane lub nieobsługiwane. W takich sytuacjach ważne jest przekazanie błędu w sposób, który późniejsze warstwy mogą zrozumieć i przedstawić użytkownikowi.

### Dlaczego łącznik ma znaczenie

Data jest łącznikiem, który rozpoczyna aktywne rozumienie danych. Utrzymuje granicę między reprezentacją cyfrową a interpretowaną strukturą, dzięki czemu Model może jasno odróżnić odczyt danych od nadawania im znaczenia.
