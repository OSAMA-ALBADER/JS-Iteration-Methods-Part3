const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

graterdegree = temperatures.filter((temperature) => temperature >= 25);
lessdegree = temperatures.filter((temperature) => temperature < 20);
console.log(graterdegree);
console.log(lessdegree);

Fahrenheit = temperatures.map((temperature) => (temperature * 9) / 5 + 32);
weather = temperatures.map((temperature) => {
  if (temperature >= 25) return "warm";
  else if (temperature <= 24 && temperature >= 20) return "mild";
  else if (temperature < 20) return "cool";
});
console.log(Fahrenheit);
console.log(weather);

highestTemperature = temperatures.reduce((highest, temperature) => {
  if (temperature > highest) return (highest = temperature);
  else return highest + 0;
});
lowestTemperature = temperatures.reduce((lowest, temperature) => {
  if (temperature < lowest) return (lowest = temperature);
  else return lowest + 0;
});
console.log(highestTemperature);
console.log(lowestTemperature);
