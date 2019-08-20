export class Login {
    Username: string;
    Password: string;
    grant_type: string;

    public constructor(Email: string, Password: string, grant_type: string){
        this.Username = Email;
        this.Password = Password;
        this.grant_type = grant_type;
    }
}
