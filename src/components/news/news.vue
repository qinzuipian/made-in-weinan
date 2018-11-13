<template>
 <div>
    <div class="mui-card" v-for="(item ,index) in newlist" :key="index">
	      <!--页眉，放置标题-->
	      <div class="mui-card-header">{{item.title}}</div>
	      <!--内容区-->
        <router-link :to="'/newsinfo/'+item.id">
              <div class="mui-card-content">{{item.content}}</div>
        </router-link>
	     
	      <!--页脚，放置补充信息或支持的操作-->
	       <div class="mui-card-footer">
           <span class="newTime">{{item.publishTime | datamft('YYYY-MM-DD HH:mm:ss')}}</span>
           <!-- <span class="newClick">点击量:{{item.click}}</span> -->
        </div>
     </div>
    
 </div>
  
</template>

<script>
// import common from "./../common";
export default {
  data() {
    return {
      newlist: []
    };
  },

  methods: {
    getnews: function() {
      var url = "http://47.93.33.135:8080/msgboard/list";
      this.$http
        .post(url, { token: 123 }, { emulateJSON: true })
        .then(function(res) {
          console.log(res);
          if (res.body.status !== 200) {
            Toast("暂无数据");
            return;
          }
          this.newlist = res.body.rows;
        });
    }

  },
  created() {
    this.getnews();
  }
};
</script>


<style scoped>
.mui-card {
  margin-top: 68px;
  background-color: #fff;
}
.mui-card-header {
  font-weight: 700;
}
.mui-card-content {
  font-size: 16px;
  height: 70px;
  padding: 14px;
}
</style>


