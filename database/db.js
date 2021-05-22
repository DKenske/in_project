// const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite',
// });

// module.exports = sequelize;
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
app.use(cors());

// eslint-disable-next-line consistent-return
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// alunos
app.post('/aluno/add', (req, res) => {
  console.log(req.body);
  const { nome, turma, sexo, idade, ativo } = req.body;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO Alunos(nome, turma, sexo,  idade, ativo, createdAt, updatedAt) VALUES(?,?,?,?,?,?, ?)',
      [nome, turma, sexo, idade, ativo, createdAt, updatedAt],
      (err) => {
        if (err) {
          return console.log(err.message);
        }
        console.log('New Student has been added');
        res.send(200, req.body);
      }
    );
  });
});

app.get('/aluno', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM Alunos ORDER BY id', (err, rows) => {
      if (err) {
        res.body = res.send(200, { msg: err.message });
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/aluno/update/:id', (req, res) => {
  const { nome, turma, ativo } = req.body;
  const { id } = req.params;
  let string = '';
  const reqArr = [];

  if (nome) {
    string += 'nome = ?';
    reqArr.push(nome);
  }
  if (turma) {
    string += ',turma = ?';
    reqArr.push(turma);
  }
  if (ativo) {
    string += ',ativo = ?';
    reqArr.push(ativo);
  }
  reqArr.push(id);
  console.log(string, reqArr);
  db.serialize(() => {
    db.run(`UPDATE Alunos SET ${string} WHERE id = ?`, reqArr, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.json(200, { msg: 'Entry updated successfully' });
      console.log('Entry updated successfully');
    });
  });
});

app.delete('/aluno/delete/:id', (req, res) => {
  const { id } = req.params;

  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM Alunos WHERE id = ?', req.params.id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});

/// /////////////////////////////////////////////////////////// turmas
app.post('/turma/add/:semestre', (req, res) => {
  console.log(req.body);
  const { curso, ativo } = req.body;
  const nome = curso.substring(0, 2) + req.params.semestre;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO Turmas(nome, ativo, curso, createdAt, updatedAt) VALUES(?,?,?,?,?)',
      [nome, ativo, curso, createdAt, updatedAt],
      (err) => {
        if (err) {
          res.send(400, err);
          return console.log(err.message);
        }
        console.log('New Course has been added');
        res.send(200, { nome, curso, ativo, createdAt, updatedAt });
      }
    );
  });
});

app.get('/turma', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM Turmas ORDER BY id', (err, rows) => {
      if (err) {
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.delete('/turma/delete/:id', (req, res) => {
  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM Turmas WHERE id = ?', req.params.id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});

/// ///////////////////////////////////////////////////////////// cursos
app.post('/curso/add', (req, res) => {
  const { nome, ativo } = req.body;
  console.log(req.body);
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO Cursos(nome, ativo, createdAt, updatedAt) VALUES(?,?,?,?)',
      [nome, ativo, createdAt, updatedAt],
      (err) => {
        if (err) {
          res.send(400, err);
          return console.log(err.message);
        }
        console.log('New Course has been added');
        res.send(200, req.body);
      }
    );
  });
});

app.get('/curso', (req, res) => {
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM Cursos ORDER BY nome', (err, rows) => {
      if (err) {
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/curso/update/:nome', (req, res) => {
  const { nome } = req.body;

  db.serialize(() => {
    db.run(
      'UPDATE Cursos SET nome = ? WHERE nome = ?',
      [nome, req.params.nome],
      (err) => {
        if (err) {
          res.send('Error encountered while updating');
          return console.error(err.message);
        }
        res.send(200, { msg: 'Entry updated successfully' });
        console.log('Entry updated successfully');
      }
    );
  });
});

app.delete('/curso/delete/:nome', (req, res) => {
  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM Cursos WHERE nome = ?', req.params.nome, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});

server.listen(8010, () => {
  console.log('Server listening on port: 8010');
});
