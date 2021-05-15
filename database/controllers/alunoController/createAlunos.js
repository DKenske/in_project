// const Aluno = require('../models/aluno');
// const database = require('../db');

const CreateAlunos = async ({ nome, turma, sexo, idade, ativo }) => {
  // eslint-disable-next-line global-require
  const Aluno = require('../../models/aluno');
  try {
    const resultadoCreate = await Aluno.create({
      nome,
      turma,
      sexo,
      idade,
      ativo,
    });
    return resultadoCreate;
  } catch (error) {
    return error;
  }
};
module.exports = CreateAlunos;
// export async function listAlunos() {
//   try {
//     await database.sync();

//     return await Aluno.FindAll();
//   } catch (error) {
//     return error;
//   }
// }

// export async function getOneAlunos(alunoId) {
//   try {
//     await database.sync();

//     return await Aluno.findByPk(alunoId);
//   } catch (error) {
//     return error;
//   }
// }

// export async function updateOneAlunos(alunoId, params) {
//   try {
//     await database.sync();

//     const aluno = await Aluno.findByPk(alunoId);

//     const keys = Object.keys(params);

//     keys.forEach((key) => {
//       aluno[key] = params[key];
//     });

//     const saveResult = await aluno.save();
//     return saveResult;
//   } catch (error) {
//     return error;
//   }
// }

// export async function deleteAluno(alunoId) {
//   try {
//     await database.sync();

//     return Aluno.destroy({ where: { id: alunoId } });
//   } catch (error) {
//     return error;
//   }
// }
