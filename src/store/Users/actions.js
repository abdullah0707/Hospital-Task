import { getUsers, getUser } from "@/utils/api";

export default {
  getUsersAction({commit}){
    console.log("getUsersAction");
    return getUsers()
    .then((users) => {
        commit('UPDATE_USERS', users);
      })
  },

  getUserAction({commit, state}, id){
    if(state.usersDetails[id]) return Promise.resolve(state.usersDetails[id]);
    return getUser(id)
    .then((user) => {
      commit('UPDATE_USERS_DETAILS', {...state.usersDetails, [id]: user});
      return user;
    })
  },
}

