<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.6 Łączniki :: Native

## Omówienie pogłębione

Łącznik **Native** znajduje się między **Layer 2: Windows** a **Layer 1: Systems**. Zapewnia bindings między oknem a systemem, pozwalając oknu istnieć, odbierać interakcje, dostarczać wyjście i komunikować się z zachowaniem natywnym platformy.

### Od Windows do Systems

Window jest widokiem lub kontekstem dostarczenia. System jest środowiskiem, które zapewnia urządzenia, usługi i reguły. Native łączy te dwa światy. To miejsce, gdzie abstrakcyjne pojęcie okna spotyka konkretne API platformy, uchwyty systemowe, sterowniki, kolejki zdarzeń, uprawnienia i ograniczenia.

### Definiowanie bindings

Słowo **bindings** jest tutaj kluczowe. Native nie musi być ogromną warstwą ani kompletnym frameworkiem. Często wystarczy zapewnić powiązania między reprezentacją window a funkcjami systemu: utworzenie okna, ustawienie rozmiaru, odebranie zdarzenia, podłączenie powierzchni, odczyt urządzenia wejściowego, przekazanie wyjścia lub wywołanie funkcji natywnej.

Bindings są mostem praktycznym: pozwalają kodowi Modelu mówić do systemu w języku, który system rozumie.

### Dostęp natywny

Native może udostępniać dostęp do funkcji platformy, takich jak zarządzanie oknami, obsługa DPI, zdarzenia klawiatury i myszy, wejście dotykowe, audio, schowek, uchwyty plików, timery, zasoby GPU lub funkcje dostępności. Nie oznacza to, że wyższe warstwy powinny bezpośrednio zależeć od każdej szczegółowej funkcji systemu. Native powinien izolować tę zależność w miejscu, gdzie naprawdę należy.

### Więcej niż wrapper

Native może wyglądać jak prosty wrapper wokół API systemowego, ale jego rola jest większa. Wrapper tylko opakowuje funkcję. Native tłumaczy odpowiedzialność między Window a System. Powinien zachować granicę Modelu, ukryć niepotrzebne szczegóły platformy i ujawnić zachowania potrzebne oknu.

### Tworzenie i utrzymywanie Window

W praktyce Native często odpowiada za utworzenie okna, utrzymywanie jego życia, reagowanie na zamknięcie, zmianę rozmiaru, fokus, tryb pełnoekranowy, stan widoczności lub powiązanie z kontekstem renderowania. Te działania są zależne od platformy, dlatego należą do łącznika, a nie do ogólnego modelu komponentów czy renderera.

### Odbieranie interakcji

Native jest również miejscem, w którym systemowe zdarzenia zaczynają wchodzić do okna. Naciśnięcia klawiszy, ruch myszy, gesty, zdarzenia dotykowe, zmiany urządzeń, sygnały audio albo inne wejścia są najpierw formą natywną. Native tłumaczy je na informacje, które Window i wyższe warstwy mogą przekazać dalej.

### Zachowywanie granicy

Native powinien chronić resztę interfejsu przed niepotrzebnym uzależnieniem od platformy. Dzięki temu renderer, grafy, komponenty i parsery mogą pozostać możliwie przenośne. Gdy wymagane jest zachowanie specyficzne dla systemu, Native jest właściwym miejscem, aby je umieścić.

### Dlaczego łącznik ma znaczenie

Native jest ostatnim jawnym przejściem przed systemem. Bez niego „okno” pozostaje abstrakcją bez dostępu do rzeczywistego środowiska. Dzięki Native Model może zachować uniwersalny opis interfejsu, a jednocześnie umożliwić konkretną implementację na Windows, macOS, Linux, urządzeniach wbudowanych lub innych systemach.
