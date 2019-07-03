<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*<!--元素点击效果-->*/
  .ripple{
    position: relative;
    overflow: hidden;
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity .9s;
  }

  .ripple:active:after{
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  /*元素点击效果end*/
  /*布局*/
  .bg-light{background: rgb(234,238,245);}
  .text-hini{color: #00915b;}
  .container-full .banner{height: 800px;background-size: cover;background-position: center 20%;background-repeat: no-repeat;position: relative;}
  .main-title{margin-bottom: 30px;}
  .list{width: 330px;border-top: 1px #00915b solid;border-bottom: 1px #00915b solid;float: left;}
  .list>div{height: 45px;line-height: 45px;padding-left: 2em;font-size: large;cursor: pointer;transition: all .25s;margin-bottom: 1px;}
  .list>div:last-child{margin-bottom: 0;}
  .list>div.active,.list>div:hover{background: #00915b;color: white;position: relative;}
  .list>div.active:before{ position: absolute; content: ""; width: 20px; height: 20px; background: #fff; transform: rotate(45deg); left: -10px; top: 10px;}
  .half-part{width: 50%;display: inline-block;}
  .flex{display: flex;justify-content: space-between;flex-wrap: wrap;}
  .flex-row{display: flex;flex-direction: row;justify-content: space-around;justify-items: center; align-items: center;}
  .flex-col{flex-direction: column;justify-content: space-between;}
  .flex-left{justify-content: left;}
  .flex-align-items-start{align-items: start;}
  .news-content{padding-left: 70px;color: #575757;overflow: hidden;}
  .news-content p,.news-content .img,.news-content h2{margin-bottom: 15px;}
  .news-content p .img{margin-bottom: 0;margin-top: 15px;}
  .logoImg{width: 360px;height: 250px;}
  .item3{width: 33.333%;margin-bottom: 20px;cursor: pointer;}
  .item2{width: 50%;margin-bottom: 20px;cursor: pointer;}
  .item-pad{padding: 20px;box-sizing: border-box;}
  .item3-pad{margin-right:20px;margin-left:20px;width: calc(33.333% - 40px);box-sizing: border-box;}
  .text-warp{padding: 0 20px;box-sizing: border-box;}
  .pointer{cursor: pointer;}
  .icon{width: 30px;height: 30px;display: inline-block;vertical-align: middle;}
  .icon-sm{width: 15px;height: 15px;margin-top: 0;margin-bottom: 0;}
  .icon-md{width: 24px;height: 24px;}
  .icon-lg{width: 40px;height: 40px;}
  .icon-xlg{width: 30%;height: 30%;}

  /*字体*/
  .text-sm{font-size: small;}
  .text-light{color: #ccc;}

  *{margin: 0;padding: 0;}
  img{max-width:100%;}
  a{text-decoration: none;color: #333;}
  .container{width: 1430px;margin: 0 auto;}
  .container-full{width: 100%;}
  .content{zoom: 1;overflow: hidden;}
  .session{ padding: 100px 0; }
  .grid{float: left;transition: all .25s;overflow: hidden;cursor: pointer;}
  .grid *{transition: all .25s ease-out;}
  .lg-2{width: 48%;margin:0 1%;}
  .lg-3{width: 32%;margin-right: 2%;}
  .lg-4{width: 23%;margin:0 1%;}
  .lg-3:nth-child(3n+3),.lg-4:nth-child(4n+4){margin-right:0;}
  .btn{background: #00915b;font-size: larger;text-align: center;width: 522px;color: white;border: none;margin: 0 auto;
    display: block;line-height: 35px;padding: 10px 0;font-weight: 600;}
  .pull-left{float: left;}
  .btn-more{margin-top: 80px;}
  .btn-white{background: white;color: #00915b;}
  .pull-right{float: right;}
  .relative{position: relative;}
  .marright0{margin-right: 0;}
  .white-bg{background-color: white;}
  .float-room{zoom: 1;overflow: hidden;}
  .gray-bg{background: #004079;color: white;}
  .footer .flex-row{align-items: flex-end;}
  .footer .flex-row>div{margin: 0 20px;}
  button{cursor: pointer;}
  .item:after{content: "";clear: both;}




  #app {
    font-family: 微软雅黑, sans-serif,'Avenir', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
  body::-webkit-scrollbar{display: none;}
  body{-ms-overflow-style: none;overflow: -moz-scrollbars-none;}


  /*下面做手机兼容适配*/
  @media (max-width: 1400px) {
    .container{width: 94%;margin: 0 3%;}

  }
  @media (max-width: 992px) {
    .md-1{width: 100%;}
    .md-2{width: 48%;margin:0 1%;}
    .md-66{width: 64.66666%;margin: 0 1%;}
    .md-33{width: 31.33333%;margin: 0 1%;}
    .md-3{width: 31.33%;margin: 0 1%;}

    .content{    display: flex;flex-wrap: wrap;}
  }

  @media (max-width: 575px) {
    p{line-height: 1.6em;}
    .btn{width: auto; padding: 10px 20px;}
    .session{padding: 40px 0;}
    .half-part,.sm-1{width: 100%;margin-right: 0;margin-left: 0;}
    .content{margin: 30px 0;}
    .btn-more{margin-top: 30px;box-shadow: 0 0 10px 0 #999;}

  }

</style>
