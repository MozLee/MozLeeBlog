<template>
  <div>
    <!-- <el-button v-for="item in navList" @click="jumpPath(item)">{{item.text}}</el-button> -->
  </div>
</template>
<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  methods: {
    jumpPath (navInfo) {
      this.$router.push({
        path: navInfo.link
      }, () => {})
    }
  }
}
</script>
