import * as app from './App';
import * as math from './math';
/* Descipción, no entiendo muy bien pero trataré de explicarme
al inicio guardamos la función original en una variable (originalAdd)
luego a la funcion (math.add) le damos la implementacion de la función original
(jest.fn(originalAdd)) luego se realiza el test de cada donde una evaluamos 
el resultado que nos dará y en la otra el test del funcionamiento. 
Después de anula la implementación que se hizo al inicio (en el codigo me marca
que no existe, no es posible) pero al correr el test desde "npm run test" no
recibo ningún error. Al anular la implementación se le indica que todo los
llamados van a retornar "mock", luego se testean ambos.
Al final se da a la función el valor de la función original (se regresa a su estado
inicial) y testeamos normal.*/
test("calls math.add", () => {
    const originalAdd = math.add;

    math.add = jest.fn(originalAdd);

    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);

    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);

    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3)
})