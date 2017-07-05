import {ADD_AGE, START_GITHUB_API, ERROR_GITHUB_API, END_GITHUB_API} from '../action';

export function ageApp(state: { age: number; } = {age: 35}, action: { type: string; age: number; }): { age: number; } {
  if (action.type === ADD_AGE) {
    return {age: state.age + 1};
  } else if (action.type === START_GITHUB_API) {
    return {age: 0};
  } else if (action.type === ERROR_GITHUB_API) {
    return {age: 35};
  } else if (action.type === END_GITHUB_API) {
    return {age: action.age};
  }
  return state;
}