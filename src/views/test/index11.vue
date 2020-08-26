
<template>
  <div>
    <FormCreate ref="ruleCreate" v-model="fApi" :rule="rule" :option="options" />
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
          type: 'InputNumber',
          field: 'price',
          title: '价格',
          value: 1,
          props: {
            precision: 2
          },
          validate: [
            { min: 3, message: '最少增加3项',trigger:'blur' }
          ]
        },
        {
          type: 'upload',
          field: 'tuping',
          title: '轮播图',
          value: [
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg?e=1',
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
            'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
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
    }

  }
}
</script>
