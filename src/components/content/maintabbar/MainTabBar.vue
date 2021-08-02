<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/tabbar/home.png" alt="" slot="icon">
        <img src="~assets/img/tabbar/home_active.png" alt="" slot="icon-active">
        <div slot="title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.png" alt="" slot="icon">
        <img src="~assets/img/tabbar/category_active.png" alt="" slot="icon-active">
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/cart.png" alt="" slot="icon">
        <img src="~assets/img/tabbar/cart_active.png" alt="" slot="icon-active">
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.png" alt="" slot="icon">
        <img src="~assets/img/tabbar/profile_active.png" alt="" slot="icon-active">
        <div slot="title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    data () {
      return {
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style  scoped>

</style>
