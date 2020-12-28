<template>
  <div class="app-container">
    <!--工具栏-->
    <el-dialog append-to-body :close-on-click-modal="false" :visible.sync="showDialogOfCU" width="500px">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-position="left" label-width="180px">
        <el-form-item label="系统名称" prop="sysName">{{ form.sysName }}</el-form-item>
        <el-form-item label="系统编号" prop="sysId">{{ form.sysId }}</el-form-item>
        <el-form-item label="区域名称" prop="area">{{ form.area }}</el-form-item>
        <el-form-item label="系统类型" prop="systemType">
          <el-input v-model="form.systemType" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="功能简述" prop="functionDescription">
          <el-input v-model="form.functionDescription" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统负责人" prop="owner">
          <el-input v-model="form.owner" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="开发语言" prop="developmentLanguage">
          <el-input v-model="form.developmentLanguage" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="客户端类型" prop="clientType">
          <el-input v-model="form.clientType" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="支持智能终端" prop="supportSmartPhone">
          <el-input v-model="form.supportSmartPhone" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="网页链接" prop="weblink">
          <el-input v-model="form.weblink" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="是否支持AD认证" prop="supportAd">
          <el-input v-model="form.supportAd" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="服务器物理位置" prop="serverLocation">
          <el-input v-model="form.serverLocation" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统软件类型" prop="softwareType">
          <el-input v-model="form.softwareType" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="是否关键系统" prop="vitalOrNot">
          <el-input v-model="form.vitalOrNot" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="业务服务级别" prop="businessServiceLevel">
          <el-input v-model="form.businessServiceLevel" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="业务作业性质" prop="businessWorkProperty">
          <el-input v-model="form.businessWorkProperty" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="业务范围" prop="businessScope">
          <el-input v-model="form.businessScope" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="是否POC" prop="pocOrNot">
          <el-input v-model="form.pocOrNot" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="信息安全等级" prop="informationSecurityLevel">
          <el-input v-model="form.informationSecurityLevel" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="数据是否出国" prop="dataAboard">
          <el-input v-model="form.dataAboard" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统使用范围" prop="systemUseScope">
          <el-input v-model="form.systemUseScope" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="个人信息数量" prop="personalInfoAmount">
          <el-input v-model="form.personalInfoAmount" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统等保等级" prop="systemSecurityLevel">
          <el-input v-model="form.systemSecurityLevel" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统等保备案号" prop="systemSecurityRecordNo">
          <el-input v-model="form.systemSecurityRecordNo" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="互联网备案公安部备案号" prop="internetPoliceRecordNo">
          <el-input v-model="form.internetPoliceRecordNo" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="互联网备案工信部备案号" prop="internetMiitRecordNo">
          <el-input v-model="form.internetMiitRecordNo" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="RTO" prop="rto">{{ form.rto }}
          <el-input v-model="form.rto" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="RPO" prop="rpo">{{ form.rpo }}
          <el-input v-model="form.rpo" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="MOP" prop="mop">{{ form.mop }}
          <el-input v-model="form.mop" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="业务量峰值" prop="bussnessPeakValue">
          <el-input v-model="form.bussnessPeakValue" style="width: 150px;" />
        </el-form-item>
        <el-form-item label="系统极限处理能力" prop="systemCapability">
          <el-input v-model="form.systemCapability" style="width: 150px;" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="clickCancleCU">取消</el-button>
        <el-button type="primary" @click="clickSubmitCU">确认</el-button>
      </div>
    </el-dialog>
    <el-container direction="vertical">
      <el-header>系统简况
        <el-button class="titleCU" :disabled="addDisabled" @click="clickAddButton">新增</el-button>
        <el-button class="titleCU" :disabled="modifyDisabled" @click="clickModifyButton">修改</el-button>
      </el-header>
      <el-main>
        <el-form ref="form" :model="form" :rules="rules" size="small" label-position="left" label-width="160px">
          <el-form-item label="系统名称" prop="sysName">{{ form.sysName }}</el-form-item>
          <el-form-item label="系统编号" prop="sysId">{{ form.sysId }}</el-form-item>
          <el-form-item label="区域名称" prop="area">{{ form.area }}</el-form-item>
          <el-form-item label="系统类型" prop="systemType">{{ form.systemType }}</el-form-item>
          <el-form-item label="功能简述" prop="functionDescription">{{ form.functionDescription }}</el-form-item>
          <el-form-item label="系统负责人" prop="owner">{{ form.owner }}</el-form-item>
          <el-form-item label="开发语言" prop="developmentLanguage">{{ form.developmentLanguage }}</el-form-item>
          <el-form-item label="客户端类型" prop="clientType">{{ form.clientType }}</el-form-item>
          <el-form-item label="支持智能终端" prop="supportSmartPhone">{{ form.supportSmartPhone }}</el-form-item>
          <el-form-item label="网页链接" prop="weblink">{{ form.weblink }}</el-form-item>
          <el-form-item label="是否支持AD认证" prop="supportAd">{{ form.supportAd }}</el-form-item>
          <el-form-item label="服务器物理位置" prop="serverLocation">{{ form.serverLocation }}</el-form-item>
          <el-form-item label="系统软件类型" prop="softwareType">{{ form.softwareType }}</el-form-item>
          <el-form-item label="是否关键系统" prop="vitalOrNot">{{ form.vitalOrNot }}</el-form-item>
          <el-form-item label="业务服务级别" prop="businessServiceLevel">{{ form.businessServiceLevel }}</el-form-item>
          <el-form-item label="业务作业性质" prop="businessWorkProperty">{{ form.businessWorkProperty }}</el-form-item>
          <el-form-item label="业务范围" prop="businessScope">{{ form.businessScope }}</el-form-item>
          <el-form-item label="是否POC" prop="pocOrNot">{{ form.pocOrNot }}</el-form-item>
          <el-form-item label="信息安全等级" prop="informationSecurityLevel">{{ form.informationSecurityLevel }}</el-form-item>
          <el-form-item label="数据是否出国" prop="dataAboard">{{ form.dataAboard }}</el-form-item>
          <el-form-item label="系统使用范围" prop="systemUseScope">{{ form.systemUseScope }}</el-form-item>
          <el-form-item label="个人信息数量" prop="personalInfoAmount">{{ form.personalInfoAmount }}</el-form-item>
          <el-form-item label="系统等保等级" prop="systemSecurityLevel">{{ form.systemSecurityLevel }}</el-form-item>
          <el-form-item label="系统等保备案号" prop="systemSecurityRecordNo">{{ form.systemSecurityRecordNo }}</el-form-item>
          <el-form-item label="互联网备案公安部备案号" prop="internetPoliceRecordNo">{{ form.internetPoliceRecordNo }}</el-form-item>
          <el-form-item label="互联网备案工信部备案号" prop="internetMiitRecordNo">{{ form.internetMiitRecordNo }}</el-form-item>
          <el-form-item label="RTO" prop="rto">{{ form.rto }}</el-form-item>
          <el-form-item label="RPO" prop="rpo">{{ form.rpo }}</el-form-item>
          <el-form-item label="MOP" prop="mop">{{ form.mop }}</el-form-item>
          <el-form-item label="业务量峰值" prop="bussnessPeakValue">{{ form.bussnessPeakValue }}</el-form-item>
          <el-form-item label="系统极限处理能力" prop="systemCapability">{{ form.systemCapability }}</el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import OverviewMainAPI from '@/api/overview/overviewmain'
