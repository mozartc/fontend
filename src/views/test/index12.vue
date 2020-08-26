<template>
  <div>
    <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
  </div>

</template>

<script>
import province_city_area_code from '@form-create/data/dist/province_city_area_code.js'

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
            multiple: false,
            clearable: true,
            filterable: true
          }
        },
        {
          type: 'cascader',
          title: '所在区域',
          field: 'address',
          value: [],
          props: {
            options: province_city_area_code || []
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
