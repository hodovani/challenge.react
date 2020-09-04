import { FETCH_NAME_SUCCESS } from '../actions';

type Props = {
  type: string;
  payload: IItem;
};

const INITIAL_STATE: IItem[] = [];

export default (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    case FETCH_NAME_SUCCESS:
      return [payload, ...state];
    default:
      return state;
  }
};
