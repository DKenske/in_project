const listAlunos = async () => {
  // eslint-disable-next-line global-require
  const database = require('../../db');
  // eslint-disable-next-line global-require
  const Aluno = require('../../models/aluno');
  try {
    const result = await Aluno.FindAll();
    return result;
  } catch (error) {
    return error;
  }
};

const result = listAlunos();
console.log(result);

module.exports = listAlunos;
