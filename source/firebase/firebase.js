import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDAsGqZz4QrxN47Wm7oWaCOwPyjrRqK8_k",
    authDomain: "expensify-6ed72.firebaseapp.com",
    databaseURL: "https://expensify-6ed72.firebaseio.com",
    projectId: "expensify-6ed72",
    storageBucket: "expensify-6ed72.appspot.com",
    messagingSenderId: "756908370387"
  };
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// // database.ref('notes').push({
// //     title: 'To do',
// //     body: 'Go for a run'
// // });

// database.ref('expenses').push({
//     description: 'Car',
//     note: 'new car',
//     amount: 25000,
//     createdAt: 20180932
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
    
//   });

// // subscription to changes with 'on'
// database.ref().on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// const onValueChange = database.ref().on('value', (snapshot) => {

//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref('job/company').set('ROLLER');
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(43);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val= snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Aaron Knol',
//     age: 39,
//     stressLevel: 5,
//     job: {
//         title: 'Software developer',
//         company: 'ROLLER'
//     },
//     isSingle: false,
//     location: {
//         city: 'Melbourne',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Melbourne'
// });


//   database.ref().update({
//       job: 'Manager',
//       'location/city': 'Geelong'
//   });
