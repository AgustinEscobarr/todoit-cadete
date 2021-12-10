export class UserLogin{
    
    constructor(public email:string='', public password:string=''){
        
        this.email=email;
        this.password=password;
    }
}
export class UserLoged{
    constructor(public id?:string,public fullName?:string, public email?:string){
        this.id=id;
        this.fullName=fullName;
        this.email=email;
    }
}