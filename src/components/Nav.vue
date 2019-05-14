<template>
  <div id="banner-top">
    <div class="banner-top ">
      <div class="container nav-warp">
        <div class="logo-warp pull-left">
          <img class="_logo" src="../assets/logo_1.svg">
          <img class="_logo-name" src="../assets/logo_2.svg" >
        </div>
      </div>

    </div>
    <div class="nav-menu">
      <div class="container">
        <ul class="">
          <li class="active"><a href="">关于我们</a></li>
          <li><a href="">研究机构</a></li>
          <li><a href="">科学研究</a></li>
          <li><a href="">学术活动</a></li>
          <li><a href="">人才招聘</a></li>
          <li><a href="">信息服务</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  var nav =  {
    name: 'clientNav',
    data () {
      return {

      }
    },
    beforeCreate() {
      console.log(this);
    }
  };
  function getWindowHeight() {
    //返回屏幕当前高度
    return (window.innerHeight||document.body.clientHeight);
  }
  window.onscroll= function(){
    //变量t是滚动条滚动时，距离顶部的距离
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    var scrollup = document.getElementById('banner-top');
    //当滚动到距离顶部200px时，返回顶部的锚点显示
    if(t>=(getWindowHeight()-100)){
      scrollup.classList.add('rolled');
    }else{          //恢复正常
      scrollup.classList.remove('rolled');

    }
  };

  export default nav;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-warp{position: relative;z-index: 101;width: 25%;padding: 30px; box-sizing: border-box;
    display: flex;flex-direction: row;justify-content: flex-start;align-items: center;}
  ._logo{width: 80px;}
  ._logo-name{width: 160px;}
  .rolled ._logo{width: 42px; }
  .banner-top{background: linear-gradient(0deg,rgba(32,80,154,.75),#00548f);font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
    line-height: 1;height: 50px;width: 100%;position: fixed;top: 0;-webkit-backface-visibility: hidden;backface-visibility: hidden;z-index: 100;}
  .nav-menu{position: fixed;top: 50px;width: 100%;z-index: 99;}
  .nav-menu:before{display: block;/*background: linear-gradient(0deg,transparent 0,#020202 75%);*/
    background: linear-gradient(0deg,transparent,rgba(32,80,154,.99)),linear-gradient(0deg,transparent 20%,rgba(70,123,178,.6));
    content: "";position: absolute; top: 0;bottom: -2.6em;left: 0;right: 0;opacity: .75;}
  .nav{  position: fixed;width: 100%;}

  .banner-top *{transition: all .3s;}

  .nav-menu ul{text-align: center;position: relative;}
  .nav-menu li{position: relative;z-index: 102; margin-right: 2em;display: inline-block;font-size: 16px; }
  .nav-menu li:last-child{margin-right: 0;}
  .nav-menu li a{color: white;padding-bottom: 8px;display: inline-block;line-height: 42.75px;font-weight: 600;text-decoration: none; position: relative;}
  .rolled .nav-menu li a:hover,.rolled .nav-menu li.active a{color: #00915b;}
  .nav-menu li a:hover:after,.nav-menu li.active a:after{ visibility: visible; -webkit-transform: scaleX(1); transform: scaleX(1); transition: all .25s ease-out;}
  .nav-menu li a:after{ background-color: #fff; content: ""; position: absolute; width: 100%; height: 3px; bottom: 0;left: 0;
    visibility: hidden;-webkit-transform: scaleX(0); transform: scaleX(0); transition: all .15s ease-in; z-index: 1;}

  @media (min-width: 992px) {
    .rolled .nav-menu:before,.rolled ._logo-name{display: none;}
    .rolled .logo-warp{width: 10%;padding: 0.2% 0;}
    .rolled .banner-top{background: #00915b;}
    .rolled .nav-menu{background: white;box-shadow: 0 0 10px rgba(0,0,0,.15), 0 3px 3px rgba(0,0,0,.15);}
    .rolled .nav-menu li a:after{background-color: #00915b;}
    .rolled .nav-menu a{color: black;}
  }
  @media (max-width: 1401px) and (min-width: 813px){
    .nav-menu ul{text-align: right;}

  }
  @media (max-width: 992px) {
    .nav-menu{display: none;}
    .logo-warp{padding: 5px 0;width: 135px;}
    .rolled .logo-warp{width: 135px;}
    ._logo{width: 44px;}
    ._logo-name{width: 100px;}
    /*.rolled .logo-warp ._logo{width: 14%;}*/

  }
  @media (max-width: 575px) {
    .nav-warp{display: flex;justify-content: center;}
  }

</style>
