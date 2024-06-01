<template>
  <!-- 经验 瀑布流 -->
  <van-swipe-item>
    <div class="experience" ref="experience">

    </div>
  </van-swipe-item>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const experience = ref(null);

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


let contentWidth = 198; // 每张图片的固定宽度

// 1.加入内容
const createContents = () => {
  for (let i = 0; i < list.length; i++) {
    let src = list[i].src; //生成图片的src路径
    let title = list[i].title;

    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');

    div.className = 'content';
    div.style.width = '198px';
    div.style.position = 'absolute';
    div.style.transition = 'all 0.3s';
    div.style.backgroundColor = 'pink';

    img.style.width = '198px';

    p.style.margin = 0;
    p.style.fontSize = '16px';
    p.style.lineHeight = '16px';


    img.onload = setPoisions;
    img.src = src; // 设置src路径
    p.innerText = title;

    div.appendChild(img);
    div.appendChild(p);

    experience.value.appendChild(div); //添加到容器中
  }
}

onMounted(() => {
  createContents();
})

// 2.设置每一项的位置
function setPoisions() {
  //得到列数，和 间隙的空间
  // 目前 {space: 4, columns: 2} 固定
  let info = cal();

  //该数组的长度为列数，每一项表示该列的下一项的纵坐标
  let nextTops = new Array(info.columns);
  //将数组的每一项填充为0
  nextTops.fill(0);

  const contents = experience.value.querySelectorAll('.content');
  for (let i = 0; i < contents.length; i++) {
    let content = contents[i];
    //找到nextTops中的最小值作为当前项的纵坐标
    let minTop = Math.min.apply(null, nextTops);
    content.style.top = minTop + 'px';

    //重新设置数组这一项的下一个top值
    let index = nextTops.indexOf(minTop);//得到使用的是第几列的top值
    nextTops[index] += content.offsetHeight + info.space;//横坐标

    let left = (index + 1) * info.space + index * contentWidth;
    content.style.left = left + 'px';
  }

  // let max = Math.max.apply(null, nextTops);//求最大值
  // experience.value.style.height = max + 'px';//3.设置容器的高度
}

// 计算一共有多少列，以及每一列之间的间隙
const cal = () => {
  //容器的宽度  目前400 固定
  let containerWidth = experience.value.clientWidth;

  //计算列的数量
  let columns = Math.floor(containerWidth / contentWidth);
  //计算间隙的数量(两边留空)
  let spaceNumber = columns - 1;
  // 计算剩余的空间
  let leftSpace = containerWidth - columns * contentWidth;
  //每个间隙的空间
  let space = leftSpace / spaceNumber;
  return {
    space: space,
    columns: columns,
  };
}


// 以下内容暂不实现
let timerId = null; // 一个计时器的id
window.onresize = function() {
  //窗口尺寸变动后，重新排列
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(setPoisions, 300);
}
</script>

<style lang="less" scoped>
.experience {
  position: relative;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  overflow-y: auto;
}
</style>
