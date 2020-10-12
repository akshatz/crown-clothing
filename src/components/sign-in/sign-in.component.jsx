import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import  { signInWithGoogle } from '../../firebase/firebase.utils.js';
class Signin extends Component{
    constructor(props){
        super(props);
    
    this.state = {
        email: '',
        password: ''
    };
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
                    <FormInput
                     name="email"
                     type="email" 
                     handleChange={this.handleChange} 
                     value={this.state.email} 
                     label='Email'
                     required
                    />
                    <FormInput
                     name="password"
                     type="password"
                     value={this.state.password}
                     handleChange={this.handleChange} 
                     label='Password'
                     required
                    />
                    <CustomButton type='submit'>Submit</CustomButton>&nbsp;
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                </form> 
            </div>
        )
    }
}

export default Signin;