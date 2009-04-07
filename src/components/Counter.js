import React from 'react';
import useGlobal from '../store/store';

const Counter = (props) => {
    const [ globalState, globalActions ] = useGlobal();
    
  
    return (
        <div>
            <p>
                counter : {globalState.counter}
            </p>
            <button type="button" onClick={ () => globalActions.addToCounter(1) }>+1 to Global</button>
            <button type="button" onClick={ () => globalActions.addToCounter(5) }>+5 to Global</button>
            <button type="button" onClick={ () => globalActions.removeToCounter(1) }>-1 to Global</button>
            <button type="button" onClick={ () => globalActions.multiplyToCounter(2) }>x2 to Global</button>
            <button type="button" onClick={ () => globalActions.complexToCounter(3,5,7,9) }>complex to Global</button>
        </div>
    );
};

export default Counter;