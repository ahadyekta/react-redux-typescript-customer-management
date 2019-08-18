import React from 'react'
import Table from './'
import { mount } from 'enzyme'

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

describe('Testing Customer Table', () => {
    const deleteCustomer = jest.fn()
    const wrapper = mount(<Table customers={customers} deleteCustomer={deleteCustomer} />)
    test('renders without crashing and generates two rows, two buttons and two edit link', () => {
        expect(wrapper.find('[data-automation="customer-row"]').length).toEqual(2)
        expect(wrapper.find('button').length).toEqual(2)
        expect(wrapper.find('a').length).toEqual(2)
    })
    test('Testing first row to match input data', () => {
        const firstRow = wrapper.find('[data-automation="customer-row"]').at(0)
        expect(
            firstRow
                .find('td')
                .at(0)
                .text(),
        ).toEqual('Ross')
        expect(
            firstRow
                .find('td')
                .at(1)
                .text(),
        ).toEqual('Geller')
        expect(
            firstRow
                .find('td')
                .at(2)
                .text(),
        ).toEqual('11/03/1950')
        expect(
            firstRow
                .find('td')
                .at(3)
                .find('a')
                .prop('href'),
        ).toEqual('/edit/1')
    })

    test('Testing first row delete action', () => {
        const firstRow = wrapper.find('[data-automation="customer-row"]').at(0)
        const button = firstRow
            .find('td')
            .at(3)
            .find('button')
        button.simulate('click')
        expect(deleteCustomer).toHaveBeenCalledWith(1)
    })
})
