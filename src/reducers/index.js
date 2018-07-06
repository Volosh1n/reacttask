import { combineReducers } from 'redux';
import clientsData from '../clients.json';

function clientsReducers() {
  return clientsData
}

const allReducers = combineReducers ({
  clients: clientsReducers
});

export default allReducers
