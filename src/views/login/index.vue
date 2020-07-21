<template>
  <div class="container-login">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单容器 -->
      <!-- 为表单容器绑定一个表单数据对象和一个校验规则对象 -->
      <el-form :model="loginForm" :rules="loginRules" status-icon>
        <!-- 表单项容器 -->
        <el-form-item prop="mobile">
          <!-- 表单元素 -->
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px"
            v-model="loginForm.code"
          ></el-input>
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
  name: "page-login",
  data() {
    //自定义校验函数->必须在return之前定义好
    const checkMobile = (rule, value, callback) => {
      // rule->当前字段对应的校验规则对象
      // value->待校验的数据
      // callback->校验完毕后调用的回调函数
      // 手机号规则：必须1开头，第二位是3-9之间，9个数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号不正确"));
      }
    };
    return {
      //表单数据对象-->手机号和验证码
      loginForm: {
        mobile: "",
        code: ""
      },
      //表单校验规则对象
      loginRules: {
        // 验证手机号
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // 手机号需要自定义校验规则
          //   使用自定义手机号校验规则
          { validator: checkMobile, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "验证码必须是6个字符", trigger: "blur" }
        ]
      }
    };
  }
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