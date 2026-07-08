<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.5 Łączniki :: Surface

## Omówienie pogłębione

Łącznik **Surface** znajduje się między **Layer 3: Renderers** a **Layer 2: Windows**. Jego zadaniem jest połączenie wyrenderowanego lub przygotowanego wyjścia z miejscem, w którym to wyjście może zostać dostarczone. Surface odpowiada za przejście od renderowania do dostarczenia.

### Od renderowania do dostarczenia

Renderer może przygotować obraz, dźwięk, sygnał dotykowy albo inne dane wyjściowe, ale te dane nadal potrzebują miejsca docelowego. Surface zapewnia powiązanie z Window: z obszarem, kanałem, buforem, powierzchnią, strumieniem lub kontekstem, w którym wyjście zostanie przekazane dalej do systemu.

### Wyrenderowany obszar

W graficznym interfejsie Surface często kojarzy się z obszarem rysowania, framebufferem, swapchainem lub powierzchnią okna. W Modelu pojęcie jest szersze. Surface może być również kanałem audio, kontekstem haptycznym albo innym miejscem, do którego renderer przekazuje przygotowane wyjście.

Surface nie jest samym Window. Window zapewnia widok lub kontekst w systemie. Surface jest łącznikiem, który pozwala wynikowi renderowania wejść do tego kontekstu.

### Więcej niż końcowy obraz

Surface nie powinien być rozumiany wyłącznie jako „ostatni obraz”. W wielu domenach wyjście nie jest statyczną klatką. Dźwięk jest strumieniem w czasie. Dotyk może być wzorcem impulsów. Dane wielozmysłowe mogą obejmować kilka form naraz. Surface zachowuje odpowiednią formę dostarczenia dla danej domeny.

### Przekazywanie interakcji z powrotem w górę

W przepływie od użytkownika do danych Surface może przenosić informacje pochodzące z Window z powrotem do Renderera. Może to obejmować rozmiar obszaru, stan wejścia, pozycję kursora, zmianę kontekstu, fokus, dostępność urządzenia albo inne informacje potrzebne rendererowi do poprawnego mapowania interakcji.

### Oddzielenie Window

Surface pomaga zachować Window jako osobną warstwę. Renderer nie musi znać wszystkich szczegółów zarządzania oknem, a Window nie musi znać całej logiki renderowania. Surface jest miejscem, gdzie wynik renderowania zostaje dopasowany do docelowego kontekstu.

### Zachowywanie wyjścia

Podczas przejścia przez Surface ważne jest zachowanie tego, co renderer przygotował. Obraz nie powinien stracić rozmiaru, kolejności czy formatu. Strumień audio nie powinien utracić synchronizacji. Sygnał dotykowy nie powinien zostać przekazany z błędnym czasem. Surface chroni integralność wyjścia podczas dostarczania.

### Dlaczego łącznik ma znaczenie

Surface wyjaśnia, jak wyrenderowane dane trafiają do okna lub kanału dostarczenia. Bez niego renderer i window zlewałyby się w jedno pojęcie, utrudniając zrozumienie, gdzie kończy się transformacja domenowa, a zaczyna systemowy kontekst dostarczenia.
