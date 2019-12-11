import React, {Component} from "react";

class BadBot extends Component {

    disobedienceProtocol = () => {

        let input = this.props.text;
        let exportString = "";
        for (let i = 0; i < input.length; i++) {
            if (i % 3 === 0) {
                exportString += "B"
            } else if ((i - 1) % 3 === 0) {
                exportString += "L"
            } else if ((i - 2) % 3 === 0) {
                exportString += "A"
            }
        }
        return exportString
    }

    render() {
        return(
            <div>
                <>
                    {this.disobedienceProtocol()}
                </>
                <br />
                <h3>{this.disobedienceProtocol() === "" ? "I'm a good boy..." : "THAT'S WHAT YOU SOUND LIKE"}</h3>
            </div>
        )
    }


}

export default BadBot;
