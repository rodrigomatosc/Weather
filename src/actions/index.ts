import {LOADING} from './actionTypes';

export const loading = (value: boolean) => ({
  type: LOADING,
  newValue: value,
});
