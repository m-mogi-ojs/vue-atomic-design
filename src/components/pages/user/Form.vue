<template>
  <div class="form">
    <Header/>
    <UserForm/>
    <Footer/>
    <div style="background-color: white;">
      各レイヤー色表示用エリア<br>
      molecules<span style="color: lightgreen;">■■■</span><br>
      organisms<span style="color: lightpink;">■■■</span><br>
      pages<span style="color: lightgray;">■■■</span><br>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/organisms/user/form/Form'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export default {
  components: {
    UserForm,
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  background-color: lightgray;
}
</style>
