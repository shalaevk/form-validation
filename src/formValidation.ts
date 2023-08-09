
function checkString(param:string):boolean {
    if (typeof param === "string") {
        return true
    }
   return false
}




export function checkEmail<T extends string>(email: T): string[] {
    const EmailErrors: string[] = [];
    if(checkString(email)){
        if (email.length === 0) {
            EmailErrors.push("Requaired")
        }
        if (!email.endsWith("@webdevsimplified.com")) {
            EmailErrors.push("Must end in @webdevsimplified.com")
        }
    }
    return EmailErrors;
    
}



export function checkPass<T extends string>(pass: T): string[] {
    const PassErrors: string[] = [];

    if (pass.length < 10) {
        PassErrors.push("Must Be 10 characters or longer")
    }
    if(!pass.match(/[a-z]/)){
        PassErrors.push("Must include a lowercase letter")
    }
    if(!pass.match(/[A-Z]/)){
        PassErrors.push("Must include an uppercase letter")
    }
    if(!pass.match(/[0-9]/)){
        PassErrors.push("Must include a number")
    }

    return PassErrors

}