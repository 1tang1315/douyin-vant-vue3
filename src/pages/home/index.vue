<template>
  <div class="home">
    <van-swipe class="main-swipe" :loop="false" :show-indicators="false" :initial-swipe="1" ref="MainSwipe"
      @change="handleMainSwipe">
      <van-swipe-item :class="{ 'swipe-applet': true, 'swipe-applet-active': currentIndex === 0 }">
        <Applet />
      </van-swipe-item>

      <van-swipe-item>
        <van-tabs v-model:active="currentTab" swipeable @click-tab="handleTabClick" ref="centerTab">
          <van-tab disabled :name="-1">
            <template #title>
              <van-icon name="wap-nav" color="white" size="1.5em" />
            </template>
          </van-tab>
          <van-tab v-for="(item, index) in swipeList" :name="index" :title="item" :key="item">
          </van-tab>
          <van-tab disabled :name="-2">
            <template #title>
              <van-icon name="search" color="white" size="1.5em" />
            </template>
          </van-tab>
        </van-tabs>
        <van-swipe :initial-swipe="currentTab" class="center-swipe" :loop="false" :show-indicators="false"
          :touchable="currentIndex === 0 ? false : true" ref="centerSwipe" @change="handleSwipeChange">
          <!-- 热点 -->
          <Slide4 />
          <!-- 长视频 -->
          <Slide3 />
          <!-- 关注 -->
          <Slide2 />
          <!-- 经验 -->
          <Slide1 />
          <!-- 推荐 -->
          <Slide0 :activePage="currentTab" />
        </van-swipe>
      </van-swipe-item>

      <van-swipe-item>
        <Author />
      </van-swipe-item>
    </van-swipe>
    <div class="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
          <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item badge="3">
          <span>商城</span>
        </van-tabbar-item>
        <van-tabbar-item class="photo">
          <van-icon name="add" />
        </van-tabbar-item>
        <van-tabbar-item>
          <span>消息</span>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>我</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import Applet from './slide/Applet.vue';
import Author from './slide/Author.vue';
import Slide0 from './slide/Slide0.vue';
import Slide1 from './slide/Slide1.vue';
import Slide2 from './slide/Slide2.vue';
import Slide3 from './slide/Slide3.vue';
import Slide4 from './slide/Slide4.vue';

const router = useRouter();

const currentTab = ref(4); // 当前激活的选项下标
const currentIndex = ref(1); // 外层轮播项下标
const MainSwipe = ref(null);
const centerSwipe = ref(null);
const centerTab = ref(null);


const swipeList = [
  '热点',
  '长视频',
  '关注',
  '经验',
  '推荐'
];

// 底部导航
const active = ref(0);
const icon = {
  active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive:
    'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
};

const handleMainSwipe = (index) => {
  currentIndex.value = index
}
const handleSwipeChange = (index) => {
  centerTab.value.scrollTo(index);
};

const handleTabClick = (tab) => {
  if (tab.name == '-1') {
    // 侧边小程序 顶部标签栏 按钮
    // 显示主页轮播的小程序页
    MainSwipe.value.swipeTo(0);
  } else if (tab.name == '-2') {
    // 搜索按钮
    // 直接跳转搜索页
    router.push('/home/search');
  }
  centerSwipe.value.swipeTo(tab.name)
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  overflow: hidden;
}


.bottom {
  position: relative;
  bottom: 0;
  width: 400px;

  .van-tabbar {
    background-color: #000;

    .photo {
      font-size: 30px !important;
    }

    :deep(.van-badge--top-right) {
      top: -5px;
      right: -20px;
      font-size: 14px;
    }

    .van-tabbar-item {
      font-size: 17px;
      color: rgba(255, 255, 255, 0.8);
    }

    .van-tabbar-item--active {
      background-color: #000;
      color: #fff;
    }
  }
}

.main-swipe {
  width: 100%;
  height: 100vh;
}

.center-swipe {
  width: 100%;
  height: 90vh;
}

.swipe-applet {
  width: 400px;
  transition: width 0.6s ease;
}

.swipe-applet-active {
  width: 350px !important;
}

.center-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  background-color: #000;
}

.van-tabs {
  :deep(.van-tabs__nav) {
    background: transparent;
    z-index: 999;
    width: 100%;
    text-align: center;
    color: #fff;
  }

  :deep(.van-tab--active, .wap-nav) {
    color: #fff !important;
  }

  :deep(.van-tab) {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  :deep(.van-tabs__line) {
    background: #fff;
  }
}
</style>
