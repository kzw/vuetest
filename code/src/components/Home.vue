<template lang="pug">
.jumbotron
  .container
    .row
      .col
        b-carousel#carousel-2(controls indicators)
          b-carousel-slide(v-for="m in messages" v-bind:key="m[0]")
            template(v-slot:img)
              img(src="imgPath(m[0])")
            p.active {{ m[1] }}
</template>
<script>
export default {
  paths: [''],
  data () {
    return {
      messages: [
        ['u-375', 'see']
      ]
    }
  },
  methods: {
    imgPath (n) {
      return '/ico/'.concat(n, '.jpg')
    }
  }
}
</script>
