import { customerReducer } from './customerReducer'
import { ICustomerCreateAction, ICustomerDeleteAction, ICustomerEditAction } from '../actions/customerActions'

const customers = [
    {
        id: 1,
        firstName: 'Ross',
        lastName: 'Geller',
        DOB: '11/03/1950',
    },
    {
        id: 2,
        firstName: 'Rachel',
        lastName: 'Green',
        DOB: '01/06/1955',
    },
]
describe('Testing customerReducer', () => {
    const state = {
        customers: customers,
    }
    test('When event is CREATE_CUSTOMER, it should add the new customer to list ', () => {
        const action = {
            type: 'CREATE_CUSTOMER',
            data: {
                firstName: 'John',
                lastName: 'Doe',
                DOB: '3/5/1977',
            },
        }
        const result = customerReducer(state, <ICustomerCreateAction>action)
        expect(result.customers).toMatchSnapshot()
    })
    test('When event is DELETE_CUSTOMER, it should delete the item from the list', () => {
        const action = {
            type: 'DELETE_CUSTOMER',
            id: 1,
        }
        const result = customerReducer(state, <ICustomerDeleteAction>action)
        expect(result.customers).toMatchSnapshot()
    })
    test('When event is EDIT_CUSTOMER, it should delete the item from the list', () => {
        const action = {
            type: 'EDIT_CUSTOMER',
            id: 1,
            data: {
                firstName: 'Tom',
                lastName: 'Cruz',
                DOB: '5/7/1967',
            },
        }
        const result = customerReducer(state, <ICustomerEditAction>action)
        expect(result.customers).toMatchSnapshot()
    })
})
