/**
 * @steps The following steps will be how to add state for new slices within the system
 *          1. Add a new enum, Example = 'Example'
 *          2. Add/Update the component slice, Add ExampleSlice
 *              a. If a new component slice was added
 *                  - Add the component slice to the Slices type
 *          3. Add/Update the slice in the store
 *              a. update the Type in the store, {} as Slice<typeof Components.Example>
 *          4. Finally, test it out
 */

enum Components {
  Header = 'HeaderSlice',
  Footer = 'FooterSlice',
  Main = 'MainSlice'
}

export interface HeaderSlice {
  movies: string;
  music: string;
  title: string;
  tv: string;
}

export interface FooterSlice {}

export interface MainSlice {}

// Define a union type for all possible slice types
type Slices = HeaderSlice | FooterSlice | MainSlice;

// Define the TypeName type using conditional types
export type Slice<T> = T extends Components ? Slices : unknown;

const store: Record<Components, HeaderSlice | unknown> = {
  [Components.Footer]: {} as Slice<typeof Components.Footer>,
  [Components.Header]: {
    movies: 'Movies',
    music: 'Music',
    title: 'Media Database',
    tv: 'Television Show'
  } as Slice<typeof Components.Header>,
  [Components.Main]: {} as Slice<typeof Components.Main>
};

export const setComponentSlice = (component: Components, state: any): void => {
  let _state = JSON.parse(JSON.stringify(store));
  const slice = _state[component];
  if (slice) {
    _state = { ..._state, [component]: state };
  }
};

/** @todo FINISH THIS */
export const setComponentSliceState = (
  component: Components,
  property: string,
  state: any
): void => {
  let _state = JSON.parse(JSON.stringify(store));
  const slice = _state?.[component];
  let prop = slice?.[property];
  console.log(prop, state);
};
