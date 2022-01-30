// import using require
let Shape = require('./shape')

// declare class
export class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    calculateArea() {
        console.log(`${this.color}  area is calculated`)

    }
}
// export class using module.exports
module.exports = Circle