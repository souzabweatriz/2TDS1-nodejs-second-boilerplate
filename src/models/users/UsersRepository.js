import User from './User.js'

class UsersRepository{
    constructor(){
        this.users = [];
    }

    getAllusers(){
        return this.users;
    }
    
    addUser(name, email, password){
        const newUser = new User(name, email, password);

        this.users.push(newUser);

        return newUser
    }

    getUserById(id){
     const user = this.users.find(u => u.id == id);
     
     if(!user){
        return null
     }
     return user;
    }
}

export default UsersRepository;