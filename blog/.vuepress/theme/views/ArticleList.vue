<template>
  <div class="article-list">
    <MBlock title="<i class='fa fa-info'></i> 文章列表">
      <div class="list">
        <ul >
          <li v-for="item in pages"><a data-color-theme="1" class="view-article" :href="item.path">{{item.title}}</a></li>
        </ul>
      </div>
    </MBlock>
  </div>
</template>
<script>
import MBlock from '../components/MBlock'
import deepClone from 'lodash/cloneDeep'
export default {
  components: {
    MBlock
  },
  created(){
    const pages = this.$_get(this.$site, 'pages')
    console.log('pages',pages);
    this.pages = deepClone(pages).reverse()
  }
}
</script>
<style lang="less">
 .list{
   width: 100%;
   max-height: 200px;
   overflow-y: auto;
   a {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis; /** 超出宽度显示为......**/
    white-space: nowrap;
  }
 }
</style>
