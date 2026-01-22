// let str = "I am Sahil";
// let splitted = str.split(" ").map(i => i.split("").reverse().join("")).join(" ")
// console.log(splitted)

// let str = "SAHIL";

// function palindrome(prop) {
//     let rev = prop.split("").reverse().join("");
//     if(rev==prop){
//         console.log("yes")
//     }
//     else {
//         console.log("false")
//     }

// }
// palindrome(str);

// let arr1 = [100,200,300,400];
// let arr2 = [100,200,300,400];

// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]!=arr2[i]){
//         console.log("not equal");
//     }
//     else {
//         console.log('equal')
//     }
// }

// let arr1 = []
// // arr1.length= 100;
// // arr1 = new Array(100);
// arr1 = new Array(100).fill(0);
// console.log(arr1)

// let arr1 = 'Sahil'
// let arr2 = 'ALAM';

// function AltNaming(arr1,arr2){
//     let split1 = arr1.split('');
//     let split2= arr2.split('');
//     let newStr = '';
//     // let len = Math.min(split1.length,split2.length)
//     // // console.log(split1)
//     // for(let i=0;i<len;i++){
//     //     newStr = newStr + split1[i];
//     //     newStr = newStr + split2[i];

//     // }
//     for(let i=0;i<split1.length + split2.length;i++){
//         if(i < split1.length){
//             newStr += split1[i]
//         }
//         if(i < split2.length) {
//             newStr += split2[i]
//         }
//     }
//     console.log(newStr)
// }

// AltNaming(arr1,arr2)

// let arr1 = [,,,];
// console.log(arr1.length)

// let a = {
//     'age' : 23
// }
// // b = a;

// b = {...a};
// b.age = 100;
// // b.age = 100;
// console.log(a.age)
// console.log(b.age)

let sahil = "sahil";
let arrSahil = [];
function split(str) {
  for (let i = 0; i < str.length; i++) {
    arrSahil.push(str[i]);
  }
  console.log(arrSahil);
}
split(sahil);
let newSahil = [];
function reverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    newSahil.push(arr[i]);
  }
  console.log(newSahil);
}
reverse(arrSahil);
let joinSahilstr = "";
function join(revarr) {
  for (let i = 0; i < revarr.length; i++) {
    joinSahilstr += revarr[i];
  }
  console.log(joinSahilstr);
}
join(newSahil);


