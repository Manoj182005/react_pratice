function timer() {
  for (let i = 1; i <= 5; i++) {
      setTimeout(
          function () {
              //Write your code here...
              console.log(i);

          }, i * 1000
    );
    console.log("Hello ninjas!");
  }
}
timer();

// Do not edit the rest of the code
