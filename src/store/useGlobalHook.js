
function setState(newState){
    this.state = { ...this.state, ...newState };    
    
    this.listeners.forEach((listener) => { 
        //this will update the new state on the listeners        
        listener(this.state);
    });
}

function useCustom(React){
    const newListener = React.useState()[1];    
    React.useEffect( () => {         
        // Called just after component mount       
        this.listeners.push(newListener);
        
        /*
        if the useEffect returns another function, this another function will be fired just before the component is unmounted. Exactly like componentWillUnmount().
        */
        return () => {
            // Called just before the component umount
            this.listeners = this.listeners.filter(listener => listener !== newListener);
        }
    }, []);

    return [ this.state, this.actions ];
}

function associateActions(store, actions){
    const associateActions  = {};

    Object.keys(actions).forEach((key) => {
        if (typeof actions[key] === 'function'){
            associateActions[key] = actions[key].bind(null, store);
        }

        if (typeof actions[key] === 'object'){
            associateActions[key] = associateActions(store, actions[key]);
        }
    });
    console.log(associateActions)
    return associateActions;

}
const useGlobalHook = (React, initialState, actions) => {
    const store = { state: initialState, listeners: [] };    
    // the store in bind function will be the this
    store.setState = setState.bind(store);
    store.actions = associateActions(store, actions);
    return useCustom.bind(store, React);
}

export default useGlobalHook;

