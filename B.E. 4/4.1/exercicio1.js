const calculateBMI = (weight, height) => {
   const BMI = weight / (height * height);
  return BMI;
};

console.log(calculateBMI(80, 1.74));
