
export class StockHistory {
    symbol!: string;
    historicalPrices!: HistoricalData[];

    constructor(sym: string, history: HistoricalData[] ){
        this.symbol = sym;
        this.historicalPrices = history;
    }
}

export class HistoricalData{

    date!: string;
    close!: number;

    constructor(tim: string, pri: number){
        this.date = tim;
        this.close = pri;
    }
}