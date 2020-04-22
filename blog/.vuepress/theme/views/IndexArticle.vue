<template>
  <div class="index-article-container">
    <MBlock
      v-for="item in list" :key="item.key"
      :title="`<i class='fa fa-bookmark'></i> ${item.frontmatter.title||item.title}`">
      <p>{{item.frontmatter.description||item.title}}</p>
      <a href="#" data-color-theme="1" class="view-article" @click="goView(item)">查看</a>
    </MBlock>
  </div>
</template>
<script>
import MBlock from '../components/MBlock'
export default {
  components: {
    MBlock
  },
  data () {
    return {
      list: null
    }
  },
  methods: {
    goView (articleInfo) {
      console.log(articleInfo)
      this.$router.push(articleInfo.regularPath, () => {

      })
    }
  },
  created () {
    const numConfig =
      this.$_get(this.$site, 'themeConfig.indexArticleNumber') || 5
    const pages = this.$_get(this.$site, 'pages')
    const realNum = pages.length || 0
    this.list = realNum > numConfig ? pages.splice(0, 5) : pages
    console.log(this.list[0])
  },
  mounted () {}
}
</script>
<style lang="less">
.index-article-container {
  .view-article {
    transition: all 0.2s linear;
  }
}
</style>
