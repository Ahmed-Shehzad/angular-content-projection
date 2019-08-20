export class Register {
    Email: string;
    Password: string;
    ConfirmPassword: string;

    public constructor(Email: string, Password: string, ConfirmPassword: string){
        this.Email = Email;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
    }
}
