/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const http = require('http');
const multer = require('multer');
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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

var upload = multer({ storage: storage });

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000,
  })
);

///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
app.post('/content/add', (req, res) => {
  console.log(req.body);
  const { video_url, game_url, book_title, module_name } = req.body;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO contents(video_url, game_url, book_title, module_name, createdAt, updatedAt) VALUES(?,?,?,?,?, ?)',
      [video_url, game_url, book_title, module_name, createdAt, updatedAt],
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

app.get('/content', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM contents ORDER BY id', (err, rows) => {
      if (err) {
        res.body = res.send(200, { msg: err.message });
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/content/update/:id', (req, res) => {
  const { video_url, game_url, book_title, module_name } = req.body;
  const { id } = req.params;
  let string = '';
  const reqArr = [];

  if (video_url) {
    string += 'video_url = ?';
    reqArr.push(video_url);
  }
  if (game_url) {
    string += ',game_url = ?';
    reqArr.push(game_url);
  }
  if (book_title) {
    string += ',book_title = ?';
    reqArr.push(book_title);
  }

  if (module_name) {
    string += ',book_title = ?';
    reqArr.push(book_title);
  }

  reqArr.push(id);
  console.log(string, reqArr);
  db.serialize(() => {
    db.run(`UPDATE contents SET ${string} WHERE id = ?`, reqArr, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.json(200, { msg: 'Entry updated successfully' });
      console.log('Entry updated successfully');
    });
  });
});

app.delete('/content/delete/:id', (req, res) => {
  const { id } = req.params;

  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM contents WHERE id = ?', req.params.id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// CONTENTS ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
app.post('/book/add', (req, res) => {
  console.log(req.body);
  const { book_title, module_name } = req.body;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO books(book_title, module_name, createdAt, updatedAt) VALUES(?,?,?,?)',
      [book_title, module_name, createdAt, updatedAt],
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

app.get('/book', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM books ORDER BY id', (err, rows) => {
      if (err) {
        res.body = res.send(200, { msg: err.message });
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/book/update/:id', (req, res) => {
  const { book_title, module_name } = req.body;
  const { id } = req.params;
  let string = '';
  const reqArr = [];

  if (module_name) {
    string += ',module_name = ?';
    reqArr.push(module_name);
  }
  if (book_title) {
    string += ',book_title = ?';
    reqArr.push(book_title);
  }

  reqArr.push(id);
  console.log(string, reqArr);
  db.serialize(() => {
    db.run(`UPDATE books SET ${string} WHERE id = ?`, reqArr, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.json(200, { msg: 'Entry updated successfully' });
      console.log('Entry updated successfully');
    });
  });
});

app.delete('/book/delete/:id', (req, res) => {
  const { id } = req.params;

  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM books WHERE id = ?', id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
app.post('/module/add', (req, res) => {
  console.log(req.body);
  const { module_name } = req.body;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO modules(module_name, createdAt, updatedAt) VALUES(?,?,?)',
      [module_name, createdAt, updatedAt],
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

app.get('/module', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM modules ORDER BY id', (err, rows) => {
      if (err) {
        res.body = res.send(200, { msg: err.message });
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/module/update/:id', (req, res) => {
  const { module_name } = req.body;
  const { id } = req.params;
  let string = '';
  const reqArr = [];

  if (module_name) {
    string += ',module_name = ?';
  }

  reqArr.push(id);
  console.log(string, reqArr);
  db.serialize(() => {
    db.run(`UPDATE modules SET ${string} WHERE id = ?`, reqArr, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.json(200, { msg: 'Entry updated successfully' });
      console.log('Entry updated successfully');
    });
  });
});

app.delete('/module/delete/:id', (req, res) => {
  const { id } = req.params;

  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM modules WHERE id = ?', id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// MODULES ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
app.post('/module/add', (req, res) => {
  console.log(req.body);
  const { module_name } = req.body;
  const createdAt = new Date();
  const updatedAt = '-';
  db.serialize(() => {
    db.run(
      'INSERT INTO modules(module_name, createdAt, updatedAt) VALUES(?,?,?)',
      [module_name, createdAt, updatedAt],
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

app.get('/module', (req, res) => {
  const items = {};
  db.serialize(() => {
    db.all('SELECT DISTINCT * FROM modules ORDER BY id', (err, rows) => {
      if (err) {
        res.body = res.send(200, { msg: err.message });
        return console.log(err.message);
      }
      rows.forEach((item) => console.log(item));
      res.body = res.send(200, { rows });
    });
  });
});

app.put('/module/update/:id', (req, res) => {
  const { module_name } = req.body;
  const { id } = req.params;
  let string = '';
  const reqArr = [];

  if (module_name) {
    string += ',module_name = ?';
  }

  reqArr.push(id);
  console.log(string, reqArr);
  db.serialize(() => {
    db.run(`UPDATE modules SET ${string} WHERE id = ?`, reqArr, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.json(200, { msg: 'Entry updated successfully' });
      console.log('Entry updated successfully');
    });
  });
});

app.delete('/module/delete/:id', (req, res) => {
  const { id } = req.params;

  db.serialize(() => {
    // eslint-disable-next-line consistent-return
    db.run('DELETE FROM modules WHERE id = ?', id, (err) => {
      if (err) {
        res.send('Error encountered while updating');
        return console.error(err.message);
      }
      res.send(200, 'Entry deleted successfully');
      console.log('Entry deleted successfully');
    });
  });
});
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
app.post('/uploadfile', upload.single('file'), (req, res, next) => {
  const { file } = req;
  console.log(file);
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

// app.post('/uploadfile', (req, res) => {
//   console.log(req.body);
//   const { module_name } = req.body;
//   const createdAt = new Date();
//   const updatedAt = '-';
//   db.serialize(() => {
//     db.run(
//       'INSERT INTO modules(module_name, createdAt, updatedAt) VALUES(?,?,?)',
//       [module_name, createdAt, updatedAt],
//       (err) => {
//         if (err) {
//           return console.log(err.message);
//         }
//         console.log('New Student has been added');
//         res.send(200, req.body);
//       }
//     );
//   });
// });

///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// PDF ///////////////////////////////////////////////////////////////////////
server.listen(8010, () => {
  console.log('Server listening on port: 8010');
});
