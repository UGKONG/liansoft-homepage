// Store Dispatch
export type Dispatch = {
  type: keyof Store;
  payload: any;
};

// Store State
export type Store = {
  scroll: number;
  pageName: null | string;
  isNotice: boolean;
};
