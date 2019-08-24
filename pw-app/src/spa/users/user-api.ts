import { Observable } from '../../../node_modules/rxjs';

export abstract class UserApi {
	signIn: (email: string, password: string) => Observable<any>
	signOut:() => Observable<any>
}