import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import actionTypes from './phonebook/phonebook-types'
const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
}
const contactReducer = (state = initialState.contacts, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [payload, ...state];
        case actionTypes.DELETE:
            return state.filter(contact => contact.id !== payload)
        default:
            return state;
    }
}
const filterReducer = (state = "", { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
            return payload;
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer
})
const rootReducer1 = (state = initialState, action) => state;
const store = createStore(rootReducer, composeWithDevTools());
export default store;