const person = {
    name: "Sukanya",
    age: 26,
    location: {
        city: "Aurangabad",
        temp: 37
    }
}

const { name, age, location } = person
const { city, temp } = location
console.log(`${name} is ${age} living in ${city} where temperature is ${temp}`)


const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    // publisher: {
    //     // name: "Penguin"
    // }
}

const { name: publisherName = "Self-Published" } = book.publisher || {};

console.log(publisherName)



const address = ["Address 1 street"]


const [, city2 = "Aurangabad", state = "Maharashtra"] = address

console.log(`you are in ${city2} , ${state}`)