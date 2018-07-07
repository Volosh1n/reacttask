export function select(client) {
  console.log(client.general.firstName) // temp
  return {
    type: "CLIENT_SELECTED",
    client
  }
};
