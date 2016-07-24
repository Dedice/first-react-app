import React, {Component} from 'react';

const menu = [
    { url: '', text: 'Home' },
    { url: 'about', text: 'About' },
    { url: 'services', text: 'Services' },
    { url: 'history', text: 'History' },
    { url: 'contact', text: 'Contact' }
];

export default class Navigation extends Component {
    render() {
        return (
            <ul className="nav">
                {
                    menu.map(function (result) {
                        return <MenuItem key={result.url} item={result} />
                    })
                }
            </ul>
        );
    }
}

class MenuItem extends Component {
    render() {
        return (
            <li>
                <a href={'#/' + this.props.item.url}>{this.props.item.text}</a>
            </li>
        );
    }
}