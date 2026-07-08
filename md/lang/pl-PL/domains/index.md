<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 4. Domeny

## Podsumowanie tematyczne

Aby opisać Model CatalystUI, musimy zacząć od domen. _Domena_ opisuje kategorię danych obsługiwanych podczas interakcji. Jest pierwszym krokiem w rozbijaniu przepływu informacji na zrozumiałe części. Wskazuje, z jakim _rodzajem_ informacji pracuje system. Czujnik drzwi sklepowych może korzystać ze wskazówek wizualnych lub przestrzennych, aby wykrywać ruch. Kontroler gry może wykorzystywać informacje dotykowe do wytwarzania sprzężenia haptycznego. Inteligentny głośnik może pracować z informacją słuchową podczas przetwarzania mowy. W prawie wszystkich przypadkach domeny odpowiadają sposobom, w jakie ludzie odbierają świat. Model uwzględnia także dane zanim zostaną przypisane do konkretnego zmysłu oraz dane obejmujące wiele zmysłów jednocześnie. Dlatego zdefiniowano siedem domen: „symboliczną”, „wizualną”, „słuchową”, „dotykową”, „węchową”, „smakową” i „wielozmysłową”.

Domeny są przydatne, ponieważ ułatwiają rozpoznawanie, diagnozowanie i kształtowanie przepływu informacji wokół potrzeb użytkownika. Określając, do której domeny należy informacja, wyraźniej widzimy, co system robi, czego nie robi i których części doświadczenia użytkownika może brakować. Jest to szczególnie ważne dla dostępności: jeśli interfejs komunikuje się tylko wizualnie, Model pomaga zauważyć, że konieczne może być uwzględnienie form dotykowych, słuchowych lub innych. Ponieważ domeny opisują, jak informacja uczestniczy w doświadczeniu użytkownika, klasyfikowanie danych do domeny musi zaczynać się od pytania, jaką rolę pełnią w interakcji. Jeśli dane mają być widziane, są wizualne; jeśli mają być słyszane, są słuchowe; jeśli mają być odczuwane, są dotykowe. Jeśli dane nie zostały jeszcze przypisane do konkretnego zmysłu, jak w przypadku pliku tekstowego, są symboliczne. Jeśli wiele kategorii zmysłowych działa razem jako jedno doświadczenie, jak w grze łączącej obraz, dźwięk i wibracje kontrolera, jest to domena wielozmysłowa.

### Rola domen w Modelu

Po zaklasyfikowaniu danych do domeny interakcja ma jaśniejszy punkt wyjścia. Wiemy, jakie informacje obsługuje system, jakie doświadczenie otrzyma użytkownik i czy trzeba rozważyć inne formy komunikacji. Gdy kategoria zostanie ustalona, Model może przejść od rozpoznania typu danych do opisu tego, jak przemieszczają się przez sam interfejs.
