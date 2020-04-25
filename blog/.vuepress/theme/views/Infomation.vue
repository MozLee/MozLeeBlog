<template>
  <div class="m-info">
    <MBlock title="<i class='fa fa-info'></i> 简介">
      <img :src="infoForView.avator" />
      <p>{{infoForView.content}}</p>
      <el-divider>联系方式</el-divider>
      <div class="sos-container">
        <a data-color-theme="1" class="view-article" href="https://github.com/MozLee">
          <i class="fa fa-github-alt"></i> MozLee
        </a>
        <a data-color-theme="1" class="view-article" href="https://weibo.com/u/6389767193?is_all=1">
          <i class="fa fa-weibo"></i> 瞅啥那
        </a>
      </div>
      <div class="sos-container">
        <el-popover
          placement="top-start"
          title="微信二维码"
          width="170"
          trigger="hover"
        >
          <img style="width:140px;" src="/images/qrcode.JPG">
          <a data-color-theme="1" slot="reference" class="view-article" href="#">
            <i class="fa fa-weixin"></i> Wechat
          </a>
        </el-popover>

        <a data-color-theme="1" class="view-article" href="#">
          <i class="fa fa-envelope"></i> 邮箱
        </a>
      </div>
    </MBlock>
  </div>
</template>
<script>
import MBlock from "../components/MBlock";
export default {
  components: {
    MBlock
  },
  computed: {
    infoForView() {
      const { info } = this.$site.themeConfig;
      let avator, content;
      if (info && info.avator) {
        avator = info.avator;
        if (!/http/.test(avator)) {
          avator = this.$withBase(avator);
        }
      } else {
        avator = "";
      }
      if (info && info.content) {
        content = info.content;
      } else {
        content = "";
      }
      return {
        avator,
        content
      };
    }
  }
};
</script>
<style lang="less">
.m-info {
  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: 20px auto;
    border-radius: 50%;
  }
  .sos-container {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    justify-content: space-evenly;
    a {
      display: block;
    }
  }
}
</style>
