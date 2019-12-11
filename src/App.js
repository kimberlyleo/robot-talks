import React, { Component } from 'react';

import TextInput from './TextInput.js'
import Obedibot from './Obedibot.js'
import BadBot from './BadBot.js'
import JRocc from './JRocc.js'


import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    updateText = (text) => {
        this.setState({text: text})
    }

    render(){
        return(
            <div id="bodyMain">
                <div id="topZone">
                    <h1>BEHOLD MY BOTS</h1>
                    <br />
                    <TextInput text= {this.state.text} updateText={this.updateText} />
                </div>

                <div id="robotZone">
                    <div class="robots">
                        <Obedibot text={this.state.text} />
                    </div>
                    <div class="robots">
                        <BadBot text={this.state.text} />
                    </div>
                    <div class="robots">
                        <JRocc text={this.state.text} />
                    </div>
                </div>


            </div>
        )
    }
}




export default App;
