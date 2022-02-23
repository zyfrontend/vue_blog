<template>
  <Layout>
    <div slot="right" class="detail">
      <div class="header">
        <div class="title">{{ detail.title }}</div>
        <div class="time">
          <div class="create-time"><mu-icon value="event" size="18"></mu-icon>发表于 {{ detail.createTime }}</div>
          |
          <div class="update-time">
            <mu-icon value="update" size="18"></mu-icon>更新于
            {{ detail.updateTime }}
          </div>
        </div>
      </div>
      <mavonEditor
        v-html="this.detail.content"
        :ishljs="true"
        :toolbarsFlag="false"
        :subfield="false"
        defaultOpen="preview"
        codeStyle="atom-one-dark-reasonable"
        :navigation="isPC"
        class="mavon"
      />
      <div class="notice">
        <div class="nickname"><span class="callout">文章作者</span>FrontendZY</div>
        <div class="link"><span class="callout">文章链接</span>https://www.zyfullstack.top</div>
        <div class="copyright-notice">
          <span class="callout">版权声明</span>
          本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明来自 ZY博客！
        </div>
      </div>
      <div class="btn">
        <div class="btn-left">
          <ToggleArticle :prev="上一篇"></ToggleArticle>
        </div>
        <div class="btn-right">
          <ToggleArticle :prev="下一篇"></ToggleArticle>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import ToggleArticle from '@/components/ToggleArticle'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { markdown } from '@/utils'
export default {
  data() {
    return {
      detail: {
        _id: 1,
        title: 'Test',
        createTime: 11111111,
        updateTime: 22222222,
        desc: '这是哪里 这里是小康博客 Hexo 版，此站将会替代曾经的博客。 地址说明 本博客采用的地址是不加 www 的根域名，这是当初一个关于本博客的一些友情链接，我会在博客关闭前逐一去访问，如果贵站还添加着本站，并且支持 https 那么我会搬到新博客',
        cover: 'https://ae01.alicdn.com/kf/H355adba4500642949f3d43d001b83ac3b.jpg',
        categories: 'test',
        tags: ['css', 'html'],
        content: '',
      },
    }
  },
  components: {
    Layout,
    mavonEditor,
    ToggleArticle,
  },
  mounted() {
    // 高亮导航
    this.$store.commit('switchLight', 1)
    // markdown 解析
    this.detail.content = markdown(
      mavonEditor,
      '在前端开发中， html 转 pdf 是最常见的需求，实现这块需求的开发[html2canvas](http://html2canvas.hertzen.com/)和 [jspdf](http://mozilla.github.io/pdf.js/getting_started/) 是最常用的两个插件，插件都是现成的。\n### 1.安装\n### 2.使用 \n ```js \n console.log(123); \n``` \n ![](https://ae01.alicdn.com/kf/H355adba4500642949f3d43d001b83ac3b.jpg)'
    )
  },
}
</script>

<style lang="less" scoped>
.detail {
  padding: 20px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  .header {
    .title {
      font-size: 30px;
      font-weight: 600;
      border-bottom: 3px solid #ecf0f1;
      text-align: center;
    }
    .time {
      display: flex;
      justify-content: center;
      color: #ccd5db;
      margin: 10px 0;
      i {
        margin: 0 5px;
      }
      .create-time {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
      .update-time {
        display: flex;
        align-items: center;
      }
    }
  }
  .btn {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    height: 10em;
    .btn-left {
      flex: 1;
    }
    .btn-right {
      flex: 1;
    }
  }
  .notice {
    color: #bdc3c7;
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 10px;
    .callout {
      color: #3498db;
    }
  }
}
</style>
