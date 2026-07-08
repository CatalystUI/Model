<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5. Stos

## Podsumowanie tematyczne

Po sklasyfikowaniu, _jaki_ rodzaj danych uczestniczy w przepływie, możemy skupić się na tym, _gdzie_ dane się znajdują. Właśnie tutaj analiza istniejących rozwiązań staje się szczególnie użyteczna, zwłaszcza gdy porównujemy ich różnice. Zanim rozłożymy każde rozwiązanie na części, możemy wskazać dwie podstawowe prawdy: po pierwsze, _dane_ muszą gdzieś istnieć — jako zapis binarny, na dysku, w pamięci albo w innej formie przechowywania danych; po drugie, _człowiek_ również musi gdzieś istnieć — po drugiej stronie ekranu, słuchawek, kontrolera lub innej formy interfejsu. Możemy potraktować te dwa pojęcia jak kanapkę: „Data Storage” jest górną bułką, a „Human Interface” dolną. Ponieważ po ich rozpoznaniu są oczywistymi częściami przepływu informacji, nazwiemy je _implikowanymi_ — sama natura przepływu _implikuje_ ich istnienie.

### Warstwy Stosu

Zaczynając od interfejsu człowieka, możemy rozpoznać pierwszą warstwę i pierwszy główny wzorzec Stosu: obecność „systemu”. System odpowiada za organizowanie tego, jak informacja ostatecznie dociera do użytkownika. W większości współczesnych komputerów tę rolę pełni „system operacyjny” („OS”), który łączy sprzęt komputera z jego oprogramowaniem. Niezależnie od formy, w każdym przepływie informacji musi istnieć system, który wykonuje końcowy krok łączący wewnętrzną pracę interfejsu z doświadczeniem użytkownika.

Aby system był użyteczny, użytkownik potrzebuje sposobu interakcji z nim. W „graficznym interfejsie użytkownika” („GUI”) zwykle dzieje się to przez okno. Model CatalystUI traktuje jednak pojęcie „okna graficznego” jako zbyt wąskie, ponieważ nie każdy interfejs jest graficzny. Następna warstwa Stosu, „Windows”, jest więc definiowana jako Warstwa 2 i obejmuje każdy „widok” do systemu. Może to być tradycyjne okno aplikacji, interfejs wiersza poleceń, terminal wizualny, urządzenie przechwytywania dźwięku albo dowolny inny kontekst, w którym użytkownik może dostarczać wejście lub odbierać wyjście z systemu.

Aby informacja mogła przepływać do okna, potrzebny jest „renderer”, który przekształca dane między wewnętrzną formą używaną przez interfejs a formą postrzegalną dla użytkownika. Renderer jest Warstwą 3. W GUI często przybiera postać biblioteki takiej jak OpenGL lub Vulkan, przekształcającej dane wizualne w wyjście wyświetlane przez okno. Renderery nie są jednak ograniczone do grafiki. Renderery audio, takie jak OpenAL, WASAPI, ASIO lub CoreAudio, mogą wytwarzać dźwięk, a renderery haptyczne mogą wytwarzać sprzężenie dotykowe. Niezależnie od domeny danych renderer odpowiada za konwersję informacji między przygotowanymi danymi interfejsu a formą właściwą dla domeny wyjścia.

Za rendererem znajdują się warstwy, które organizują i śledzą dane wewnątrz interfejsu. Najpierw mamy Warstwę 4: „Graphs & Frames”. W Modelu CatalystUI „graph” reprezentuje uporządkowane relacje między obiektami interfejsu — na przykład obiekt w świecie 3D, drzewo komponentów albo podsekcję interfejsu. „Frame” reprezentuje większy bieżący kontekst, który zawiera i koordynuje dostępne grafy, przygotowując je dla renderera. Znajomy przykład istnieje w sieci: „Document Object Model” („DOM”) organizuje elementy strony jak graf, a sam dokument zapewnia większą ramę, w której te elementy istnieją.

Ponieważ taka informacja jest organizowana pod kątem przygotowania dla renderera, a nie bezpośredniej interpretacji przez użytkownika, potrzebujemy warstwy oddzielającej dane w ich logicznej formie, tak aby można je było rozpoznać, uporządkować lub z nimi oddziaływać. To Warstwa 5: „Components, Controls, & Layouts”. „Component” jest każdą logiczną, użyteczną częścią interfejsu, taką jak obraz, etykieta, ścieżka audio, element stylu albo inny obiekt prezentowany lub organizowany przez system. „Control” przetwarza interakcje, na przykład przycisk, przełącznik, suwak lub wejście zmienne. „Layout” układa inne komponenty lub kontrolki w sensowny porządek. W interfejsie graficznym rozróżnienia te mogą wyglądać jak elementy wizualne, klikalne kontrolki oraz wiersze lub kolumny. Ten sam wzorzec działa jednak poza grafiką: interfejs audio może używać komponentów do reprezentowania ścieżek, kontrolek do odtwarzania lub regulacji oraz układów do grupowania.

Logiczne części interfejsu wspiera Warstwa 6: „Structure & Semantics”. Ta warstwa opisuje, jak dane należy rozumieć, zanim staną się komponentami, kontrolkami lub układami. „Semantics” definiują reguły odczytu danych: co znaczą, w jakiej kolejności występują i jak rozumieć każdą część. „Structure” jest uporządkowaną formą danych po zastosowaniu tych reguł. Innymi słowy, warstwa ta bierze dane istniejące tylko jako tekst, bajty, pola lub rekordy i nadaje im sensowny kształt, którego reszta interfejsu może użyć.

