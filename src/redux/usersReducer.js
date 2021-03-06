import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_USERS_FRIEND = 'SET_USERS_FRIEND';

let initialState = {
    users: [],
    usersFriend: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_USERS_FRIEND: {
            return {...state, users: action.usersFriend}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setUsersFriends = (usersFriend) => ({type: SET_USERS_FRIEND, usersFriend})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.requestUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsersFriends(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const requestUsersFriends = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.requestUsersFriends(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        // dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, ApiMethod, actionCreator ) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await ApiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.checkFollow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.checkUnfollow.bind(usersAPI), unfollowSuccess)
    }
}


export default usersReducer;