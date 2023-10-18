class Circle {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="100" cy="100" r="80" fill="${this.shapeColor}" /><text x="100" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
module.exports = Circle