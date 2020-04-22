<template>
  <div class="m-block">
    <div class="moz-title m-title"  data-title-theme="1" v-html="title"></div>
    <div class="m-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>
<style lang="less" scope>
  .m-block{
    width: 100%;
    margin-top: 20px;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.17);
    overflow: hidden;
    border-radius: 5px;
    .m-title{
      width: 100%;
      height: 50px;
      color: #fff;
      line-height: 50px;
      padding-left: 20px;
      font-weight: bold;
    }
    .m-content{
      width: 100%;
      min-height: 60px;
      background: #fff;
      padding:10px 20px;
    }
  }
</style>
