<template>
    <div id="app">
      <div class="block">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>

      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
          placement="top">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
    </div>
</template>



<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '一级审批'
        }, {
          content: '通过审核',
          timestamp: '二级审批'
        }, {
          content: '创建成功',
          timestamp: '三级审批'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>
>>>.el-timeline-item__timestamp.is-top {
    position: absolute;
    left: -117px;
    top: -3px;
    color: #333333;
}
>>>.el-timeline {
    padding-left: 150px;
}
</style>