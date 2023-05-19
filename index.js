console.log("hello world");
import express from "express";
import { Madhuri, Swaraj, Anu, Krishnan, Abhi } from './controllers/All-Controllers.js';

const app = express();

app.get('/madhuri', Madhuri);
app.get('/anu', Anu);
app.get('/abhi', Abhi);
app.get('/kirshna', Krishnan);
app.get('/swaraj', Swaraj); // pass two parameters, first is path, second is function
// app.post();
// app.patch();
// app.put();
// app.delete();



app.listen(8000); // port
