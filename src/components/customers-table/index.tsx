import React from 'react'
import { ICustomer } from '../../reducers/customerReducer'
import { Link } from 'react-router-dom'
import {
    FIRSTNAME_LABEL,
    LASTNAME_LABEL,
    DOB_LABEL,
    ACTION_LABEL,
    EDIT_LABEL,
    DELETE_LABEL,
    EDIT_URL,
} from '../../constansts'

interface IProps {
    customers: ICustomer[]
    deleteCustomer: (id: number | undefined) => void
}

const CustomerTable: React.FC<IProps> = ({ customers, deleteCustomer }) => {
    return (
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    <th scope="col">{FIRSTNAME_LABEL}</th>
                    <th scope="col">{LASTNAME_LABEL}</th>
                    <th scope="col">{DOB_LABEL}</th>
                    <th scope="col">{ACTION_LABEL}</th>
                </tr>
            </thead>
            <tbody>
                {customers &&
                    customers.map(customer => (
                        <tr key={customer.id} data-automation="customer-row">
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.DOB}</td>
                            <td>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group" style={{ marginBottom: '20px' }}>
                                        <Link
                                            to={`${EDIT_URL}/${customer.id}`}
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            {EDIT_LABEL}{' '}
                                        </Link>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={(): void => {
                                                deleteCustomer(Number(customer.id))
                                            }}
                                        >
                                            {DELETE_LABEL}
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default CustomerTable
