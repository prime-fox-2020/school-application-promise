const express =  require('express');
const mainRouter = require('./routes');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(mainRouter);

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
}); 