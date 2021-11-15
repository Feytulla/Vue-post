<template>
  <div class="card mb-4 mt-4" >
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ description(data.body) }}<span>...</span
        ><router-link
          :to="{ name: 'postPage', params: { id: data.id } }"
          class="card-more"
          >more</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
    description(item) {
      if (item) return item.substring(0, 70);
    },
  },
}
</script>