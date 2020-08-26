<template>
  <div>
    <el-select
      v-model="selectModel"
      placeholder="请选择"
      filterable
      clearable
      :multiple="isMultiple"
      collapse-tags
    >
      <el-option
        v-for="item in optionsModel"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    mutiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {
    selectModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
