// Komentarz jednolinijkowy

/* 
Komentarz 
wielolinijkowy 
*/

console.log('Wypisanie czegoś na konsoli');

// Chrome Dev Tools - konsola, inne narzędzia, debugowanie z wykorzystaniem Chrome Dev Tools

// Uruchamianie skryptów z wykorzystaniem Node JS 

// const vs. let vs. var + ich zasięgi

/*
 Typy danych - jakie mamy typy danych w JS? Jak wygląda konwersja pomiędzy typami danych?
 Test: https://forms.gle/UKdtZn5wZwa62QTL6
 */

 // null, undefined

 /*
 Tablice 
 */

 /*
 Wbudowane obiekty jak: 
 - Math
 - Date
 */

Math.floor(3.15);

/* 
Czytanie dokumentacji:
- operacje działające na oryginale 
- operacje zwracające wynik
*/

/*
Jaka jest różnica między == a === ?
*/

/*
Operatory 
- matematyczne: +, -, *, /, %, ++, --

Jak działa modulo? %

Jak działa inkrementacja? Dekrementacja? 
Różnice pomiędzy: x++, ++x, x--, --x

- porównania (==, ===, !=, >, <, >=, <=)
 
różnica między == a ===

- logiczne (&&, ||, !)
- przypisania ( =, +=, -=, *=, /=, %=)
- ternary operator (celowo po angielsku): warunek ? <if_true> : <if_false>

*/

/*
co wiesz o obiektach wbudowanych w JS: 
- Math? (Math.abs, Math.floor, itp.) 
- Date

- instrukcje warunkowe: if (?) + ternary operator (celowo po angielsku): warunek ? <if_true> : <if_false>
- pętle i jak działają (while, for)
- switch case
*/

/*
GRUBE tematy: 
- funkcje (arrow functions, wyrażenia funkcyjne)
- obiekty (this, new, iterowanie po elementach obiektu, gettery, settery, itd.)
- klasy (konstruktory, dziedziczenie)
- moduły (export/import)
*/

/*
komunikacja z DOM (Document Object Model)
- pobieranie elementów z DOM
- operowanie na tych elementach:
    - zmiana zawartości
    - zmiana wyglądu, własności
- wstawianie nowych elementów do drzewa dokumentów
- temat eventów:
  - event loop
  - bubbling
  - odpowiadanie na zdarzenia, listener/eventHandlers
- jakiego typu to mogą być zdarzenia?
  - mouse events
  - keyboard events
- formularze
  - submit 

W przypadku komunikacji z DOM: frameworki często zapewniają swój sposób “dobierania” się do elementów DOM. 

W przypadku nauki komunikacji z DOM -> nic nad praktykę! Skorzystaj z jednego z przykładowych zadań dostępnych na Platformie: https://zanetajazdzyk.pl/blog/javascript-projekty-dla-poczatkujacych-cz-i/

*/

/*
i dalej:
- mechanizmy typu:
  - callbacks
    - callback hell
  - promises
    - async/await
  - (generatory)
  - rest & spread 
  - temat destrukturyzacji: obiektów i tablic

*/

/*
JSON (<-> object)
*/

/*
REST API 
  - komunikacja z REST API po stronie Front-endu,
    - HTTP status codes: 1xx, 2xx, 3xx, 4xx, 5xx
    - HTTP requests methods: GET, POST, PUT, itd.
  - CORS
  - axios lub fetch

  Tutaj nic nad ćwiczenia praktyczne. Stwórz prostą aplikację komunikującą się z dowolnym REST API, np. https://swapi.dev/ - i wyświetlający pozyskane dane
*/

// Tworzenie dokumentacji dla metod

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
const myFunction = (a, b) => {
  return a + b;
}