<template>
  <div class="moz-container" data-theme="1">
    <div class="theme-container">
      <div class="header moz-title" data-title-theme="1" v-html="name"></div>
      <div class="main">
        <div class="left-side">
          <Infomation></Infomation>
          <TOC v-show="$page.regularPath!=='/'"></TOC>
          <MSearch></MSearch>
          <ArticleList></ArticleList>
        </div>
        <div class="right-side">
          <IndexArticle v-show="$page.regularPath==='/'"></IndexArticle>
          <ArticleDetail v-show="$page.regularPath!=='/'"></ArticleDetail>
        </div>
      </div>
      <!-- <Nav :navList="navList"></Nav> -->
      <!-- <Content /> -->
      <div class="footer">
        <SiteInfo></SiteInfo>
      </div>
    </div>
    <el-backtop target=".moz-container" :right="50"></el-backtop>
  </div>
</template>
<script>
import vuePressConfig from "../../config";
import Nav from "../components/Nav";
import Infomation from "../views/Infomation";
import IndexArticle from "../views/IndexArticle";
import ArticleDetail from "../views/ArticleDetail";
import SiteInfo from "../views/SiteInfo";
import MSearch from "../views/MSearch";
import TOC from "../views/TOC";
import ArticleList from '../views/ArticleList'
export default {
  components: {
    MSearch,
    Infomation,
    IndexArticle,
    ArticleDetail,
    SiteInfo,
    TOC,
    ArticleList
  },
  data() {
    return {
      config: vuePressConfig,
      navList: vuePressConfig.themeConfig.nav
    };
  },
  created() {
    console.log(this.$site);
  },
  computed: {
    name() {
      if (this.config.title === "MozLee") {
        return "M<i class='fa fa-cog fa-spin'></i>zLee";
      } else {
        return this.config.title;
      }
    }
  },
  mounted() {
    function changeTheme() {
      bodyEl.setAttribute("data-theme", n.toString());
      for (let i = 0; i < titleELs.length; i++) {
        titleELs[i].setAttribute("data-title-theme", n.toString());
      }
      for (let i = 0; i < viewEls.length; i++) {
        const item = viewEls[i];
        item.setAttribute("data-color-theme", n.toString());
        item.addEventListener("mouseover", () => {
          item.style.color = getComputedStyle(bodyEl).backgroundColor;
        });
        item.addEventListener("mouseout", () => {
          // item.style.color = getComputedStyle(titleELs[0]).backgroundColor;
          item.removeAttribute("style");
        });
      }
    }
    const bodyEl = document.querySelector(".moz-container");
    const titleELs = document.querySelectorAll(".moz-title");
    const viewEls = document.querySelectorAll(".view-article");
    let n = 1;
    const m = new Date().getSeconds();
    n = Math.floor(m / 5);
    n = n === 0 ? 1 : n;
    changeTheme();
    setInterval(() => {
      n++;
      changeTheme();
      n = n >= 12 ? 0 : n;
    }, 5000);
  }
};
</script>
<style lang="less">
@import "../styles/reset.less";
@import "../styles/css/font-awesome.css";

.moz-container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  transition: background 0.4s linear 0s;
  padding-top: 40px;
  padding-bottom: 40px;
}
.theme-container {
  width: 80vw;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  .moz-title {
    transition: background 0.4s linear 0s;
  }
  .header {
    width: 100%;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.17);
    text-align: center;
    line-height: 120px;
    color: #fff;
    font-size: 72px;
    font-weight: bold;
    text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
    .fa-spin {
      animation-duration: 3s;
      font-size: 50px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left-side {
      width: 260px;
      height: auto;
    }
    .right-side {
      width: 700px;
      min-width: 100px;
      height: auto;
    }
  }
}
@media screen and (max-width: 1200px) {
  .moz-container {
    .theme-container {
      width: 98%;
      .main {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .left-side {
          width: 260px;
          height: auto;
          display: none;
        }
        .right-side {
          width: 100%;
        }
      }
    }
  }
}
</style>
