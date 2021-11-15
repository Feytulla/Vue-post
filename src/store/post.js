import axios from "axios"

export default {
    state: {
        posts: [],
        postDetail: {}
    },
    getters: {
        reductionPost(state) {
            return state.posts
        },
        getPostDetail(state){
            return state.postDetail
        }
    },
    mutations: {
        addPost(state, posts) {
            state.posts = posts
        },
        postDetail(state, payload){
            state.postDetail = payload
        }
    },
    actions: {
        updatePost(ctx) {
            axios({
                url: 'https://jsonplaceholder.typicode.com/posts',
            }).then(respose => {
                if (respose.status == 200) {
                    ctx.commit('addPost', respose.data)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        fetchPostDetail(ctx, payload) {
            axios({
                url: `https://jsonplaceholder.typicode.com/posts/${payload}`,
            }).then(respose => {
                if (respose.status == 200) {
                    ctx.commit('postDetail', respose.data)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
}