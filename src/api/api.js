import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {'API-KEY': 'b9e164af-3293-492b-9c13-6c3d4634a714'}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    checkFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    checkUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    checkAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    myProfile(id){
        return instance.get(`profile/` + id)
    },
    usersProfile(userId){

        return instance.get(`profile/` + userId)
    }
}
