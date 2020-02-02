<template lang="pug">
b-form
  b-form-group
    b-form-select(:options="options" required)
</template>
<script>
export default {
  paths: [''],
  data () {
    return {
      options: [{text: 'message', value: 23}]
    }
  }
}
</script>
<style>
.custom-select {
-webkit-appearance: none
}
</style>
