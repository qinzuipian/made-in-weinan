<template>
  <div>
    <h2>留言板</h2>
    <p class="line"></p>
    <label for=""> 用户名： </label>
    <input type="text" v-model="applyUserName" class="apply">
    <textarea placeholder="请留下您宝贵的建议" v-model="content"></textarea>
     <mt-button class="btn" type="danger" size="normal" @click="getcommit">亲的留言</mt-button>
     <h2>留言墙</h2>
     <p class="line"></p>
     <div v-for="(item,index) in commlist" :key="index">
         <div class="commit">
             <span>{{index+1}}楼</span>
             <span>{{item.applyUserName}}</span>
             <span>{{item.applyTime}}</span>
         </div>
           <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <span>
                       {{item.purpose.length==0?'此用户无评论信息':item.purpose}}
                    </span>
                </li>
            </ul>
     </div>
      <mt-button class="more" type="danger" size="large" @click="getmore">加载更多...</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// import common from "./../common";
export default {
  // props: ["msg"],
  data() {
    return {
      content: "",
      applyUserName:"",
      commlist: [],
      pageNumber:1
      // createDate: new Date()
    };
  },
  methods: {
    //   提交评论信息
    getcommit: function() {
      var url = "http://47.93.33.135:8080/flightplan/saveOrUpdate";
      // console.log(url);
      this.$http
        .post(
          url,
          {
            purpose: this.content,
            applyUserName:this.applyUserName,
            createId: 1,
            createDate: '2018-10-02',
            createName: "admin",
            token: 123,
            uavId: 20,
            startTime: '2018-10-02',
            endTime: '2018-10-02',
            applyTime: '2018-10-02',
          },
          { emulateJSON: true }
        )
        .then(function(res) {
          if (res.body.status !== 200) {
            return;
          }
          Toast(res.body.message);
           window.location.reload();
          this.content = "";
        });
    },
    // 获取评论信息
    getcomminfo: function(pageId) {
      var page = pageId || 1;
      var url = "http://47.93.33.135:8080/flightplan/list";
      this.$http
        .post(url, { token: 123,pageNumber:page }, { emulateJSON: true })
        .then(function(res) {
          console.log(res);
          if (res.body.status !== 200) {
            Toast("暂无数据");
            return;
          }else if (page == 1) {
          this.commlist = res.body.rows;
        } else {
          this.commlist = this.commlist.concat(res.body.rows);
        }
        });
    },
    getmore: function() {
      this.pageNumber++;
      this.getcomminfo(this.pageNumber);
    }
  },
  created() {
    this.getcomminfo();
  }
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  text-align: center;
  padding: 20px;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #4c6fb0;
  /* background-color: rgba(121, 36, 26, 0.9); */
}
textarea {
  height: 230px;
  width: 300px;
  margin-left: 12px;
  border: 0;
  color: #aaa;
  font-size: 20px;
  background-color: #fff;
}
.btn,
.more {
  /* background-color: #79241a; */
  background-color: #4c6fb0;
  height: 40px;
  /* float: right; */
}
.btn {
  margin-left: 16px;
  font-size: 16px;
  border-radius: 8px;
  width: 120px;
  /* float: right; */
}
.mui-table-view-cell {
  background-color: rgba(76,111,176, 0.6);
}
label {
  margin-left: 12px;
}
.apply {
  width: 230px;
}
</style>