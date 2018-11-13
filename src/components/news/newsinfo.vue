<template>
    <div class="content">
        <router-link to="/news">
            <span class="back">返回</span>
        </router-link>
    <h3>{{getNewinfo.title}}</h3>
    <div class="info">
        <span class="info-t">{{getNewinfo.publishTime | datamft('YYYY-MM-DD HH:mm:ss')}}</span>
        <!-- <span class="info-d">点击量：{{getNewinfo.click}}</span> -->
    </div>
    <div v-html="getNewinfo.content" class="info-c"></div>
</div>


  
</template>



<script>
// import common from "./../common";
export default {
  data() {
    return {
      id: this.$route.params.id,
      getNewinfo: {}
    };
  },
  methods: {
    getinfo: function() {
      var url = "http://47.93.33.135:8080/msgboard/detail";
      this.$http
        .post(url, { token: 123,id:this.id }, { emulateJSON: true })
        .then(function(res) {
          console.log(res);
          if (res.body.status !== 200) {
            Toast('暂无数据');
            return;
          }
          this.getNewinfo = res.body.data;
        });
    }
  },
  created() {
    this.getinfo();
  }
};
</script>


<style scoped>
.back {
  font-size: 16px;
  color: #fff;
  display: block;
  width: 80px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border: 1px solid #4c6fb0;
  background-color: #4c6fb0;
  border-radius: 8px;
  margin-bottom: 20px;
}
.content {
  margin-top: 30px;
  padding: 18px;
  line-height: 1.5em;
}
.info {
  font-size: 16px;
  margin-top: 10px;
  /* color: #f00; */
}
.info-t {
  margin-left: 20px;
}
.info-d {
  float: right;
  margin-right: 20px;
}
.info-c {
  font-size: 18px;
}
</style>


