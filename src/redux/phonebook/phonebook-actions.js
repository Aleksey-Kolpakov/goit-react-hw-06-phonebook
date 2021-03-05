import actionTypes from './phonebook-types'

const addContact = contact => ({
    type: actionTypes.ADD,
    payload: contact
})

const deleteContact = id => ({
    type: actionTypes.DELETE,
    payload: id
})

const changeFilter = value => ({
    type: actionTypes.CHANGE_FILTER,
    payload: value
})

export default { addContact, deleteContact, changeFilter }