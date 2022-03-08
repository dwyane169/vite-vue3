<script lang="ts">
export default {
  components: {},
  setup(props: any) {},
};
</script>

<template>
  <div class="box">
    <div class="top">
      <div class="top_left">1</div>
      <div class="top_right">
        <div class="top_right_line">1</div>
        <div class="top_right_line">2</div>
        <div class="top_right_line">3</div>
        <div class="top_right_line">4</div>
        <div class="top_right_line">5</div>
      </div>
    </div>
    <div class="bottom">
      <div class="skill"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  @include flex(column, center, flex-start);
  .top {
    padding: 10px;
    width: 100%;
    @include flex(row, flex-start, flex-start);
    &_left {
      width: 180px;
      height: 180px;
      background-color: #ccc;
      margin-right: 8px;
    }
    &_right {
      flex: 1;
      height: 180px;
      @include flex(column, center, space-between);
      &_line {
        width: 100%;
        height: 30px;
        background-color: #aaa;
      }
    }
  }
  .bottom {
    padding: 0 10px;
    width: 100%;
    @include flex(row, flex-start, flex-start);
    .skill {
      width: 100%;
    }
  }
}
</style>
