<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.8 Stos :: Systems

## Omówienie pogłębione

**Systems** to najniższa jawna warstwa Stosu. System zapewnia środowisko, usługi, urządzenia i procesy, które ostatecznie dostarczają wyjście użytkownikowi oraz odbierają od niego wejście. W zwykłym komputerze systemem może być system operacyjny wraz ze sprzętem i sterownikami. W urządzeniu wbudowanym może to być kontroler, firmware, zasilanie, czujniki i elementy wykonawcze.

### Najniższa jawna warstwa

Warstwa Systems znajduje się tuż nad implikowanym Human Interface. To ostatnia jawna część Modelu po stronie dostarczania wyjścia oraz pierwsza jawna część po stronie odbierania interakcji. System nie jest jeszcze użytkownikiem, ale jest tym, co fizycznie lub logicznie umożliwia użytkownikowi odebranie informacji i wykonanie akcji.

### Środowisko operacyjne

System definiuje zasady działania interfejsu w danym środowisku. Może zapewniać zarządzanie oknami, urządzenia wejściowe, sterowniki audio, obsługę ekranu, dostęp do plików, sieć, zabezpieczenia, harmonogram zadań, pamięć i wiele innych usług. Te szczegóły różnią się między platformami, ale ich rola w Modelu pozostaje podobna: system dostarcza podstawę, na której wyższe warstwy mogą istnieć.

### Relacja do Windows

Windows są widokami lub kontekstami udostępnionymi przez system albo połączonymi z systemem. System tworzy warunki, w których window może otrzymywać wejście i dostarczać wyjście. Bez systemu window nie miałoby gdzie istnieć ani przez co komunikować się z użytkownikiem.

### Dostarczanie wyjścia

W przepływie z góry na dół system ostatecznie przekazuje wyjście do urządzeń lub procesów, które użytkownik może odebrać. Może to być wyświetlenie pikseli, odtworzenie dźwięku, wykonanie wibracji, uruchomienie silnika drzwi albo wysłanie sygnału do innego elementu fizycznego.

### Początek interakcji

W przepływie z dołu do góry system jest miejscem, w którym akcje użytkownika stają się danymi interakcji. Klawiatura wysyła naciśnięcie klawisza. Mysz zgłasza ruch. Mikrofon rejestruje dźwięk. Czujnik wykrywa obecność. Kontroler zgłasza przycisk lub oś. System przechwytuje te sygnały i kieruje je do odpowiedniego window lub kontekstu.

### Reguły i ograniczenia platformy

System wprowadza praktyczne ograniczenia. Platforma może mieć określone API, model uprawnień, format zdarzeń, ograniczenia wydajności, zasady okien, sterowniki lub zachowania sprzętowe. Model CatalystUI nie usuwa tych ograniczeń; pomaga jasno wskazać, że należą one do warstwy Systems lub do łącznika Native między Window a System.

### Relacja do Human Interface

System jest najbliższą jawną warstwą wobec człowieka. To przez system użytkownik widzi, słyszy, czuje lub w inny sposób odbiera wyjście. To również przez system jego działania są wykrywane. Human Interface pozostaje implikowany, ponieważ Model nie reprezentuje samego człowieka jako mechanizmu programowego, ale system jest miejscem kontaktu.

### Dlaczego warstwa ma znaczenie

Systems pomagają oddzielić interfejs od środowiska, które go wykonuje. Wyjaśniają, gdzie pojawiają się ograniczenia platformy, gdzie sygnały stają się wejściem i gdzie przygotowane wyjście staje się doświadczeniem użytkownika.
