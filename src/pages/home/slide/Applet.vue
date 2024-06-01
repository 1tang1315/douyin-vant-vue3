<template>
  <div class="applet">
    <div class="welcome">
      <div class="left">
        下午好
      </div>
      <div class="right">
        扫一扫
      </div>
    </div>
    <!-- 常用小程序 -->
    <div class="common-applet">
      <div class="top">
        <div class="left">常用小程序</div>
        <div class="right">全部</div>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in commonAppletList" :key="item">
            <a href="#">
              <img :src="item.src" alt="">
              <p class="title">{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 最近常看 -->
    <div class="offen-see">
      <div class="top">
        <div class="left">最近常看</div>
        <div class="right">全部</div>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in offenSeeList" :key="item">
            <a href="#">
              <img :src="item.src" alt="">
              <p class="title">{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 常用功能 -->
    <div class="common-function">
      <div class="top">
        <div class="left">常用功能</div>
        <div class="right">全部</div>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in offenSeeList" :key="item">
            <a href="#">
              <img :src="item.src" alt="">
              <p class="title">{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const commonAppletList = ref([
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '今日头条' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
])

const offenSeeList = ref([
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '今日头条' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
  { src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0', title: '西瓜视频' },
])

</script>

<style lang="less" scoped>
.left {
  float: left;
}

.right {
  float: right;
}

.top {
  width: 100%;
  height: 35px;
  line-height: 35px;
}

.applet {
  height: 100vh;
  overflow-y: auto;
  padding: 10px;
  background-color: #161616;
  color: white;
  text-align: center;
}

.welcome {
  overflow: hidden;
  margin-bottom: 10px;
}

.common-applet,
.offen-see,
.common-function {
  margin: 5px;
  background-color: #1d1d1d;
  border-radius: 20px;
  padding: 10px;
}

.content {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-bottom: 15px;

      a {
        display: block;
        width: 65px;
        height: 45px;
        color: #fff;
        text-decoration: none;
        font-size: 12px;
        margin: 16px;

        img {
          width: 80%;
          height: 90%;
          border-radius: 8px;
        }

        .title {
          color: #fff;
          font-size: 12px;
          line-height: 16px;
          margin: 0;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>