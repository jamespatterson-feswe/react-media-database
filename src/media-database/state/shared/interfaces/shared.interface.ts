export interface Action {
  type: any;
  payload?: any;
}

export interface State {
  [key: string]: any;
}
