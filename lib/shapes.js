class shapes {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        return "";
    }
}

class Triangle extends shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}
class Circle extends shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`;
    }
}
class Square extends shapes {
    render() {
        return `<rect width="100" height="100" fill="${this.shapeColor}" />`;
    }
}

module.exports = shapes;