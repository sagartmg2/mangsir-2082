
const showSomeAlert = () => {
  console.log("showing some alert");
  return undefined;
};

/* 
    callback functions
        - a function passed to another function as an arguement/parameter

    asynchronous  ( non-blocking background runing tasks)
        - setTimeout
        - API call  ( promise )

*/
setTimeout(showSomeAlert, 4000);

setTimeout(() => {
  console.log("show second alert");
}, 0);