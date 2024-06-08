import { TActionRedux } from '@/common';
import set from 'lodash/set';

export const doAction = (opts: TActionRedux) => opts;

const setState = (state: any, { key, value, mode }: any) => {
  const typeOfEl = typeof value;

  switch (typeOfEl) {
    case 'object': {
      if (value instanceof Set) {
        set(state, key, new Set([...value]));
        break;
      }

      if (value instanceof Array) {
        set(state, key, [...value]);
        break;
      }

      switch (mode) {
        case 'replace': {
          set(state, key, { ...value });
          break;
        }
        default: {
          set(state, key, { ...state[key], ...value });
          break;
        }
      }
      break;
    }
    default: {
      set(state, key, value);
      break;
    }
  }

  return { ...state };
};

export const doSetValue = (state: any, action: any) => {
  const { data } = action;
  const isDataArray = Array.isArray(data);
  if (isDataArray) {
    for (const el of data) {
      const { key, value, mode } = el;
      state = setState(state, { key, value, mode });
    }
  } else {
    const {
      payload: { type, value, mode },
    } = action;
    state = setState(state, { type, value, mode });
  }
  return { ...state };
};
