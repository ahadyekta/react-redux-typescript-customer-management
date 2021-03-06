import React from 'react'
import Form from './component'
import { mount, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

const customer = {
    id: 2,
    firstName: 'Rachel',
    lastName: 'Green',
    DOB: '01/06/1955',
}

describe('Testing Form Page', () => {
    test('When its create page, it should show all fields without value', () => {
        const editCustomer = jest.fn()
        const createCustomer = jest.fn()
        const Wrapper = mount(
            <BrowserRouter>
                <Form customer={undefined} editCustomer={editCustomer} createCustomer={createCustomer} isEdit={false} />
            </BrowserRouter>,
        )
        expect(Wrapper.find('h2').text()).toEqual('Create customer')
        expect(Wrapper.find('#firstName').prop('defaultValue')).toEqual('')
        expect(Wrapper.find('#lastName').prop('defaultValue')).toEqual('')
        expect(Wrapper.find('#DOB').prop('defaultValue')).toEqual('')
    })
    test('When its Edit page, it should show all fields with value', () => {
        const editCustomer = jest.fn()
        const createCustomer = jest.fn()
        const Wrapper = mount(
            <BrowserRouter>
                <Form customer={customer} editCustomer={editCustomer} createCustomer={createCustomer} isEdit={true} />
            </BrowserRouter>,
        )
        expect(Wrapper.find('h2').text()).toEqual('Edit customer')
        expect(Wrapper.find('#firstName').prop('defaultValue')).toEqual('Rachel')
        expect(Wrapper.find('#lastName').prop('defaultValue')).toEqual('Green')
        expect(Wrapper.find('#DOB').prop('defaultValue')).toEqual('01/06/1955')
    })
})
