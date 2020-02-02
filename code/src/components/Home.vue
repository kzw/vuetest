<template lang="pug">
.jumbotron
  .container
        form
          .form-group.form-control-inline
            b-form-select(:options="options")
</template>
<script>
export default {
  paths: [''],
  data () {
    return {
      messages: [
        ['u-375', 'see']
      ],
      options: [{text: 'message', value: 23}]
    }
  },
  methods: {
  }
}
</script>
