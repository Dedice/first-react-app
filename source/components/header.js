import React, {Component} from 'react';
import Navigation from './navigation';
import SearchBar from './search';


export default class HeaderBox extends Component {
    render() {
        return (
            <header className="global-sticky">
                <div className="inner">
                    <div id="logo"></div>
                    <Navigation />
                </div>
                <SearchBar />
            </header>
        );
    }
}