function calculateBmi(weight: number, heightCm: number): string {
  const meterHeight = heightCm / 100;
  const bmi = weight / meterHeight ** 2;

  if (bmi < 18.5) {
    return `Under Range`;
  } else if (bmi < 25) {
    return `Normal Range`;
  } else if (bmi < 30) {
    return `Over Range`;
  } else {
    return `Obese`;
  }
}

console.log(calculateBmi(200, 188));
