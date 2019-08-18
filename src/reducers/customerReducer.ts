// Import Reducer type
import { Reducer } from 'redux'
import { CustomerActionTypes, CustomerActions } from '../actions/customerActions'
import customerData from '../data/customerData.json'

// Define the Character type
export interface ICustomer {
    id?: number
    firstName: string
    lastName: string
    DOB: string
}

// Define the Character State
export interface ICustomerState {
    readonly customers: ICustomer[]
}

// Define the initial state
const initialCustomerState: ICustomerState = {
    customers: customerData.customers,
}

export const customerReducer: Reducer<ICustomerState, CustomerActions> = (state = initialCustomerState, action) => {
    switch (action.type) {
        case CustomerActionTypes.CREATE_CUSTOMER: {
            const id =
                state.customers.length > 0
                    ? state.customers[state.customers.length - 1] &&
                      state.customers[state.customers.length - 1].id &&
                      Number(state.customers[state.customers.length - 1].id) + 1
                    : 1 //last customer id
            return {
                ...state,
                customers: [...state.customers, { ...action.data, id }],
            }
        }
        case CustomerActionTypes.DELETE_CUSTOMER: {
            const refinedCustomers = state.customers.filter(({ id }: ICustomer) => id !== action.id)
            return {
                ...state,
                customers: refinedCustomers,
            }
        }
        case CustomerActionTypes.EDIT_CUSTOMER: {
            const refinedCustomers = state.customers.map((customer: ICustomer) => {
                if (customer.id === action.id) {
                    return { ...action.data, id: action.id }
                } else {
                    return { ...customer }
                }
            })
            return {
                ...state,
                customers: refinedCustomers,
            }
        }
        default:
            return state
    }
}
