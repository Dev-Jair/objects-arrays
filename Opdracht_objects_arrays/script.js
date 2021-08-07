// Deel 1 objecten:

let name = 'Jairzinho';
let age = 26;

let person = {
    name: 'Jairzinho',
    age: 26
};

console.log(person);

console.log(name);
console.log(age);

console.log(person.name);
console.log(person['age']);

let zeven = 7;
let tien = 10;
let negen = 9;

let evaluations = {
    zeven: 7,
    tien: 10,
    negen: 9
};

console.log(evaluations);

// Deel 2 Arrays:

let colorLights = ['green', 'orange', 'red'];

console.log(colorLights);

console.log(colorLights.length);

console.log(colorLights[0]);

// Oplossing om het laatste element te loggen, zonder het gebruiken van de index:
let lastElement = colorLights [colorLights.length - 1];
console.log(lastElement);

// Push methode toepassen:
const count = colorLights.push('yellow');

console.log(colorLights);

colorLights.push(7);
console.log(colorLights);

colorLights.push({greeting: 'Hi, ik ben een object'})

lastElement = colorLights [colorLights.length - 1];
console.log(lastElement);

// Deel 3: Bekijk een "real-life" object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

console.log("Naam kattensoort 3:", catBreeds[2].name);

console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);

console.log("Eerste temperant kat 2:", catBreeds[1].temperament[0]);

console.log("Laatste temperament kat 3:", catBreeds[2].temperament[4]);

console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);