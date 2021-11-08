function logger(reducer) {
  return (prevState, action) => {
    const newState = reducer(prevState, action);
    return newState;
  };
}

export default logger;
