import { useState, useEffect } from 'react';

let listeners = [];
let state = { counter: 0}


const setState = (newState) => {            
    state = { ...state, ...newState };    
    
    listeners.forEach((listener) => { 
        //this will update the new state on the listeners        
        listener(state);
    });
}

const useCustom = () => {    
    const newListener = useState()[1];    
    useEffect( () => {         
        // Called just after component mount       
        listeners.push(newListener);
        
        /*
        if the useEffect returns another function, this another function will be fired just before the component is unmounted. Exactly like componentWillUnmount().
        */
        return () => {
            // Called just before the component umount
            listeners = listeners.filter(listener => listener !== newListener);
            console.log("Unmount");
            
        }
    }, []);

    return [ state, setState ];
}

export default useCustom;

