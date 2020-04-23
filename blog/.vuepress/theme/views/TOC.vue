<template>
  <div id="toc">
    <MBlock title="<i class='fa fa-heart'></i> TOC">
      <ul class="sidebar-link">
        <li v-for="item in tocList" :key="item.title">
          <a :href="`#${item.slug}`">{{item.title}}</a>
          <ul v-if="item.son">
            <li v-for="v in item.son" :key="v.title">
              <a :href="`#${v.slug}`">{{v.title}}</a>
            </li>
          </ul>
        </li>
      </ul>
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
      tocList: [],
      nHeaders: []
    }
  },
  methods: {
    reRender () {
      const headers = JSON.parse(JSON.stringify(this.$page.headers))
      const final = []
      let n = 0
      headers.forEach((item, index, arr) => {
        if (index === 0) {
          final.push(item)
          return
        }
        if (item.level >= arr[index - 1].level) {
          if (!final[n].son) {
            final[n].son = []
          }
          final[n].son.push(item)
        } else {
          final.push(item)
          n++
        }
      })
      console.log('final', final)
      this.tocList = final
    }
  },
  created () {
    this.reRender()
  },
  watch: {
    $page (o, n) {
      // console.log(o, n)
      this.reRender()
    }
  },
  mounted () {}
}
</script>
<style lang="less">
.sidebar-link {
  a {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis; /** 超出宽度显示为......**/
    white-space: nowrap;
  }
}
</style>
