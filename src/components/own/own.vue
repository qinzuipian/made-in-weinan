<template>
<div>
   <div class="top">
        <img src="../../../statics/imgs/head.jpg" alt="">
         <div class="pic">
             <img src="../../../statics/imgs/mongwa.jpg" alt="">
             <p>{{usernum}}</p>
         </div>
   </div>
  
  <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-collapse">
				<a class="mui-navigate-right" href="#">版本介绍</a>
				<div class="mui-collapse-content">
                    <mt-cell title="当前版本" value="2.0"></mt-cell>
                    <mt-cell title="最新版本" value=""></mt-cell>
			</div>
			</li>
			<li class="mui-table-view-cell mui-collapse">
				  <a class="mui-navigate-right" href="#">订单查看</a>
				  <div class="mui-collapse-content">
				      <form class="mui-input-group">
				       <div class="mui-input-row">
				       <label>身份证号</label>
					   <input type="text" v-model="residen" >
				      </div>
				       <div class="mui-input-row">
				       <label>手机号</label>
					   <input type="text" v-model="resphon">
				    </div>
             <div class="mui-input-row">
				       <label>取票人</label>
					     <input type="text" v-model="resper">
				      </div>
               <div class="mui-input-row">
				       <label>时间</label>
					     <input type="text" v-model="resdate">
				      </div>
				    
		
				</form>
			</div>
			</li>
     <mt-button type="default" size="large" @click="getdele">退出登录</mt-button>     
	</ul>



</div>

  
</template>


<script>
import { MessageBox } from "mint-ui";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({});

export default {
  data() {
    return {
      usernum: "",
      residen: localStorage.getItem("idensity"),
      resphon: localStorage.getItem("phonenumber"),
      resper: localStorage.getItem("person"),
      resdate: localStorage.getItem("date")
    };
  },
  methods: {
    getdele: function() {
      MessageBox.confirm("确认退出吗?").then(
        //   退出
        action => {
          // router.go({ path: "/login" });
          setTimeout(
            function() {
              this.$router.push({ path: "/login" });
              localStorage.removeItem("telephone");
            }.bind(this),
            500
          );
        }
      ),
        //   不退出
        action => {
          router.go({ path: "/own" });
        };
    },
    getuser: function() {
      this.usernum = JSON.parse(window.localStorage.getItem("telephone"));
    },
     res: function() {
      var res = this.residen;
      var phone = this.resphon;
      this.residen = res.substr(0, 3) + "******" + res.substr(13,3);
      this.resphon = phone.substr(0, 3) + "******" + phone.substr(6,4);
    }
  },

  created() {
    this.getuser();
    this.res();
  }
};
</script>


<style scoped>
img {
  height: 242px;
}
.mui-table-view-cell {
  padding: 14px;
  font-size: 16px;
   color: #000;
}
.mint-button--default {
  background-color: #4C6FB0;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
}
.mui-btn {
  background-color: #4C6FB0;
  /* border: 1px solid orangered; */
}
.top {
  position: relative;
}
.pic {
  position: absolute;
  top: 26%;
  right: 28%;
}
.pic img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.pic p {
  font-size: 20px;
  /* color: orange; */
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 8px;
}
.mui-input-row label {
  font-size: 16px;
}
</style>
