// a reducer takes in two things:    //populated with input tag


// 1. the action (info about what happened)
// 2. a copy of current state

function postComments(state = [], action) {
  //console.log(state, action);
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state w/ the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log("removing a comment");
      // return new state w/o that comment
      return [
        //from start to target, skip target, and then glue the rest on
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
  }

  return state;
}

function comments(state = [], action) {
  //console.log(state, action);
  if(typeof action.postId != 'undefined'){
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      // not having a variable for the key - using square brackets
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
