import axios from "axios"

export default {
    state: {
        comments: []
    },
    getters: {
        allComments(state) {
            return state.comments
        },
        reductionComments(state) {
            return state.comments
        }
    },
    mutations: {
        addComments(state,comments) {
            state.comments = comments
        }
    },
    actions: {
        updateComments(ctx, postId) {
            axios({
                url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
            }).then(respose => {
                ctx.commit('addComments',respose.data)
            }).catch(error => {
                console.error(error)
            })
        }
    },
}