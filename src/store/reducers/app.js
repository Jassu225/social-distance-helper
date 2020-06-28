const initialState = {};

const app = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

export default app;
