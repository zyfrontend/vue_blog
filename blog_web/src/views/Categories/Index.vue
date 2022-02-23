<template>
  <div class="categories">
    <Layout>
      <div class="right shadow" slot="right">
        <h1>分类</h1>
        <div class="box" v-for="item in info" :key="item._id">
          <div class="axis hover">
            <span class="icon"></span>
            {{ item.name }}
            <span class="len">{{ `(${item.len})` }}</span>
          </div>
          <div class="content">
            <div class="item hover" v-for="chil in item.chil" :key="chil.name">
              <span class="icon"></span>
              {{ chil.name }}
              <span class="len">{{ `(${chil.len})` }}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  data() {
    return {
      open: 'send',
      info: [
        {
          _id: 11,
          name: '技术',
          len: 40,
          chil: [
            {
              name: 'C#',
              len: 10,
            },
            {
              name: 'JavaScript',
              len: 10,
            },
            {
              name: 'Golang',
              len: 10,
            },
            {
              name: 'PHP',
              len: 10,
            },
          ],
        },
        {
          _id: 22,
          name: '随笔',
          len: 3,
          chil: [
            {
              name: '日常',
              len: 3,
            },
          ],
        },
      ],
    }
  },
  components: {
    Layout,
  },
  mounted() {
    this.$store.commit('switchLight', 3)
  },
}
</script>

<style lang="less" scoped>
.categories {
  .right {
    padding: 10px;
    .box {
      .len {
        color: #7f8c8d;
      }
      .hover:hover {
        color: #00e676;
        transition: 0.4s;
        .icon {
          background: red;
        }
      }
      .axis {
        margin: 10px 0 10px 20px;
        position: relative;
        cursor: pointer;
      }
      .content {
        .item {
          margin: 10px 0 10px 30px;
          position: relative;
          cursor: pointer;
        }
      }
      .icon {
        width: 16px;
        height: 16px;
        background: #2ecc71;
        display: block;
        z-index: 10;
        position: absolute;
        top: 50%;
        left: -20px;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: 0.4s;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 4px;
          z-index: -1;
          border-radius: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: white;
        }
      }
    }
  }
}
</style>
