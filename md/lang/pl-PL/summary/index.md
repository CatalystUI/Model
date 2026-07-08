<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 2. Podsumowanie

## Przepływ informacji

> **Uwaga:** Ta sekcja jest przeglądem Modelu na wysokim poziomie. Kolejne części dokumentacji zawierają odpowiednio podsumowania tematyczne oraz omówienia pogłębione.

Aby zrozumieć, jak działa interfejs użytkownika, najpierw musimy zdefiniować „_przepływ informacji_”. Każdego dnia ludzie, świadomie lub nie, wchodzą w interakcje z systemami informacyjnymi — smartfonem, komputerem, a nawet czujnikiem drzwi sklepowych (wrócimy do tego później). W każdym takim systemie informacja zostaje przedstawiona, użytkownik ją interpretuje, opcjonalnie odpowiada, a następnie system przetwarza tę odpowiedź. Potem system ponownie przedstawia informację i cykl powtarza się przez całą interakcję. Cykl może zacząć się w dowolnym miejscu: informacja mogła zostać przedstawiona dużo wcześniej, zanim użytkownik był w stanie ją zinterpretować, albo użytkownik może odpowiedzieć bez wcześniejszego jawnego przedstawienia informacji. Bez względu na moment i sposób rozpoczęcia przepływu obowiązuje ten sam cykl.

Model CatalystUI jest zbudowany wokół tego przepływu. Zapewnia strukturę wysokiego poziomu do opisywania, jak informacja przemieszcza się między użytkownikiem a systemem informacyjnym, nawet wtedy, gdy system nie przypomina tradycyjnego interfejsu użytkownika. Czujnik drzwi sklepowych może wydawać się niemal magicznie „wyczuwać” człowieka, ale przepływ informacji upraszcza ten proces: użytkownik widzi przejście, rozpoznaje drogę naprzód i wchodzi w obszar wykrywania. Ten ruch staje się wejściem systemu. System go przetwarza, otwiera drzwi jako wyjście możliwe do zauważenia, a użytkownik odpowiada przejściem przez drzwi. Po krótkim opóźnieniu system zamyka drzwi, kończąc wymianę do czasu, aż kolejna akcja ponownie uruchomi cykl.

Wraz z przepływem informacji _interfejs użytkownika_ określa, jak ten przepływ zachodzi w danym systemie informacyjnym. Decyduje, jak system przyjmuje wejście, wytwarza wyjście i pozwala użytkownikowi oddziaływać z systemem. Ponieważ różne systemy mają różne potrzeby, na przestrzeni czasu powstało wiele sposobów opisywania i implementowania tych interakcji, w tym „interfejsy ludzkie” („HI”), „interfejsy człowiek–maszyna” („HMI”) oraz „interfejsy człowiek–komputer” („HCI”). We współczesnym wieku komputerów najbardziej znaną formą jest „graficzny interfejs użytkownika” („GUI”).

Kiedy porównujemy różne implementacje, zaczyna wyłaniać się wspólny wzorzec. Pomimo zewnętrznych różnic możemy rozpoznać trzy pojęcia pojawiające się we wszystkich interfejsach użytkownika: 1) „domeny”, które kategoryzują i organizują dane; 2) „stos”, który reprezentuje i wyjaśnia dane; oraz 3) „łączniki”, które przekształcają, modyfikują i tłumaczą dane. Każde pojęcie jest użyteczne niezależnie, lecz razem tworzą _odwracalny system_, który potrafi opisać zarówno cały interfejs, jak i pojedyncze procesy. Tu ujawnia się siła Modelu CatalystUI: oddzielając interakcję na kategoryzację, reprezentację i tłumaczenie, Model ułatwia wyjaśnianie, debugowanie i rozumienie systemów informacyjnych.
