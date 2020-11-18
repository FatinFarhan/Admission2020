export const createRoutine = (routine) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('routine').add({
        ...routine,
        Date: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_ROUTINE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_ROUTINE_ERROR' }, err);
      });
    }
  };