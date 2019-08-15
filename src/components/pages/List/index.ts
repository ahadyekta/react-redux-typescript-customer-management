
import { IAppState } from '../../../Store';
import { connect } from 'react-redux';
import { deleteCustomer } from '../../../actions/customerActions';
import Component from './component'

const mapStateToProps = (store: IAppState) => ({
    customers: store.customerState.customers,
});
  
const mapDispatchToProps = {
    deleteCustomer,
  }
export default connect(mapStateToProps,mapDispatchToProps)(Component);