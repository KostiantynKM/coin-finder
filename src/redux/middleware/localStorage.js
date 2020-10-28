


export default (store) => (next) => (action) => {

  if (!action.getData && !action.setData){
     return next(action);
  }
  if (action.getData) {
    const { getData, ...rest } = action;
    const localData = localStorage.getItem('userList')?.split(',');
    next({...rest, localData});
  }
  if (action.setData) {
    const { setData, ...rest } = action;
    next({...rest});
    const { userList } = store.getState()
   if(userList.entities.length){
     localStorage.setItem('userList', userList.entities);
   }else{
       localStorage.clear();
   }
  }

};
