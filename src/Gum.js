import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gum extends Component {

    render() {

        return (
            <div>
                <h2>Gum</h2>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default Gum;