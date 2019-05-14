<template>

  <div class="container-full footer gray-bg">
    <div class="container session float-room">
      <div class="footer-name">
        <img src="../assets/footerName.svg" alt="" width="100%">
        <!--<h3>人文和社会科学高等研究院</h3>-->
        <!--<span>Institute of Advanced Studies in Humanities and Social Sciences</span>-->
      </div>

      <div class="flex-row half-part pull-right">
        <div>
          <h3>联系我们 Contact us</h3>
          <small>北京师范大学人文和社会科学高级研究院</small>
          <br>
          <small>广东省珠海市唐家湾金凤路18号木铎楼A301</small>
        </div>
        <div>
          <h3> </h3>
          <small>
            电话：0756-3621086
          </small>
        </div>
        <div>
          <img src="../assets/qrcode.png" alt="" width="100">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'clientFooter',
    data () {
      return {

      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-name{width: 450px;}

  /*下面做手机兼容适配*/
  @media (max-width: 992px) {
    .footer .flex-row{
      width: auto;
      float: left
    }
    .footer-name{width: 40%;margin: auto;margin-bottom: 30px;}
    .footer .flex-row{justify-items: center;}
  }
  @media (max-width: 575px) {
    .footer{text-align: center;}
    .footer .flex-row{
      flex-direction: column;align-items: center;
    }
    .footer .flex-row>div{margin: 10px 0;}
    .footer-name,.footer .flex-row{width: 80%;margin: 0 10%;}
  }
</style>
