<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.5 Stos :: Graphs & Frames

## Omówienie pogłębione

**Graphs & Frames** to warstwa organizacyjna Stosu. Po tym, jak dane stały się komponentami, kontrolkami i układami, system potrzebuje sposobu, aby powiązać je ze sobą, umieścić w aktywnym kontekście i przygotować dla renderera. Ta warstwa odpowiada za relacje, kontekst, koordynację i trasowanie.

### Warstwa organizacyjna

Pojedynczy komponent rzadko wystarcza do opisania pełnego interfejsu. Interfejs zawiera relacje: elementy są rodzicami, dziećmi, sąsiadami, częścią sceny, częścią dokumentu, częścią panelu albo częścią aktywnego przepływu dźwięku. Graphs & Frames opisuje miejsce, w którym te relacje zostają zebrane.

### Graphs

**Graph** reprezentuje zorganizowane relacje między obiektami interfejsu. W GUI może wyglądać jak drzewo komponentów. W silniku gry może być sceną lub grafem obiektów. W interfejsie audio może organizować ścieżki, efekty i kanały. Graf pozwala pytać, gdzie coś jest, z czym jest połączone, co zawiera i jak należy do większej całości.

Graf różni się od layoutu. Layout układa elementy w pewnym porządku. Graf opisuje szersze relacje i umożliwia odkrywanie, trasowanie oraz koordynację obiektów. Layout może być jednym z elementów w grafie, ale nie zastępuje całego grafu.

### Frames

**Frame** reprezentuje aktywny kontekst, który zawiera i koordynuje dostępne grafy. Rama określa, co w danym momencie jest istotne, jakie są granice doświadczenia i co należy przygotować dla renderera. W interfejsie graficznym rama może być powiązana z dokumentem, viewportem lub powierzchnią okna. W systemie audio może reprezentować bieżący kontekst miksowania lub odtwarzania.

Rama nie jest tylko kontenerem. Jest miejscem, w którym interfejs jest przygotowywany do przejścia w niższe warstwy. Może brać pod uwagę rozmiar, stan, aktywne obszary, kolejność, skupienie, widoczność i inne czynniki potrzebne do renderowania lub trasowania interakcji.

### Relacja między Graphs i Frames

Graf opisuje relacje. Rama opisuje aktywny kontekst, w którym relacje są używane. Graf może powiedzieć, że przycisk należy do panelu, a panel do okna. Rama może powiedzieć, że okno ma określony rozmiar, część elementów jest widoczna, a interakcja wydarzyła się w danym miejscu.

Razem pozwalają systemowi zrozumieć nie tylko, jakie części istnieją, ale także gdzie i jak uczestniczą w bieżącym doświadczeniu.

### Przygotowanie do renderowania

Renderer potrzebuje danych przygotowanych w sposób odpowiadający jego zadaniu. Graphs & Frames może spłaszczyć drzewo komponentów, obliczyć granice, rozwiązać kolejność rysowania, zebrać ścieżki audio, przygotować regiony interakcji lub stworzyć inne dane potrzebne rendererowi.

To przygotowanie nie jest jeszcze samym renderowaniem. Jest organizacją informacji w formę, którą renderer może skutecznie przekształcić w wyjście.

### Trasowanie interakcji

W przepływie od użytkownika do danych Graphs & Frames pomaga ustalić, która część interfejsu powinna otrzymać interakcję. Kliknięcie ma pozycję. Gest ma obszar i kierunek. Zdarzenie dźwiękowe lub fizyczne może należeć do konkretnego kontekstu. Rama i graf pomagają przełożyć tę informację na właściwy komponent lub kontrolkę.

### Relacja do Components, Controls, & Layouts

Warstwa komponentów tworzy użyteczne części. Graphs & Frames organizuje te części w większy układ odpowiedzialności. Bez tej warstwy komponenty mogą istnieć, ale system może nie wiedzieć, jak współdziałają albo gdzie skierować interakcję.

### Relacja do Renderera

Renderer nie powinien musieć rozumieć całej logiki komponentów. Powinien otrzymać przygotowany kontekst, który potrafi przekształcić. Graphs & Frames zachowuje granicę między organizacją interfejsu a renderowaniem wyjścia.

### Dlaczego warstwa ma znaczenie

Graphs & Frames wyjaśnia, jak części interfejsu stają się wspólnym kontekstem. Pomaga zrozumieć trasowanie, przygotowanie do renderowania, relacje i aktywną ramę doświadczenia. Bez niej trudno oddzielić „mamy elementy” od „mamy działający, zorganizowany interfejs”.
