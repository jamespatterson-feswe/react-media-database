import { scan } from 'rxjs';
import { HeaderActions, action$ } from '../../actions';
import { Action, State } from '../../shared';

/** define local interface that extends base State interface */
interface HeaderState extends State {
  title: string;
}

/** define the initial state for the reducer */
const initialState: HeaderState = {
  title: ''
};

/**
 * @description To return state depending on the action
 *
 * @function handleHeaderAction
 * @returns string | State
 */
const handleHeaderAction: Function = (state: State, action: Action) => {
  switch (action.type) {
    case HeaderActions.GET_TITLE:
      return state.title;
    case HeaderActions.UPDATE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

const titleReducer$ = action$.pipe(
  scan((state: State, action: Action) => handleHeaderAction(state, action), initialState)
);

export const headerState$ = titleReducer$;
