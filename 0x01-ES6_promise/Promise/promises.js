// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2){
//         resolve('success');
//     } else {
//         reject('failed');
//     }
// })

// p.then((message) => {
//     console.log("This is in the then item "+ message);
// }).catch((message) => {
//     console.log("This is in the catch " + message);
// })

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback){
//     if (userLeft) {
//         errorCallback({
//             name: 'User left',
//             message: ':(',
//         });
//     }else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat meme',
//             message: 'Scorprog Inc',
//         })
//     } else {
//         callback ('Thumps up and subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success '+ message)
// }, (error) => {
//     console.log(error.name+ ' ' + error.message)
// })


// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User left',
//                 message: ':(',
//             });
//         }else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat meme',
//                 message: 'Scorprog Inc',
//             })
//         } else {
//             resolve ('Thumps up and subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log("Success " + message);
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message);
// })


// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve("Video 1 Recorded");
// })
// const recordVideTwo = new Promise((resolve, reject) => {
//     resolve("Video 2 Recorded");
// })
// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve("Video 3 Recorded");
// })

// Promise.all([ // runs after all the instances are done
//     recordVideoOne,
//     recordVideTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages)
// }).catch((error) => {
//     console.log(error.name)
// })


// Promise.race([ // shows the first one that run successfully
//     recordVideoOne,
//     recordVideTwo,
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error.name)
// })



