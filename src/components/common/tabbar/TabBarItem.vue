<template>
  <div class="tab-bar-item" @click="skip">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="active"><slot name="title"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "rgb(252, 145, 166)"
      }
    },
    data () {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      active() {
        return this.isActive ? {"color": this.activeColor} : {}
      }
    },
    methods: {
      skip() {
        if (this.$route.path.indexOf(this.path) === -1) {
          this.$router.push(this.path)
        }
      }
    }
  }
</script>

<style  scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 14px;
    text-align: center;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 23px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
