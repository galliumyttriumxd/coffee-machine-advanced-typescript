import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {

    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");


  });

  it('serves tea and returns change', () => {

    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2.50, false, 10)).toBe("Serving Coffee (small) with change 0.50");

  });

  it('applies milk surcharge', () => {

    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, true, 0, "small");

    expect(machine.serve(drink, 2.20, false, 10)).toBe("Serving Coffee (small)");

  });

  it('applies sugar surcharge above 2 cubes', () => {

    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 3, "small");

    expect(machine.serve(drink, 2.10, false, 10)).toBe("Serving Coffee (small)");

  });
});
