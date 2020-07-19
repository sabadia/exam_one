$(document).ready(function () {
  const element = $("h1");
  const arr = element.siblings();
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
});
