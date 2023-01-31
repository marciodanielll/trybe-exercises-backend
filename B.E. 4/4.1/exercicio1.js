const calculateBMI = (weight, height) => {
  // const BMI = weight / Math.pow(height, 2);
   const BMI = weight / (height * height);
  // const BMI = weight / height ** 2;
  return BMI;
};

console.log(calculateBMI(80, 1.74));