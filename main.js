// Array sort()    

let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];

languages.sort();
console.log(languages);

// Array sort() und reverse()

languages.reverse();
console.log(languages);


// Arrays join()     

let meinText1 =["Hello", "World"]
let meinText2 =["Anass", "Elaine", "Eric", "Georg"]
let meinText3 =["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]


let join1 = meinText1.join();
console.log(join1);

let join2 = meinText1.join("");
console.log(join2);

let join3 = meinText1.join( " ");
console.log(join3);

let join4 = meinText1.join("+");
console.log(join4);



// sort() bigger numbers

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
numArray2.sort((a,b) => a - b);
console.log(numArray2);



//Reverse Name, Words

let reverseWords = ["Sergio", "Hannah", "Karin"];

reverseWords.forEach(vorname => {
  console.log(vorname.split("").reverse().join(""));
}
    
  )





