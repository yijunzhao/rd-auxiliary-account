<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NCard, NCheckbox, NForm, NFormItem, NInput } from 'naive-ui'
import logoTax from '../../../assets/logo-tax.png'
import loginBoxBg from '../../../assets/login-box-bg.svg'

const router = useRouter()
const account = ref('13688889999')
const password = ref('abcD123$')
const captcha = ref('')
const rememberMe = ref(true)
const loading = ref(false)
const captchaText = ref('')
const formRef = ref(null)

const rules = {
  account: { required: true, message: '请输入账号', trigger: ['blur', 'input'] },
  password: { required: true, message: '请输入密码', trigger: ['blur', 'input'] },
  captcha: { required: true, message: '请输入验证码', trigger: ['blur', 'input'] }
}

const model = computed(() => ({
  account: account.value,
  password: password.value,
  captcha: captcha.value
}))

function createCaptchaCode() {
  const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  captchaText.value = Array.from({ length: 4 }, () => charset[Math.floor(Math.random() * charset.length)]).join('')
}

createCaptchaCode()

const captchaDataUrl = computed(() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="38" viewBox="0 0 90 38">
      <rect width="90" height="38" rx="4" fill="#f2f7ff"/>
      <text x="12" y="26" font-size="21" font-family="Arial, sans-serif" letter-spacing="4" fill="#1b4fab">${captchaText.value}</text>
    </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
})

async function submit() {
  await formRef.value?.validate()
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))
    await router.push('/dashboard/analysis')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="jeecg-login">
    <div class="login-container">
      <section class="left-panel">
        <div class="brand">
          <img :src="logoTax" alt="研发费用合规智能管理系统" class="brand-logo" />
          <span class="brand-title">研发费用合规智能管理系统</span>
        </div>

        <div class="left-body">
          <img :src="loginBoxBg" alt="登录插画" class="left-illustration" />
          <h1 class="left-heading">企业研发费用合规管理平台</h1>
          <p class="left-desc">融合流程管控、数据采集与智能分析，助力研发费用归集与合规留痕。</p>
        </div>
      </section>

      <section class="right-panel">
        <n-card class="login-card" :bordered="false">
          <h2 class="form-title">账号密码登录</h2>

          <n-form ref="formRef" :model="model" :rules="rules" size="large">
            <n-form-item path="account"><n-input v-model:value="account" placeholder="请输入账号" clearable /></n-form-item>
            <n-form-item path="password"><n-input v-model:value="password" type="password" show-password-on="click" placeholder="请输入密码" /></n-form-item>

            <div class="captcha-row">
              <n-form-item path="captcha" class="captcha-input"><n-input v-model:value="captcha" placeholder="请输入验证码" /></n-form-item>
              <img :src="captchaDataUrl" class="captcha-image" alt="验证码" @click="createCaptchaCode" />
            </div>

            <div class="form-actions">
              <n-checkbox v-model:checked="rememberMe" size="small">记住我</n-checkbox>
              <a class="forget-link" href="javascript:void(0)">忘记密码</a>
            </div>

            <n-button type="primary" block strong :loading="loading" @click="submit">登录</n-button>
          </n-form>
        </n-card>
      </section>
    </div>
  </div>
</template>

<style scoped>
.jeecg-login { position: relative; min-height: 100vh; overflow: hidden; background: #fff; }
.jeecg-login::before { content: ''; position: absolute; inset: 0; margin-left: -48%; background-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='6395'%20height='1079'%20viewBox='0%200%206395%201079'%3e%3cdefs%3e%3cclipPath%20id='clip-path'%3e%3crect%20width='6395'%20height='1079'%20transform='translate(-5391)'%20fill='%23fff'/%3e%3c/clipPath%3e%3clinearGradient%20id='linear-gradient'%20x1='0.747'%20y1='0.222'%20x2='0.973'%20y2='0.807'%20gradientUnits='objectBoundingBox'%3e%3cstop%20offset='0'%20stop-color='%232c41b4'/%3e%3cstop%20offset='1'%20stop-color='%231b4fab'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20transform='translate(5391)'%20clip-path='url(%23clip-path)'%3e%3cg%20transform='translate(-419.333%20-1.126)'%3e%3cpath%20d='M6271.734-6.176s-222.478,187.809-55.349,583.254c44.957,106.375,81.514,205.964,84.521,277,8.164,192.764-156.046,268.564-156.046,268.564l-653.53-26.8L5475.065-21.625Z'%20transform='translate(-4876.383%200)'%20fill='%23f1f5f8'/%3e%3cpath%20d='M-2631.1,1081.8v-1.6H-8230.9V.022H-2631.1V0H-1871.4s-187.845,197.448-91.626,488.844c49.167,148.9,96.309,256.289,104.683,362.118,7.979,100.852-57.98,201.711-168.644,254.286-65.858,31.29-144.552,42.382-223.028,42.383C-2441.2,1147.632-2631.1,1081.8-2631.1,1081.8Z'%20transform='translate(3259.524%200.803)'%20fill='url(%23linear-gradient)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right center; background-size: auto 100%; }
.login-container { position: relative; z-index: 1; width: min(1300px, 100%); min-height: 100vh; margin: 0 auto; padding: 10px 40px; display: flex; }
.left-panel,.right-panel { width: 50%; min-height: calc(100vh - 20px); }
.left-panel { display: flex; flex-direction: column; color: #fff; padding: 12px 20px 20px; }
.brand { display: flex; align-items: center; gap: 10px; height: 80px; }
.brand-logo { width: 48px; }
.brand-title { font-size: 24px; font-weight: 600; }
.left-body { margin: auto 0; }
.left-illustration { width: 50%; margin-top: -64px; }
.left-heading { margin-top: 36px; font-size: 28px; font-weight: 600; }
.left-desc { margin-top: 18px; max-width: 560px; font-size: 16px; color: rgba(255, 255, 255, 0.86); }
.right-panel { display: flex; align-items: center; justify-content: center; padding: 20px 0; }
.login-card { width: min(420px, 92%); border-radius: 10px; box-shadow: 0 10px 25px rgba(23, 66, 153, 0.2); }
.form-title { margin: 0 0 16px; text-align: center; font-size: 34px; font-weight: 700; color: #20252f; }
.captcha-row { display: flex; gap: 14px; align-items: flex-start; }
.captcha-input { flex: 1; }
.captcha-image { width: 90px; height: 38px; margin-top: 2px; border-radius: 4px; cursor: pointer; border: 1px solid #dbe4ff; }
.form-actions { margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
.forget-link { font-size: 13px; color: #1b4fab; text-decoration: none; }
</style>
