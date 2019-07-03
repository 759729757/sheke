<template>
  <div>
    <clientNav nav="4"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">学术活动</h2>
        <div class="list">
          <div class="active ripple">
            学术会议
          </div>
          <div class="ripple" @click="toPath('/events/lecture')">
            学术讲座
          </div>
        </div>
        <div class="content news-content">

          <div class="flex flex-row flex-left flex-align-items-start pointer">
            <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-152371572.jpg" class="img">
            <div class="flex flex-col ">
              <h2>
                学术会议 <br>
                The Evolution Theory of Fashion Brand Marketing
              </h2>
              <p>
                <img src="../../assets/calendar.png" class="icon icon-sm">
                June 24th
                <img src="../../assets/eyes.png" class="icon icon-sm" style="margin-left: 2em;">
                234
              </p>
              <p>
                6月12日晚，受中德合作办学项目邀请，百丽国际新业务事业部整合营销中心总监冯云鹏老师在元白楼耦合空间举办了一场以“时尚品牌营销进化论”为主题的讲座。冯云鹏老师带领大家一起思考、探索：中国时尚品牌为什么…
              </p>
            </div>
          </div>
          <div class="flex flex-row flex-left flex-align-items-start pointer">
            <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-153790364.jpg" class="img">
            <div class="flex flex-col ">
              <h2>
                学术会议 <br>
                The Evolution Theory of Fashion Brand Marketing
              </h2>
              <p>
                <img src="../../assets/calendar.png" class="icon icon-sm">
                June 24th
                <img src="../../assets/eyes.png" class="icon icon-sm" style="margin-left: 2em;">
                234
              </p>
              <p>
                6月12日晚，受中德合作办学项目邀请，百丽国际新业务事业部整合营销中心总监冯云鹏老师在元白楼耦合空间举办了一场以“时尚品牌营销进化论”为主题的讲座。冯云鹏老师带领大家一起思考、探索：中国时尚品牌为什么…
              </p>
            </div>
          </div>

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
.banner{background-image: url("https://goss.veer.com/creative/vcg/veer/1600water/veer-132342109.jpg");}
.img{width: 300px;margin-right: 30px;}
.flex{flex-wrap: nowrap;}
  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
