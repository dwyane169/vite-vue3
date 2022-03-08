<script lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/store";
import { playerBattleStatus } from "~/types/enum";
export default {
  props: {},
  setup(props: any) {
    const store = useUserStore();
    const { battle_status, enemy_list } = storeToRefs(store);

    const chooseThis = (target: any) => {
      if (battle_status.value === playerBattleStatus.wait) return;
      battle_status.value = playerBattleStatus.wait;
      store.addQueue(target);
    };

    const redcpt = computed(() => {
      return (red: number) => {
        if (red <= 0) return 0;
        else return ((red * 100) / 100).toFixed(2);
      };
    });



    return {
      enemy_list,
      battle_status,
      chooseThis,
      redcpt,
    };
  },
};
</script>
<template>
  <div class="enemy_box">
    <div class="enemy">
      <div
        :class="['enemy_item', battle_status === 1 ? 'enemy_item_hover' : '']"
        :style="{ background: redcpt(item.red) === 0 ? '#ccc' : '' }"
        v-for="(item, index) in enemy_list"
        :key="index"
        @click="chooseThis(item)"
      >
        <div class="red">
          <div class="redline" :style="{ width: redcpt(item.red) + '%' }"></div>
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.enemy_box {
  @include flex(column, center, center);
}
.enemy {
  @include flex();
  &_item {
    @include flex();
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    margin: 10px;
    position: relative;
    .red {
      width: 100%;
      height: 4px;
      border: 1px solid #333;
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      .redline {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #ff2000;
        // width: 100%;
        height: 100%;
        // transition: all 0.8s;
      }
    }
  }
  &_item_hover {
    // animation: playerChoose 1s infinite linear;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>
