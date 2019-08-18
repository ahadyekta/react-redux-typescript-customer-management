import React from 'react'
import List from './component'
import { shallow } from 'enzyme'

jest.mock('react-router-dom', () => {
    return {
        Link: ({ to }: { to: string }): JSX.Element => <a href={to}></a>,
    }
})

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

describe('Testing List Page', () => {
    const deleteCustomer = jest.fn()
    test('Should render all parts when customers exist', () => {
        const Wrapper = shallow(<List customers={customers} deleteCustomer={deleteCustomer} />)
        expect(Wrapper.find('#search').exists()).toBeTruthy()
        expect(Wrapper.find('CustomerTable').exists()).toBeTruthy()
        expect(Wrapper.find('CustomerTable').prop('customers')).toEqual(customers)
        expect(Wrapper.find('Link').prop('to')).toEqual('/create')
    })

    test('Should render error when there is no customer', () => {
        const Wrapper = shallow(<List customers={[]} deleteCustomer={deleteCustomer} />)
        expect(Wrapper.find('h2').text()).toEqual('No customer found')
    })
})
