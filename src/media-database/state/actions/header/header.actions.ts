import { Observable, Subject } from 'rxjs';
import { Action } from '../../shared';

/** define enums for actions */
export enum HeaderActions {
  UPDATE_TITLE = 'UPDATE_TITLE',
  GET_TITLE = 'GET_TITLE'
}

/** extend the base Action and define what our payload will be for this instance */
export interface UpdateTitleAction extends Action {
  payload: string;
}

/** exporting a type that can be the predefined actions */
export type HeaderAction = Action | UpdateTitleAction;

/** private/public schema for reactive action selection */
const action: Subject<HeaderAction> = new Subject<HeaderAction>();
export const action$: Observable<HeaderAction> = action.asObservable();

/** dispatch function to handle setting the action being triggered */
export const dispatch$: Function = (_action: HeaderAction) => action.next(_action);
