import React, {Component} from 'react';


class SearchBar extends Component {
    constructor() {
        super();
        this._handleChange = this._handleChange.bind(this);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this._handleChange}
                    />
            </form>
        );
    }

    _handleChange() {
        console.log(this);
    }
}

export default SearchBar;