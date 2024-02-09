const express = require('express');
const app = express();
const cors = require('cors');
const walletsRouter = require('./routes/wallets.routers');
const UsersRouter = require('./routes/users.routers');
const trainsRouter = require('./routes/trains.routers');
const ticketsRouter = require('./routes/tickets.routers');
const routesRouter = require('./routes/routes.routers');
const stationsRouter = require('./routes/stations.routers');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/users', UsersRouter);
app.use('/api/wallets', walletsRouter);
app.use('/api/stations', stationsRouter);
app.use('/api/trains', trainsRouter);
app.use('/api/tickets', ticketsRouter);

app.use('/api/routes', routesRouter);

// base routes
app.get('/', (req, res) => {
    res.json("Welcome to Code Route");
})




module.exports = app;

