<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.7 Stos :: Windows

## Omówienie pogłębione

**Windows** to warstwa ograniczonego dostarczenia. Window jest widokiem, kanałem lub kontekstem, przez który wyrenderowane wyjście może zostać przekazane systemowi, a wejście użytkownika może wrócić do interfejsu. W tradycyjnym GUI window często oznacza prostokątny obszar na ekranie, ale w Modelu CatalystUI pojęcie jest szersze.

### Ograniczona warstwa dostarczenia

Window określa granicę, w której wyjście i wejście mają sens. Może to być okno aplikacji, terminal, kanał audio, urządzenie wejściowe, kontekst wbudowanego systemu, widok w systemie mobilnym albo inny sposób połączenia przygotowanego interfejsu z systemem.

### Widok do systemu

Window jest „widokiem” do systemu, ponieważ pozwala interfejsowi uczestniczyć w środowisku systemowym. Użytkownik nie oddziałuje z abstrakcyjnym rendererem samym w sobie. Oddziałuje przez coś, co system udostępnia: okno, powierzchnię, uchwyt, urządzenie, sesję albo kontekst wejścia/wyjścia.

### Relacja do Renderers

Renderer przygotowuje dane wyjściowe, a Window daje im miejsce docelowe. Renderer wizualny może przygotować obraz, ale window wskazuje, gdzie ten obraz zostanie pokazany. Renderer audio może przygotować strumień, ale window lub kontekst dostarczenia wiąże go z odpowiednim kanałem systemowym.

### Relacja do System

Window istnieje dzięki systemowi. System tworzy lub udostępnia kontekst, zarządza zasobami i przekazuje zdarzenia. Window jest więc blisko granicy natywnej: zależy od reguł platformy, uprawnień, urządzeń i sposobu, w jaki system obsługuje wejście oraz wyjście.

### Dostarczanie wyjścia

W przepływie z góry na dół window przyjmuje wyrenderowane dane i przekazuje je do systemu. Może to oznaczać prezentowanie klatki na ekranie, przekazanie bufora audio, połączenie z urządzeniem dotykowym lub przygotowanie innego kanału postrzegalnego wyjścia.

### Wejście interakcji

W przepływie z dołu do góry window często jest pierwszym kontekstem aplikacji, który otrzymuje wejście od systemu. Kliknięcie, naciśnięcie klawisza, dotyk, ruch, sygnał audio lub inne zdarzenie zostaje powiązane z określonym oknem lub kanałem, zanim pójdzie wyżej w Stosie.

### Niezależność od domeny

Window nie musi być wizualne. Może być kontekstem słuchowym, dotykowym lub innym. To pozwala Modelowi opisywać interfejsy, które nie mają ekranu, oraz interfejsy, które łączą wiele form wyjścia.

### Dlaczego warstwa ma znaczenie

Windows oddzielają renderowanie od systemowego dostarczenia. Pomagają wyjaśnić, gdzie wyrenderowane wyjście ma trafić i skąd wejście zaczyna wchodzić do aplikacji. Bez tej warstwy łatwo byłoby mieszać pracę renderera z odpowiedzialnością systemu.
