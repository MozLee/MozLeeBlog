<template>
  <div class="m-block">
    <div class="moz-title m-title" data-title-theme="1">
      <div class="m-title-content" v-html="title"></div>
      <i class="title-snow fa fa-snowflake-o" aria-hidden="true"></i>
    </div>
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.m-block {
  width: 100%;
  margin-top: 20px;
  box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.17);
  border-radius: 5px;
  .m-title {
    width: 100%;
    height: 50px;
    color: #fff;
    line-height: 50px;
    padding-left: 20px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    .title-snow {
      position: absolute;
      right: -5px;
      top: 0;
      font-size: 3.5em;
      animation: rotate 30s linear infinite;
      transform-origin:0% 40%;
    }
  }
  .m-content {
    width: 100%;
    min-height: 60px;
    background: #fff;
    padding: 10px 20px;
  }
}
</style>
