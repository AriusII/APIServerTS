import express from 'express'
const app = express()
const port = 443


import routes from './routes/index'
import users from './routes/user'

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use((err: { status: any; message: any }, req: any, res: { status: (arg0: any) => void; render: (arg0: string, arg1: { message: any; error: {} }) => void }, next: any) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port');
});