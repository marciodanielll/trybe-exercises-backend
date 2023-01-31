/* eslint-disable complexity */
const readlineSync = require('readline-sync');

const getInput = () => {
  const weight = Number(readlineSync.question('What’s your weight?\n'));
  const height = Number(readlineSync.question('What’s your height??\n'));
  return { weight, height };
};

const calculateBMI = (weight, height) => {
  const BMI = weight / (height * height);
  return BMI;
};

const getClassification = (BMI) => {
  switch (true) {
    case (BMI < 18.5):
      return 'Abaixo do peso';

    case (BMI >= 18.5 && BMI <= 24.9):
      return 'Peso normal';

    case (BMI >= 25 && BMI <= 29.9):
      return 'Acima do peso (sobrepeso)';

    case (BMI >= 30 && BMI <= 34.9):
      return 'Obesidade grau I';

    case (BMI >= 35.0 && BMI <= 39.9):
      return 'Obesidade grau II';

    default:
      return 'Obesidade graus III e IV ';
  }
};

const worker = () => {
  const { weight, height } = getInput();
  const BMI = calculateBMI(weight, height);
  const classification = getClassification(BMI);

  console.log(`Your BMI is ${BMI} and you are ${classification}.`);
};

worker();