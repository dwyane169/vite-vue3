<script lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/store";
import { playerBattleStatus } from "~/types/enum";
export default {
  props: {},
  setup(props: any) {
    const store = useUserStore();
    const { battle_status, list, cur_index } = storeToRefs(store);
    const ctrl = () => {
      battle_status.value = playerBattleStatus.atk;
    };
    onMounted(() => {
      store.init();
    });
    return {
      list,
      ctrl,
      battle_status,
      cur_index,
    };
  },
};
</script>
<template>
  <div class="player_box">
    <div class="player">
      <div
        :class="[
          'player_item',
          list[cur_index] && list[cur_index].id === item.id ? 'player_on' : '',
        ]"
        v-for="(item, index) in list"
        :key="index"
      >

        <span>{{ item.name }}</span>  
      </div>
    </div>
    <div class="ctrls">
      <button @click="ctrl">atk</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.player_box {
  @include flex(column, center, center);
}
.player {
  @include flex();
  &_item {
    @include flex();
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    margin: 10px;
    position: relative;
  }
}
.log {
  @include flex(column, center, center);
}
.player_on {
  animation: playerChoose 1s infinite linear;
}
</style>
