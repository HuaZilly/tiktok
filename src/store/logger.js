const logger = reducer =>{
    return(prevState, action) => {
        console.group(action.type)
        console.log('PrevState: ' + prevState);
        const nextState = reducer(prevState, action);
        console.log(action);
        console.log(nextState);
        console.groupEnd();
        return nextState;
    }
}

export default logger;