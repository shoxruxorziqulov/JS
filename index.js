// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }

// var cheep = new Car("Cheep", "audi");

// console.log(cheep);

// class Car {
//   constructor(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//   }

//   info() {
//     return `Mashina nomi ${this.name}, modeli ${this.model}, narxi ${this.price}`;
//   }
// }

// const car = new Car("Spark", "Chevrolet", 20000);
// class Moto extends Car {
//   constructor(name, model, price, color) {
//     super(name, model, price);
//     this.color = color;
//   }

//   what() {
//     return `Mashina nomi ${this.name}, modeli ${this.model}, narxi ${this.price} rangi ${this.color}`;
//   }

//   about() {
//     return super.info();
//   }
// }

// const moto1 = new Moto("white");
// console.log(moto1.about());

// // console.log(car);

// console.log(car.info());

// class film {
//   constructor(title, year, language) {
//     this.title = title;
//     this.year = year;
//     this.language = language;
//   }

//   static movie() {
//     console.log("Movie");
//   }

//   info() {
//     return `Film nomi ${this.title}, ishlangan yili ${this.year}, ovozlastirish tili ${this.language}`;
//   }
// }

// const kino = new film("Titanik", 2001, "english");

// console.log(kino);
// console.log(kino.info());
// console.log(film.movie());

// class non {
//   constructor(son, narx) {
//     Object.assign(this, { son, narx });
//   }

//   static jami(son, narx) {
//     return son * narx;
//   }
// }

// console.log(non.jami(3, 4000));
