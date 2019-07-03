<template>
  <div>
    <clientNav nav="3"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">科学研究</h2>
        <div class="list">
          <div class="active ripple">
            研究领域
          </div>
          <div class="ripple" >
            重要成果
          </div>
          <div class="ripple" >
            博士后
          </div>
        </div>
        <div class="content news-content">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019年6月11日，受中德创意讲堂邀请，腾讯市场与公关部高级创意总监王彦凯先生在耦合空间开展以“当场发布——数字供养人”为主题的讲座。
            讲座伊始，王彦凯先生讲述了自己年幼第一次接触到BB机时，老师告诉他，科技开始改变时代了。一起学习的同学，最后还继续留在广告行业的人，只剩下3个。在他看来，广告行业最后留下来的，是有着对广告真诚热爱以及能够熬得住的人。
          </p>
          <img src="https://goss.veer.com/creative/vcg/veer/1600water/veer-135013207.jpg"  class="img">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当今时代，科技和文化的结合成为主流趋势，不少企业把目光放到中国传统文化上，腾讯就和莫高窟博物院进行了一次合作——敦煌：数字供养人。讲到这里，王彦凯先生问了在场的同学一个问题：和莫高窟合作，腾讯能得到什么？有的同学回答社会的正面形象，有的同学回答能更好地保护文物，而王彦凯先生的回答是，能得到很多文化IP。众所周知，腾讯的主营是游戏，王者荣耀、QQ飞车等游戏都是家喻户晓的，而与莫高窟合作，得到壁画人物的版权，可以将其运用到游戏设计中，吸引更多用户流量。就拿莫高窟壁画人物中的一个反弹琵琶的形象来说，作为王者荣耀的新一款人物形象，一经推出，单日线上下载最高量达到了4000万，可以说是一个非常好的成绩。这不但使得莫高窟的人物形象得到更多大众关注，还能使莫高窟文化更加快速地融入年轻人的社交圈。王彦凯表示，现代很多时尚设计都借鉴于不同的文物形象，因此与文化IP结合发展逐渐成为时代主流。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当今时代，科技和文化的结合成为主流趋势，不少企业把目光放到中国传统文化上，腾讯就和莫高窟博物院进行了一次合作——敦煌：数字供养人。讲到这里，王彦凯先生问了在场的同学一个问题：和莫高窟合作，腾讯能得到什么？有的同学回答社会的正面形象，有的同学回答能更好地保护文物，而王彦凯先生的回答是，能得到很多文化IP。众所周知，腾讯的主营是游戏，王者荣耀、QQ飞车等游戏都是家喻户晓的，而与莫高窟合作，得到壁画人物的版权，可以将其运用到游戏设计中，吸引更多用户流量。就拿莫高窟壁画人物中的一个反弹琵琶的形象来说，作为王者荣耀的新一款人物形象，一经推出，单日线上下载最高量达到了4000万，可以说是一个非常好的成绩。这不但使得莫高窟的人物形象得到更多大众关注，还能使莫高窟文化更加快速地融入年轻人的社交圈。王彦凯表示，现代很多时尚设计都借鉴于不同的文物形象，因此与文化IP结合发展逐渐成为时代主流。
            <img src="https://goss.veer.com/creative/vcg/veer/1600water/veer-154395632.jpg" class="img">
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当今时代，科技和文化的结合成为主流趋势，不少企业把目光放到中国传统文化上，腾讯就和莫高窟博物院进行了一次合作——敦煌：数字供养人。讲到这里，王彦凯先生问了在场的同学一个问题：和莫高窟合作，腾讯能得到什么？有的同学回答社会的正面形象，有的同学回答能更好地保护文物，而王彦凯先生的回答是，能得到很多文化IP。众所周知，腾讯的主营是游戏，王者荣耀、QQ飞车等游戏都是家喻户晓的，而与莫高窟合作，得到壁画人物的版权，可以将其运用到游戏设计中，吸引更多用户流量。就拿莫高窟壁画人物中的一个反弹琵琶的形象来说，作为王者荣耀的新一款人物形象，一经推出，单日线上下载最高量达到了4000万，可以说是一个非常好的成绩。这不但使得莫高窟的人物形象得到更多大众关注，还能使莫高窟文化更加快速地融入年轻人的社交圈。王彦凯表示，现代很多时尚设计都借鉴于不同的文物形象，因此与文化IP结合发展逐渐成为时代主流。
          </p>
        </div>


    </div>
    <!--页脚-->
    <clientFooter></clientFooter>
  </div>
</template>

<script>
  import Nav from '../../components/Nav'
  import Footer from '../../components/Footer'

  var currentPosition;

  var index =  {
      name: 'research',
      components:{
        'clientNav':Nav,
        'clientFooter':Footer,
      },
      data () {
        return {

        }
      },
      beforeCreate:function(){

      },
      mounted(){

      },
      methods:{

      }
  };
  export default index;

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{background-image: url("https://goss.veer.com/creative/vcg/veer/1600water/veer-308153633.jpg");background-position-y:10%; }
  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
