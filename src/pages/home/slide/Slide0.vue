<template>
  <!-- 推荐页 -->
  <van-swipe-item class="recommend">
    <van-loading v-if="isLoading" />
    <van-swipe :duration="500" style="height: 100vh;" vertical :loop="!isLoading" :show-indicators="false"
      @change="handelvideoSwipeChange" ref="videoVanSwipe">
      <div class="video-swipe" ref="videoSwipe">
        <van-swipe-item>
          <video :src="videoList[0].src" :index="videoList[0].index" width="400" height="400" autoplay muted></video>
          <div class="left">
            <div class="author">
              <img :src="videoList[0].author" alt="">
              <van-icon name="plus" class="attention" />
            </div>
            <div class="like">
              <van-icon name="like" />
              <p>124.7万</p>
            </div>
            <div class="comment">
              <van-icon name="chat" />
              <p>2.2万</p>
            </div>
            <div class="collect">
              <van-icon name="star" />
              <p>2.3万</p>
            </div>
            <div class="share">
              <van-icon name="share" />
              <p>17.3万</p>
            </div>
            <div class="mute">
              <van-icon name="volume" />
            </div>
          </div>
          <div class="bottom">
            <div class="author">@猪猪侠</div>
            <p class="title">智勇双全, 我心飞翔</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <video :src="videoList[1].src" :index="videoList[1].index" width="400" height="400"></video>
          <div class="left">
            <div class="author">
              <img :src="videoList[0].author" alt="">
              <van-icon name="plus" class="attention" />
            </div>
            <div class="like">
              <van-icon name="like" />
              <p>124.7万</p>
            </div>
            <div class="comment">
              <van-icon name="chat" />
              <p>2.2万</p>
            </div>
            <div class="collect">
              <van-icon name="star" />
              <p>2.3万</p>
            </div>
            <div class="share">
              <van-icon name="share" />
              <p>17.3万</p>
            </div>
            <div class="mute">
              <van-icon name="volume" />
            </div>
          </div>
          <div class="bottom">
            <div class="author">@猪猪侠</div>
            <p class="title">智勇双全, 我心飞翔</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <video :src="videoList[2].src" :index="videoList[2].index" width="400" height="400"></video>
          <div class="left">
            <div class="author">
              <img :src="videoList[0].author" alt="">
              <van-icon name="plus" class="attention" />
            </div>
            <div class="like">
              <van-icon name="like" />
              <p>124.7万</p>
            </div>
            <div class="comment">
              <van-icon name="chat" />
              <p>2.2万</p>
            </div>
            <div class="collect">
              <van-icon name="star" />
              <p>2.3万</p>
            </div>
            <div class="share">
              <van-icon name="share" />
              <p>17.3万</p>
            </div>
            <div class="mute">
              <van-icon name="volume" />
            </div>
          </div>
          <div class="bottom">
            <div class="author">@猪猪侠</div>
            <p class="title">智勇双全, 我心飞翔</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <video :src="videoList[3].src" :index="videoList[3].index" width="400" height="400"></video>
          <div class="left">
            <div class="author">
              <img :src="videoList[0].author" alt="">
              <van-icon name="plus" class="attention" />
            </div>
            <div class="like">
              <van-icon name="like" />
              <p>124.7万</p>
            </div>
            <div class="comment">
              <van-icon name="chat" />
              <p>2.2万</p>
            </div>
            <div class="collect">
              <van-icon name="star" />
              <p>2.3万</p>
            </div>
            <div class="share">
              <van-icon name="share" />
              <p>17.3万</p>
            </div>
            <div class="mute">
              <van-icon name="volume" />
            </div>
          </div>
          <div class="bottom">
            <div class="author">@猪猪侠</div>
            <p class="title">智勇双全, 我心飞翔</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <video :src="videoList[4].src" :index="videoList[4].index" width="400" height="400"></video>
          <div class="left">
            <div class="author">
              <img :src="videoList[0].author" alt="">
              <van-icon name="plus" class="attention" />
            </div>
            <div class="like">
              <van-icon name="like" />
              <p>124.7万</p>
            </div>
            <div class="comment">
              <van-icon name="chat" />
              <p>2.2万</p>
            </div>
            <div class="collect">
              <van-icon name="star" />
              <p>2.3万</p>
            </div>
            <div class="share">
              <van-icon name="share" />
              <p>17.3万</p>
            </div>
            <div class="mute">
              <van-icon name="volume" />
            </div>
          </div>
          <div class="bottom">
            <div class="author">@猪猪侠</div>
            <p class="title">智勇双全, 我心飞翔</p>
          </div>
        </van-swipe-item>
      </div>
    </van-swipe>
  </van-swipe-item>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const props = defineProps(['activePage']);
