// --------------------------------------------------
console.log('---------------------   1   ---------------------');
// --------------------------------------------------
//ES7 new features
console.log('\t #ES7 new features\n\n');

console.log('(js) Math.pow(2,5) =>   ' + Math.pow(2,5));
console.log('(ES7) 2 ** 5 =>   ' + 2 ** 5);
let arr = ['react', 'vue', 'angular'];
console.log('(js) arr.indexOf(\'vue2\') =>   ' + arr.indexOf('vue2'));
console.log('(ES7) arr.includes(\'vue2\') =>   ' + arr.includes('vue2'));
let str = 'java script';
console.log('(js) str.indexOf(\'scr\') =>   ' + str.indexOf('scr'));
console.log('(ES7) str.includes(\'scr\') =>   ' + str.includes('scr'));


// --------------------------------------------------
console.log('\n---------------------   2   ---------------------');
// --------------------------------------------------
//ES8 String Padding
console.log('\t #ES8 String Padding\n\n');

let str2 = 'ES8';
console.log('(js) str2.length =>   ' + str2.length);
console.log('(js) str2 =>   ' + str2);
console.log('(ES8) str2.padStart(10) =>   ' + str2.padStart(10));
console.log('(ES8) str2.padStart(10, \'-\') =>   ' + str2.padStart(10, '-'));
console.log('(ES8) str2.padEnd(10) =>   ' + str2.padEnd(10));
console.log('(ES8) str2.padEnd(10, \'-\') =>   ' + str2.padEnd(10, '-'));


// --------------------------------------------------
console.log('\n---------------------   3   ---------------------');
// --------------------------------------------------
//ES8 Object new methods
console.log('\t #ES8 Object new methods\n\n');

obj = {
    a: 11,
    b: 22,
    c: 33
}
console.log('(ES8) Object.entries(obj) =>   ' + Object.entries(obj));
console.log('ES8 =>   Object.entries(obj).forEach');
Object.entries(obj).forEach(
    ([key, val]) =>
    console.log('\tkey= ' + key + '\tvalue= ' + val)
)


// --------------------------------------------------
console.log('\n---------------------   4   ---------------------');
// --------------------------------------------------

// //callback function
// console.log('\t #use callback function\n\n');

// const fetchData = (url, callback) => {
//     setTimeout(() => {
//         let str = 'www.' + url;
//         callback(str);
//     }, 1000);
// }

// const saveDataToDB = (data, callback) => {
//     setTimeout(() => {
//         let str = data + ' is saved in DB';
//         callback(str)
//     }, 1000);
// }

// try {
//     fetchData('myURL.com', (data) => {

//         try {
//             saveDataToDB(data, (status) => {
//                 console.log(status);
//             })
//         } catch (err) {
//             console.log('saveDataToDB error!');
//         }
//     })
// } catch (error) {
//     console.log('fetchData error!');
// }



// //promise
// console.log('\t #use promise\n\n');

// const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {            
//                 resolve('www.' + url);
//             } catch (error) {
//                 reject('fetchData error!');
//             }
//         }, 1000);
//     })
// }
// const saveDataToDB = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 let str = data + ' is saved in DB';
//                 resolve(str)
//             } catch (error) {
//                 reject('saveDataToDB error!');
//             }
//         }, 1000);
//     })
// }
// fetchData('myURL.com')
//     .then((data) => saveDataToDB(data))
//     .then((status) => console.log(status))
//     .catch((err) => console.log(err));



//async & await
console.log('\t #use async & await\n\n');

// // These are the same
// async function fetchData(url){
// }
// const fetchData = async(url) => {
// }

const fetchData = async (url) => {
    try {
        return 'www.' + url;
    } catch (error) {
        throw new Error('fetchData error!');
    }
}
const saveDataToDB = async (data) => {
    try {
        let DBpromise = new Promise(function (resolve) {
            setTimeout(() => {
                resolve(data + ' is saved in DB');
            }, 1000);
        })
        console.log('---\tbefore await\t---')
        await DBpromise;
        console.log('---\tafter await\t---');
        return DBpromise;
    } catch (error) {
        throw new Error('saveDataToDB error!');
    }
}
fetchData('myURL.com')
    .then((data) => saveDataToDB(data))
    .then((status) => console.log(status))
    .catch((err) => console.log(err));
console.log('after all async functions and promises');


// --------------------------------------------------




