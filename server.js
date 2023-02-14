import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const port = 8000;



app.get('/', async function(req, res){
    const app_id = 'ADD openexchangerates.org APP ID CODE HERE';
    const country_code = req.query.code;

    const querystring = `app_id=${app_id}&symbols=${country_code}`;

    const response = await fetch('https://openexchangerates.org/api/latest.json?' + querystring );
    const data = await response.json();
    if (response.status == 200){
        console.log(data);
        res.send({exchange_rate: data.rates[country_code]});
    }
    

})

app.listen(port, ()=> console.log('Server Started'));