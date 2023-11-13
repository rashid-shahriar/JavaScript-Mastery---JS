//Asynchronous Code

//setInterval
//clearInterval
// const myInterval = setInterval(() => {
//   console.log("hello");
// }, 1000);

// clearInterval(myInterval);

// setTimeout
// clearTimeout
//we will get after 5 seconds
const myInterval = setTimeout(() => {
  console.log("hello");
}, 5000);

clearTimeout(myInterval);

//synchrounous Js Example

// const functionOne = () => {
//   console.log("Function one");
//   functionTwo();
//   console.log("Function One, Part 2");
// };

// const functionTwo = () => {
//   console.log("Function two");
// };

// functionOne();

//Asynchronous Js Example

// const functionOne = () => {
//   console.log("Function one");
//   functionTwo();
//   console.log("Function One, Part 2");
// };

// const functionTwo = () => {
//   setTimeout(() => {
//     console.log("Function two");
//   }, 3000);
// };

// functionOne();

//callback function
//data fetching

//API
// const fetchUser = (username, callback) => {
//   console.log(`Fetching user ${username}...`);

//   setTimeout(() => {
//     console.log("Now we have the user.");

//     callback({ username });
//   }, 2000);
// };

// fetchUser("Michael", (user) => {
//   console.log(`Your name is : ${user.username}`);
// });

//callback hell
// const fetchUser = (username, callback) => {
//   console.log(`Fetching user ${username}...`);

//   setTimeout(() => {
//     console.log("Now we have the user.");

//     callback({ username });
//   }, 2000);
// };

// const fetchUserPhotos = (username, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the Photos ofr ${username}`);

//     callback(["Photo 1", "Photo 2"]);
//   }, 2000);
// };

// const fetchPhotoDetails = (photo, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the photo details for the photo ${photo}`);

//     callback("Details....");
//   }, 2000);
// };

// fetchUser("Michael", (user) => {
//   console.log(`Your name is : ${user.username}`);

//   fetchUserPhotos(user.username, (userPhotos) => {
//     console.log(`Your photos are :  ${userPhotos}`);

//     fetchPhotoDetails(userPhotos[0], (photoDetails) => {
//       console.log(`Your photo details are : ${photoDetails}`);
//     });
//   });
// });

//Promises
// const fetchUser = (username) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the user");

//       resolve(username);
//     }, 2000);
//   });
// };

// const fetchUserPhotos = (username) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the photos");

//       resolve(["photo1", "photo2"]);
//     }, 2000);
//   });
// };

// const fetchPhotoDetails = (photo) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the photo details");

//       resolve("details...");
//     }, 2000);
//   });
// };

// fetchUser("Michael")
//   .then((user) => fetchUserPhotos(user))
//   .then((photos) => fetchPhotoDetails(photos[0]))
//   .then((detail) => console.log(detail));

//Async/Await

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");

      resolve(username);
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photos");

      resolve(["photo1", "photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details");

      resolve("details...");
    }, 2000);
  });
};

const displayData = async () => {
  const user = await fetchUser("Adrian");
  const photos = await fetchUserPhotos(user);
  const detail = await fetchPhotoDetails(photos[0]);

  console.log(detail);
};

displayData();
