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
  *{margin: 0;padding: 0;}
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
  .lg-3:last-child,.lg-4:last-child{margin-right:0;}
  .btn{background: #00915b;font-size: larger;text-align: center;width: 522px;color: white;border: none;margin: 0 auto;
    display: block;line-height: 35px;padding: 10px 0;font-weight: 600;}
  .half-part{width: 50%;display: inline-block;}
  .pull-left{float: left;}
  .btn-more{margin-top: 80px;}
  .btn-white{background: white;color: #00915b;}
  .pull-right{float: right;}
.relative{position: relative;}
.marright0{margin-right: 0;}
.white-bg{background-color: white;}
.float-room{zoom: 1;overflow: hidden;}
.gray-bg{background: #0a182c;color: white;}
.flex-row{display: flex;flex-direction: row;justify-content: center;justify-items: center; align-items: center;}
.footer .flex-row{align-items: flex-end;}
.footer .flex-row>div{margin: 0 20px;}
  .content{margin: 80px 0;}
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
  .flex{display: flex;}

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
