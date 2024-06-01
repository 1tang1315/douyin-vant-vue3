<template>
  <!-- 长视频 -->
  <van-swipe-item class="long-video">
    <div class="content" v-for="item in list" :key="item">
      <img class="img" :src="item.src" alt="">
      <p class="title">{{ item.title }}</p>
    </div>
  </van-swipe-item>
</template>

<script setup>
const list = [
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
  { src: "https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0", title: "猪猪侠: 智勇双全, 我心飞翔!!!" },
];

</script>

<style lang="less" scoped>
.long-video {
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  overflow-y: auto;
}

.content {
  width: 196px;
  padding: 2px;

  .img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }

  .title {
    font-size: 12px;
    color: #fff;
  }
}
</style>