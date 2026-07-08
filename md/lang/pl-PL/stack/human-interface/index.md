<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.9 Stos :: Human Interface

## Omówienie pogłębione

**Human Interface** jest implikowaną granicą u dołu Stosu. Reprezentuje ciebie — użytkownika, który odbiera informację i odpowiada przez działanie. Model CatalystUI nie próbuje bezpośrednio implementować człowieka jako warstwy programowej. Uznaje jednak, że cały przepływ informacji istnieje właśnie po to, aby system i człowiek mogli się porozumieć.

### Implikowana granica człowieka

Warstwa jest implikowana, ponieważ sama obecność interfejsu zakłada istnienie kogoś, kto może z niego korzystać. Jeśli system wytwarza wyjście, ktoś lub coś musi je odebrać. Jeśli system odbiera wejście, jakaś akcja musiała je wywołać. W CatalystUI tym punktem odniesienia jest człowiek.

### Odbiorca wyjścia postrzegalnego

Human Interface jest odbiorcą Perceivable Data. Użytkownik widzi światło, słyszy dźwięk, czuje wibrację, zauważa zapach, smakuje bodziec albo interpretuje kombinację tych form. System może przygotować i dostarczyć wyjście, ale dopiero użytkownik nadaje mu doświadczeniowy sens.

### Źródło interakcji

Human Interface jest także źródłem interakcji. Użytkownik klika, dotyka, mówi, przesuwa, patrzy, naciska, idzie, wybiera lub wykonuje inną akcję. Sama akcja fizyczna nie jest jeszcze całą interakcją; ważny jest zamiar stojący za akcją. Użytkownik nie tylko naciska przycisk — próbuje coś osiągnąć.

### Dlaczego warstwa jest implikowana

Model nie reprezentuje człowieka bezpośrednio, bo człowiek nie jest komponentem oprogramowania. Ludzie są różni, biologiczni, społeczni, emocjonalni i kontekstowi. Można modelować urządzenia, dane i procesy, ale nie należy udawać, że człowiek jest po prostu kolejnym obiektem w stosie. Human Interface jest więc granicą: miejscem, gdzie formalny model spotyka rzeczywistego użytkownika.

### Percepcja i zamiar

Ta warstwa przypomina, że interfejs nie kończy się na pikselach, próbkach audio czy sygnałach urządzenia. Kończy się wtedy, gdy użytkownik coś odbiera i rozumie na tyle, aby odpowiedzieć. Tak samo wejście nie zaczyna się od zdarzenia systemowego, ale od zamiaru użytkownika wyrażonego przez akcję.

To bardzo ważne. Jeśli system dostarcza poprawne technicznie wyjście, ale użytkownik go nie rozumie, przepływ informacji nie spełnia celu. Jeśli system wykrywa akcję, ale nie rozpoznaje zamiaru, interakcja może być źle obsłużona.

### Relacja do Systems

Systems są najbliższą jawną warstwą wobec Human Interface. System dostarcza wyjście do urządzeń i odbiera wejście z urządzeń. Human Interface odbiera to wyjście jako doświadczenie i odpowiada działaniem. To miejsce styku pokazuje, dlaczego interfejs użytkownika jest w gruncie rzeczy rozmową między człowiekiem a systemem informacyjnym.

### Dostępność i różnorodność ludzi

Human Interface przypomina również, że użytkownicy różnią się sposobem percepcji i działania. Nie każdy widzi, słyszy, czuje, porusza się lub przetwarza informację w ten sam sposób. Model pomaga projektantowi zapytać, gdzie znaczenie jest niesione i czy można je zachować przez inne domeny lub ścieżki.

Dostępność nie jest dodatkiem doklejonym na końcu. Jest naturalnym skutkiem poważnego traktowania człowieka jako odbiorcy i źródła przepływu informacji.

### Dlaczego warstwa ma znaczenie

Human Interface utrzymuje Model zakorzeniony w rzeczywistości: interfejs istnieje dla użytkownika. Nie dla frameworku. Nie dla biblioteki. Nie dla pięknego diagramu. Dla osoby, która próbuje coś zrozumieć i coś zrobić.

No i tak, mamy nadzieję, że użytkownik jest człowiekiem. Model jest dla ludzi. Dla psów pewnie nie zadziała najlepiej. Dla kotów… cóż, może aż za dobrze.

Właściwie chroń klawiaturę przed kotem. Prawdopodobnie lepiej nie dawać im aż tyle mocy. Uderzy im do głowy i wtedy wszyscy będziemy mieli problem.

Możesz próbować ich powstrzymać, jasne. Powodzenia.

Chwała naszym nowym kocim władcom, jak to mówią.
