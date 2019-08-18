import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    shallow(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    )
})
