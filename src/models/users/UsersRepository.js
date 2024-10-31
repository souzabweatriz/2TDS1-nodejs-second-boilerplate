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
}

export default UsersRepository;