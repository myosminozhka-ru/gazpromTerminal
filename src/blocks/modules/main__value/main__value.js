const Value = class Value {
    constructor() {
        this.percents = [20, 30, 20]
    }
    setPercents(percents) {
        console.log(percents);
        this.percents = percents;
    }
    init() {}
}

export default Value;