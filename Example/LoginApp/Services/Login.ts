import { User } from "../Models/User"
import { Response } from "../Models/Response"
import { Status } from "../enums/Status"

class Login{
    user:User

    constructor(user:User){
        this.user = user
    }

    login():Response{
        if(this.user.username == "admin" && this.user.password == "XYZ123"){
            return({status_code : Status.Success, message: "Login successfull"})
        }
        return ({status_code : Status.UnAuthorized, message: "Login Failed! Invalid Username or Password"})
    }
}

const loginInstance = new Login({username: "admin", password: "XYZ123"})
console.log(loginInstance.login())