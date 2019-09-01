const defaultState={inputValue:'',list:[]};
export  default  (state=defaultState,action)=>{
	if (action.type === 'input-value-change') {
	      const newState=JSON.parse(JSON.stringify(state));
	      newState.list.push(action.value);
	      return newState;
	}
	return state;
}
