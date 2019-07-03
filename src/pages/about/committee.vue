<template>
  <div>
    <clientNav nav="1"></clientNav>
    <!--导航栏 + 顶部大图-->
    <div class="container-full" >
      <div class="banner"></div>
    </div>
    <div class="container session">
      <h2 class="main-title">关于我们</h2>
        <div class="list">
          <div class="ripple" @click="toPath('/about')">
            自科院概括
          </div>
          <div class="ripple" @click="toPath('leader')">
            现任领导
          </div>
          <div class="active ripple">
            学术委员会
          </div>
        </div>
        <div class="content news-content flex">

          <div class="item3 item3-pad" :class="actIndex ==1 ?'active':''">
            <img class="headImg" src="https://goss.veer.com/creative/vcg/veer/800water/veer-327658770.jpg" alt="">
            <div class="text-warp">
              <h2>
                President Marc Tessier-Lavigne
              </h2>
              <p>
                Marc Tessier-Lavigne became Stanford University’s eleventh president on September 1, 2016.
              </p>
            </div>
          </div>
          <div class="item3 item3-pad" :class="actIndex ==2 ?'active':''">
            <img class="headImg"  src="https://goss.veer.com/creative/vcg/veer/800water/veer-146922142.jpg" alt="">
            <div class="text-warp">
              <h2>
                President Marc Tessier-Lavigne
              </h2>
              <p>
                Marc Tessier-Lavigne became Stanford University’s eleventh president on September 1, 2016.
              </p>
            </div>
          </div>
          <div class="item3 item3-pad" :class="actIndex ==3 ?'active':''">
            <img class="headImg"  src="https://goss.veer.com/creative/vcg/veer/800water/veer-306860898.jpg" alt="">
            <div class="text-warp">
              <h2>
                President Marc Tessier-Lavigne
              </h2>
              <p>
                Marc Tessier-Lavigne became Stanford University’s eleventh president on September 1, 2016.
              </p>
            </div>
          </div>
          <div class="item3 item3-pad" :class="actIndex ==4 ?'active':''">
            <img class="headImg"  src="https://goss.veer.com/creative/vcg/veer/800water/veer-306850798.jpg" alt="">
            <div class="text-warp">
              <h2>
                President Marc Tessier-Lavigne
              </h2>
              <p>
                Marc Tessier-Lavigne became Stanford University’s eleventh president on September 1, 2016.
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
      name: 'committee',
      components:{
        'clientNav':Nav,
        'clientFooter':Footer,
      },
      data () {
        return {
          actIndex:0
        }
      },
      beforeCreate:function(){

      },
      mounted(){
        this.$nextTick(function () {

          var item = $('.item3-pad');
            var self = this;
          var timer = function(){ setTimeout(function () {
            if(self.$data.actIndex < item.length){
                self.$data.actIndex ++;
                timer()
              }else {
                $(item[self.$data.actIndex-1]).removeClass('active')
              }
            },200)
          }
          timer();

        })
      },
      methods:{

      }
  };
  export default index;

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{background-image: url("../../assets/aboutBanner.jpg");}
.headImg{height: 200px;width: 100%;}
.item3-pad{background: #eee;transition: all .3s;}
.item3-pad:hover,.item3-pad.active{transform: scale(1.02);box-shadow: 0 0 5px 1px #ccc;}

  /*下面做手机兼容适配*/
  @media (max-width: 992px) {


  }
  /*最小手机*/
  @media (max-width: 575px) {

  }


</style>
