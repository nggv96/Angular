import { IUserSignup } from './userSignup.model';

export interface IUserRegisterResponse {
    status: Number;
    response: IUserSignup;
}