<template>
  <input type="text" :value="text">
</template>

<script>

export default {
  data() {
    return {
      text: null
    }
  },
  methods: {
    onChange() {
      this.$emit('onChange')
    }
  }
}
</script>

<style>

</style>