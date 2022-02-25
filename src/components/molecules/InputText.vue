<template>
  <div class="input-text">
    <Label :text="labelName"/>
    <TextBox/>
  </div>
</template>

<script>
import TextBox from '@/components/atoms/form/input/TextBox'
import Label from '@/components/atoms/form/Label'

export default {
  name: 'InputText',
  props: {
    labelName: String
  },
  components: {
    TextBox,
    Label,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-text {
  background-color: lightgreen;
  margin-bottom: 5px;
}
</style>