console.log(props.activePage);
const videoSwipe = ref(null);
const videoVanSwipe = ref(null);

// 是否重新加载数据
const isLoading = ref(false);
// 新增的视频索引下标
let newIndex = 2;

const videoList = reactive([
  { src: 'https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4', author: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', show: true, index: 0 },
  { src: 'https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4', show: true, index: 1 },
  { src: 'https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4', show: true, index: 2 },
  { src: 'https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4', show: true, index: 3 },
  { src: 'https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4', show: true, index: 4 },
])


// 触摸开始事件
let startY = 0;
let startX = 0;
// 下滑
let downglide = false;

const touchStart = (event) => {
  startY = event.touches[0].clientY;
  startX = event.touches[0].clientX;
};

const touchEnd = (event) => {
  const endY = event.changedTouches[0].clientY;
  const endX = event.changedTouches[0].clientX;
  const swipeThreshold = 50; // 设置一个阈值来判断是上滑还是下滑

  if (endY - startY > swipeThreshold) {
    // 上滑
    downglide = false;
    const firstDom = videoSwipe.value.querySelectorAll('video')[0].getAttribute('index');

    if (firstDom == 0) {
      isLoading.value = true;
      console.log("最顶部, 不能再循环, 应该刷新数据")

      // TODO数据刷新
      setTimeout(() => {
        isLoading.value = false;

      }, 500)
    }
    // 在这里处理上滑的逻辑
  } else if (startY - endY > swipeThreshold) {
    // 下滑
    downglide = true;
  } else if (endX - startX > swipeThreshold) {
    // 左滑 进入经验页
    console.log("左滑")
    console.log(props.activePage);
    const nodeList = videoSwipe.value.querySelectorAll('video');
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].pause();
    }
  } else if (startX - endX > swipeThreshold) {
    // 右滑 进入主页
    console.log("右滑")
    console.log(props.activePage);
    const nodeList = videoSwipe.value.querySelectorAll('video');
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].pause();
    }
  }
};

onMounted(() => {
  // 绑定触摸事件
  videoSwipe.value.addEventListener('touchstart', touchStart);
  videoSwipe.value.addEventListener('touchend', touchEnd);
})



// 视频轮播
// 目前利用的是列表索引进行生成, 后续添加的视频对象 要增加一个索引属性 以便处理
const handelvideoSwipeChange = (index) => {
  // 自动播放 显示的轮播项, 其他暂停
  const nodeList = videoSwipe.value.querySelectorAll('video');
  for (let i = 0; i < nodeList.length; i++) {
    if (i == index) {
      nodeList[index].play();
    } else {
      nodeList[i].pause();
    }
  }

  // 下滑 ⬇ 向上滚动(鼠标往上)
  if (downglide) {
    newIndex++;
    if (newIndex > 4) {
      // 为数组末尾增加一项
      videoList.push({ src: "https://vod.v.jstv.com/video/2023/5/1/2023511682913339999_561_13363.mp4", show: true, index: newIndex });
    }

    const newDom = videoSwipe.value.querySelectorAll('video')[(index + 2) % 5];
    newDom.setAttribute('src', videoList[newIndex].src);
    newDom.setAttribute('index', videoList[newIndex].index);
    return;
  } else {
    // 上滑 向下滚动(鼠标往下)
    if (newIndex > 4) {
      // 为数组末尾增加一项
      videoList.pop();
    }
    newIndex--;

    const domIndex = videoSwipe.value.querySelectorAll('video')[index].getAttribute('index');

    const newDom = videoSwipe.value.querySelectorAll('video')[(index - 2 + 5) % 5];
    if (domIndex - 2 > -1) {
      newDom.setAttribute('src', videoList[domIndex - 2].src);
      newDom.setAttribute('index', videoList[domIndex - 2].index);
    }
  }
}
</script>

<style lang="less" scoped>
.van-loading {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.left {
  position: absolute;
  right: 0;
  top: 35%;

  .author {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 10px 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .attention {
      position: absolute;
      left: 50%;
      bottom: -6px;
      transform: translateX(-50%);
      background-color: #ff1919;
      color: #fff;
      font-size: 15px;
      border-radius: 50%;
    }
  }

  .like,
  .comment,
  .collect,
  .share,
  .mute {
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 38px;
    margin: 20px 0;

    p {
      font-size: 12px;
      text-align: center;
    }
  }
}

.bottom {
  position: absolute;
  bottom: 120px;

  .author {
    color: #fff;
  }

  .title {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
  }
}

.recommend {
  background-color: #000;

  .van-swipe-item {
    background-color: aqua;

    video {
      position: relative;
      top: 55%;
      transform: translateY(-80%);
    }
  }
}
</style>
