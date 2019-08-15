// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


// Import Character Typing
import { ICustomer, ICustomerState } from '../reducers/customerReducer';

// Create Action Constants
export enum CustomerActionTypes {
  CREATE_CUSTOMER = 'CREATE_CUSTOMER',
  EDIT_CUSTOMER = 'EDIT_CUSTOMER',
  DELETE_CUSTOMER = 'DELETE_CUSTOMER',
}

export interface ICustomerCreateAction {
  type: CustomerActionTypes.CREATE_CUSTOMER;
  data: ICustomer;
}

export interface ICustomerEditAction {
    type: CustomerActionTypes.EDIT_CUSTOMER;
    data: ICustomer;
    id: number
}

export interface ICustomerDeleteAction {
    type: CustomerActionTypes.DELETE_CUSTOMER;
    id: number
}

/* 
Combine the action types with a union (we assume there are more)
*/
export type CustomerActions = ICustomerCreateAction | ICustomerEditAction | ICustomerDeleteAction;

/* Create Customer Action
*/
export const createCustomer: ActionCreator<
  ThunkAction<void, ICustomerState, null, ICustomerCreateAction>
> = (data: ICustomer) => {
  return (dispatch: Dispatch) => {
    dispatch({
        data: data,
        type: CustomerActionTypes.CREATE_CUSTOMER,
      });
  };
};


/* Edit Customer Action
*/
export const editCustomer: ActionCreator<
  ThunkAction<void, ICustomerState, null, ICustomerCreateAction>
> = (data: ICustomer, id: Number) => {
  return (dispatch: Dispatch) => {
    dispatch({
        data: data,
        id: id,
        type: CustomerActionTypes.EDIT_CUSTOMER,
      });
  };
};

/* Delete Customer Action
*/
export const deleteCustomer: ActionCreator<
  ThunkAction<void, ICustomerState, null, ICustomerCreateAction>
> = (id: Number) => {
  return (dispatch: Dispatch) => {
    dispatch({
        id: id,
        type: CustomerActionTypes.DELETE_CUSTOMER,
    });
  };
};