Na szczycie Stosu znajduje się Warstwa 7: „Digital Data”. Reprezentuje dane po wejściu do aktywnego przepływu interfejsu w formie czytelnej dla komputera, ale zanim reszta Modelu je zinterpretuje, uporządkuje lub przedstawi. Może to być plik, dokument, strumień, odpowiedź webowa albo podobna reprezentacja. Na tym etapie dane nie zostały jeszcze ukształtowane w strukturę ani przypisane do domeny zmysłowej. Dokument tekstowy nie jest jeszcze wizualny ani słuchowy; jest aktywną reprezentacją tekstową, którą Stos może później zinterpretować.

### Rola Stosu w Modelu

Od góry do dołu Stos składa się z „Data Storage” (implikowane), „Digital Data”, „Structure & Semantics”, „Components, Controls, & Layouts”, „Graphs & Frames”, „Renderers”, „Windows”, „Systems” oraz „Human Interface” (implikowane). Siedem jawnych warstw jest numerowanych od dołu ku górze, z „Systems” jako Warstwą 1 i „Digital Data” jako Warstwą 7. Warstwy implikowane znajdują się poza numeracją i służą jako punkty końcowe przepływu.

Razem dają pełny sposób śledzenia informacji przez interfejs. Pozwalają pytać, gdzie coś znajduje się w procesie, jaką pełni rolę i jak przyczynia się do zakończenia interakcji. Ponieważ Stos opisuje wzorzec, a nie jedną dokładną implementację, nie musimy znać każdego szczegółu wewnętrznego systemu, aby zacząć go rozumieć. To część tego, co czyni Model potężnym, szczególnie w czasach, gdy duże modele językowe, systemy uczenia maszynowego i inne architektury „AI” mogą utrudniać zobaczenie wewnętrznego działania interfejsu.

### Demonstrowanie Stosu

#### Czujnik drzwi

Możemy wrócić do przykładu czujnika drzwi. Użytkownik widzi drogę naprzód, wchodzi w obszar wykrywania, system otwiera drzwi, a cykl kończy się, gdy użytkownik przechodzi i drzwi się zamykają. Stos pozwala opisać ten proces dokładniej bez znajomości dokładnego projektu sprzętu.

Akcja zaczyna się przy „Human Interface”, gdzie użytkownik podchodzi do drzwi, i dociera do „System”, na przykład kontrolera, okablowania, zasilania i mechanizmu silnika. System otrzymuje fizyczny sygnał przez sprzęt drzwiowy. „Window” wiąże ten sygnał z kontekstem wykrywania przy drzwiach, a „Renderer” przekształca lub mapuje go w użyteczne zdarzenie. „Graphs & Frames” umieszcza zdarzenie w szerszym kontekście drzwi, obejmującym obszar wykrywania i bieżący stan drzwi. „Components, Controls, & Layouts” obsługuje samą decyzję: czy drzwi powinny się otworzyć, pozostać otwarte lub zamknąć. Aby podjąć decyzję, kontrolka może korzystać ze „Structure & Semantics”, na przykład formatu konfiguracji określającego czułość lub opóźnienie. Te ustawienia i zmiany stanu są reprezentowane jako „Digital Data”, a jeśli trzeba je zachować, trafiają do „Data Storage”.

Po podjęciu decyzji przepływ wraca w dół Stosu: zaktualizowany stan drzwi jest interpretowany, zamieniany w akcję kontrolki, umieszczany z powrotem w kontekście drzwi, konwertowany przez „Renderer” na coś, co może wykonać sprzęt, przekazywany przez „Window” mechanizmu, wykonywany przez „System” i w końcu odbierany przez „Human Interface”. Użytkownik widzi otwierające się drzwi i przechodzi.

#### Sieć Web

Drugim przykładem jest web. Strona internetowa może zacząć od danych przechowywanych na serwerze. Odpowiedź HTML wchodzi do aktywnego przepływu jako „Digital Data”. Reguły HTML zapewniają „Semantics”, a sparsowany dokument staje się „Structure”. Elementy strony stają się komponentami, kontrolkami i układami. DOM organizuje je jako graf, a dokument oraz viewport działają jak rama. Silnik przeglądarki renderuje przygotowaną strukturę, powierzchnia łączy wynik z oknem, system operacyjny dostarcza obraz i przyjmuje wejście, a użytkownik widzi stronę i reaguje.

Gdy użytkownik kliknie przycisk, przepływ może iść z powrotem: system wykrywa wejście, okno wiąże je z kontekstem, renderer i graf pomagają ustalić miejsce, kontrolka obsługuje zamiar, struktura danych może zostać zmieniona, a cyfrowe dane lub magazyn mogą zostać zaktualizowane. Ten sam wzorzec działa, nawet jeśli szczegóły implementacji różnią się między przeglądarkami.

### Dalej

Stos nie jest listą klas, które każdy program musi dokładnie posiadać. Jest mapą odpowiedzialności. Pomaga zobaczyć, gdzie znajduje się informacja, co się z nią dzieje, która część systemu ją przekształca i gdzie użytkownik wchodzi w cykl. Dzięki temu Model CatalystUI może opisywać tradycyjne GUI, interfejsy audio, urządzenia fizyczne, systemy webowe, narzędzia dostępności i przyszłe formy interakcji bez zamykania się w jednym frameworku.
