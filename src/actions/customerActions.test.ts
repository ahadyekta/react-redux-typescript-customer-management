import { createCustomer, CustomerActionTypes, editCustomer, deleteCustomer } from './customerActions'

describe('Testing action creators', () => {
    test('testing createCustomer', () => {
        const data = { foo: 'bar' }
        const dispatch = jest.fn()
        const getState = jest.fn()
        createCustomer(data)(dispatch, getState, null)
        expect(dispatch).toHaveBeenCalledWith({
            data: data,
            type: CustomerActionTypes.CREATE_CUSTOMER,
        })
    })
    test('testing editCustomer', () => {
        const data = { foo: 'bar' }
        const id = 1
        const dispatch = jest.fn()
        const getState = jest.fn()
        editCustomer(data, id)(dispatch, getState, null)
        expect(dispatch).toHaveBeenCalledWith({
            data: data,
            id: id,
            type: CustomerActionTypes.EDIT_CUSTOMER,
        })
    })
    test('testing deleteCustomer', () => {
        const id = 1
        const dispatch = jest.fn()
        const getState = jest.fn()
        deleteCustomer(id)(dispatch, getState, null)
        expect(dispatch).toHaveBeenCalledWith({
            id: id,
            type: CustomerActionTypes.DELETE_CUSTOMER,
        })
    })
})
