function filterStringsByLetter(arr, letter) {
    return arr.filter(str => str.charAt(0) === letter);
  }
  
  console.log(filterStringsByLetter(["apple", "banana", "avocado"], "a")); // Выводит ["apple", "avocado"]
  console.log(filterStringsByLetter(["cat", "dog", "elephant"], "d")); // Выводит ["dog"]

//

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("Hello")); // Выводит "olleH"
  console.log(reverseString("JavaScript")); // Выводит "tpircSavaJ"

// function noName(arr) {
//     return arr.reduce((su, nu) => su * nu)
// }

// console.log(noName([1, 2, 3, 4, 5]));


// function myBooks (name, autor, year) {
//     this.name = name,
//     this.autor = autor,
//     this.year = year
// }

// const Books = new myBooks("Alice", "Luic Caroll", 1865)

// function one (nameBook) {
//     nameBook.name
// }

// console.log(Books.name);


// function Book(name, autor, year) {
//     this.name = name;
//     this.autor = autor
//     this.year = year
// }

// const book1 = new Book("Alice", "Luis", 1865)
// const book2 = new Book("Harry Poter", "Djoan", 1997)
// const book3 = new Book("War and world", "Lev", 1869)

// console.log(book1);

// function printInformation(book) {
//     console.log("Название:", book.name);
// }

// console.log("Book Information:",); 
// printInformation(book1)


//

// function Cars (Brend, Model) {
//   this.Brend = Brend
//   this.Model = Model
// }

// const myCars = new Cars("Nisan", "GT")
// console.log(myCars.Brend, myCars.Model);


// let button = document.getElementById("myButton")
// let text = document.getElementById("myText")

// button.addEventListener("click", function() {
//   if(text.style.opacity==="0") {
//     text.style.opacity="1"
//   }else {
//     text.style.opacity="0"
//   }
// })

// var toggleButton = document.getElementById("toggleButton");
// var textElement = document.getElementById("text");

// toggleButton.addEventListener("click", function() {
//   if (textElement.style.display === "none") {
//     textElement.style.display = "block";
//   } else {
//     textElement.style.display = "none";
//   }
// });

//

// const element = document.getElementById('myElement')
// const colors = ['yellow', 'blue', 'green']
// let index = 0

// const myElement = setInterval(() => {
//     element.style.backgroundColor = colors[index]
//     index = (index + 1) % colors.length
// }, 1000)


//Заметки свойства объектов 

// const element = document.getElementById('myElement')
// let colors = ['red', 'green', 'blue'];
// let currentIndex = 0;

// const intervalId = setInterval(() => {
//     element.style.backgroundColor = colors[currentIndex];
//     currentIndex = (currentIndex + 1) % colors.length
// }, 1000)

// получение данных от сервера с помощью fetchDataFromServer() 

// const intervalId = setInterval(() => {
//     fetchDataFromServer()
// }, 5000)

//NAV

// function mobileNav() {
// 	// Mobile nav button
// 	const navBtn = document.querySelector('.mobile-nav-btn');
// 	const nav = document.querySelector('.mobile-nav');
// 	const menuIcon = document.querySelector('.nav-icon');

// 	navBtn.onclick = function () {
// 		nav.classList.toggle('mobile-nav--open');
// 		menuIcon.classList.toggle('nav-icon--active');
// 		document.body.classList.toggle('no-scroll');
// 	};
// }

// export default mobileNav;