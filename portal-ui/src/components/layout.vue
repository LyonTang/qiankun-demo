<template>
  <div>
      <ul class="portal-ui-header">
        <li v-for="(route, index) in mRoutes"
            :key="index"
            @click="handleRoute(route.url)"
        >
            {{route.text}}
        </li>

      </ul>
      <div class="portal-ui-container">
        <div id="micro-app"></div>
        <router-view />
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            mRoutes: [
                {
                    url: '/portal-ui/dashboard',
                    text: '首页',
                },
                {
                    url: '/child-vue-app/dashboard',
                    text: '子应用首页',
                },
                {
                    url: '/child-vue-app/tag',
                    text: '标签',
                },
            ]
        }
    },
    methods: {
        handleRoute(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped>
    .portal-ui-header li{
        color: dodgerblue;
        cursor: pointer;
    }
</style>