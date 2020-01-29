import React, { Component } from 'react';
import { connect } from 'react-redux';
import { note_action } from './../Redux/Action';
import {Link} from 'react-router-dom'
class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: '',
            drop:'',
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000) * 1000);
        let data = {
            note: this.state.note,
            drop: this.state.drop,
            id: random_number
        }
        console.log(data);
        this.props.note_data(data)
        this.reset()
        // this.props.history.push('/ViewNote')
    }

    reset = () => {
        this.setState({
            note: "",
            drop: ""
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.input_submit}>
                        <div>
                        <textarea className="" type="text" placeholder="Make a Note &#128466;" name="note" value={this.state.note} onChange={this.input_change} required/>
                        <br/>
                        <select name="cars" name="drop" value={this.state.drop} onChange={this.input_change} className="selectBox" required >
                            <option value="">Select Levels</option>
                            <option value="Full Stack">Full Stack</option>
                            <option value="React">React</option>
                            <option value="Redux">Redux</option>
                            <option value="Python">Python</option>
                            <option value="JavaScript">JavaScript</option>
                        </select>
                        </div>
                        <button type="submit" className="">Add a note</button>
                        <Link to="/view" type="submit"><button className="view">view</button></Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        note_data: (data) => dispatch(note_action(data))
    }
}
export default connect(null, mapDispatchToProps)(Note) 