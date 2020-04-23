<template>
  <div class="article-detail">
    <MBlock :title="`<i class='fa fa-file-text'></i> ${$page.title}`">
      <div class="article-content">
        <el-page-header @back="goBack" :content="$page.title">
        </el-page-header>   
        <div class="bread-container">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$page.title}}</el-breadcrumb-item>
          </el-breadcrumb> -->
        </div>
        <div style="font-size:14px;padding-top:10px">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          {{$frontmatter.date}}
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
  data () {
    return {
      nHeaders: []
    }
  },
  methods: {
    goBack(){
      //  window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      this.$router.push('/')
    },
    reRender () {
      let headers = JSON.parse(JSON.stringify(this.$page.headers))
      headers = headers.filter(v => {
        return v.level === 2 || v.level === 3
      })
      this.nHeaders = headers
      this.nHeaders.forEach(item => {
        item.isVisible = false
      })
      const el = document.querySelector('.moz-container')
      el.addEventListener('scroll', e => {
        for (let i = 0; i < this.nHeaders.length; i++) {
          const item = this.nHeaders[i]
          const top = document.querySelector(`#${item.slug}`).offsetTop
          const scrollTop = el.scrollTop
          if (scrollTop - top > -20) {
            item.isVisible = true
          } else {
            item.isVisible = false
          }
        }
        let current = this.nHeaders.filter(v => {
          return v.isVisible
        })
        current = current[current.length - 1]
        if (current) {
          const aEls = document.querySelectorAll('.sidebar-link a')
          for (let i = 0; i < aEls.length; i++) {
            const item = aEls[i]
            item.style.color = 'green'
            const href = item.getAttribute('href')
            if (href === `#${current.slug}`) {
              item.style.color = 'red'
            }
          }
        }
        // this.nHeaders.forEach((item, index) => {
        //   // if (index > 0) return
        //   const top = document.querySelector(`#${item.slug}`).offsetTop
        //   const scrollTop = el.scrollTop
        //   console.log(top, scrollTop)
        //   if (scrollTop - top < 50) {
        //     window.location.hash = item.slug
        //   } else {
        //   }
        // })
      })
    }
  },
  created () {},
  mounted () {
    this.reRender()
  },
  watch: {
    $page (n, o) {
      this.reRender()
    }
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
  .article-content {
    padding: 0 20px;
  }
}
</style>
