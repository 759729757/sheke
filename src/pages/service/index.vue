<template>
  <div>
    <clientNav nav="6"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">信息服务</h2>
        <div class="content flex">

          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                办事指引
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-134378464.jpg"  class="logoImg">
            </div>
          </div>
          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                资料下载
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-309162419.jpg"  class="logoImg">
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
      name: 'service',
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
  .banner{background-image: url("https://goss.veer.com/creative/vcg/veer/1600water/veer-149497628.jpg");background-position-y: 20%;}


  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
