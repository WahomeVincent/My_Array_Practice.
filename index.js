const films = [
    {
        title: "Iron Man",
        cast: "Robert Downey Jnr",
        duration: "2.4 hrs"
    },

    {
        title: "Spider Man",
        cast: "Tom Holland",
        duration: "2.8 hrs"
    },

    {
        title: "Troy",
        cast: "Brad Pitt",
        duration: "3.4 hrs"
    }
]

//The .map() method.
const nums = [1,2,3,4,5];
const numsSquared = nums.map( num => num * num);

console.log(numsSquared);

//The .find() method. => This method takes a callback funtion as an argument.
//Find the first occurence of a specified value that meets a certain criteria.
const digits = [3,78,34,8,0,56];
const findDigit = digits.find((num) => num < 30)

console.log(findDigit); 

const words = "The new world order";
const findWord = "new";
const index = words.find((word) => word === findWord);

console.log(index);

//For each => iterates over an an array and uses a callback function as an argument.

films.forEach(castMember => console.log(castMember)) ;