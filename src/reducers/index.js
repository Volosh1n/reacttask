import { combineReducers } from 'redux';
import clientsData from '../clients.json';
import { active } from './client-active';

const allReducers = combineReducers ({
  clients: () => { return clientsData },
  client: active
});

export default allReducers
