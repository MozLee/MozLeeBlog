<template>
  <div class="index-article-container">
    <MBlock
      v-for="item in list" :key="item.key"
      :title="`<i class='fa fa-bookmark'></i> ${item.frontmatter.title||item.title}`">
      <p>{{item.frontmatter.description||item.title}}</p>
      <div class="article-footer">
        <div> <i class='fa fa-clock-o'></i> {{item.frontmatter.date||"时间都去哪了"}}</div>
        <a href="#" data-color-theme="1" class="view-article" @click="goView(item)">查看详情</a>
      </div>
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
      if (articleInfo.regularPath === '/') {
        this.$message({
          message: '这篇文章不支持查看,欣赏其他的吧~',
          type: 'warning'
        })
      }
      this.$router.push(articleInfo.regularPath, () => {

      })
    }
  },
  created () {
    const numConfig =
      this.$_get(this.$site, 'themeConfig.indexArticleNumber') || 5
    const pages = this.$_get(this.$site, 'pages').reverse()
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
  .article-footer{
    color: #999;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
