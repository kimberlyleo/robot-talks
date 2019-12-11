import React, {Component} from "react";

class Obedibot extends Component {
    render() {
        return(
            <>
                <h3>This is your text, faithfully reproduced:</h3> {this.props.text}
            </>
        )
    }


}

export default Obedibot;
