<template>
  <div>
    <!--导航栏 + 顶部大图-->
    <div class="session1 " :style="{height:h}">
      <div class="bannerBg"></div>
      <clientNav></clientNav>
      <div class="banner-title">
        <img src="../assets/bigName.svg" width="100%">
      </div>
      <div class="more" @click="showContent()">
        发现更多
      </div>
    </div>
    <div class="main">
      <!--活动预告-->
      <div class="session container">
        <div class="session-title">
          <h1>
            学术动态
          </h1>
        </div>
        <div class="content event-warp flex">
          <div class="grid lg-4 md-2 sm-1 item ">
            <img src="../assets/e1.jpg">
            <div class="detail">
              <div class="badge">
                <span>5月</span>
                <span>6日</span>
              </div>
              <h3>粤海澳大湾区语言二次第</h3>
              <p>
                SCOPE Brown Bag Seminar–Bad or Brilliant: The Gendered Social Construction of Exceptionalism in Early
                Adolescence
              </p>
            </div>
          </div>
          <div class="grid lg-4 md-2 sm-1 item ">
            <img src="http://stusystem.dfi.ac.cn/images/-31499329333658.jpg">
            <div class="detail">
              <div class="badge">
                <span>10月</span>
                <span>26日</span>
              </div>
              <a href="">
                <h3>粤海澳大湾区语言资源第第二次第二次第二次</h3>
                <p>
                  SCOPE Brown Bag Seminar–Bad or Brilliant: The Gendered Social Construction of Exceptionalism in Early
                  Adolescence
                </p>
              </a>
            </div>
          </div>
          <div class="grid lg-4 md-2 sm-1 item ">
            <img src="http://stusystem.dfi.ac.cn/images/320_img_9327-21555381029841.jpg">
            <div class="detail">
              <div class="badge">
                <span>10月</span>
                <span>10日</span>
              </div>
              <h3>粤海澳大湾区语言资源第二第二次第二次第次</h3>
              <p>
                SCOPE Brown Bag Seminar–Bad or Brilliant: The Gendered Social Construction of Exceptionalism in Early
                Adolescence
              </p>
            </div>
          </div>
          <div class="grid lg-4 md-2 sm-1 item ">
            <img src="http://stusystem.dfi.ac.cn/images/-21499329470036.jpg">
            <div class="detail">
              <div class="badge">
                <span>10月</span>
                <span>10月</span>
              </div>
              <h3>粤海澳大湾区语言资源第二次第二次第二次</h3>
              <p>
                SCOPE Brown Bag Seminar–Bad or Brilliant: The Gendered Social Construction of Exceptionalism in Early
                Adolescence
              </p>
            </div>
          </div>
        </div>

        <button class="btn btn-more">更多活动</button>
      </div>

      <!-- 重点关注-->
      <div class="session container-full hot-warp">
        <div class="container">
          <div class="session-title ">
            <h1 class="half-part">
              重点关注
            </h1>
          </div>
          <div class="half-part md-1 content">
            <p>
              为服务国家重大战略，促进地区经济社会发展，助力北京师范大学加快实现创建“世界一流大学和一流学科”的战略目标，切实落实与广东省、珠海市共建北京师范大学珠海校区的协议，加快形成珠海校区的自主创新能力和拔尖创新人才培养能力，助力珠海校区创新学科集群的建立，
              学校成立自然科学高等研究作中心、语言科学研究中心、中国优秀传统文化研究与传播中心、史学研究中心、社会治理研究中心、社会工作研究中心、创新发展研究中心、粤港澳大湾区文化创新与文化传播工程研究中心、北师大-UIC历史文化研究中心和国民核算研究院。
              <br><br>
              为服务国家重大战略，促进地区经济社会发展，助力北京师范大学加快实现创建“世界一流大学和一流学科”的战略目标，切实落实与广东省、珠海市共建北京师范大学珠海校区的学研究中心、社会治理研究中心、社会工作研究中心、创新发展研究中心、粤港澳大湾区文化创新与文化传播工程研究中心、北师大-UIC历史文化研究中心和国民核算研究院。
            </p>

            <button class="btn btn-more btn-white pull-left ">更多信息 View More</button>
          </div>
        </div>
      </div>

      <!--新闻动态-->
      <div class="container-full news-warp">
        <div class="container-full cover">
          <div class="session container">
            <div class="session-title">
              <h1>
                新闻动态 <span>NEWS</span>
              </h1>
            </div>
            <div class="content">
              <div class="grid lg-3 sm-1 item ">
                <img src="https://new.trinity.edu/sites/default/files/captioned_images/loder-web-1.jpg">
                <div class="detail">
                  <h4>粤海澳大湾区语言资源第第二次第二次第二次</h4>
                  <p>
                    粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次
                  </p>
                  <a href="">
                    更多信息<span class="icon icon-more"></span>
                  </a>
                </div>
              </div>
              <div class="grid lg-3 sm-1 item ">
                <img src="https://new.trinity.edu/sites/default/files/captioned_images/web-webinarstory.jpg">
                <div class="detail">
                  <h4>粤海澳大湾区语言资源第第二次第二次第二次</h4>
                  <p>
                    粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次
                  </p>
                  <a href="">
                    更多信息<span class="icon icon-more"></span>
                  </a>
                </div>
              </div>
              <div class="grid lg-3 sm-1 item ">
                <img src="https://new.trinity.edu/sites/default/files/file_attachments/loder-web-2.jpg">
                <div class="detail">
                  <h4>粤海澳大湾区语言资源第第二次第二次第二次</h4>
                  <p>
                    粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次粤海澳大湾区语言资源第第二次第二次第二次
                  </p>
                  <a href="">
                    更多信息<span class="icon icon-more"></span>
                  </a>
                </div>
              </div>
            </div>

            <button class="btn btn-more">更多动态 View More</button>

          </div>
        </div>
      </div>

      <!--播放视频和主要人员-->
      <div class="white-bg">
        <!--播放视频-->
        <div class="container-full video-warp">
          <video class="video" preload="none" muted poster="http://stusystem.dfi.ac.cn/image/videoimg.jpg" width="100%"
                 style="display: block" autoplay loop>
            <source src="http://stusystem.dfi.ac.cn/baweb.mp4" type="video/webm">
            <source src="http://stusystem.dfi.ac.cn/baweb.mp4" type="video/mp4">
          </video>
        </div>
        <!--主要人员-->
        <div class="container-full team">
          <div class="container session flex-row relative">
            <img class="headImg"
                 src="https://new.trinity.edu/sites/default/files/interstitials/fourth-year-trinity-1515174009.jpg"
                 alt="Prof.Dr.Joachim Bongard">
            <div class="half-part ">
              <h2>Prof.Dr.Joachim Bongard</h2>
              <p>
                本科毕业于汉堡大学，硕士毕业于斯坦福大学 <br>
                曾任德国 Rheinischen 大学教授。曾就职于 Agenturerfahrung 科隆、慕尼黑、汉诺威、伦敦公司，服务括宝马、巴尔森、Smart、奔驰等品牌。
              </p>
            </div>
          </div>
        </div>
      </div>


      <!--数据高研院-->
      <div class="container-full data-number session">
        <div class="container">
          <div class="session-title">
            <h1>
              数据高研院 <span>Digital Institute of HSS</span>
            </h1>
          </div>
          <div class="float-room content">
            <div class="grid lg-3 sm-1">
              <img class="icon" src="../assets/build.svg">
              <p class="data">
                <span class="num">10</span>个<br>研究中心
              </p>
            </div>
            <div class="grid lg-3 sm-1">
              <img class="icon" src="../assets/book.svg">
              <p class="data">
                <span class="num">10</span>本<br>核心期刊
              </p>
            </div>
            <div class="grid lg-3 sm-1">
              <img class="icon" src="../assets/degree.svg">
              <p class="data">
                <span class="num">10</span>名<br>博士后
              </p>
            </div>
          </div>

        </div>
      </div>

      <!--页脚-->
      <clientFooter></clientFooter>

    </div>
  </div>

