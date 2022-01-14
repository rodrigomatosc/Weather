import {LOADING} from '../actions/actionTypes';

const initialState = {
  loading: true,
};
export const load = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
