const {Triangle, Circle, Square} = require('./shapes.js');
describe('shapes', () => {
    describe('Triangle', () => {
        it('should be blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toContain(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
        });
    });
    describe('Circle', () => {
        it('should be red circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toContain(`<circle cx="150" cy="100" r="80" fill="red" />`)
        });
    });
    describe('Sqaure', () => {
        it('should be green square', () => {
            const shape = new Square();
            shape.setColor("green");
            expect(shape.render()).toContain(`<rect x="50" y="0" width="200" height="200" fill="green" />`)
        });
    });
})


