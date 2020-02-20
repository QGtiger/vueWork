<template>
  <div id="app">
    <SuccessCompany></SuccessCompany>
    <router-view></router-view>
  </div>
</template>

<script>
import SuccessCompany from '@/components/SuccessCompany/SuccessCompany.vue';
export default {
  name: 'App',
  components: {
    SuccessCompany,
  }
}
</script>

<style lang="less">
</style>
