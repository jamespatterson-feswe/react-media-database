import { Observable, filter } from 'rxjs';
import { HeaderActions, action$ } from '../../actions/index';
import { Action } from '../../shared';

/**
 * @description To filter the Actions for the GET TITLE action
 *
 * @inline
 * @function getTitleEffect$
 * @returns Observable of type Action
 */
export const getTitleEffect$ = (): Observable<Action> =>
  action$.pipe(filter((action: Action) => action.type === HeaderActions.GET_TITLE));

/**
 * @description To trigger the logic to update the title in state
 *
 * @inline
 * @function updateTitleEffect$
 * @returns Observable of type Action
 */
export const updateTitleEffect$ = (): Observable<Action> => {
  return action$.pipe(
    filter((action: Action) => {
      const _action = action?.type === HeaderActions.UPDATE_TITLE;
      console.log(action, _action);
      return _action;
    })
  );
};
