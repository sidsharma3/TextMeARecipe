import axios from 'axios';

const BASE_API_URL = "http://localhost:3000/api/v1/users"

class UserService {

    getUsers(){
        return axios.get(BASE_API_URL)
    }

    createUser(user){
        return axios.post(BASE_API_URL, user);
    }

    getUserById(userId){
        //return axios.get("http://localhost:3000/api/v1/users/1");
        return axios.get(BASE_API_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(BASE_API_URL + "/" + userId, user)
    }

    deleteUser(userId){
        return axios.delete(BASE_API_URL + '/' + userId);
    }

}

export default new UserService()