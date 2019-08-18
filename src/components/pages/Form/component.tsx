import * as React from 'react'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { ICustomer } from '../../../reducers/customerReducer'
import {
    LIST_URL,
    FIRSTNAME_LABEL,
    LASTNAME_LABEL,
    DOB_LABEL,
    SUBMIT_LABEL,
    NO_CUSTOMER_FOUND_LABEL,
    BACK_LABEL,
    CANCEL_LABEL,
    FIRSTNAME_PLACEHOLDER,
    LASTNAME_PLACEHOLDER,
    DOB_PLACEHOLDER,
    EDIT_CUSTOMER_LABEL,
    CREATE_CUSTOMER_LABEL,
} from '../../../constansts'

export interface IState {
    [key: string]: string
    firstName: string
    lastName: string
    DOB: string
}

interface IRoute {
    id: string | undefined
}
export interface IProps extends RouteComponentProps<IRoute> {
    createCustomer: (data: ICustomer) => void
    editCustomer: (data: ICustomer, id: number) => void
    customer: ICustomer | undefined
    isEdit: boolean
}
class Form extends React.Component<IProps, IState> {
    state = {
        firstName: (this.props.customer && this.props.customer.firstName) || '',
        lastName: (this.props.customer && this.props.customer.lastName) || '',
        DOB: (this.props.customer && this.props.customer.DOB) || '',
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (this.props.isEdit) {
            //edit
            this.props.editCustomer(this.state, Number(this.props.match.params.id))
        } else {
            //create
            this.props.createCustomer(this.state)
        }
        this.props.history.push(LIST_URL)
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className={'col-md-12 form-wrapper'}>
                    <h2>{`${this.props.isEdit ? EDIT_CUSTOMER_LABEL : CREATE_CUSTOMER_LABEL}`}</h2>
                    {!this.props.customer && this.props.isEdit && (
                        <div>
                            <p>{NO_CUSTOMER_FOUND_LABEL}</p>
                            <p>
                                <Link to={LIST_URL} className="btn btn-outline-secondary mr-3">
                                    {BACK_LABEL}
                                </Link>
                            </p>
                        </div>
                    )}
                    {(!this.props.isEdit || this.props.customer) && (
                        <form id={'post-form'} onSubmit={this.processFormSubmission}>
                            <div className="form-group col-md-12">
                                <label htmlFor="firstName"> {FIRSTNAME_LABEL} </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    required={true}
                                    onChange={(e): void => {
                                        this.handleInputChanges(e)
                                    }}
                                    name="firstName"
                                    className="form-control"
                                    placeholder={FIRSTNAME_PLACEHOLDER}
                                    defaultValue={this.state.firstName}
                                />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="lastName"> {LASTNAME_LABEL} </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    required={true}
                                    onChange={(e): void => {
                                        this.handleInputChanges(e)
                                    }}
                                    name="lastName"
                                    className="form-control"
                                    placeholder={LASTNAME_PLACEHOLDER}
                                    defaultValue={this.state.lastName}
                                />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="DOB"> {DOB_LABEL} </label>
                                <input
                                    type="text"
                                    id="DOB"
                                    required={true}
                                    onChange={(e): void => {
                                        this.handleInputChanges(e)
                                    }}
                                    name="DOB"
                                    className="form-control"
                                    placeholder={DOB_PLACEHOLDER}
                                    defaultValue={this.state.DOB}
                                />
                            </div>

                            <div className="form-group col-md-6 btn-toolbar pull-right">
                                <button className="btn btn-success mr-3" type="submit" id="submit">
                                    {SUBMIT_LABEL}
                                </button>
                                <Link to={LIST_URL} className="btn btn-outline-secondary mr-3">
                                    {CANCEL_LABEL}
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        )
    }
}
export default withRouter(Form)
