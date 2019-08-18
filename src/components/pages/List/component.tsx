import * as React from 'react'
import { Link } from 'react-router-dom'
import { ICustomer } from '../../../reducers/customerReducer'
import CustomerTable from '../../customers-table'
import { NO_CUSTOMER_FOUND_LABEL, CREATE_LABEL, SEARCH_PLACEHOLDER, CREATE_URL } from '../../../constansts'

interface IProps {
    customers: ICustomer[]
    deleteCustomer: (id: number | undefined) => void
}

interface IState {
    customers: ICustomer[]
}

class List extends React.Component<IProps, IState> {
    state = {
        customers: this.props.customers,
    }
    deleteCustomer = (id: number | undefined): void => {
        this.props.deleteCustomer(id)
    }

    componentDidUpdate(prevProps: IProps): void {
        if (prevProps.customers !== this.props.customers) {
            this.setState({ customers: this.props.customers })
        }
    }
    public searchCustomer = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        const query = e.currentTarget.value
        if (e.currentTarget.value) {
            const customers = this.props.customers.filter(
                (customer: ICustomer) =>
                    customer.firstName.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    customer.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1,
            )
            this.setState({ customers: customers })
        } else {
            this.setState({ customers: this.props.customers })
        }
    }
    public render(): JSX.Element {
        const customers = this.state.customers
        return (
            <div>
                {customers.length === 0 && (
                    <div className="text-center">
                        <h2>{NO_CUSTOMER_FOUND_LABEL}</h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <div className="form-group col-md-12 search">
                            <input
                                type="text"
                                id="search"
                                onChange={(e): void => {
                                    this.searchCustomer(e)
                                }}
                                name="search"
                                className="form-control"
                                placeholder={SEARCH_PLACEHOLDER}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <CustomerTable customers={this.state.customers} deleteCustomer={this.deleteCustomer} />
                    </div>
                    <div className="row">
                        <Link to={CREATE_URL} className="btn btn-primary">
                            {' '}
                            {CREATE_LABEL}{' '}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default List
