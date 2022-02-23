<template>
  <div>
    <mu-card :class="[articleIndex % 2 ? 'float' : '', 'article-card']" @click="gotoDetail(articleCardInfo._id)">
      <div class="info">
        <div class="title">{{ articleCardInfo.title }}</div>
        <div class="create-time">
          <span class="top">置顶</span>| 发表于
          <span class="time">{{ articleCardInfo.createTime }}</span>
        </div>
        <div class="desc">
          {{ articleCardInfo.desc }}
        </div>
      </div>
      <div class="cover">
        <img :src="articleCardInfo.cover" alt="" />
      </div>
    </mu-card>
  </div>
</template>

<script>
export default {
  props: {
    articleCardInfo: {
      type: Object,
    },
    articleIndex: {
      type: Number,
    },
  },
  methods: {
    gotoDetail(id) {
      this.$emit('gotoDetail', id)
    },
  },
}
</script>

<style lang="less" scoped>
.article-card {
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  img {
    transform: scale(1.2);
    width: 100%;
  }
}
</style>
