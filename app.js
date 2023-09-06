import express from 'express';
import path from 'path';
import colors from 'colors';
import { fileURLToPath } from 'url';
import { router as frontPageRouter } from './routes/index.js';
import { router as loginPageRouter } from './routes/login.js';
import { router as registerPageRouter } from './routes/register.js';
import session from 'express-session'; // Import express-session
import cookieParser from 'cookie-parser'; // Import cookie-parser

const app = express();

// for body parser
app.use(express.urlencoded({ extended: false }));

// views and static paths
const viewsPath = path.join(fileURLToPath(new URL('.', import.meta.url)), 'views' );
const staticPath = path.join(fileURLToPath(new URL('.', import.meta.url)), 'public' );

// serve static files
app.use(express.static(staticPath));

// template engine
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// routers
app.use('/', frontPageRouter);
app.use("/login", loginPageRouter);
app.use("/register", registerPageRouter);

// errors: page not found
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message || 'Something went wrong',
        error: app.get('env') === 'development' ? err : {},
    });
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`.green.bold);
});

// Configure express-session
app.use(cookieParser());
app.use(
    session({
        secret: 'key123wowow', // Replace with a strong secret key
        resave: false,
        saveUninitialized: true,
    })
);

export default app;
