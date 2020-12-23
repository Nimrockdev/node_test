
const suma = require('../sum');

describe('Test para operaciones matemáticas', () => {

    test('La suma tiene que ser 3', () => {
        expect(suma(1, 2)).toBe(3);
    });
    
    
    test('La suma tiene que ser 3', () => {
        expect(suma(1, 5)).toBe(3);
    });
      
})
