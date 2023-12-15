import request from "../utils/request";


export const getUserInfo = (data) => {
    return request({
        url: '/user/login',
        method: 'POST',
        data
    })
}