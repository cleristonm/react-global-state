import React from 'react';
import useCustom from '../store/customHook';

const Counter = () => {
    const [ globalState, setGlobalState ] = useCustom();

    const add1Global = () => {
        const newCounterValue = globalState.counter + 1;
        setGlobalState( { counter: newCounterValue });
    }

    return (
        <div>
            <p>
                counter : {globalState.counter}
            </p>
            <button type="button" onClick={add1Global}>+1 to Global</button>
        </div>
    );
};

export default Counter;