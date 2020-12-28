<template>
  <div class="app-container">
    <!--表单组件-->
    <el-dialog append-to-body :close-on-click-modal="false" width="600px">
      <!--ref=form是这个form组件的别名，通过别名指向这个dom元素，:model=form指的是form绑定的数据对象名-->
      <el-form ref="form" inline :model="formA" :rules="rules" size="small" :label-position="labelPosition" label-width="320px">
        <el-form-item label="系统名称" prop="sysName">
          <el-input v-model="formA.sysName" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="系统编号" prop="sysId">
          <el-input v-model="formA.sysId" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="crud.cancelCU">取消</el-button>
        <el-button :loading="crud.status.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
      </div>
    </el-dialog>
    <!--表格渲染-->
    <OverviewMain :system-id-father="theSystem" />
    <!--
    <el-container>
      <el-header>系统功能清单</el-header>
      <el-main>
        <el-form ref="form" inline :model="formB" :rules="rules" size="small" label-width="320px">
          <el-form-item label="系统名称" prop="sysName">
            <el-button type="text" @click="handleClick">B</el-button>
          </el-form-item>
          <el-form-item label="系统名称" prop="sysName">
            B
          </el-form-item>
          <el-form-item label="系统名称" prop="sysName">
            B
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <el-container>
      <el-header>系统支持的业务场景清单</el-header>
      <el-main>
        <el-table
          ref="table"
          v-loading="crud.loading"
          lazy
          :data="systemFunctions"
        >
          <el-table-column label="系统编号" prop="sysId" width="100" />
          <el-table-column label="所属区域" prop="area" width="120" />
          <el-table-column label="英文名称" prop="sysEnglishName" width="150" />
        </el-table>
      </el-main>
    </el-container>
    <el-container>
      <el-header>架构变迁历史</el-header>
      <el-main>
        <el-table
          ref="table"
          v-loading="crud.loading"
          lazy
          :data="systemBusinessscenarios"
        >
          <el-table-column label="系统编号" prop="sysId" width="100" />
          <el-table-column label="所属区域" prop="area" width="120" />
          <el-table-column label="英文名称" prop="sysEnglishName" width="150" />
        </el-table>
      </el-main>
    </el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-table
          ref="table"
          v-loading="crud.loading"
          lazy
          :data="systemArchitectures"
        >
          <el-table-column label="系统编号" prop="sysId" width="100" />
          <el-table-column label="所属区域" prop="area" width="120" />
          <el-table-column label="英文名称" prop="sysEnglishName" width="150" />
        </el-table>
      </el-main>
    </el-container>
    -->
  </div>
</template>

<script>
// import systemListAPI from '@/api/overview/systemdetail'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import CRUD, { presenter, header, crud } from '@crud/crud'
// import rrOperation from '@crud/RR.operation'
// import crudOperation from '@crud/CRUD.operation'
// import udOperation from '@crud/UD.operation'
// import DateRangePicker from '@/components/DateRangePicker'
import { mapGetters } from 'vuex'
import OverviewMain from '@/views/overview/systemdetail/overviewmain'

