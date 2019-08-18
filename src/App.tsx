import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import List from './components/pages/List/.'
import Form from './components/pages/Form/.'
import { CREATE_URL, LIST_URL, EDIT_URL } from './constansts'

const App: React.FC = () => {
    return (
        <HashRouter basename="/">
            <Route path={LIST_URL} exact component={List} />
            <Route path={CREATE_URL} exact component={Form} />
            <Route path={`${EDIT_URL}/:id`} exact component={Form} />
        </HashRouter>
    )
}

export default App
