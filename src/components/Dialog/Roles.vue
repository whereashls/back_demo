<template>
  <div class="dialog">
    <el-form ref="form" :model="formDate" :rules="formRules" size="medium" label-width="100px">
      <el-form-item label="角色名称:" prop="name">
        <el-input v-model="formDate.name"></el-input>
      </el-form-item>
    </el-form>
    <div class="button">
      <el-button size="medium" type="primary" :loading="loadin" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'id'],
  data () {
    return {
      formDate: {
        name: ''
      },
      formRules: {
        name: [
          { required: true, messgae: '请填写角色名称', trigger: 'blur' }
        ]
      },
      loading: false
    }
  }
}
</script>
