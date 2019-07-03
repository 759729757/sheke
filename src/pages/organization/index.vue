<template>
  <div>
    <clientNav nav="2"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">研究机构</h2>
        <div class="content flex">

          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                本科生招生
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/1600water/veer-154395632.jpg"  class="logoImg">
            </div>
          </div>
          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                研究生招生
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-308271785.jpg"  class="logoImg">
            </div>
          </div>
          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                留学生招生
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-145458952.jpg"  class="logoImg">
            </div>
          </div>
          <div class=" item2  item-pad">
            <div class="bg-light flex">
              <h3 class="item-pad text-hini">
                就业创业
              </h3>
              <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-153723263.jpg"  class="logoImg">
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
      name: 'organization',
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
  .banner{background-image: url("https://goss.veer.com/creative/vcg/veer/1600water/veer-145673733.jpg");}


  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
