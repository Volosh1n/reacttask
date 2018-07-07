export function select(client) {
  return {
    type: "CLIENT_SELECTED",
    payload: client
  }
};
