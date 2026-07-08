<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 5.3 Stos :: Structure & Semantics

## Omówienie pogłębione

**Structure & Semantics** jest pierwszą warstwą interpretacyjną Stosu. To tutaj Digital Data przestaje być jedynie aktywną reprezentacją czytelną dla komputera, a zaczyna otrzymywać znaczenie, porządek i zasady użycia. Warstwa jest opisana dwoma powiązanymi pojęciami: „semantics” i „structure”.

### Pierwsza warstwa interpretacyjna

Dane cyfrowe mogą istnieć bez bycia zrozumianymi. Plik, strumień lub dokument może zawierać właściwe bajty, ale system potrzebuje reguł, aby wiedzieć, co te bajty oznaczają. Structure & Semantics odpowiada właśnie za tę zmianę: od obecności danych do ich zinterpretowanej formy.

### Semantics

**Semantics** definiują zasady rozumienia danych. Określają, jakie części danych istnieją, w jakiej kolejności, jaki mają format i co oznaczają. W przypadku HTML semantyka obejmuje reguły, według których znaczniki, atrybuty i treść są interpretowane. W przypadku MP3 semantyka obejmuje specyfikację formatu. W przypadku pliku konfiguracyjnego semantyka może określać, jak rozpoznawać sekcje, klucze i wartości.

Semantyka przypomina kontrakt: mówi systemowi, czego oczekiwać i jak czytać dane. Nie musi być konkretnym obiektem użytkowym; może być specyfikacją, interfejsem, schematem, formatem albo zestawem reguł.

### Structure

**Structure** jest zorganizowanym rezultatem zastosowania semantyki do danych cyfrowych. Jeśli semantyka mówi, jak czytać dane, struktura jest tym, co powstaje po odczytaniu. Dokument HTML może zostać sparsowany w drzewo dokumentu. Plik konfiguracyjny może stać się mapą sekcji i wartości. Strumień danych może stać się zestawem pól, rekordów lub obiektów.

Struktura jest bardziej przyjazna programowo niż surowe dane. Umożliwia odwoływanie się do części informacji w sposób uporządkowany i stabilny.

### Stabilna interpretacja

W Modelu ta warstwa reprezentuje stabilną interpretację danych. Nie jest jeszcze miejscem swobodnej, żywej interakcji użytkownika. To raczej uporządkowany obraz tego, co dane znaczą po zastosowaniu zasad. Późniejsza warstwa Components, Controls, & Layouts może stworzyć mutowalne części interfejsu, ale Structure & Semantics pozostaje warstwą interpretacji.

Stabilność jest ważna, bo bez niej trudno byłoby wiedzieć, czy komponenty naprawdę odpowiadają źródłowym danym. Struktura daje wspólny punkt odniesienia.

### Relacja do Digital Data

Structure & Semantics korzysta z Digital Data jako materiału wejściowego. Dane cyfrowe dostarczają reprezentację, a semantyka określa, jak ją zrozumieć. Wynikiem jest struktura, którą można przekazać dalej.

W drugą stronę zmiany wynikające z interakcji mogą wymagać ponownego zapisania w strukturze, a następnie przekształcenia z powrotem w Digital Data. W ten sposób interpretacja może uczestniczyć zarówno w odczycie, jak i w zapisie.

### Relacja do Components, Controls, & Layouts

Components, Controls, & Layouts potrzebują zinterpretowanych danych, aby stworzyć użyteczne części interfejsu. Struktura może powiedzieć, że dokument zawiera nagłówek, akapit i listę; komponenty mogą później stać się edytowalnymi polami, etykietami, przyciskami lub elementami układu.

Różnica jest subtelna, ale ważna: struktura mówi, czym dane są według reguł; komponenty mówią, jak program może z nimi pracować w interfejsie.

### Rola w przepływie

W przepływie z góry na dół warstwa ta przekształca dane cyfrowe w znaczący porządek. W przepływie z dołu na górę może przyjmować zmiany z warstw interakcyjnych i przygotowywać je do ponownego zapisania jako Digital Data.

### Dlaczego warstwa ma znaczenie

Structure & Semantics oddziela „posiadanie danych” od „rozumienia danych”. Dzięki temu Model potrafi wskazać moment, w którym informacja zyskuje interpretację, zanim stanie się komponentem, kontrolką, układem lub wyjściem dla użytkownika.
