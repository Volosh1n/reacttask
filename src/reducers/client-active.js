export function active(state = null, action) {
  return action.type === "CLIENT_SELECTED" ? action.payload : state;
}
