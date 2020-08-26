<template>
<div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
  <el-form-item label="活动区域" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" clearable @change="handle">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  
  
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  <el-select v-model="value" placeholder="请选择" @change="handleSelect" multiple>
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 15px">{{ item.value }}</span>
    </el-option>
  </el-select>
</div>

</template>
<script>

  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
          
        },
        cities: [{
          value: 'all',
          label: '所有选项'
        },{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        oldOptions:[]
      };
    },
    methods: {
      submitForm(formName) {
        console.log("rules",this.rules)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handle(){
        console.log("fei",this.ruleForm.region)
      },
      handleSelect(val){
        let allValues = []
        //保留所有值
        for (let item of this.cities) {
            allValues.push(item.value)
        }

        // 用来储存上一次的值，可以进行对比
        const oldVal = this.oldOptions

        // 若是全部选择
        if (!oldVal.includes('all') && val.includes('all')) this.value = allValues

        // 取消全部选中  上次有 当前没有 表示取消全选
        if (oldVal.includes('all') && !val.includes('all')) this.value = []

        // 点击非全部选中  需要排除全部选中 以及 当前点击的选项 
        // 新老数据都有全部选中 
        if (oldVal.includes('all') && val.includes('all')) {
            const index = val.indexOf('all')
            val.splice(index, 1) // 排除全选选项
            this.value = val
        }

        //全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
        if (!oldVal.includes('all') && !val.includes('all')) {
            console.log(11)
            if (val.length === allValues.length - 1) this.value = ['all'].concat(val)
        }

        //储存当前最后的结果 作为下次的老数据 
        this.oldOptions = this.value
      }
    }
  }
</script>