<template>
  <div class="pagebox">
    <div class="pagebox-search">
      <el-form :inline="true" class="fr" size="mini">
        <el-form-item>
          <el-button type="primary" @click="add">新建</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pagebox-content">
      <el-table border :data="tableData" size="mini" v-loading="!ableToLoad" stripe>
        <el-table-column type="index" width="60" fixed></el-table-column>
        <el-table-column prop="name" label="名称" show-overflow-tooltip> </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.createdAt }}
          </template>
        </el-table-column>
        <el-table-column label="更新时间">
          <template slot-scope="scope">
            {{ scope.row.updatedAt }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="update(scope.row)" type="primary" size="mini">编辑</el-button>
            <el-button @click.native.prevent="del(scope.row)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <AddUpdate
      :showAddUpdate.sync="showAddUpdate"
      :selectData.sync="selectData"
      v-if="showAddUpdate"
      @close="close"
    ></AddUpdate>
  </div>
</template>

<script>
import storage from '@/utils/storage'
import AddUpdate from '@/components/AddUpdate'
export default {
  name: 'Category',
  components: {
    AddUpdate,
  },
  data() {
    return {
      pageheight: null,
      tableData: [],
      ableToLoad: true,
      showAddUpdate: false,
      selectData: {},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    add() {
      this.showAddUpdate = true
    },
    // 获取分类请求
    async getList() {
      if (!this.ableToLoad) return
      this.ableToLoad = false
      // 获取当前登录的用户
      const { username } = storage.load('info')
      // 获取当前用户创建过的分类
      const res = await this.$api.category.getCategoryList({
        author: username, // 这里的 author 得动态获取
      })
      this.ableToLoad = true
      this.tableData = res
    },
    // 删除分类请求
    async delHandler(item) {
      this.$api.category.deleteCategory(item.id)
      this.$message({
        type: 'success',
        message: '删除成功!',
      })
      await this.getList()
    },
    //  更新分类
    async update(row) {
      this.showAddUpdate = true
      this.selectData = row
    },
    // 关闭新建/编辑菜单
    close(val) {
      if (val) {
        this.getList()
      }
      this.selectData = {}
      this.showAddUpdate = false
    },
    // 删除
    del(item) {
      this.$confirm('确定删除吗？, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.delHandler(item)
        })
        .catch(() => {})
    },
  },
}
</script>
