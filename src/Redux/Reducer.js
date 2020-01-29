const ADD_COMMENTS = "ADD_COMMENTS";
const EDIT = 'EDIT';
const DELETE = 'DELETE';

const initiState = {
    stored_data : [],
    // table:[]
}

const stored_data = (state=initiState , action) => {
    
    switch(action.type){

        case ADD_COMMENTS :
            console.log(state,action)
            return{
                ...state,
                stored_data: [...state.stored_data, action.all]
            }
            case EDIT:
                let newState = {...state}
                let data = newState.stored_data.filter((e)=> e.id !== action.edit.id)
                data.push(action.edit)
               // console.log(data)
               data = data.sort( (a,b) => {
                   return a.id - b.id
               })

                return {
                    ...state,
                    stored_data:data     
                }
                case DELETE: 
                return{
                    ...state,
                    stored_data: state.stored_data.filter((e) => e.id !== action.id)
                } 

            default:
            return state
    }
}
export default stored_data