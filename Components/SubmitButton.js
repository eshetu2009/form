import React from 'react';

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><button className={this.props.clsn}>{this.props.text}</button></div>
        );
    }
}

export default SubmitButton;