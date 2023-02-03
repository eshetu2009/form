import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
            <input type={this.props.type}placeholder={this.props.ph} className="form-control"/>
            </div>
        );
    }
}

export default InputField;