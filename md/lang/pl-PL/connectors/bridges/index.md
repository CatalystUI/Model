<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 6.4 Łączniki :: Bridge

## Omówienie pogłębione

Łącznik **Bridge** znajduje się między **Layer 4: Graphs & Frames** a **Layer 3: Renderers**. Przenosi zorganizowany kontekst interfejsu do warstwy renderowania. Jest „mostem” między tym, co interfejs wie o swoich relacjach, a tym, co renderer musi przekształcić w wyjście.

### Od kontekstu do renderowania

Graphs & Frames przygotowuje aktywny kontekst: grafy, ramy, granice, kolejność, relacje i dane potrzebne do wyjścia. Renderer nie powinien musieć rozumieć całej logiki komponentów ani struktury dokumentu. Bridge bierze przygotowany kontekst i przekazuje go w formie, którą renderer może obsłużyć.

### Przenoszenie ramy naprzód

Bridge zachowuje informacje istotne dla renderera: co ma zostać przetworzone, w jakiej kolejności, w jakim obszarze, z jakim stanem i w jakiej domenie. W grafice może to być lista poleceń, scen, tekstur, geometrii lub regionów. W audio może to być graf miksowania, lista ścieżek lub stan efektów. W dotyku może to być zestaw wzorców i czasów.

### Cichy łącznik

Bridge bywa trudny do zauważenia, bo często wygląda jak zwykłe przekazanie danych. To jednak ważna granica. Jeśli Graphs & Frames zacznie wykonywać pracę renderera, albo renderer zacznie organizować logikę interfejsu, odpowiedzialności zaczną się mieszać. Bridge pozwala przejść przez granicę bez jej kasowania.

### Przekazywanie interakcji z powrotem w górę

W przepływie interakcji Bridge zwykle przekazuje informacje z renderera z powrotem do Graphs & Frames, często z niewielką modyfikacją. Renderer może pomóc zmapować pozycję, region, kanał lub inny sygnał, ale to graf i rama zwykle ustalają, gdzie interakcja należy.

### Najtrudniejszy łącznik do zobaczenia

W wielu frameworkach Bridge jest ukryty w kodzie renderowania, drzewie sceny, silniku layoutu albo API biblioteki. Programista może go nie nazwać, ale przejście nadal istnieje. Ktoś musi przekształcić zorganizowany kontekst w coś, co renderer rozumie.

### Zachowywanie granicy

Bridge powinien zachować granicę między organizacją a renderowaniem. Powinien przekazać kontekst w użytecznej formie, ale bez przenoszenia całej odpowiedzialności za komponenty do renderera. Dzięki temu renderer pozostaje bardziej wymienny, a graf bardziej niezależny.

### Dlaczego łącznik ma znaczenie

Bridge jest miejscem, gdzie interfejs przechodzi od zorganizowanej logiki do domenowej transformacji. Utrzymuje czystość między Graphs & Frames a Renderers i pozwala Modelowi opisać przygotowanie do renderowania bez utożsamiania go z samym renderowaniem.
