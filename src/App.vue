<template>
  <div id="app">
    <NavPanel></NavPanel>
    <router-view/>
  </div>
</template>

<script>
 import NavPanel from "@/components/NavPanel.vue";
export default {
  components: {
    NavPanel,
  }
}
</script>

<style lang="scss">

</style>
