<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.6 Stos :: Renderers

## Omówienie pogłębione

**Renderers** to warstwa transformacyjna Stosu. Renderer przekształca przygotowane dane interfejsu w formę gotową do dostarczenia jako wyjście w konkretnej domenie. W tradycyjnych rozmowach renderowanie kojarzy się z grafiką, lecz w Modelu CatalystUI renderer może dotyczyć dowolnej domeny: wizualnej, słuchowej, dotykowej lub innej.

### Warstwa transformacyjna

Renderer istnieje po to, aby przekroczyć granicę między zorganizowanym kontekstem interfejsu a wyjściem, które system może dostarczyć użytkownikowi. Graphs & Frames przygotowuje, co ma zostać przedstawione i w jakim kontekście. Renderer bierze tę informację i przekształca ją w dane bliższe sprzętowi, bibliotece lub mechanizmowi wyjścia.

### Renderowanie jako konwersja

Renderowanie jest konwersją. Renderer wizualny może zamienić kształty, tekst i obrazy w polecenia GPU, bufor, ramkę albo obraz. Renderer audio może zamienić ścieżki, efekty i stany w próbki dźwięku lub strumień audio. Renderer dotykowy może zamienić wzorce i zdarzenia w impulsy haptyczne.

Nie chodzi o to, że renderer „rozumie” całe znaczenie interfejsu. Jego rolą jest przekształcenie przygotowanych danych w formę, którą niższe warstwy mogą dostarczyć.

### Relacja do Graphs & Frames

Renderer otrzymuje dane zorganizowane przez Graphs & Frames. Dzięki temu nie musi sam decydować, który komponent należy do którego kontekstu, jak działa kontrolka ani jak interpretować dane źródłowe. Otrzymuje przygotowany opis tego, co ma zostać wyrenderowane lub przetworzone.

Ta granica utrzymuje model czysty. Organizacja pozostaje wyżej, transformacja domenowa dzieje się tutaj.

### Relacja do Windows

Po wyrenderowaniu dane potrzebują miejsca dostarczenia. Warstwa Windows zapewnia kontekst, w którym wyjście może dotrzeć do systemu i użytkownika. Renderer może przygotować obraz, dźwięk lub sygnał, ale Window zapewnia widok, kanał lub obszar dostarczenia.

### Odpowiedzialność zależna od domeny

Renderery różnią się w zależności od domeny. Renderer wizualny martwi się pikselami, geometrią, tekstem, klatkami lub shaderami. Renderer audio martwi się próbkami, czasem, miksowaniem i urządzeniami dźwiękowymi. Renderer dotykowy martwi się wzorcami, intensywnością i urządzeniami haptycznymi. Model nie wymaga, aby wszystkie renderery wyglądały tak samo; wymaga tylko, aby pełniły tę samą rolę w przepływie.

### Renderowanie i postrzegalność

Renderer przygotowuje informację do postrzegalności, ale nie zawsze jest ostatnim miejscem przed użytkownikiem. Po nim nadal istnieją Windows i Systems. Renderer może wytworzyć ramkę obrazu, ale system musi ją wyświetlić. Może przygotować dźwięk, ale system audio musi go odtworzyć. Może przygotować impuls, ale urządzenie musi go wykonać.

### Rola w przepływie z góry na dół

W przepływie od danych do doświadczenia renderer bierze zorganizowany kontekst i przekształca go w wyjście gotowe do dostarczenia. To tutaj dane stają się znacznie bliższe zmysłowej formie.

### Rola w przepływie z dołu do góry

W przepływie interakcji renderer zwykle przekazuje informacje dalej z niewielką modyfikacją, ale może też je mapować lub reinterpretować. Na przykład dane ruchu, pozycja kursora lub informacje z czujnika mogą zostać przekształcone w zdarzenie bardziej użyteczne dla Graphs & Frames.

### Dlaczego warstwa ma znaczenie

Renderers oddzielają przygotowanie interfejsu od domenowej konwersji wyjścia. Dzięki temu Model może mówić o renderowaniu wizualnym, słuchowym, dotykowym i innych formach bez ograniczania się do grafiki.
