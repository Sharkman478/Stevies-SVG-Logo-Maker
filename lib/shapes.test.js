const shapes = require('../lib/shapes.js');
/* <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text> */
describe('shapes', () => {
    describe('Triangle', () => {
        it('should be blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
        it('should be red circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="red" />')
        });
        it('should be green square', () => {
            const shape = new Square();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />')
        });
    })
})