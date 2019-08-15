import * as React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { ICustomer } from '../../../reducers/customerReducer';


export interface IState {
    [key: string]: any;
    first_name: string;
    last_name: string;
    DOB: string;
}

export interface IProps extends RouteComponentProps<any> {
    createCustomer: (data:ICustomer) => void;
    editCustomer: (data:ICustomer, id:Number) => void;
    customer: ICustomer | undefined;
    isEdit: boolean;
}
class Form extends React.Component<IProps, IState> {
    state = {
        first_name: (this.props.customer && this.props.customer.first_name) || '',
        last_name:  (this.props.customer && this.props.customer.last_name) || '',
        DOB: (this.props.customer && this.props.customer.DOB) || '',
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if(this.props.isEdit){
            //edit
            this.props.editCustomer(this.state,Number(this.props.match.params.id) )
        }else{
            //create
            this.props.createCustomer(this.state)
        }
        this.props.history.push('/');
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2>
                        {`${this.props.isEdit ? 'Edit' : 'Create'} Customer`}
                    </h2>
                    {!this.props.customer && this.props.isEdit &&
                        <div>
                            <p>No customer found with this id</p>
                            <p><Link to='/' className="btn btn-outline-secondary mr-3">Back</Link></p>
                        </div>
                    }
                    {(!this.props.isEdit || this.props.customer) &&
                        <form id={"post-form"} onSubmit={this.processFormSubmission}>
                            <div className="form-group col-md-12">
                                <label htmlFor="first_name"> First Name </label>
                                <input type="text" id="first_name" required={true} onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="Customer's first name" defaultValue={this.state.first_name}/>
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="last_name"> Last Name </label>
                                <input type="text" id="last_name" required={true} onChange={(e) => this.handleInputChanges(e)} name="last_name" className="form-control" placeholder="Customer's last name" defaultValue={this.state.last_name} />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="DOB"> Date of Birth </label>
                                <input type="text" id="DOB" required={true} onChange={(e) => this.handleInputChanges(e)} name="DOB" className="form-control" placeholder="24/03/1988"  defaultValue={this.state.DOB}/>
                            </div>

                            <div className="form-group col-md-6 btn-toolbar pull-right">
                                <button className="btn btn-success mr-3" type="submit" id="submit">
                                    Submit
                                </button>
                                <Link to='/' className="btn btn-outline-secondary mr-3">Cancel</Link>
                            </div>
                        </form>
                    }
                    
                </div>
            </div>
        )
    }
}
export default withRouter(Form)