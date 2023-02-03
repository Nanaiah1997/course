export let fetchedData=(state=[],Action)=>{
    if(Action.type==="fetchedData")
      return Action.data
    else{
    return state
    }
}