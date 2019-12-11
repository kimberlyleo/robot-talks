import React, {Component} from "react";

class JRocc extends Component {

    jRocTalks = () => {

        let input = this.props.text;
        let exportString = "";
        for (let i = 0; i < input.length; i++) {
            if (i % 11 === 0) {
                exportString += "N"
            } else if ((i - 1) % 11 === 0) {
                exportString += "A"
            } else if ((i - 2) % 11 === 0) {
                exportString += "M"
            } else if ((i - 3) % 11 === 0) {
                exportString += " "
            } else if ((i - 4) % 11 === 0) {
                exportString += "S"
            } else if ((i - 5) % 11 === 0) {
                exportString += "A"
            } else if ((i - 6) % 11 === 0) {
                exportString += "Y"
            } else if ((i - 7) % 11 === 0) {
                exportString += "'"
            } else if ((i - 8) % 11 === 0) {
                exportString += "N"
            } else if ((i - 9) % 11 === 0) {
                exportString += "?"
            } else if ((i - 10) % 11 === 0) {
                exportString += " "
            }
        }
        return exportString
    }

    render() {
        return(
            <div>
                <>
                    {this.jRocTalks()}
                </>
                <br />
                <h3>{this.jRocTalks() === "" ? "What's Crackin', Playa?" : "J-Roc Talks"}</h3>
            </div>
        )
    }


}

export default JRocc;
