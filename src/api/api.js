import axios  from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c20eb3f4-146f-4f20-8303-4075f48f2af7",
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
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
};

export const authAPI = {
    getMe() {
        return instance.get(`auth/me/`)
    },
};