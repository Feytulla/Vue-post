<template>
  <div>
    <div class="container card-style">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ getPostDetail.title }}</h5>
          <p class="card-text">
            {{ getPostDetail.body }}
          </p>
        </div>
      </div>
      <div class="card mt-5 mb-5" v-for="comment in allComments" :key='comment.id'>
        <div class="card-header">{{comment.name}}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              {{comment.body}}
            </p>
            <footer class="blockquote-footer">
              {{comment.email}}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostPage",
  computed: mapGetters(['allComments', 'getPostDetail']),
  methods: mapActions(['updateComments','fetchPostDetail']),
  mounted() {
    console.log(this.$route.params.id);
  },
  created() {
    if(this.$route.params.id){
      this.fetchPostDetail(this.$route.params.id)
    }
    this.updateComments(this.$route.params.id)
  },
};
</script>








<style scoped>
.card-style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 500px;
  margin-top: 50px;
}
</style>