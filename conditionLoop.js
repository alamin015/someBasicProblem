// let numbers = [200,12,-34,203,500];
// let numbersLength = numbers.length;
// for(let i=0; i<numbersLength; i++){
//     if(numbers[i] > 80){
//         console.log(numbers[i]);
//     }
// }

// const myObject = {
//     name: "BD",
//     age: 202,
//     village: "Krishnanagar",

// };
// console.log(myObject);
// myObject.name = "Pakistan";
// console.log(myObject);
// for(let key in myObject){
//     console.log(myObject[key]);
// }

// const feetToInch = (feet) => {
//     let inch = feet*12;
//     return inch;
// }

// console.log(feetToInch(13));

// const paperRequirements = (firstBook,secBook,thirdBook) => {
//     let pageForBook1 = firstBook*100;
//     let pageForBook2 = secBook*200;
//     let pageForBook3 = thirdBook*300;
//     let totalPage = pageForBook1 + pageForBook2 + pageForBook3;
//     return totalPage;
// }
// console.log(paperRequirements(1,0,2));

// const bestFriend = (friends) => {
//     let highLen = friends[0].length;
//     let high = friends[0];
//     for(let name of friends){
//         if(highLen < name.length){
//             high = name;
//         }
//     }
//     console.log(high);

// };

// bestFriend(["hesddhg","w","halim"]);

const tricky = (numbers) => {
    let newArry = [];
    for(let item of numbers){
        if(item >=0){
            newArry.push(item);
        }else{
            break;
        }
    }
    return newArry;
}

console.log(tricky([23,45,56,67,-56,-23,26]));