import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';


describe('CoffeeMachine errors', () => {
  it('throws error at too much sugar', () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 100000000000000, "small");
    
    // const wrapper:() => string = () :string => machine.serve(drink, 2, false, 10)
    const wrapper=() => machine.serve(drink, 2, false, 10)

    expect(wrapper).toThrow('Too much sugar')

  });
    // da sa aj takto zapisat
    it('throws error at too much sugar alternative syntax', () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 100000000000000, "small");
        
        try {
            machine.serve(drink, 5, false, 10);
        } catch (err) {
            expect(err).toEqual(new Error('Too much sugar'))
        }

        // // const wrapper:() => string = () :string => machine.serve(drink, 2, false, 10)
        // const wrapper=() => machine.serve(drink, 2, false, 10)
    
        // expect(wrapper).toThrow('Too much sugar')
    
      });
        
      it('throws error at not enough money', () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 1, "small");
        
        const wrapper=() => machine.serve(drink, 1, false, 10)
    
        expect(wrapper).toThrow('Not enough money')
    
      });
});
