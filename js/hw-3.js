"use strick";

// --task-1-------------------

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

function addThemAll(a, b, ...args) {
  let sum = a + b;

  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

// --task-2-------------------

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));

// --task-3-------------------

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

console.log([...movies].sort(byProperty("releaseYear", ">")));
console.log([...movies].sort(byProperty("runningTimeInMinutes", "<")));
console.log([...movies].sort(byProperty("movieName", ">")));

function byProperty(property, direction) {
  if (direction === ">") {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    };
  } else {
    return function (a, b) {
      if (a[property] > b[property]) {
        return -1;
      } else if (a[property] < b[property]) {
        return 1;
      } else {
        return 0;
      }
    };
  }
}

// --task-4-1------------------

function detonatorTimer(delay) {
  let number = delay;

  let interval = setInterval(function () {
    if (number === 0) {
      console.log("boom");
      return clearInterval(interval);
    }

    console.log(number--);
  }, 1000);
}
detonatorTimer(5);

// --task-4-2--------

function printNumber(start) {
  for (let i = start; i >= 0; i--) {
    setTimeout(function () {
      if (i === 0) {
        console.log("boom");
      } else {
        console.log(i);
      }
    }, (start - i) * 1000);
  }
}
printNumber(10);

// --task-5-------------------

let me = {
  name: "Alina",
  age: 25,
  eyeColor: "green",
  instagram: "mykolenko.a",
  favouriteDrink: "lemonade",
  favouriteCity: "Barcelona",
  hobby: "swimming",
  introduceMyself() {
    console.log(`My name  is ${this.name} and I'm ${this.age}`);
  },
  appearence() {
    console.log(`I have ${this.eyeColor} eyes`);
  },
  facts() {
    console.log(
      `I love ${this.hobby} especially in ${this.favouriteCity} and drink ${this.favouriteDrink}`
    );
  },
  socialMedia() {
    const myInstagram = this.instagram;
    console.log(`Follow me on Instagram: ${myInstagram} `);
  },
};
me.introduceMyself();
me.appearence();
me.facts();
me.socialMedia();

// --task-6-------------------

let securedSelfIntroduceMyself = me.introduceMyself.bind(me);
let securedSelfFacts = me.facts.bind(me);
let securedSelfSocialMedia = me.socialMedia.bind(me);
let securedSelfAppearence = me.appearence.bind(me);

setTimeout(securedSelfIntroduceMyself, 1000);
setTimeout(securedSelfAppearence, 2000);
setTimeout(securedSelfFacts, 3000);
setTimeout(securedSelfSocialMedia, 4000);

// --task-7-------------------

function someFunction() {
  console.log(`Hello! 
  Thanks for waiting. 
  5*5=${5 * 5}`);
}

function slower(func, seconds) {
  return function () {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    setTimeout(func, seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction();
