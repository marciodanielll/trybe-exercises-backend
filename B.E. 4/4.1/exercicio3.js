const readlineSync = require('readline-sync');

const getDataInput = () => {
  const weight = readlineSync.question('What’s your weight?\n');
  const height = readlineSync.question('What’s your height??\n');
  return { weight, height };
};

const calculateBMI = (weight, height) => {
  const BMI = weight / (height * height);
  return BMI;
};

const worker = () => {
  const { weight, height } = getDataInput();
  const BMI = calculateBMI(weight, height);
  console.log(BMI);
};

worker();
