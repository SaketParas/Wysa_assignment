import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from './../Redux/Action';
import { Link, Redirect } from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drop: '',
            note: '',
            id: ''
        }
    }
    componentDidMount() {
        this.props.Editdata.stored_data.map(e => {
            if (e.id == this.props.match.params.id) {
                this.setState({ note: e.note, id: e.id, drop: e.drop })
            }
        })
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    input_submit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.update(this.state)
        this.props.history.push('/View')
    }
    render() {
        return (
            <React.Fragment>
                <div className="editPage">
                    <form onSubmit={this.input_submit}>
                        {/* <input name="drop" value={this.state.value} onChange={this.input_change}/> */}
                        <textarea class="form-control col-6 mt-5" type="text" placeholder="Make a Note" name="note" value={this.state.note} onChange={this.input_change} /><br />
                        <button type="submit" class="btn btn-outline-success mt-2">Update note</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Editdata: state.comments
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        update: (send) => dispatch(edit(send))
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Edit)