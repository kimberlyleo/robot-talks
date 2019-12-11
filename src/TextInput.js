import React, { Component } from 'react';

class TextInput extends Component {

    handleChange = (e) => {
        this.props.updateText(e.target.value)
    }

    render(){
        return(
            <>
                <label>Talk to the bots: </label>
                <input id="textbox" value={this.props.text} onChange={this.handleChange} />
            </>
        )
    }
}

export default TextInput
