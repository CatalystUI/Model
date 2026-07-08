<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 7. Interakcje

## Podsumowanie tematyczne

**Interakcje** opisują moment, w którym użytkownik przestaje tylko odbierać informację i zaczyna odpowiadać systemowi. Interakcja nie jest wyłącznie fizyczną akcją, taką jak kliknięcie, dotknięcie, naciśnięcie klawisza, gest, ruch lub wypowiedziane słowo. Te rzeczy są widocznym albo mierzalnym działaniem. Interakcja jest **zamiarem stojącym za akcją**.

Użytkownik może kliknąć przycisk, ale jego zamiarem może być zapisanie pliku. Może przesunąć suwak, ale jego zamiarem jest zmiana głośności. Może wejść w obszar czujnika drzwi, ale jego zamiarem jest przejście przez wejście. Model CatalystUI traktuje ten zamiar poważnie, ponieważ interfejs użytkownika istnieje po to, aby umożliwić rozmowę między człowiekiem a systemem informacyjnym.

### Akcja a interakcja

Akcja jest tym, co można wykryć. Interakcja jest tym, co system powinien zrozumieć. To rozróżnienie jest bardzo ważne. System może poprawnie wykryć kliknięcie, a mimo to źle obsłużyć interakcję, jeśli kliknięcie trafi do niewłaściwej kontrolki albo zostanie zinterpretowane niezgodnie z zamiarem użytkownika. Może też wykryć ruch, dźwięk lub dotyk, ale nie wiedzieć, co użytkownik próbował osiągnąć.

Dobre interfejsy pomagają zmniejszyć różnicę między akcją a zamiarem. Pokazują, co można zrobić, dają odpowiednie sprzężenie zwrotne i zachowują znaczenie przez cały przepływ informacji.

### Interakcje w Stosie

Interakcje zwykle zaczynają się przy Human Interface i wchodzą do jawnego Modelu przez Systems. System wykrywa fizyczne lub logiczne wejście: klawisz, wskaźnik, dotyk, sygnał czujnika, mowę, ruch lub inne zdarzenie. Następnie Window wiąże to wejście z kontekstem, Renderer może je zmapować lub przetworzyć, Graphs & Frames określa, gdzie w interfejsie należy je skierować, a Components, Controls, & Layouts obsługuje zamiar.

Jeśli interakcja zmienia dane, przepływ może iść dalej w górę: kontrolka aktualizuje komponent, parser może przełożyć zmianę na strukturę, Structure & Semantics utrzymuje znaczenie, Data przekształca wynik w Digital Data, a Data Storage może utrwalić zmianę.

### Interakcje i domeny

Interakcje mogą być związane z różnymi domenami. Kliknięcie w widoczny przycisk ma kontekst wizualny. Polecenie głosowe ma kontekst słuchowy. Wibracja potwierdzająca wybór ma kontekst dotykowy. Gra łącząca obraz, dźwięk i kontroler może tworzyć interakcję wielozmysłową.

Domena pomaga określić, jak użytkownik otrzymuje informację potrzebną do działania oraz jak system może odpowiedzieć. Jeśli interfejs komunikuje możliwość działania tylko wizualnie, użytkownik bez dostępu do tej informacji może nie wiedzieć, jaka interakcja jest możliwa. Jeśli system przyjmuje tylko jeden rodzaj wejścia, może ograniczać użytkowników, którzy potrzebują innej drogi działania.

### Trasowanie interakcji

Duża część pracy interfejsu polega na trasowaniu interakcji do właściwego miejsca. Pozycja kliknięcia musi zostać powiązana z kontrolką. Naciśnięcie klawisza może należeć do pola tekstowego, skrótu globalnego albo aktywnego okna. Gest może dotyczyć listy, mapy lub całego widoku. Bez poprawnego trasowania system może wykryć akcję, lecz utracić zamiar.

Graphs & Frames są szczególnie ważne dla trasowania, ponieważ znają aktywny kontekst i relacje między częściami interfejsu. Controls są ważne, ponieważ zwykle obsługują ostateczny zamiar.

### Interakcje i sprzężenie zwrotne

Po obsłużeniu interakcji system powinien często dostarczyć nowe informacje. Może zmienić widok, odtworzyć dźwięk, wykonać wibrację, zapisać dane, pokazać błąd albo potwierdzić zakończenie. Ten nowy output uruchamia kolejną część cyklu: użytkownik odbiera informację, interpretuje ją i może odpowiedzieć ponownie.

Sprzężenie zwrotne jest ważne, bo użytkownik potrzebuje wiedzieć, czy system zrozumiał jego zamiar. Brak odpowiedzi może sprawiać wrażenie, że interakcja została zgubiona, nawet jeśli program wykonał akcję w tle.

### Dlaczego interakcje mają znaczenie

Interakcje są miejscem, gdzie Model staje się uczestniczący. Bez nich system mógłby tylko przedstawiać informacje. Dzięki interakcjom użytkownik może zmieniać dane, sterować procesami, podejmować decyzje i prowadzić wymianę z systemem.

W skrócie: akcja jest tym, co użytkownik robi; interakcja jest tym, co użytkownik próbuje osiągnąć. Model CatalystUI śledzi tę intencję przez domeny, Stos i łączniki, aby informacja mogła wrócić do danych i ponownie stać się doświadczeniem.
