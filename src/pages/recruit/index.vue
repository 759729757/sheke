<template>
  <div>
    <clientNav nav="5"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">人才招聘</h2>
        <div class="content news-content">

          <p>
            <a > 工程技术学院党建助理招聘启事 <span class="text-sm text-light">2019年05月22日</span></a>
          </p>
          <p>
            <a >基建财务岗（项目制人员）招聘启事 <span class="text-sm text-light">2019年05月07日</span> </a>
          </p>
          <p>
            <a >共青团北京师范大学珠海分校委员会专职团干招聘启事 <span class="text-sm text-light">2018年12月26日</span></a>
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
      name: 'recruit',
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
  .banner{background-image: url("https://goss.veer.com/creative/vcg/veer/1600water/veer-309389737.jpg");background-position-y: 20%;}


  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
