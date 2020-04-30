import axios from 'axios'

export const authService = {
    login,
    logout
}

function login(username, password) {
    return axios.post('http://localhost:8090/login', {username, password})
        .then(res => {
            const user = res.data;

            if (user.token) {
                // store user in local storage
                localStorage.setItem('user', JSON.stringify(user));
            }
            
            return user;
        })
        .catch(err => console.log(err))
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}