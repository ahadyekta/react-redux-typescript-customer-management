import { IAppState } from '../../../Store'
import { connect } from 'react-redux'
import { deleteCustomer } from '../../../actions/customerActions'
import Component from './component'
import { ICustomerState } from '../../../reducers/customerReducer'

const mapStateToProps = (store: IAppState): ICustomerState => ({
    customers: store.customerState.customers,
})

const mapDispatchToProps = {
    deleteCustomer,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component)
