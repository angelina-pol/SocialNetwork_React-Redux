import axios  from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "ae493299-0d0d-40e8-bc7d-43dfa46c2054",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowRequest(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followRequest(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    }
}