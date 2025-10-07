import { Drink } from '../src/drink';
import { CoffeeMachine } from '../src/coffeeMachine';

import * as notifications from '../src/utils/notifications'

describe('CoffeeMachine notifications (mocks)', () => {

    // const notifyUserSpy = 
    //         jest.spyOn(notifications, 'notifyUser').mockImplementation(jest.fn());

    beforeEach(()=>{
        jest.resetAllMocks()
    })

    // beforeEach(()=>{
    //     notifyUserSpy.mockClear()
    // });
    
    it('notifies user about serving drink', () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 1, "small");
        const notifyUserSpy = 
            jest.spyOn(notifications, 'notifyUser').mockImplementation(jest.fn());
        
        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith('Serving Coffee (small)');
        // expect(notifyUserSpy).toHaveBeenCalledTimes(1);


    });

    it('notifies user about serving other drink', () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee other", 2, false, 1, "small");

        const notifyUserSpy = 
            jest.spyOn(notifications, 'notifyUser').mockImplementation(jest.fn());

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith('Serving Coffee (small)');
        // expect(notifyUserSpy).toHaveBeenCalledTimes(2);

    });
});