import SystemNameAPI from '@/api/knlge/systemname'
// import CRUD, { presenter, header, form, crud } from '@crud/crud'
// import rrOperation from '@crud/RR.operation'
// import crudOperation from '@crud/CRUD.operation'
// import udOperation from '@crud/UD.operation'
// import DateRangePicker from '@/components/DateRangePicker'

// const defaultForm = { sysName: null, sysId: null, area: null, systemType: null, functionDescription: null, owner: null, developmentLanguage: null }
export default {
  name: 'OverviewMain',
  props: {
    systemIdFather: String
  },
  data() {
    return {
      form: {},
      addDisabled: false,
      modifyDisabled: false,
      showDialogOfCU: false,
      addClicked: false,
      ModifyClicked: false,
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        deptSort: [
          { required: true, message: '请输入序号', trigger: 'blur', type: 'number' }
        ]
      }
    }
  },
  mounted() {
    console.log(this.systemIdFather)
    const params = { sysId: this.systemIdFather }
    OverviewMainAPI.getSystemOverviewMain(params).then((res) => {
      if (res) {
        this.addDisabled = true
        this.modifyDisabled = !this.addDisabled
        const content = res
        this.form = content
      } else {
        this.addDisabled = false
        this.modifyDisabled = !this.addDisabled
        SystemNameAPI.getSystemNameArea(params).then((res) => {
          if (res) {
            const content = res
            this.form.sysId = content.sysId
            this.form.sysName = content.sysName
            this.form.area = content.area
          }
        }
        )
      }
    }
    )
  },

  methods: {
    clickAddButton() {
      this.addClicked = true
      this.showDialogOfCU = true
    },
    clickModifyButton() {
      this.ModifyClicked = true
      this.showDialogOfCU = true
    },
    clickCancleCU() {
      this.showDialogOfCU = false
    },
    clickSubmitCU() {
      if (this.addClicked) {
        OverviewMainAPI.add(this.form).then(
          (res) => {
            this.$notify({
              title: '提交成功',
              type: 'success',
              duration: 2500
            }
            )
            this.showDialogOfCU = false
            this.addClicked = false
            location.reload()
          }
        )// .catch(
        //   (err) => {
        //     this.loading = false
        //   }
        // )
      } else {
        OverviewMainAPI.edit(this.form).then(
          (res) => {
            console.log(res)
            if (res) {
              this.$notify({
                title: '提交成功',
                type: 'success',
                duration: 2500
              }
              )
              this.showDialogOfCU = false
              this.ModifyClicked = false
            } else {
              this.$notify({
                title: res,
                type: 'error',
                duration: 2500
              }
              )
            }
          }
        ).catch(
          (err) => {
            this.loading = false
            this.$alert(err, '错误提示', {
              confirmButtonText: '确定',
              dangerouslyUseHTMLString: true
            }
            )
          }
        )
      }
    }
  }
}
</script>

<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
<style scoped>
 .titleCU {
    float: right;
  }
</style>
