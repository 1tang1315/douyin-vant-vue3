<template>
  <div class="author">
    <div class="top">
      <div class="back">
        <van-icon name="arrow-left" />
      </div>
      <div class="right">
        <div class="search">
          <van-icon name="search" />
        </div>
        <div class="more">
          <van-icon name="weapp-nav" />
        </div>
      </div>
      <div class="head-photo">
        <img
          src="https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0"
          alt="" class="img">
        <span class="name">猪猪侠</span>
      </div>
    </div>

    <div class="content-top">
      <div class="title">
        <span>
          <strong>2.0亿</strong>获赞
        </span>
        <span>
          <strong>88</strong>关注
        </span>
        <span>
          <strong>707.8万</strong>粉丝
        </span>
      </div>
      <div class="introduction">
        <p>合作: x1314520</p>
      </div>
      <div class="address">
        ip属地: 北京
      </div>
      <div class="showcase">
        <van-icon name="bag-o" class="left" />
        <div class="right">
          <p>今日橱窗</p>
          <p class="things">6件好物</p>
        </div>
      </div>

      <div class="concern">
        <button class="btn">+关注</button>
        <span>
          <van-icon name="arrow-down" class="arrow-down" />
        </span>
      </div>

      <div class="production">
        <span>作品296</span>
        <span>
          <van-icon name="arrow-down" class="arrow-down" />
        </span>
      </div>
    </div>

    <div class="works">
      <div class="work" v-for="item in 30">
        <img class="img"
          src="https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0"
          alt="">
        <p class="like">
          <span><van-icon name="like-o" /></span>
          124.7万
        </p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
.author {
  height: 90vh;
  overflow-y: auto;

  .top {
    position: relative;
    padding: 10px;
    height: 150px;
    background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.e1d485b4eedd57c81925a54ac7b9a7b7?rik=Y7NZ3j4kjEV%2bbA&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2014%2f0515%2f20140515110132350439.jpg&ehk=ta56JMIphX19D2A7%2bHZlOehhZ0EYJ8jJ41kt5EOrHos%3d&risl=&pid=ImgRaw&r=0');
    background-size: cover;

    .back,
    .search,
    .more {
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
    }

    .back {
      float: left;
    }

    .right {
      display: flex;
      justify-content: space-evenly;
      float: right;
      width: 60px;
      height: 25px;
    }

    .head-photo {
      display: flex;
      vertical-align: middle;
      position: absolute;
      left: 10px;
      bottom: 10px;

      .img {
        width: 75px;
        height: 75px;
        border-radius: 50%;
      }

      .name {
        height: 75px;
        line-height: 75px;
        margin-left: 5px;
        font-size: 18px;
        color: #fff;
      }
    }
  }
}

.content-top {
  position: relative;
  top: -10px;
  background-color: #000;
  border-radius: 10px 0 0 10px;
  padding: 15px 0 0px 15px;
  line-height: 30px;

  .title {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;

    span {
      margin-right: 10px;

      strong {
        color: #fff;
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }

  .address {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.1);
    display: inline-block;
  }

  .showcase {
    width: 120px;
    height: 75px;

    .left {
      float: left;
      font-size: 40px;
      margin-left: 8px;
      line-height: 55px;
    }

    .right {
      float: right;

      .things {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  .concern {
    .btn {
      width: 90%;
      margin-right: 5px;
      background-color: #fc2f56;
      color: #fff;
      border-radius: 5px;
    }

    .arrow-down {
      background-color: rgba(255, 255, 255, 0.3);
      padding: 8px;
    }
  }

  .production {
    color: #fff;
    line-height: 12px;
    margin-top: 10px;

    .arrow-down {
      margin-left: 5px;
    }
  }
}

.works {
  display: flex;
  flex-wrap: wrap;

  .work {
    position: relative;
    float: left;
    width: 33%;
    height: 150px;

    .img {
      width: 100%;
      height: 100%;
    }

    .like {
      position: absolute;
      left: 5px;
      bottom: 2px;
    }
  }
}
</style>