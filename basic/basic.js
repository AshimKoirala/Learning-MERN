console.log("Basic JS");

// prompt = prompt("enter your name:");

// if (prompt.length == 0) {
//   document.getElementById("intro").innerHTML =
//     "Hello unknown person let's begin the journey together ";
// } else {
//   document.getElementById("intro").innerHTML =
//     "Hello " + prompt + " let's begin the journey together ";
// }
document.getElementById("intro").innerHTML =
  "Hey coder let's begin the journey together ";
document.getElementById("copyright").innerHTML =
  "Copyright &copy; 2024-".concat(new Date().getFullYear());

function showDate() {
  document.getElementById("date").innerHTML = Date();
}
setInterval(showDate, 1000);

var scopes = "its great";

function scope() {
  var scopes2 = "it is also great";
  console.log(scopes);
  console.log(scopes2);
}
scope();
console.log(scopes);
//console.log(scopes2); //error

//Asynchronous JavaScript
async function fetchData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function main() {
  try {
    const result = await fetchData();
    console.log(result); // Output: Data fetched successfully
  } catch (error) {
    console.error(error);
  }
}
main();
