import Component from './component'
import { IAppState } from '../../../Store'
import { connect } from 'react-redux'
import { createCustomer, editCustomer } from '../../../actions/customerActions'
import { ICustomer } from '../../../reducers/customerReducer'

interface StateProps {
    customer: ICustomer | undefined
    isEdit: boolean
}

const mapStateToProps = (store: IAppState, ownProps: { match: { params: { id: string | undefined } } }): StateProps => {
    return {
        customer: store.customerState.customers.find(({ id }) => id === Number(ownProps.match.params.id)),
        isEdit: !!ownProps.match.params.id,
    }
}

const mapDispatchToProps = {
    createCustomer: createCustomer,
    editCustomer: editCustomer,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component)
