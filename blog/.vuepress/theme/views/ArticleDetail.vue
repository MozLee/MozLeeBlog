<template>
  <div class="article-detail">
    <MBlock :title="`<i class='fa fa-file-text'></i> ${$page.title}`">
      <div class="article-content">
        <div class="bread-container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">文章</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{$page.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <Content></Content>
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
  created () {
    console.log(this.$page)
    console.log(this.$description)
  }
}
</script>
<style lang="less">
.article-detail {
  width: 100%;
  height: auto;
  .bread-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .article-content{
    padding: 0 20px;
  }
}
</style>
