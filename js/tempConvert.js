function convert(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  if (typeof celsius !== undefined) {
    console.log(parseFloat(celsius).toFixed(2));
  } else {
    console.log("Celsius not defined.");
  }
}

convert(89);