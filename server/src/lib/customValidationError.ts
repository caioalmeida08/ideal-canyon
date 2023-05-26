type CustomValidationErrorReturnType = {
        message: string,
        value?: string
}

class CustomValidationError{
    public errors: CustomValidationErrorReturnType[];

    constructor(message: string);
    constructor(message: string, value: string);

    constructor(...args: string[]){
        this.errors = [{
            message: args[0],
            value: args[1] || "(não retornado pelo servidor)"
        }];
    }
}
    
export default CustomValidationError;