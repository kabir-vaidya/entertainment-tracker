export default (state, action) => {
    switch(action.type) {
        case 'GET_GENRE':
            return {
                ...state,
                genre: action.payload,
                loading: false,
            }
        case 'ADD_GENRE':
            return {
                ...state,
                genre: [...state.genre, action.payload]
            }
        case 'DELETE_GENRE':
            return {
                ...state, 
                genre: state.genre.filter(genre => genre._id !== action.payload._id)
            }
        case 'GET_LINKS':
            return {
                ...state, 
                loading: false, 
                links: action.payload
            }
        case 'ADD_LINK':
            return {
                ...state, 
                links: [action.payload]
            }
        case 'DELETE_LINK':
            return{
                ...state, 
                links: state.links.filter(link => link._id !== action.payload)
            }
        default:
            return state;
    }
}