import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-wrap'>Login Form
                <InputField type={'text'} ph={'username'}></InputField>
                <InputField type={'password'} ph={'password'}></InputField>
                <SubmitButton text="Login" cLsn="btn btn-succes"></SubmitButton>
            </div>
        );
    }
}

export default LoginForm;