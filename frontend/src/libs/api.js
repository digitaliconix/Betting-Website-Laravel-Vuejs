import axios from 'axios'
import {objectToFormData} from './helpers'


export function get(url, params) {
    return axios({
        method: 'GET',
        url: url,
        params: params
    })
}

export function post(url, data) {
    return byMethod('POST', url, data)
}

export function destroy(url, data) {
    return byMethod('DELETE', url, data)
}

export function byMethod(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    })
}

export function interceptors(cb) {
    axios.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        cb(err);
        return Promise.reject(err)
    })
}

export function submitMultipartForm(method, url, form) {
    byMethod(method, url, objectToFormData(form)).then(function ({data}) {
        if (data.saved) {
            cb(data)
        }
    });
}