</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'

var currentPosition

var index = {
  name: 'Index',
  components: {
    'clientNav': Nav,
    'clientFooter': Footer
  },
  data () {
    return {
      h: getWindowHeight(),
      timer: null
    }
  },
  beforeCreate: function () {

  },
  mounted () {
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.h = getWindowHeight() //窗口高度
    }
  },
  methods: {
    showContent: function () {
      console.log('showContent')
      var h = this.h.replace(/px$/, '')
      h = h - 50
      $('body,html').animate({'scrollTop': h}, 800, 'swing')
    }
  }
}
export default index

function getWindowHeight () {
//返回屏幕当前高度
  return (window.innerHeight || document.body.clientHeight) + 'px'
}

function showContent () {
  timer = setInterval(runToTop(getWindowHeight()), 1)
}

function runToTop (h) {
  currentPosition = document.documentElement.scrollTop || document.body.scrollTop
  currentPosition -= 10
  if (currentPosition > h) {
    window.scrollTo(0, currentPosition)
  } else {
    window.scrollTo(0, h)
    clearInterval(timer)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .session1 {
    position: relative;
    /*background: #eee;background-image:url("../assets/bg.jpg");*/
    /*background-position: center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;*/
  }

  .session1 * {
    transition: all .3s;
  }

  .bannerBg {
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: -1;
    left: 0;
    top: 0;
    background-image: url("../assets/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  .more {
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 0;
    height: 48px;
    line-height: 48px;
    background: #00915b;
    color: white;
    cursor: pointer;
  }

  .banner-title {
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    -webkit-transform: translate(-50%, -100%);
  }

  .news-warp {
    background-image: url("../assets/newsbg.jpg");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
  }

  .news-warp .cover {
  }

  .news-warp .detail {
    background: none;
    color: white;
    padding: 30px 0;
    height: auto;
  }

  .news-warp a {
    color: #fff;
    font-weight: bold;
    padding: 20px 0;
    display: block;
  }

  .news-warp h4 {
    margin-bottom: 20px;
  }

  .grid img {
    width: 100%;
    display: block;
  }

  .grid h3, .team h2 {
    color: #00915b;margin-bottom: 15px;
  }

  .team h2 {
    margin-bottom: 15px;
  }

  .session-title h1 {
    font-weight: lighter;
  }

  .main {
    position: relative;
    z-index: 80;
    background: #f5f2ea;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15), 0 -2px 10px rgba(0, 0, 0, .15);
  }

  .detail {
    padding: 60px 30px 40px 30px;
    background: white;
    position: relative;
    box-sizing: border-box;
  }

  .detail .badge {
    position: absolute;
    left: 30px;
    top: -35px;
    width: 70px;
    height: 70px;
    color: white;
    background: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }

  .hot-warp {
    background-image: url("../assets/eventbg.jpg");
    background-color: #0f533a;
    background-position: center;
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat;
    color: white;overflow: hidden;zoom: 1;
  }
  .hot-warp .half-part{
    float: right;padding-left: 40px;box-sizing: border-box;
  }
  .hot-warp .session-title{overflow: hidden;}
  p {
    line-height: 1.6em;
  }

  .inside-bottom {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    height: 40%;
    width: 100%;
    color: white;
    background: linear-gradient(0deg, transparent, rgba(0, 0, 0, .49), rgba(255, 255, 255, 0));
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    box-sizing: border-box;
  }

  .photo-warp, .event-warp {
    width: 102%;
    margin-left: -1%;
  }
  .event-warp .grid{background: white;}

  .inside-bottom h3 {
    color: white;
    padding-bottom: 5px;
  }

  .team .flex-row {
    justify-content: flex-end;
  }

  .team .headImg {
    position: absolute;
    left: 0;
    border-radius: 100%;
    width: 34%;
    top: 0;
  }

  .team .session {
    padding-top: 200px;
    overflow-y: hidden;
    padding-bottom: 100px;
    margin-top: -100px;
  }

  .data-number {
    color: white;
    background-image: url("../assets/newsbg.jpg");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .data-number .icon {
    width: 70%;
    margin: 20px 15% 50px 15%;
  }

  .data-number .data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.8em;
  }

  .data-number .num {
    font-size: 3em;
    font-weight: lighter;
    line-height: 1em;
    padding: 0 5px;
  }

  .event-warp {
    padding: 5px 0;
  }

  .event-warp .grid:hover, .photo-warp .grid:hover {
    box-shadow: 0 0 10px 0 #999;
  }

  .event-warp .grid:hover img, .photo-warp .grid:hover img, .news-warp .grid:hover img {
    transform: scale(1.05);
  }

  /*下面做手机兼容适配*/
  @media (max-width: 992px) {
    .video-warp, .photo-warp .item:last-child {
      display: none;
    }

    .session-title {
      text-align: center;
    }

    .hot-warp {
      background-position: left;
    }

    .photo-warp, .event-warp {
      width: 100%;
      margin-left: 0;
    }

    .event-warp .grid {
      margin-bottom: 2%;
    }

    .hot-warp .btn {
      float: none;
    }
    .team {
      background-image: url("../assets/teamBg.png");
      background-attachment: fixed;
      background-size: cover;
    }

    .team .session {
      flex-direction: column;
      margin-top: 0;
      padding: 90px 0;
      text-align: center;
    }

    .team .headImg {
      position: relative;
      width: 50%;
      margin-bottom: 30px;
    }

  }

  /*最小手机*/
  @media (max-width: 575px) {
    .event-warp .grid img, .event-warp .grid .badge {
      display: none;
    }

    .banner-title {
      width: 90%;
    }

    .logo-warp {
      padding: 10px 0;
      width: 50%;
    }

    .session-title h1 {
      width: 100%;
      text-align: center;
    }

    .session-title h1 span {
      display: block;
    }

    .event-warp .grid, .photo-warp .grid {
      margin: 10px 0;
      box-shadow: 0 0 10px 0 #999;
    }

    .event-warp .grid:first-child img {
      display: block;
    }

    .event-warp .grid:first-child .badge {
      display: flex;
    }

    .detail {
      padding: 40px 30px;
      height: auto;
    }

    .news-warp {
      background: none;
      color: #000;
    }

    .news-warp .cover {
      background: none;
    }

    .news-warp .detail {
      color: #000;
    }


    .data-number .grid {
      margin-bottom: 50px;
      border: 1px solid #fff;
      box-sizing: border-box;
      padding: 40px 0;
    }

    .data-number .icon {
      margin: 0 15%;
    }
  }


</style>
