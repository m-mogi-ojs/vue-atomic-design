<template>
  <button>{{ text }}</button>
</template>

<script>

export default {
  props: [
    'text'
  ],
  methods: {
    onClickButton() {
      this.$emit('onClick')
    }
  }
}
</script>

<style>

</style>