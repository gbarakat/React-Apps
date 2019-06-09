import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';


class Register extends Form {
    state={
        data:{ username:'', password:'' },
        errors:{}
    }

    schema={
        username:Joi.string().required().label("Email").email(),
        password:Joi.string().required().label("Password").min(5),
        name:Joi.string().required().label("Name")
        
    }


    handleChange= ({currentTarget:input})=>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    }
    
    doSubmit = () =>{
        console.log("Submitted");
    }

    render() { 
        
        return ( 
            <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}> 
                {this.renderInput('name', 'Name')}
                {this.renderInput('password', "Password", "password")}
                {this.renderInput('username', 'Email')}
                {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default Register;