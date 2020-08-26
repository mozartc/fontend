<template>
  <div>
    <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
    <el-button @click="init()">init</el-button>
  </div>

</template>

<script>

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

        },
        submitBtn: false
      },
      oldOptions: [],
      rule: [
        {
          type: 'select',
          field: 'cate_id',
          title: '产品分类',
          value: [],
          options: [
            { 'value': 'all', 'label': '全部', 'disabled': false },
            { 'value': '104', 'label': '生态蔬菜', 'disabled': false },
            { 'value': '105', 'label': '新鲜水果', 'disabled': false },
            { 'value': '106', 'label': '新鲜水果6', 'disabled': false },
            { 'value': '107', 'label': '新鲜水果7', 'disabled': false },
            { 'value': '108', 'label': '新鲜水果8', 'disabled': false }
          ],
          props: {
            multiple: true
          },
          beforeUpload: function(val) {
            const allValues = []
            // 保留所有值
            for (const item of this.cities) {
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

            // 全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
            if (!oldVal.includes('all') && !val.includes('all')) {
              console.log(11)
              if (val.length === allValues.length - 1) this.value = ['all'].concat(val)
            }

            // 储存当前最后的结果 作为下次的老数据
            this.oldOptions = this.value
          }
        }
      ]
    }
  },
  methods: {
    init() {
      this.options.submitBtn.show = true
    }
  }
}
</script>
