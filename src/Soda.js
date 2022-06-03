import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Soda extends Component {

    render() {

        return (
            <div>
                <h2>Soda</h2>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default Soda;