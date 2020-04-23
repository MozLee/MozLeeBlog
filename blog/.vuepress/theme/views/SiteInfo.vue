<template>
  <div>
    <MBlock title="<i class='fa fa-heart'></i> 网站信息">
      <div class="moz-footer">
        <div>Designed and made with <i style="color:#E53935" class="fa fa-heartbeat" aria-hidden="true"></i></div>
        由Vuepress强力驱动 | ©️ 2020 mozlee.com | 木子李 |
        <a class="view-article" href="http://www.beian.miit.gov.cn/">辽ICP备17012102号-2</a>
      </div>
    </MBlock>
  </div>
</template>
<script>
import MBlock from '../components/MBlock'
export default {
  components: {
    MBlock
  }
}
</script>
<style lang="less">
  .moz-footer{
    text-align: center;
    line-height: 40px;
    color:#999;
  }
</style>
