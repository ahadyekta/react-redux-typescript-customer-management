import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { customerReducer, ICustomerState } from './reducers/customerReducer'

// Create an interface for the application state
export interface IAppState {
    customerState: ICustomerState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    customerState: customerReducer,
})

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
    return store
}
