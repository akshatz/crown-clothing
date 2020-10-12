import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class Signin extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        email: '',
        password: ''
    }
    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };
    
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    };

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with email & password </span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <FormInput
                     name="email" 
                     type="email" 
                     handleChange={this.handleChange} 
                     value={this.state.email} 
                     required
                    />
                    <label>Password</label>&nbsp;
                    <FormInput
                     name="password"
                     type="password"
                     value={this.state.password} 
                     handleChange={this.handleChange}
                     required 
                    />

                    <CustomButton type='submit'>Submit</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign in with Google{''}
                    </CustomButton>
                </form> 
            </div>
        )
    }
}

export default Signin;