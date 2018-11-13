<template>
  <div>
    <div>
      <div class="page-lazyload">
          <h1 class="page-title">馆内展品</h1> 
          <ul class="page-lazyload-list">
            <li class="page-lazyload-listitem">
               <img class="page-lazyload-image" src="../../../statics/imgs/bing.jpg" lazy="loaded">
               </li>
               <li class="page-lazyload-listitem">
                 <img class="page-lazyload-image" src="../../../statics/imgs/beifo.jpg" lazy="loaded">
            </li>
            <li class="page-lazyload-listitem">
              <img class="page-lazyload-image" src="../../../statics/imgs/hanma.jpg" lazy="loaded">
            </li>
            <li class="page-lazyload-listitem">
              <img class="page-lazyload-image" src="../../../statics/imgs/hanya.gif" lazy="loading">
            </li>
            <li class="page-lazyload-listitem">
              <img class="page-lazyload-image" src="../../../statics/imgs/mayong.jpg" lazy="loading">
            </li>
            <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/meier.jpg" lazy="loading">
            </li>
            <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/milefo.jpg" lazy="loading">
            </li>
            <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/nvyong.jpg" lazy="loading">
            </li>
            <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/songci.jpg" lazy="loading">
            </li>
             <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/shijia.jpg" lazy="loading">
            </li>
             <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/jigong.jpg" lazy="loading">
            </li>
             <li class="page-lazyload-listitem">
                <img class="page-lazyload-image" src="../../../statics/imgs/qingdou.jpg" lazy="loading">
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>



<script>
     export default {};
</script>



<style scoped>
ul {
  padding: 0px;
  margin:0px;
}
ul li {
  list-style: none;
}
div {
  display: block;
}
.page-title {
    font-size: 24px;
    margin: 12px auto;
    text-align: center;
    display: block;
    font-weight: 400;
    /* line-height: 1; */
    margin-top: 70px;
}
.page-lazyload-image {
    display: block;
    width: 100%;
}
.page-back {
    display: inline-block;
    top: 12px;
    left: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    text-align: center;
}
.page-lazyload-listitem {
    width: 380px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #ddd;
}
.page-lazyload-list {
    text-align: center;
}
img {
    border-style: none;
}

</style>