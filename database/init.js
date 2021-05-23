(async () => {
  // eslint-disable-next-line global-require
  // eslint-disable-next-line global-require
  const database = require('./database');
  // eslint-disable-next-line global-require
  const content = require('./models/content');
  // eslint-disable-next-line global-require
  const book = require('./models/book');
  // eslint-disable-next-line global-require
  const module = require('./models/module');
  // eslint-disable-next-line global-require
  const pdf = require('./models/pdf');

  try {
    const resultado = await database.sync();
  } catch (error) {
    console.log(error);
  }
})();
