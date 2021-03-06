//1 Action returns an object

// const action = {
//     type:'MOVIES_LIST',
//     payload:[
//         {id:'1',name:'Pulp Fiction'},
//         {id:'2',name:'True Lies'}
//     ]
// };


//2 Reducer finds a match

export default function(state = {},action){

    switch(action.type){
        case 'MOVIES_LIST':
            return {...state,movies:action.payload}
        case 'DIR_LIST':
            return {...state,directors:action.payload}
        default:
            return state;
    }
};