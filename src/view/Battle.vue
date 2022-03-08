<script lang="ts">
import Enemy from "~/components/Enemy.vue";
import Player from "~/components/Player.vue";
import Msg from "~/components/Msg.vue";
export default {
  components: {
    Enemy,
    Player,
    Msg
  },
  setup(props: any) {},
};
</script>

<template>
  <div class="box">
    <Enemy />
    <Player />
    <Msg/>
  </div>
</template>

<style lang="scss" scoped>
.box{
  width: 100%;
  @include flex(column, center, flex-start);
}
</style>
