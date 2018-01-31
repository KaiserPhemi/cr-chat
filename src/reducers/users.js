// action types
import { ADD_USER, USERS_LIST } from '../constants/ActionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat([
        {
          name: action.name,
          id: action.id
        }
      ]);
    case USERS_LIST:
      return action.user
    default:
      return state
  }
};

export default users;
