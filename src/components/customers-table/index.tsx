import React from 'react';
import { ICustomer } from '../../reducers/customerReducer';
import { Link } from 'react-router-dom';

interface IProps {
    customers: ICustomer[];
    deleteCustomer: (id:Number|undefined) => void
}

const CustomerTable: React.FC<IProps> = ({customers,deleteCustomer }) => {
  return (

    <table className="table table-bordered">
        <thead className="thead-light">
            <tr>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {customers && customers.map(customer =>
                <tr key={customer.id} data-automation='customer-row'>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.DOB}</td>
                    <td>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group" style={{ marginBottom: "20px" }}>
                                <Link to={`edit/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edit </Link>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteCustomer(Number(customer.id))}>Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
  );
}

export default CustomerTable;
