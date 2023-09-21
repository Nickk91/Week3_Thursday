function calcCircleArea(radius) {
  return 3.14159265 * radius;
}

circlaArea = calcCircleArea(30);
console.log(circlaArea);
roundeResult = Math.round(circlaArea * 100) / 100;
console.log(roundeResult);
