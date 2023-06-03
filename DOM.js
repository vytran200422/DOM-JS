// salary calculator
function result() {
  let salary = +document.getElementById("salary").value;
  let day = +document.getElementById("day").value;
  let result = 0;
  result = salary * day;
  document.getElementById("result").innerHTML = result.toLocaleString() + "$";
}

// convert currency
function currency() {
  let dollar = +document.getElementById("dollar").value;
  let vnd = 0;
  vnd = dollar * 23500;
  document.getElementById("vnd").value = vnd.toLocaleString();
}

// rectangle
function rectangle() {
  let height = +document.getElementById("height").value;
  let width = +document.getElementById("width").value;
  let area = 0;
  let perimeter = 0;
  area = height * width;
  perimeter = (height + width) * 2;
  document.getElementById("area").innerHTML = "Area: " + area + "cm^2";
  document.getElementById("perimeter").innerHTML =
    "Perimeter: " + perimeter + "cm";
}

// average number
function averageNumber() {
  let numb1 = +document.getElementById("numb1").value;
  let numb2 = +document.getElementById("numb2").value;
  let numb3 = +document.getElementById("numb3").value;
  let numb4 = +document.getElementById("numb4").value;
  let numb5 = +document.getElementById("numb5").value;
  let result = 0;
  result = Math.round((numb1 + numb2 + numb3 + numb4 + numb5) / 5);
  document.getElementById("averNumb").innerHTML = "Result: " + result;
}

// Sum calculator
function sum() {
  let input = +document.getElementById("number").value;
  let firstNumb = 0;
  let secondNumb = 0;
  let sum = 0;
  firstNumb = Math.floor(input / 10);
  secondNumb = input % 10;
  sum = firstNumb + secondNumb;
  document.getElementById("answer").innerHTML = "Result: " + sum;
}
