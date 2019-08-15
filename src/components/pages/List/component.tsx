import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICustomer } from '../../../reducers/customerReducer';
import CustomerTable from '../../customers-table';

interface IProps {
    customers: ICustomer[];
    deleteCustomer: (id:Number|undefined) => void
}

interface IState {
    customers: ICustomer[];
}

class List extends React.Component<IProps,IState> {

    state={
     customers: this.props.customers
    }
    deleteCustomer = (id: Number|undefined) => {
        this.props.deleteCustomer(id)
    }

    componentDidUpdate(prevProps:IProps){
        if(prevProps.customers !== this.props.customers){
            this.setState({customers:this.props.customers})
        }
    }
    public searchCustomer = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const query = e.currentTarget.value
        if(e.currentTarget.value){
            const customers = this.props.customers.filter((customer: ICustomer) => 
                (customer.first_name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                 customer.last_name.toLowerCase().indexOf(query.toLowerCase()) > -1))
            this.setState({customers:customers})
        }else{
            this.setState({customers:this.props.customers})
        }
    }
    public render() {
        const customers = this.state.customers;
        return (
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>No customer found at the moment</h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <div className="form-group col-md-12 search">
                            <input type="text" id="search" onChange={(e) => this.searchCustomer(e)} name="search" className="form-control" placeholder="Search firstName or lastName..." />
                        </div>
                    </div>
                    <div className="row">
                        <CustomerTable customers={this.state.customers} deleteCustomer={this.deleteCustomer} />
                    </div>
                    <div className='row'>
                        <Link to={'/create'} className='btn btn-primary'> Create </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default List