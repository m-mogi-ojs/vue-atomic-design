<template>
  <div class="user-form">
    <p>入力してください。</p>
    <InputText labelName="メールアドレス"/>
    <InputText labelName="パスワード"/>
    <p>入力したメールアドレスに確認用メールが届きます。</p>
    <Button text="送信"/>
  </div>
</template>

<script>
import InputText from '@/components/molecules/InputText'
import Button from '@/components/atoms/form/Button'

export default {
  components: {
    InputText,
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-form {
  padding: 20px;
  background-color: lightpink;
  width: 400px;
  margin: 40px auto 40px auto;
}
</style>
