<template>
<div >
   <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
      <el-cascader
        v-model="form.name"
        :options="options"
        :props="props"
        clearable></el-cascader>
  </el-form-item>
  <el-form-item label="活动城市">
      <el-select v-model="form.city" multiple placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
  </el-form-item>
  <el-button type="primary" @click="onSubmit">立即创建</el-button>
   </el-form>
   
</div>

</template>



<script>
import {getList} from '@/api/test'
export default {
    data() {
      return {
        form: {
          name: [],
          city: [],
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        props: { multiple: true },
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海',
            children: [
              { value: 3, label: '普陀' },
              { value: 4, label: '黄埔' },
              { value: 5, label: '徐汇' }
            ]
          }, {
            value: 7,
            label: '江苏',
            children: [
              { value: 8, label: '南京' },
              { value: 9, label: '苏州' },
              { value: 10, label: '无锡' }
            ]
          }, {
            value: 12,
            label: '浙江',
            children: [
              { value: 13, label: '杭州' },
              { value: 14, label: '宁波' },
              { value: 15, label: '嘉兴' }
            ]
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
            children: [
              { value: 19, label: '西安' },
              { value: 20, label: '延安' }
            ]
          }, {
            value: 21,
            label: '新疆维吾尔族自治区',
            children: [
              { value: 22, label: '乌鲁木齐' },
              { value: 23, label: '克拉玛依' }
            ]
          }]
        }]
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!',this.form);
      }
    }
  }
</script>