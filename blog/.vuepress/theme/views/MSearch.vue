<template>
  <div>
    <MBlock title="<i class='fa fa-search'></i> 搜索" class="search-container">
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
        suffix-icon="el-icon-search"
        style="width:100%"
      ></el-autocomplete>
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
      titles: [],
      state1: ''
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var titles = this.titles
      var results = queryString ? titles.filter((title) => {
        return title.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
      }) : titles
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    loadAll () {
      console.log(this.$site)
      const titles = this.$site.pages.map((v) => {
        return {
          value: v.title, path: v.path
        }
      })
      return titles
    },
    handleSelect (item) {
      // console.log(item)
      this.$router.push(item.path, () => {

      })
    }
  },
  mounted () {
    this.titles = this.loadAll()
  }

}
</script>
<style lang="less">
.search {
  z-index: 99999;
}
</style>
