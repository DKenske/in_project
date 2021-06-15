export function GetComicsRequest(offset, searchType, searchString) {
  return {
    type: '@comics/GET_COMICS_REQUEST',
    payload: { offset, searchType, searchString },
  };
}

export function GetComicsSuccess(data) {
  return {
    type: '@comics/GET_COMICS_SUCCESS',
    payload: { data },
  };
}

export function GetComicsFailure(error) {
  return {
    type: '@comics/GET_COMICS_FAILURE',
    payload: { error },
  };
}
