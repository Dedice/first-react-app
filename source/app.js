import React, {Component} from 'react';
import {render} from 'react-dom';

import HeaderBox from './components/header'

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = "Application";
    }

    render() {
        return (
            <div id="layout">
                <HeaderBox />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));