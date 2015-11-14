const CLICK = 'CLICK';

export default function(state = 0, action) {
  switch(action.type) {
    case CLICK:
      return state + 1;
    default:
     return state;
  }
}

export function click() {
  return { type: CLICK };
}
