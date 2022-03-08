<script lang="ts">
import { useRouter, useRoute } from "vue-router";
import { watch, ref, onMounted } from "vue";

export default {
  components: {},
  setup(props: any) {
    const route = useRoute();
    const router = useRouter();
    const routes = ref(router.options.routes[0].children);
    const nav = (item: any) => {
      router.push("/" + item.path);
    };
    onMounted(() => {
      console.log(route.path);
    });
    return {
      routes,
      route,
      nav,
    };
  },
};
</script>

<template>
  <div class="box">
    <router-view />
    <div class="tabs">
      <div
        class="tabs_item"
        v-for="(item, index) in routes"
        :key="index"
        @click="nav(item)"
        :style="{ color: route.path === '/' + item.path ? '#ccc' : '#333' }"
      >
        {{ item.path }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 375px;
  height: 667px;
  // background: #ddd;
  @include flex(column, center, flex-start);
  .tabs {
    @include flex(row, center, space-between);
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ddd;
    // box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.2);
    z-index: 999;
    &_item {
      flex: 1;
      border-right: 1px solid #ddd;
      height: 100%;
      @include flex(row, center, center);
      &:last-child {
        border: 0;
      }
    }
  }
}
</style>
