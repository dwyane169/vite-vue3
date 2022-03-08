<script lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/store";

export default {
  props: {},
  setup(props: any) {
    const store = useUserStore();
    const { showList } = storeToRefs(store);
    onMounted(() => {});
    return {
      showList,
    };
  },
};
</script>
<template>
  <div class="msg_box">
    <div
      class="mas_box_item"
      v-for="(item, index) in showList.reverse()"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.msg_box {
  width: 350px;
  height: 120px;
  background-color: #333;
  color: #fff;
  padding: 6px;
  font-size: 14px;
  @include flex(column, flex-start, flex-start);
  overflow-y: auto;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 20px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #787878;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background: #111;
  }
  &_item {
    width: 100%;
    word-wrap: break-word;
    color: #f5f5f5;
  }
}
</style>
