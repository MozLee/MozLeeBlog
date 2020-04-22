<template>
  <div class="m-info">
    <MBlock title="<i class='fa fa-info'></i> 简介">
      <img :src="infoForView.avator"/>
      <p>{{infoForView.content}}</p>
    </MBlock>
  </div>
</template>
<script>
import MBlock from '../components/MBlock'
export default {
  components: {
    MBlock
  },
  computed: {
    infoForView () {
      const { info } = this.$site.themeConfig
      let avator, content
      if (info && info.avator) {
        avator = info.avator
        if (!/http/.test(avator)) {
          avator = this.$withBase(avator)
        }
      } else {
        avator = ''
      }
      if (info && info.content) {
        content = info.content
      } else {
        content = ''
      }
      return {
        avator, content
      }
    }
  }
}
</script>
<style lang="less">
  .m-info{
    img{
      width: 100px;
      height: 100px;
      display: block;
      margin: 20px auto;
      border-radius: 50%;
    }
  }
</style>
