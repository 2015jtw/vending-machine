import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class VendingMachine extends Component {

    render() {
        return (
            <div>
                <h1>List of Snacks</h1>
                <Link to="/soda">Soda</Link>
                <Link to="/gum">Gum</Link>
                <Link to="/chips">Chips</Link>
            </div>
        )
    }
}

export default VendingMachine;