// Store Dispatch
export type Dispatch = {
  type: keyof Store;
  payload: any;
};

// Store State
export type Store = {
  isTop: boolean;
  pageName: null | string;
};
