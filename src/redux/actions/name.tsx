import { Dispatch } from 'redux';

export const FETCH_NAME_REQUEST: 'fetch_name_request' = 'fetch_name_request';
export const FETCH_NAME_SUCCESS: 'fetch_name_success' = 'fetch_name_success';
export const FETCH_NAME_FAILURE: 'fetch_name_failure' = 'fetch_name_failure';

export type DispatchFetchName = (name: string) => (dispatch: Dispatch) => Promise<IItem>;

export const fetchName: DispatchFetchName = (name: string) => async dispatch =>
  new Promise(
    (resolve, reject): void => {
      dispatch({
        type: FETCH_NAME_REQUEST,
        payload: { resolve, reject, name }
      });
    }
  );
