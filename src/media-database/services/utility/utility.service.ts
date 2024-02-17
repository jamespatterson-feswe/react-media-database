import { BehaviorSubject, Observable, of } from 'rxjs';

/** add new variable to the state type */
type UtilityState = {
  width: number;
};

/** set an initial value for the new variable in the initial state */
let initialState = {
  width: 0
};

/** state reactive variable, immutable directly */
const state: BehaviorSubject<UtilityState> = new BehaviorSubject<UtilityState>(initialState);

/** screen width logic */
const getScreenWidth = (): Observable<number> => {
  /** get width */
  return of(state.getValue().width ?? 0);
};

const setScreenWidth = (width: number): void =>
  /** set width */
  state.next({ ...state.getValue(), width: width });

/** service object to add public variables/functions to export */
const service: UtilityService = {
  getScreenWidth: getScreenWidth,
  setScreenWidth: setScreenWidth
};

/** a type for the public service being exported */
type UtilityService = {
  getScreenWidth: Function;
  setScreenWidth: Function;
};

/** alias service to align with React naming conventions */
export { service as UtilityService };
