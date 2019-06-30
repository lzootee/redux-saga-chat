
const ApiUrl = {
    LOGIN: 'http://localhost:3000/api/login',
    REFRESH: 'http://localhost:3000/api/refresh'
}

const Api = {
    login: (username, password) => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
                user_name: username,
                password: password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        return fetch(ApiUrl.LOGIN, data).then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
            
                default:
                    return new Promise((res, err) => {
                       err(response.json());  
                    });
            }
        });
    }
}

export default Api;