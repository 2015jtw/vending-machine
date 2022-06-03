import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Chips extends Component {

    render() {

        return (
            <div>
                <h2>Chips</h2>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default Chips;