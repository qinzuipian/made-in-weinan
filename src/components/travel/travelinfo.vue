<template>
  <div>
       
      <div class="top">
           <router-link to="/travel">
                <span class="back">返回</span>
        </router-link>
          <h2>亲，您的订票信息如下：</h2>
      </div>
      <div class="maincontent">
         <p>身份证号：</p>
           <input type="text" v-model="residen" >
          <p>手机号：</p>
            <input type="text" v-model="resphon">
           <p>取票人：</p>
            <input type="text" v-model="resper">
             <p>取票人：</p>
            <input type="text" v-model="resdate">
      </div>
      <div class="bottom">
          温馨提示： 
          <p>一、免费开放时间为每周二至周日，当日有效，过期作废。</p>
          <p>参观时间：冬季（11月15日至次年3月15日）9：00—17：30（16：00停止发票），夏季（3月16日至11月14日）8：30—18：00（16：30停止发票）。
          周一全天闭馆整修（国家法定节假日除外）。 
          </p>
          <p>三、进馆参观实行免费存包制度，贵重物品请自行妥善保管。</p>
          <p>四、参观车辆在停车场指定位置有序停放，请勿在禁停区乱停乱放。</p>
          <p>五、展厅内禁止使用闪光灯拍照、饮食、喧哗、嬉闹，禁止从事其它与参观无关的事情；禁止随地吐痰、吸烟和随手乱扔废弃物等不文明行为。</p>
          <p> 六、爱护文物展品、展览设施和其它公共服务设施及花草树木、绿地等，如有损坏照价赔偿或承担相应法律责任。</p>
          <p>七、博物馆服务性项目按照物价部门规定的收费标准执行。收费项目主要包括：通过市场运作举办的临时展览、陈列讲解、语音导览租用、车辆停放、纪念品及图书销售、餐饮等服务，观众可根据自身需求选择消费。 </p>
          <p> 八、本管理办法由陕西历史博物馆负责解释。 </p>
          <p>    观众咨询服务电话：0913—2559963</p>
    
        
      </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      residen: localStorage.getItem("idensity"),
      resphon: localStorage.getItem("phonenumber"),
      resper: localStorage.getItem("person"),
      resdate: localStorage.getItem("date")
    };
  },
  methods: {
    res: function() {
      var res = this.residen;
      var phone = this.resphon;
      this.residen = res.substr(0, 3) + "******" + res.substr(13,3);
      this.resphon = phone.substr(0, 3) + "******" + phone.substr(6,4);
    }
  },
  created() {
    this.res();
  }
};
</script>



<style scoped>
.top {
  margin-top: 60px;
  margin-bottom: 20px;
}
.top h2 {
  font-weight: 400;
  text-align: center;
  color: #4c6fb0;
  font-size: 20px;
}
.maincontent {
  margin: 0 auto;
  width: 280px;
  line-height: 36px;
  border: 1px solid #4c6fb0;
  padding: 10px;
  background-color: #fff;
}
.maincontent p {
  font-size: 16px;
}
.maincontent input {
  background-color: transparent;
  border: none;
  color: #f00;
}
.bottom {
  padding: 40px;
}
.bottom p {
  font-size: 14px;
}
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
  margin-left: 10px;
}
</style>
