

export class Individual {
    private readonly INTEGER16_MAX = 0xffff; 
    private readonly SHIFT         = 16;

    private readonly MIN           = -10.0;
    private readonly MAX           =  10.0;

    constructor(public genom: number) {}

    get fitness() { return 5 * Math.pow(Math.sin(this.x), 3) * Math.cos(this.x); }// * Math.log(this.y); }

    get x() { return this.int16ToDouble(this.xBits); }
    get y() { return this.int16ToDouble(this.yBits); }

    private get xBits() { return this.genom >> this.SHIFT & this.INTEGER16_MAX; }
    private get yBits() { return this.genom & this.INTEGER16_MAX; }

    private int16ToDouble(int16: number) { 
        return int16 * (this.MAX - this.MIN) / (this.INTEGER16_MAX) + this.MIN 
    }
}