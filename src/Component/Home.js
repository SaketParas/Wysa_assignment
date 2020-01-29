import React, { Component } from 'react';
import Note from './Note';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.item);
        return (
            <div className="note">
                <Note />
            </div>
        )
    }
}

export default Home