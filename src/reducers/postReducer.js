const postInitialState=[]

const postReducer=(state=postInitialState, action)=>{
  switch(action.type){
      case 'SET_POST':{
          return state.concat(action.payload)
      }
      default:{
          return [...state]
      }
  }
}

export default postReducer