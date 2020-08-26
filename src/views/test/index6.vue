<template>
<div >
   <svg class="icon" aria-hidden="true" > 

                        <use xlink:href='#icon-fuzhi'></use>

                    </svg>
    <span class="iconfont icon-copy">cc</span>
    <span class="iconfont icon-copy">cc</span>
    <el-button @click="init()">click</el-button>
    <el-button @click="init2()">click2</el-button>
    <el-button @click="init3()">click3</el-button>
    <p
     class="title"
    :title="name"
     >{{name | ellipsis}}</p>

     <div class="block">
      <span class="demonstration">默认显示所有Tag</span>
      <el-cascader
        :value="value"
        :options="options"
        :props="props"
        clearable></el-cascader>
    </div>
</div>

</template>



<script>
import {getList} from '@/api/test'
export default {
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0,8) + '...'
      }
      return value
    }
  },
    data() {
      return {
        name:'中国美国日本新加坡加拿大法国意大利',
        value:["1","2","3"],
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
      init(){
          const uus=[
              {props:{
                  type:'select',
                  onSuccess:function(res,file){
                      file.url = res.data.filePath
                  }
              }}
          ];
          console.log("第一",uus);
            var s=JSON.stringify(uus, function(key, val) {
            if (typeof val === 'function') {
                return val + '';
            }
            return val;
            });
           console.log("第二",s); 
           var tt = JSON.parse(s,function(k,v){
            if(v.indexOf && v.indexOf('function') > -1){
                console.log("中间",v)
                return eval("(function(){return "+v+" })()")
            }
            return v;
            });
            console.log("第三",tt); 
      },
      init2(){
        const myDate = new Date();
        let cc = '';
        const month = this.fn3(myDate.getMonth()+1,2)
        const date = this.fn3(myDate.getDate()+1,2)
        cc = 'e'+month+date+
        console.log(cc)
      },
      fn3(num, length) {  
          return (Array(length).join('0') + num).slice(-length);  
      },
      async init3(){
        await getList()
      }  
    }
  }
</script>