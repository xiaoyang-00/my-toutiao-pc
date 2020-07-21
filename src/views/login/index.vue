<template>
  <div class="container-login">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单容器 -->
      <el-form>
        <!-- 表单项容器 -->
        <el-form-item>
          <!-- 表单元素 -->
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value="true"->复选框选中且不能修改 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "page-login"
};
</script>

<style lang="less" scoped>
.container-login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center/cover;
  .el-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    img {
      display: block;
      margin: 0 auto 20px;
      width: 200px;
    }
  }
}
</style>