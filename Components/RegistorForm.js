import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

class RegistorForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr/>
                <fieldset>
                    <legend >Registor User</legend>
                
                <InputField type="email"ph="Email Address" ></InputField>
                <InputField type="text"ph="First Name" ></InputField>
                <InputField type="text"ph="Last Name" ></InputField>
                <InputField type="number"ph="Age" ></InputField>
                <InputField type="text"ph="Address" ></InputField>
                <InputField type="text"ph="State" ></InputField>
                <InputField type="text"ph="City" ></InputField>
                <SubmitButton text="Registor" clsn="btn-warning"></SubmitButton>
                </fieldset>
                </div>
        );
    }
}

export default RegistorForm;