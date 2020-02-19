<template>
  <div id="app">
    <Company></Company>
    <router-view></router-view>
  </div>
</template>

<script>
import Company from './components/account/company/company.vue';
export default {
  name: 'App',
  components: {
    Company,
  }
}
</script>

<style lang="less">
</style>
