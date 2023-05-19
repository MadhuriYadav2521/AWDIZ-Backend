console.log("hello world");
import express from "express";
import morgan from "morgan";
import { Madhuri, Swaraj, Anu, Krishnan, Abhi } from './controllers/All-Controllers.js';
import router from './routes/UserRoutes.js';

const app = express();

app.use(morgan('dev')); // use() - middleware
app.use(express.json()); // data to parse
app.use('/api/v1', router);


// app.get('/madhuri', Madhuri);
// app.get('/anu', Anu);
// app.get('/abhi', Abhi);
// app.get('/kirshna', Krishnan);
// app.get('/swaraj', Swaraj); // pass two parameters, first is path, second is function
// app.post();
// app.patch();
// app.put();
// app.delete();



// app.listen(8000); // port

app.listen(8000, () => console.log("Working on port 8000")); // port
