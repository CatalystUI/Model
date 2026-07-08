<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.4 Stos :: Components, Controls, & Layouts

## Omówienie pogłębione

**Components, Controls, & Layouts** to pierwsza warstwa Stosu, w której zinterpretowane dane stają się aktywnymi, użytecznymi częściami interfejsu. Structure & Semantics mówi, co dane znaczą i jak są uporządkowane. Warstwa komponentów, kontrolek i układów mówi natomiast, jak program może te dane przedstawiać, zmieniać, organizować i obsługiwać w odpowiedzi na interakcje.

### Pierwsza mutowalna warstwa interfejsu

Ta warstwa jest mutowalna, ponieważ reprezentuje żywą część interfejsu. Komponent może zmienić stan, kontrolka może zareagować na akcję, a układ może przeliczyć pozycje. Użytkownik nie oddziałuje bezpośrednio z surowymi bajtami ani zwykle ze stabilną strukturą danych; oddziałuje z częściami interfejsu, które program przygotował do użycia.

### Od interpretacji do użycia

Po zinterpretowaniu danych przez Structure & Semantics program potrzebuje formy wygodnej do pracy. Akapit w dokumencie może stać się komponentem tekstowym. Wartość logiczna w konfiguracji może stać się przełącznikiem. Lista rekordów może zostać przedstawiona przez układ. Ta zmiana nie musi zachowywać dokładnie tej samej postaci co zapis źródłowy. Ważne jest, aby zachować zamiar i znaczenie, a jednocześnie umożliwić działanie interfejsu.

### Components

**Component** jest logiczną, użyteczną częścią interfejsu. Może reprezentować etykietę, obraz, dźwięk, element stylu, ścieżkę audio, fragment tekstu, ikonę, kształt, element konfiguracji albo inną jednostkę, którą system może prezentować lub organizować.

Komponent nie musi być wizualny. `AudioComponent` może reprezentować dźwięk gotowy do odtworzenia. `HapticComponent` może reprezentować wzorzec wibracji. `TextComponent` może być pokazany na ekranie, przeczytany na głos albo użyty przez technologię asystującą. Komponent jest po prostu użyteczną reprezentacją informacji w interfejsie.

### Controls

**Control** jest komponentem, który przetwarza interakcje. Przycisk, przełącznik, suwak, pole tekstowe, fizyczny przycisk, komenda głosowa lub sterowanie odtwarzaniem mogą być kontrolkami, jeśli ich rolą jest przyjmowanie zamiaru użytkownika i przekształcanie go w działanie systemu.

Kontrolki są miejscem, w którym interakcje często osiągają swój praktyczny cel. Kliknięcie, naciśnięcie, gest lub polecenie dociera przez niższe warstwy, zostaje zlokalizowane w kontekście, a następnie kontrolka podejmuje decyzję, co ma się stać. Może to być brak działania, odczyt, aktualizacja, zapis, odtworzenie dźwięku, zmiana stanu albo rozpoczęcie kolejnego procesu.

### Layouts

**Layout** jest komponentem, który organizuje inne komponenty lub kontrolki w określony porządek. W GUI może to być układ pionowy, poziomy, siatka albo panel. W interfejsie audio może to być grupa efektów dźwiękowych lub kolejka ścieżek. W systemie dotykowym może to być układ wzorców lub obszarów kontaktu.

Układ nie jest tym samym co pełny kontekst. Jego zadaniem jest rozmieszczenie lub uporządkowanie elementów, ale szersze relacje i aktywna rama należą do Graphs & Frames.

### Mutowalność i aktywny stan

Ponieważ komponenty i kontrolki są częścią działającego interfejsu, mogą przechowywać aktywny stan. Przycisk może być wciśnięty lub wyłączony. Odtwarzacz może być wstrzymany. Kontrolka tekstowa może mieć kursor. Układ może mieć obliczone pozycje zależne od rozmiaru okna. Ten stan nie zawsze istnieje w danych źródłowych; często jest stanem interfejsu potrzebnym do bieżącej interakcji.

### Rola w przepływie z góry na dół

W przepływie od danych do doświadczenia ta warstwa przekształca zinterpretowane struktury w użyteczne części interfejsu. Tworzy elementy, które później zostaną zorganizowane w grafy i ramy, przygotowane do renderowania i dostarczone użytkownikowi.

### Rola w przepływie z dołu do góry

W przepływie interakcji ta warstwa często obsługuje właściwy zamiar użytkownika. Niższe warstwy mogą wykryć akcję, zmapować ją, zlokalizować i przekazać dalej, ale kontrolka decyduje, jak ten zamiar wpływa na dane lub stan programu.

### Relacja do Graphs & Frames

Components, Controls, & Layouts tworzą użyteczne części. Graphs & Frames organizują te części w szersze relacje i konteksty. Komponent może istnieć sam, ale graf pozwala go odnaleźć, powiązać z innymi i przygotować jako część większego doświadczenia.

### Dlaczego warstwa ma znaczenie

Ta warstwa jest miejscem, gdzie dane zaczynają wyglądać jak interfejs z perspektywy programisty. Oddziela stabilną interpretację od aktywnego użycia, pozwala kontrolkom obsługiwać zamiar użytkownika i daje układom sposób porządkowania części doświadczenia.
