const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
//DESTRUCTURING

const books = getBooks();

const [book1, book2, book3] = books;

const book = getBook(2);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const [g1, g2, ...g] = genres;
console.log(title, author, genres);
console.log(g1);
console.log(g2);
console.log(g);

const [p1] = genres;
console.log(p1);

//REST AND SPREAD OPERATOR

const newGenres = [...genres, "newGenre1", "newGenre2", "newGenre3"];
console.log(newGenres);

// rest and spread in objects
function A() {
  const { id, title, ...newObj } = getBook(3);
  console.log(id, title);
  console.log(newObj);
}
A();

const newObj = {
  //adding new property
  color: "black",
  isbn: true,
  ...getBook(5),
  //updating existing property
  pages: 651,
};
newObj;

// Template literals
const summary = `${title} is a book contains ${pages} pages was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
summary;

// Ternary Operator
pages > 100 ? console.log("Y") : console.log("N");

//Arrow Functions
(() => console.log(publicationDate.split("-")[0]))();

//Function Expression
const year = (str) => str.split("-")[0];
console.log(year(publicationDate) + 5);

//Short circuting
// and and or operator have short circuting

// and operator
console.log(true && "Some String");
console.log(false && "Some String");
console.log(8 == 2 && "Some String");
console.log(hasMovieAdaptation && "this book has a movie");

//falsy values\
//0,'', null, undefined
console.log("jonas" && "Some String");
console.log(0 && "Some String");

//OR Operator
console.log(true || "Sone string0");
console.log(false || "Sone string0");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish;
console.log(spanishTranslation || "Not Translated");

// zero may be misinterperted
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount;
console.log(countWrong || "No data");

// Nullish Collasing Operator
// Nullish collasing operator is used instead of or operator
// if you want zero count then use nullish collasing operator
console.log(book.reviews.librarything?.reviewsCount ?? "No data");

// Short Circuting and Logical Operators
console.log(true && "SOme String");
console.log(false && "SOme String");
// shorting circuting in and operator works when the first condition is false
console.log(hasMovieAdaptation && "Tis book has a movie adaptation");

// falsy : 0, '', null , undefined
console.log("Jonas" && "Jonas Shedmedsmann is a fantastic Tutor");
console.log("" && "Alexa Nd ciri");

// nullish coaaelising operqator
// ??
const green1 = 0;
const green2 = "";
const green3 = null;
const green4 = undefined;
console.log(green1 ?? "some string");
console.log(green2 ?? "some string");

// null and undefined has values
console.log(green3 ?? "some string");
console.log(green4 ?? "some string");

//Optional Chaining
// ?.
// used for safely access deeply nested objects.
console.log(book?.reviews?.goodreads?.ratingsCount);
console.log(book?.reviews?.librarything?.ratingsCount);

function getTotalReviewsCount(book) {
  let total = 0;
  const goodReadsCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  total = goodReadsCount + librarythingCount;
  return total;
}

console.log(getTotalReviewsCount(book));
*/

// Array -- Maps, Reduce, Filter
/*
const array1 = [2, 4, 6, 8];

const arrayMap = array1.map((item) => item * item + 5);
console.log(arrayMap);

const arrayFilter = array1.filter((item) => item < 5);
console.log(arrayFilter);

const arrayReduce = array1.reduce((pre, current) => pre + current);
console.log(arrayReduce);
*/

/*
// maps
const books = getBooks();

const titles = books.map((el) => el.title);

console.log(titles);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book),
}));
console.log(essentialData);
function getTotalReviewsCount(book) {
  let total = 0;
  const goodReadsCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  total = goodReadsCount + librarythingCount;
  return total;
}

// Filter
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const novelBooks = books
  .filter((book) => book.genres.includes("novel"))
  .map((book) => book.title);
console.log(novelBooks);

// Reduce Method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// SORT
const array2 = [3, 7, 1, 9, 6];
const array3 = array2.slice().sort((a, b) => a - b);
const array4 = array2.slice().sort((a, b) => b - a);
array2;
array3;
array4;

// sorting the books on number of pages

const sortByPages = books
  .slice()
  .map((book) => book.pages)
  .sort((a, b) => a - b);
console.log(sortByPages);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// Immutable Arrays
// 1. add Book Object to an array
const newBook = {
  id: 6,
  title: "Harry Potter and the secret of Chambers",
  author: "J. K. Rowling",
};

const booksAfterAdding = [...books, newBook];
console.log(booksAfterAdding);

//2. delete an array
const array5 = [435, 756, 876, 423, 689];
const elementToRemove = array5.indexOf(876);
const array6 = array5.slice();
array6.splice(elementToRemove, 1);
console.log(array6);

const booksAFterDelete = booksAfterAdding.filter((book) => book.id !== 6);
console.log(booksAFterDelete);

// 3. update an object in book array
const findIndex = books.find((book) => book.id === 5);
console.log(findIndex);
findIndex.pages = 1000;
console.log(findIndex);

const booksAfterUpdate = booksAFterDelete.map((book) =>
  book.id === 5 ? { ...book, pages: 1210 } : book
);
console.log(booksAfterUpdate);
*/

// Asynchronous Javascript promises
/*fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("jonas");*/

// Async Await
async function getToDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}
getToDos();
console.log("Jonas");
