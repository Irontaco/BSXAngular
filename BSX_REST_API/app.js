const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

//JSON data.
let symbolsData = require('./json/symbols.json');
let historicalData = require('./json/historical.json');

const app = express();
const port = 9090;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Symbols GET filtered by symbol.
app.get("/api/symbols/:symbol", (req, res) =>{

    try{

        //Iterate through the symbolsList...
        for(let i=0;symbolsData.symbolsList.length;i++){

            //If the request parameter is equal to the symbol in the current symbol index, then we send it as a JSON response.
            if(symbolsData.symbolsList[i].symbol == req.params.symbol){
                res.json(symbolsData.symbolsList[i]);
                return;
            }
        }
    }catch(err){

        //Bad request - send ERROR 400.
        return res.status(400).send(err);
    }
    
});

//HistoricalStockList GET filtered by symbol.
app.get("/api/historical/:symbol", (req, res) =>{

    try{

        for(let i=0;historicalData.historicalStockList.length;i++){

            if(historicalData.historicalStockList[i].symbol == req.params.symbol){
                res.json(historicalData.historicalStockList[i]);
                return;
            }
        }
    }catch(err){
        return res.status(400).send(err);
    }
    

});

//Symbols GET.
app.get('/api/symbols', (req, res) =>{
    res.json(symbolsData);
});

//HistoricalStockList GET.
app.get('/api/historical', (req, res) =>{
    res.json(historicalData);
});


app.listen(port, () => console.log(`Servidor activo en el puerto... ${port}!`));