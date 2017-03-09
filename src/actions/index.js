import * as types from '../constants/ActionTypes'
import skygear from 'skygear'
import ExeciseModel from '../models/ExeciseModel'
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const request = () => ({type: types.REQUESTING})
export const done = (payload) => ({type: types.DONE, payload})

export function getExecises() {
  return (dispatch) => {
    dispatch(request());
    const query = new skygear.Query(ExeciseModel);
    query.equalTo('_owner', '958f0581-4f3e-4c65-b99c-fcfa63e19a8a')
    skygear.publicDB.query(query).then((records) => {
      var randomSample = [];
      for(var i=0; i < 5; i++) {
        const index = ~~(Math.random() * records.length)
        var randomChoice = records[index];
        records.splice(index, 1);
        randomSample.push(randomChoice);
      }
      const execises = randomSample.map((r) => {
        return r.content
      });
      dispatch(done(execises));
    }, (error) => {
      dispatch(done([]));
    })
  }
}
