const initState = {
    routine: [
    ]
  }
  
  const routineReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_ROUTINE_SUCCESS':
        console.log('create routine success');
        return state;
      case 'CREATE_ROUTINE_ERROR':
        console.log('create routine error');
        return state;
      default:
        return state;
    }
  };
  
  export default routineReducer;