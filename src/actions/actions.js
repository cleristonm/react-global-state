export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
}

export const removeToCounter = (store, amount) => {
    const counter = store.state.counter - amount;
    store.setState({ counter });
}

export const multiplyToCounter = (store, amount) => {
    const counter = store.state.counter * amount;
    store.setState({ counter });
}

export const complexToCounter = (store, a, b, c, d) => {
    const counter = store.state.counter + (a+b+c+d);
    store.setState({ counter });
}

