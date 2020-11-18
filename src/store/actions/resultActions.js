export const createResult = (result) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = result.Name;
      const lecture = result.Lecture;
      firestore.collection(profile).doc(lecture).set({
        ...result,
      }).then(() => {
        dispatch({ type: 'CREATE_RESULT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_RESULT_ERROR' }, err);
      });
    }
  };
