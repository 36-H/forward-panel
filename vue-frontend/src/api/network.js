import axios from 'axios';

export default {
    get: function(path = '', data = {}) {
        return new Promise(function(resolve, reject) {
            axios.get(path, {
                params: data,
                timeout: 12000,
                headers: {
                    "Authorization": window.localStorage.getItem('token')
                }
            })
                .then(function(response) {
                    resolve(response.data);
                })
                .catch(function(error) {
                    console.error('GET请求错误:', error);
                    resolve({"code": -1, "msg": error.message || "网络请求失败"});
                });
        });
    },
    post: function(path = '', data = {}) {
        return new Promise(function(resolve, reject) {
            axios.post(path, data, {
                timeout: 12000,
                headers:{
                    "Authorization": window.localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            })
                .then(function(response) {
                    resolve(response.data);
                })
                .catch(function(error) {
                    console.error('POST请求错误:', error);
                    resolve({"code": -1, "msg": error.message || "网络请求失败"});
                });
        });
    }
};