export default {
  name: 'SystemDetail',
  components: { OverviewMain },
  cruds() {
    return CRUD({ title: '系统清单', url: 'api/overview/systemlist' })
  },
  mixins: [presenter(), header(), crud()],
  data() {
    return {
      labelPosition: 'top',
      formA: {},
      formB: {},
      theSystem: '',
      formC: {},
      systemFunctions: [],
      systemBusinessscenarios: [],
      systemArchitectures: [],
      depts: [],
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        docDir: [
          { required: true, message: '请输入重要度', trigger: 'blur', type: 'number' }
        ]
      },
      permission: {
        add: ['admin', 'dept:add'],
        edit: ['admin', 'dept:edit'],
        del: ['admin', 'dept:del']
      },
      remarkTypeOptions: [
        { key: 'true', display_name: '正常' },
        { key: 'false', display_name: '不再使用' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'baseApi',
      'fileUploadApiL'
    ])
  },
  beforeMount() {
    this.theSystem = this.$route.query.sysId
    console.log(this.theSystem)
    // const params = { sysId: this.theSystem }
    // systemListAPI.getSystemOverviewMain(params).then((res) => {
    //   if (res) {
    //     const content = res
    //     this.formA = content
    //   }
    // }
    // )
    // systemListAPI.getSystemFunctions(params).then((res) => {
    //   if (res) {
    //     const content = res
    //     this.formB = content
    //   }
    // }
    // ),
    // systemListAPI.getSystemBusinessscenarios(params).then((res) => {
    //   if (res) {
    //     const content = res
    //     this.systemFunctions = content
    //   }
    // }
    // ),
    // systemListAPI.getSystemArchitectures(params).then((res) => {
    //   if (res) {
    //     const content = res
    //   }
    // }
    // )
  },
  methods: {
    // 测试router.push的页面跳转
    handleClick() {
      this.$router.push({ path: "'baseApi + '/overview/' + 'systemdetail/' + 'systemdetail/''" })
    }
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done()
    //     })
    //     .catch(_ => {})
    // }
    // 表格数据获取函数，获取子级元素的方法
    // getDeptDatas(tree, treeNode, resolve) {
    //   const params = { pid: tree.id }
    //   setTimeout(() => {
    //     crudDept.getDepts(params).then(res => {
    //       resolve(res.content)
    //     })
    //   }, 100)
    // },
    // vue upload组件上传之前触发的函数
    // beforeUpload(file) {
    //   let isLt2M = true
    //   isLt2M = file.size / 1024 / 1024 < 100
    //   if (!isLt2M) {
    //     this.loading = false
    //     this.$message.error('上传文件大小不能超过 100MB!')
    //   }
    //   return isLt2M
    // },
    // 启动（未提交）新增与编辑之后，做的一些操作
    // [CRUD.HOOK.afterToCU](crud, form) {
    //   // if (form.pid !== null) {
    //   //   form.isTop = '0'
    //   // } else if (form.id !== null) {
    //   //   form.isTop = '1'
    //   // }
    //   form.enabled = `${form.enabled}`
    //   if (form.id != null) {
    //     // 编辑时，执行这个操作
    //     this.getSupDepts(form.id)
    //   } else {
    //     // 新增时，执行这个操作
    //     this.getDepts()
    //   }
    // },
    // getSupDepts(id) {
    //   crudDept.getDeptSuperior(id).then(res => {
    //     const date = res.content
    //     // this.buildDepts(date)
    //     this.depts = date
    //   })
    // },
    // buildDepts(depts) {
    //   // 对拿到的所有部门的json数据，forEach每一个执行下面的操作
    //   // 把每一个有儿子，但是儿子又不存在的项的儿子字段置为空。
    //   depts.forEach(data => {
    //     if (data.children) {
    //       this.buildDepts(data.children)
    //     }
    //     if (data.hasChildren && !data.children) {
    //       data.children = null
    //     }
    //   })
    // },
    // getDepts() {
    //   crudDept.getDepts({ enabled: true }).then(res => {
    //     this.depts = res.content.map(function(obj) {
    //       if (obj.hasChildren) {
    //         obj.children = null
    //       }
    //       return obj
    //     })
    //   })
    // },
    // 获取弹窗内部门数据
    // loadDepts({ action, parentNode, callback }) {
    //   if (action === LOAD_CHILDREN_OPTIONS) {
    //     crudDept.getDepts({ enabled: true, pid: parentNode.id }).then(res => {
    //       parentNode.children = res.content.map(function(obj) {
    //         if (obj.hasChildren) {
    //           obj.children = null
    //         }
    //         return obj
    //       })
    //       setTimeout(() => {
    //         callback()
    //       }, 100)
    //     })
    //   }
    // },
    // 提交前的验证
    // [CRUD.HOOK.afterValidateCU]() {
    //   if (this.form.name === null) {
    //     this.$message({
    //       message: '标题必须填写',
    //       type: 'warning'
    //     })
    //     return false
    //   }
    // 新建的或者说编辑的条目位于顶层，没有pid。
    // if (this.form.isTop === '1') {
    //   this.form.pid = null
    // }
    //   return true
    // },
    // 改变状态
    // changeEnabled(data, val) {
    //   this.$confirm('此操作将 "' + this.dict.label.dept_status[val] + '" ' + data.name + '部门, 是否继续？', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     crudDept.edit(data).then(res => {
    //       this.crud.notify(this.dict.label.dept_status[val] + '成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
    //     }).catch(err => {
    //       data.enabled = !data.enabled
    //       console.log(err.response.data.message)
    //     })
    //   }).catch(() => {
    //     data.enabled = !data.enabled
    //   })
    // },
    // checkboxT(row, rowIndex) {
    //   return row.id !== 1
    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .vue-treeselect__control,::v-deep .vue-treeselect__placeholder,::v-deep .vue-treeselect__single-value {
    height: 30px;
    line-height: 30px;
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .el-input-number .el-input__inner {
    text-align: left;
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .el-form-item__label{
    white-space:nowrap;
}
</style>
<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
