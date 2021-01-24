const usersId = {}
const usersByEmail = {}

module.exports ={
    total: () => Object.keys(usersId).length,
    save: (user) => {
      const id = Object.keys(userById).length + 1
      user.id = iduser.roles = [];

      if(Object.keys(userById).length === 0) {
        user.roles.push('Admin');
      }

      usersById[id] = user
      usersByEmail[user.email] = user
    },
    findByEmail: (email) => {
        return userByEmail[email]
    },
    findById: (id) => {
        return userById[id]
    }
}