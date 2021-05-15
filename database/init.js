(async () => {
  // eslint-disable-next-line global-require
  // eslint-disable-next-line global-require
  const database = require('./database');
  // eslint-disable-next-line global-require
  const Aluno = require('./models/aluno.js');
  // eslint-disable-next-line global-require
  const Curso = require('./models/curso.js');
  // eslint-disable-next-line global-require
  const Turma = require('./models/turma.js');

  try {
    const resultado = await database.sync();
  } catch (error) {
    console.log(error);
  }
})();
