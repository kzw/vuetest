
<template>
  <!-- Generated file.  DO NOT EDIT-->
  <div id="app">
    <div class="main">
      <b-navbar sticky="sticky" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <router-link to="/"><img src="/ico/logo-tiny.png"/></router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav="is-nav">
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!signedIn">
              <router-link to="/signUp">Sign Up</router-link>
            </b-nav-item>
            <b-nav-item v-if="!signedIn">
              <router-link to="/logIn">Log In</router-link>
            </b-nav-item>
            <b-nav-item v-if="signedIn" v-on:click="goTo('profile')"><i class="fas fa-user mr-2"></i>profile</b-nav-item>
            <b-nav-item-dropdown v-if="signedIn">
              <template slot="button-content"><em>{{username}}</em></template>
              <b-dropdown-item v-if="signedIn" v-on:click="logOut()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container>
        <b-row align-h="center">
          <b-col cols="12">
            <router-view></router-view>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { url, js } from './url'
import { SET_PREFS, SET_USERNAME, SET_SIGNED_IN } from './consts'
import api from './api'
import store from './store'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'


export default {
  name: 'app',
  mounted () {
    function success (r) {
    }
    function error () {
    }
    api.get.bind(this)(url.me, success, error)
  },
  methods: {
    goTo (path) { this.$router.push('/' + path) },
    logOut () {
      function success () { window.location.assign('/') }
      api.post.bind(this)(url.logOut, success, 'error logging out')
    }
  },
  data () {
    return {
      signedIn: false,
      username: null
    }
  }
}

</script>
