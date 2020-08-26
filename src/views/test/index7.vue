<template>
  <div>
    <el-backtop />
    <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
    <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
    <el-button @click="init()">click</el-button>
    <el-button @click="init2()">click2</el-button>
    <el-button @click="init3()">click3</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      dialogVisible: false,
      fApi: {},
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData))
          console.log('ss', this.rule)
        },
        mounted: () => {
          this.rule[6].__fc__.el.$el.lastElementChild.lastElementChild.value = ''
        },
        resetBtn: true
      },
      rule: [
        {
          type: 'input',
          field: 'goods_name',
          title: '商品名称',
          validate: [{ validator: (rule, val, d) => {
            val && !/^[A-Za-z]+$/.test(val) ? d(true) : d()
          }, message: '只能填写 a-z' }]
        },
        {
          type: 'group',
          title: '批量添加',
          field: 'group',
          value: [],
          props: {
            max: 5,
            min: 3,
            rules: [
              {
                type: 'col',
                children: [
                  formCreate.maker.date('时间', 'date', '').native(false).col({ span: 12 }),
                  {
                    type: 'inputNumber',
                    field: 'field',
                    title: '库存',
                    props: {
                      disabled: false
                    },
                    validate: [
                      { required: true, min: 10, type: 'number' }
                    ],
                    col: {
                      span: 12
                    }
                  }
                ]

              },
              {
                type: 'input',
                field: 'field2',
                title: '名称',
                props: {
                  disabled: false
                },
                validate: [
                  { required: true }
                ]
              }
            ]
          },
          validate: [
            { required: true, min: 3, type: 'array', message: '最少增加3项' }
          ]
        },
        {
          type: 'input',
          field: 'adf',
          title: '简介 (自定义!只能填写 a-z',
          validate: [
            { validator: (rule, val, d) => {
              val && !/^[a-z]+$/.test(val) ? d(true) : d()
            }, message: '只能填写 a-z' }
          ]
        },
        {
          type: 'input',
          title: '商品名称2',
          field: 'goods_name2',
          value: 'iphone 7',
          col: {

            span: 12,
            labelWidth: 150
          },
          props: {
            'type': 'textarea',
            'autosize': 'true'
          },
          validate: [
            { required: true, message: '请输入goods_name', trigger: 'blur' },
            { validator: (rule, val, d) => {
              val && !/^[A-Za-z]+$/.test(val) ? d(true) : d()
            }, message: '只能填写 a-z' },
            { min: 10, message: '最小10', trigger: 'blur' },
            { max: 15, message: '最大15', trigger: 'blur' }

          ]
        },
        {
          type: 'checkbox',
          field: 'label',
          title: '标签',
          value: ['DM', 'DC'],
          options: [
            { label: '好用', value: ' ', disabled: false },
            { label: '快速', value: 'DM', disabled: false },
            { label: '高效', value: 'DC', disabled: false },
            { label: '全能1', value: 'MC1', disabled: false },
            { label: '高效2', value: 'DC2', disabled: false },
            { label: '全能3', value: 'MC3', disabled: false },
            { label: '高效4', value: 'DC4', disabled: false },
            { label: '全能5', value: 'MC5', disabled: false }
          ]
        },
        {
          type: 'select',
          field: 'label2',
          title: '标签',
          value: 'DM',
          options: [
            { label: '好用', value: ' ', disabled: false },
            { label: '快速', value: 'DM', disabled: false },
            { label: '高效', value: 'DC', disabled: false },
            { label: '全能1', value: 'MC1', disabled: false },
            { label: '高效2', value: 'DC2', disabled: false },
            { label: '全能3', value: 'MC3', disabled: false },
            { label: '高效4', value: 'DC4', disabled: false },
            { label: '全能5', value: 'MC5', disabled: false }
          ],
          props: {
            'clearable': true
          }
        },
        {
          type: 'DatePicker',
          field: 'section_day',
          title: '活动日期',
          value: ['2018-02-20', new Date()],
          props: {
            'type': 'month',
            'format': 'yyyy-MM',
            'placeholder': '请选择活动日期'
          }
        },
        {
          type: 'InputNumber',
          field: 'price',
          title: '价格',
          // value:3,
          props: {
            precision: 2,
            placeholder: '',
            currentVlaue: undefined,
            userInput: ''
          }
        },
        {
          type: 'upload',
          field: 'tuping',
          title: '轮播图',
          value: [
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg?e=1',
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'
          ],
          props: {
            'type': 'upload',
            'uploadType': 'image',
            'action': '/upload.php',
            'name': 'pic',
            'multiple': true,
            'accept': '\.jpg',
            'limit': 2
          }
        },
        { type: 'upload',
          field: 'COL_img',
          title: '图片',
          value: ['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg?e=1'],
          props: { 'type': 'select',
            modalTitle: '预览223',
            uploadType: 'image',
            action: '/ppdaSmisProxyWeb/smisUpload/image',
            name: 'pic',
            multiple: true,
            accept: '\.jpg',
            limit: 5,
            headers: { 'X-Token': 'i8SLcSkVkh9A4W1VSq83d3LWwUSwVt9wcwYfPiHQVh0=', userId: 'vip666' },
            data: { isTouda: '3', userId: 'vip666' },
            beforeUpload: function(file) {
              const isLt2M = file.size / 1024 / 1024 < 10
              if (!isLt2M) { this.$message({ showClose: true, message: '上传文件大小不能超过 10M!', type: 'warning' }) }
              return isLt2M
            },
            onSuccess: function(res, file) { file.url = res.body.showUrl } },
          onError: function(res, file) { if (res.body.rtnCode !== '200') { this.$message({ showClose: true, message: res.body.rtnMsg, type: 'warning' }) } } }
      ]
    }
  },
  methods: {
    init() {
      debugger

      const data = [{
        type: 'input',
        field: 'goods_name',
        title: '商品名称',
        validate: [{ validator: (rule, val, d) => {
          val && !/^[\d]+$/.test(val) ? d(true) : d()
        }, message: '只能填写 a-z' }]
      }]
      var s = JSON.stringify(data, function(key, val) {
        if (typeof val === 'function') {
          return val + ''
        }
        return val
      })
      console.log('第二', s)
      // const str = [{"validator":"function validator(rule, val, d) {val && !/^[A-Za-z]+$/.test(val) ? d(true) : d();}","message":"只能填写 a-z"}]}]

      var tt = JSON.parse(s, function(k, v) {
        if (v.indexOf && v.indexOf('function') > -1) {
          console.log('中间', v)
          return eval('(function(){return ' + v + ' })()')
        }
        return v
      })
      console.log('第三', tt)
    },
    init2() {
      // console.log("海王",this.$refs.ruleCreate.$refs.__pic45.$refs.upload.fileList)
      const tupingAttr = this.$refs.ruleCreate.$refs
      for (const key in tupingAttr) {
        if (key.indexOf('__tuping') > -1) {
          if (key.indexOf('fi') === -1) {
            console.log('海王', key, tupingAttr[key].uploadList)
          }
        }
      }
    },
    init3() {
      this.dialogVisible = true
      var arr = ['A', '', 'B', null, undefined, 'C', '  ']
      var r = arr.filter(function(s) {
        return s && s.trim() // 注：IE9(不包含IE9)以下的版本没有trim()方法
      })
      console.log('hu'.arr, r)
    }
  }
}
</script>
