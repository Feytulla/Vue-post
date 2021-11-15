<template>
  <div class="container mt-4 mb-5 card-item">
    <PostItem v-for="post in reductionPost" :key="post.id" :data="post"></PostItem>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Post",
  components: {
    PostItem,
  },
  computed: {
    ...mapGetters(["reductionPost"]),
  },
  methods: mapActions(["updatePost"]),
  mounted() {
    this.updatePost();
  },
};
</script>

<style scoped>
.card-item {
  width: 500px;
}
</style>