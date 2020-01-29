import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';
import {remove} from './../Redux/Action'
class ViewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            page: 1,
            per_page: 3,
            search:'',
        }
    }
    handle_change = (e) => {
        this.setState({ page: Number(e) })
    }
    handleDelete = (id) => {
        this.props.remove(id)
    }
    handleSearch=(e)=>{
        this.setState({
            search:e.target.value
        })
    }

    handleDropDown = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: Number(e.target.value)})
      
    }

    handleButton = (pageNo) => {
        this.setState({page:Number(pageNo)})
    }

    handleNext = (a) => {
        if (a <= this.state.final_data.length) {
            this.setState({
                page: a + 1
            })
        }
      }

      handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
      }
    
    
    render() {
         console.log(this.props.add.comments.stored_data)
        // ******pagi***
        this.state.final_data = this.props.add.comments.stored_data
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        console.log(pagination_data);
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="perpage" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })
        // ******pagi***
            // ****************search**
            let user=pagination_data;
            let search=this.state.search.trim().toLowerCase();
            if(search.length > 0 ){
                user=user.filter(function(user){
                    // return user.company.toLowerCase().match(search);
                    if(user.drop){
                        return (user.drop).toLowerCase().match(search);
                    }
                })
            }
            var nextButton = () => {
                if (this.state.page !== this.state.final_data.length) {
                    return (
                        <button className="nextCrt" onClick={() => this.handleNext(this.state.page)}> Next</button>
                    )
              
                }
                else {
                    return (
                        <button className="nextWrng" disabled>Next</button>
                    )
                }
              }
    
              var prevButton = () => {
                if (this.state.page !== 1) {
                    return (
                        <button className="prevCrt" onClick={() => this.handlePrev(this.state.page)}>Prev</button>
                    )
                }
                else {
                    return (
                        <button className="prevWrng"  disabled>Prev</button>
                    )
                }
              }
             // ****************search**
            //console.log(this.props.add.comments.stored_data);
            //let user = this.props.add.comments.stored_data
            let show_user =  user.reverse().map((e, i) => {
                return(
                    <tbody className="body" key={i}>
                        <tr>
                            <td className="label">{e.drop}</td><br/>
                            <td className="note">{e.note}</td>
                            <td><Link className="edit" to={`/edit/${e.id}`}> &#9998;</Link></td>
                            <td><button className="deleteBtn" onClick={() => this.handleDelete(e.id) }> &#10007;</button></td>
                        </tr>
                    </tbody>
                )
            })
            
        return (
            <div className="viewPage">
                <span className="filterText">Filter by Label:</span>
                 <input className="" name="serach" value={this.state.search} type="text" placeholder="Search By Label" onChange={this.handleSearch} />
                {show_user}
                
                <div className="my-5">  {prevButton()}{button} {nextButton()}
                    <select className="pageper" onChange={this.handleDropDown} name="per_page">
                        <option value="5" selected>Per Page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>  
                   </div> 
                   <Link to="/"><button className="addNotes">Add more Notes</button></Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state
    }
}
const mapDispatchToState = (dispatch) => {
  return{
    remove: (data) => dispatch(remove(data))
  }
}
export default connect(mapStateToProps,mapDispatchToState)(ViewNote) 