const initState = {
    result: []}
  
  const resultReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_RESULT_SUCCESS':
        console.log('create result success');
        return state;
      case 'CREATE_RESULT_ERROR':
        console.log('create result error');
        return state;
      default:
        return state;
    }
  };
  
  export default resultReducer;