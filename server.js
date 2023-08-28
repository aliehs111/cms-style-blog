const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const postsController = require('./controllers/api/posts');
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
    helpers
});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



// Use the postsController for handling '/api/posts' routes
app.use('/api/posts', postsController);

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});