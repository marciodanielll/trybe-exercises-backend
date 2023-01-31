/* eslint-disable no-unused-vars */
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const pathSimpsonsFile = path.resolve(__dirname, 'simpsons.json');
const pathSimpsonsFamily = path.resolve(__dirname, 'simpsonFamily.json');

const getSimpsonFileContent = async () => {
  const content = await readFile(pathSimpsonsFile, 'utf-8');
  return JSON.parse(content); 
};

const getSimpsonFamilyFileContent = async () => {
  const content = await readFile(pathSimpsonsFamily, 'utf-8');
  return JSON.parse(content);
};

const getNewId = (characters) => {
  const ids = characters.map(({ id }) => Number(id));
  const maxId = Math.max(...ids);
  return maxId + 1;
};

/* A */
const showAllSimpsons = async () => {
  const simpsons = await getSimpsonFileContent();
  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};
// showAllSimpsons();

/* B */
const showSimpsonById = async (id) => {
  const content = await getSimpsonFileContent();
  return new Promise((resolve, reject) => {
    const simpson = content.find(({ id: characterId }) => Number(characterId) === id);
    if (simpson) {
      resolve(simpson);
    } else {
      reject(new Error('id não encontrado'));
    }
  });
};
// correct result 
// showSimpsonById(1).then(console.log).catch(console.error);

// error result
// showSimpsonById(13).then(console.log).catch(console.error);

/* C */
const removeSomeCharacters = async (...ids) => {
  const content = await getSimpsonFileContent();
  const newContent = content.filter(({ id }) => !ids.includes(Number(id)));
  writeFile(pathSimpsonsFile, JSON.stringify(newContent, null, 2));
};

// removeSomeCharacters(10, 6);

/* D */
const filterSomeCharacters = async (ids, content) => {
  const newContent = content.filter(({ id }) => ids.includes(Number(id)));
  return newContent;
};

const createNewSimpsonsFile = async (...ids) => {
  const content = await getSimpsonFileContent();
  const newContent = await filterSomeCharacters(ids, content);
  writeFile(pathSimpsonsFamily, JSON.stringify(newContent, null, 2));
  return 'done';
};

// createNewSimpsonsFile(1, 4).then(console.log);

/* E */

const insertNewCharacterInSimpsonsFamily = async (nameCharacter) => {
  const content = await getSimpsonFamilyFileContent();
  const newCharacter = {
    name: nameCharacter,
    id: getNewId(content).toString(),
  };
  content.push(newCharacter);
  writeFile(pathSimpsonsFamily, JSON.stringify(content, null, 2));
  return 'done';
};

 const changeCharacterINewSimpsonsFamily = async (newName, nameForChange) => {
  const content = await getSimpsonFamilyFileContent();
  const newContent = content.map(({ name, id }) => {
    if (name === nameForChange) {
      return {
        name: newName,
        id,
      };
    }
    return { name, id };
  });
  writeFile(pathSimpsonsFamily, JSON.stringify(newContent, null, 2));
  return 'done';
 };
/*  changeCharacterINewSimpsonsFamily('Maggie Simpson', 'Nelson Muntz')
 .then(console.log).catch(console.error);
 */
