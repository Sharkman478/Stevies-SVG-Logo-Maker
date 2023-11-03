class Shapes {
    constructor() {
        this.shapeColor = "";
        this.text = "";
        this.textColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
  }
  
  class Triangle extends Shapes {
    renderColor() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Circle extends Shapes {
    renderColor() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shapes {
    renderColor() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }
  
  function generateSvg(answers) {
    let shape = '';
    switch (answers.shape) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);
    shape.setText(answers.text);
    shape.setTextColor(answers.textColor);
    
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    
    ${shape.renderColor()}
    
    ${shape.renderText()}
  
    </svg>`
  }
  
  module.exports = {Triangle:Triangle, Circle:Circle, Square:Square, generateSvg};