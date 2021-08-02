<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swipter :banners="banners"></home-swipter>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <ul>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getMultidata} from 'network/home'
  import HomeSwipter from './childComps/HomeSwipter'
  import RecommendView from './childComps/RecommendsView'
  import FeatureView from './childComps/FeatureView'

  export default {
    name: 'Home',
    data () {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwipter,
      RecommendView,
      FeatureView
    },
    created() {
      getMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.recommends);
      })
    },
  }
</script>

<style  scoped>
.home {
  padding-top: 44px;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
