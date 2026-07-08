<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6. Łączniki

## Podsumowanie tematyczne

Po sklasyfikowaniu danych przez domeny i umieszczeniu ich w Stosie potrzebujemy opisać, _jak_ dane przemieszczają się między warstwami. Tym zajmują się **connectors** — łączniki. Łącznik jest wyspecjalizowanym przejściem między sąsiednimi jawnymi warstwami Stosu. Nie jest dodatkową warstwą, lecz mechanizmem transformacji, który pozwala dwóm warstwom porozumiewać się bez zlewania ich odpowiedzialności.

Model CatalystUI definiuje sześć głównych łączników:

- **Data** — Layer 7 ↔ Layer 6
- **Parser** — Layer 6 ↔ Layer 5
- **Adapter** — Layer 5 ↔ Layer 4
- **Bridge** — Layer 4 ↔ Layer 3
- **Surface** — Layer 3 ↔ Layer 2
- **Native** — Layer 2 ↔ Layer 1

Każdy łącznik ma własny typ przejścia. Data łączy aktywne dane cyfrowe z interpretowaną strukturą. Parser przekształca strukturę w użyteczne części interfejsu. Adapter organizuje komponenty w szerszy kontekst. Bridge przenosi kontekst do renderera. Surface łączy wynik renderowania z oknem. Native zapewnia bindings między oknem a systemem.

### Dlaczego łączniki istnieją

Bez łączników warstwy łatwo zaczęłyby wykonywać cudzą pracę. Renderer musiałby rozumieć całą logikę komponentów. Komponenty musiałyby wiedzieć, jak działa natywne API systemu. Struktura danych musiałaby znać układ interfejsu. Takie mieszanie odpowiedzialności sprawia, że frameworki stają się kruche, trudne do przenoszenia i pełne wyjątków.

Łączniki pozwalają zachować granice. Każdy z nich tłumaczy informację z jednej formy na drugą, ale nie powinien przejmować całej odpowiedzialności sąsiednich warstw. Dzięki temu Model pozostaje odwracalny: dane mogą płynąć w dół ku doświadczeniu użytkownika, a interakcje mogą wracać w górę ku danym cyfrowym.

### Łączniki lokalne i globalne

Łącznik może być rozumiany lokalnie, jako przejście między dwiema konkretnymi warstwami, albo globalnie, jako usługa dostępna szerzej w systemie. Na przykład dostęp do danych może być bardzo lokalny dla jednego formatu pliku, ale może też istnieć jako wspólna usługa obsługująca wiele części programu. Podobnie Native może być niewielkim bindingiem dla jednego okna albo większą warstwą dostępu do platformy.

W obu przypadkach kluczowa rola pozostaje taka sama: łącznik zachowuje znaczenie podczas przejścia przez granicę.

### Rola łączników w Modelu

Łączniki sprawiają, że Model nie jest tylko statyczną listą warstw. To one opisują ruch. Gdy pytamy, gdzie informacja jest w przepływie, używamy Stosu. Gdy pytamy, jak informacja przechodzi z jednego miejsca do następnego, używamy łączników.

Dobrze zaprojektowany łącznik powinien być wyspecjalizowany, przewidywalny i możliwy do wymiany. Wtedy system może zmienić renderer, parser, adapter albo binding natywny bez konieczności przepisywania całego modelu myślenia.
