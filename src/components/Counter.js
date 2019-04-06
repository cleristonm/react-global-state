import React from 'react';
import useGlobal from '../store/store';

const Counter = (props) => {
    const [ globalState, setGlobalState ] = useGlobal();

    const add1Global = () => {        
        const newCounterValue = globalState.counter + 1;
        setGlobalState( { counter: newCounterValue });
    }

    const add5Global = () => {
        const newCounterValue = globalState.counter + 5;
        setGlobalState( { counter: newCounterValue });
    }

    return (
        <div>
            <p>
                counter : {globalState.counter}
            </p>
            <button type="button" onClick={add1Global}>+1 to Global</button>
            <button type="button" onClick={add5Global}>+5 to Global</button>
        </div>
    );
};

export default Counter;