// 타입 정의
export const ADD_AGE = 'ADD_AGE';

export const START_GITHUB_API = 'START_GITHUB_API';
export const ERROR_GITHUB_API = 'ERROR_GITHUB_API';
export const END_GITHUB_API = 'END_GITHUB_API';

// 타입 생성 함수
export function addAge(): { type: string; } {
  return {
    type: ADD_AGE
  };
}

export function startGithubApi(): { type: string; } {
  return {
    type: START_GITHUB_API
  };
}
export function errorGithubApi(): { type: string; } {
  return {
    type: ERROR_GITHUB_API
  };
}
export function endGithubApi(age: number): { type: string; age: number; } {
  return {
    type: END_GITHUB_API,
    age
  };
}