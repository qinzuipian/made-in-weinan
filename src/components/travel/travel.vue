<template>
  <div>
     <div class="total">
          <div class="pic">
             <img src="../../../statics/imgs/left.jpg" alt="">
          </div>
          <div class="price">
              <span class="title">渭南市博物馆</span>

           </div>
     </div>
      <p class="line"></p>
      <div class="data">
          <div>
            <span>出行日期:</span>
           <input type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
            <!-- <input id='result' data-options='{"type":"month"}' class="clbtn" placeholder="" @click= "dataplay" /> -->
          </div>
      </div>
    <transition name="fade">
        <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
            <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
        </div>
    </transition>
      <div class="num">
        <span v-show="showTishi">{{tishi}}</span>
          <p>身份证号：</p>
           <input type="text" v-model="idensity" placeholder="请输入18位身份证号">
          <p>手机号：</p>
            <input type="text" v-model="phonenumber" placeholder="请输入手机号">
           <p>取票人：</p>
            <input type="text" v-model="person" placeholder="请输入取票人">

          <button class="more mint-button mint-button--default mint-button--large" @click="getshop">
           <label class="mint-button-text">提交订单</label>
          </button>
      </div>
   
  </div>
  </template>


<script>
import calendar from "../subcom/calendar.vue";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      idensity: "",
      phonenumber: "",
      person: "",
      tishi: "",
      showTishi: false,
      calendar3: {
        display: "2018/02/16",
        show: false,
        zero: true,
        value: [2018, 2, 16], //默认日期
        lunar: true, //显示农历
        select: value => {
          this.calendar3.show = false;
          this.calendar3.value = value;
          this.calendar3.display = value.join("/");
        
        }
      }
    };
  },
  components: {
    calendar
  },

  methods: {
    getshop: function() {
      if (this.idensity == "" && this.phonenumber == "" && this.person == "") {
        this.tishi = "订票人的信息不能为空";
        this.showTishi = true;
      } else {
        localStorage.setItem("idensity", this.idensity);
        localStorage.setItem("phonenumber", this.phonenumber);
        localStorage.setItem("person", this.person);
        localStorage.setItem("date", this.calendar3.display);
        this.$router.push("/travelinfo");
      }
    },
    openByDrop(e) {
      this.calendar3.show = true;
      this.calendar3.left = e.target.offsetLeft + 19;
      this.calendar3.top = e.target.offsetTop + 70;

      e.stopPropagation();
      window.setTimeout(() => {
        document.addEventListener(
          "click",
          e => {
            this.calendar3.show = false;
            document.removeEventListener("click", () => {}, false);
          },
          false
        );
      }, 1000);
    }
  },

  created() {}
};
</script>


<style scoped>
.total {
  height: 180px;
}
.pic img {
  width: 150px;
  height: 150px;
  float: left;
  margin-top: 26px;
}
.price {
  /* float: left; */
  margin-top: 14px;
}
.price .title {
  font-size: 24px;
  margin-left: 10px;
  line-height: 100px;
  font-weight: 700;
}
.price .money {
  font-size: 20px;
  margin-left: 20px;
  color: orangered;
  font-weight: 700;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #4C6FB0;
}
.more {
   background-color: #4C6FB0;
  height: 40px;
  margin-bottom: 50px;
}
.data,
.menu,
.num {
  /* height: 100px; */
  padding: 10px;
}

.num p {
  /* margin-top: 20px; */
  font-size: 16px;
}
.num span {
  color: #f00;
}
.num input {
  width: 280px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #4C6FB0;
}
.menu {
  border-top: 1px solid #4C6FB0;
  border-bottom: 1px solid #4C6FB0;
  position: relative;
  line-height: 80px;
  font-size: 16px;
}
.other {
  position: absolute;
  top: 10px;
  right: 90px;
  font-size: 18px;
}
.btn {
  border-top: 1px solid #4C6FB0;
  
}
.btn p {
  height: 100px;
  margin-left: 10px;
  font-size: 24px;
  line-height: 100px;
  text-align: center;
  color: orangered;
  font-weight: 700;
}

/* 日期插件 */

input[type="text"] {
  width: 280px;
  height: 30px;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid #4C6FB0;
}
.cov-vue-date[data-v-00d50eb1] {
  margin-left: 4px;
  color: #000;
  font-size: 16px;
}

.data {
  box-sizing: border-box;

  display: -webkit-box;
  -webkit-box-pack: start;
  -webkit-box-align: start;

  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: top;

  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-flow: row wrap;
}
.data > div {
  padding: 10px;
  width: 25%;
  min-width: 300px;
  border-radius: 2px;
  position: relative;
}
.data > div > span {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 5px 10px;
  font-family: "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 10px;
  border-radius: 0 0 2px 0;
  color: #000;
  font-size: 16px;
}
.data > div > input {
  height: 30px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;
  border-radius: 2px;
  padding: 10px;
  font-size: 16px;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwpAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGlmb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUuZW90PyNpZWZpeCIpIGZvcm1hdCgiZW1iZWRkZWQtb3BlbnR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUudHRmIikgZm9ybWF0KCJ0cnVldHlwZSIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnN2ZyNpZm9udCIpIGZvcm1hdCgic3ZnIik7IH0KCl1dPjwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJ0cmFuc2Zvcm0tZ3JvdXAiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUsIDAuMDE1NjI1KSI+PHBhdGggZD0iTTcxMS4zMDYyIDI5MC42OTcyYzI0LjI4MjEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTU0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMjYgMC00My45ODggMTkuNzI4NC00My45ODggNDQuMDUzNXYyMDAuMTA0OTZDNjY3LjMxODMgMjcwLjk5MDMgNjg3LjAwMzYgMjkwLjY5NzIgNzExLjMwNjIgMjkwLjY5NzJ6TTYyMy40ODA4IDExMy40MjAzSDQwMC43NjQ5Mjh2NjYuNTEzOTJoMjIyLjcxNTkwNDAwMDAwMDAyVjExMy40MjAyODh6TTg4NC4wNTMgMTEzLjQyMDNoLTgyLjc3NDAxNnY2Ni4xNDUyOGg4NS45NDAyMjRjMjUuMjc4NSAwIDQ2LjYxMTUgMjEuMzc2IDQ2LjYxMTUgNDYuNjc3djE1My45Mjc2OEg5MC40Mzg2NTYwMDAwMDAwMXYtMTUzLjkyNzY4YzAtMjUuMyAyMS4zMzMtNDYuNjc3IDQ2LjYxMTUtNDYuNjc3aDg2LjUwMzQyNFYxMTMuNDIwMjg4aC04Mi42NDI5NDRjLTY0LjA4NiAwLTExNi41MDc2IDUyLjUwODctMTE2LjUwNzYgMTE2LjcwMzJ2Njc2LjgwMTUzNTk5OTk5OTljMCA2NC4xNzQxIDUwLjQ5MTQgMTE2LjY4MDcgMTE0LjU3NzQgMTE2LjY4MDdIODg0LjA1Mjk5MmM2NC4wNjI1IDAgMTE2LjUwNjYtNTIuNTA2NiAxMTYuNTA2Ni0xMTYuNjgwN1YyMzAuMTIzNTE5OTk5OTk5OThDMTAwMC41NTk2IDE2NS45MjkgOTQ4LjExNDQgMTEzLjQyMDMgODg0LjA1MyAxMTMuNDIwM3pNOTMzLjgyOTYgOTEwLjM1MTRjMCAyNS4zLTIxLjMzMyA0Ni42NzYtNDYuNjExNSA0Ni42NzZIMTM3LjA1MDExMTk5OTk5OTk4Yy0yNS4yNzg1IDAtNDYuNjExNS0yMS4zNzYtNDYuNjExNS00Ni42NzZWNDQ2LjQ0NTU2OEg5MzMuODI5NjMyVjkxMC4zNTEzNnpNMjY3LjEwODQgNjQ2LjE4MTljMzYuODc3MyAwIDY2Ljc1MjUtMjkuOTM5NyA2Ni43NTI1LTY2Ljg4MTUgMC0zNi45MjI0LTI5Ljg3NTItNjYuODYxMS02Ni43NTI1LTY2Ljg2MTEtMzYuODU0OCAwLTY2Ljc1MjUgMjkuOTM5Ny02Ni43NTI1IDY2Ljg2MTFDMjAwLjM1NTggNjE2LjI0MjIgMjMwLjI1MjUgNjQ2LjE4MTkgMjY3LjEwODQgNjQ2LjE4MTl6TTUxMS41NDg0IDY0Ni4xODE5YzM2Ljg1NTggMCA2Ni43NTI1LTI5LjkzOTcgNjYuNzUyNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTU3LTY2Ljg2MTEtNjYuNzUyNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzQ0NC43OTU5IDYxNi4yNDIyIDQ3NC42NzExIDY0Ni4xODE5IDUxMS41NDg0IDY0Ni4xODE5ek0yNjUuOTE2NCA4OTAuNzA5YzM2Ljg3NzMgMCA2Ni43NTE1LTI5LjkzOTcgNjYuNzUxNS02Ni44NjExIDAtMzYuOTQyOC0yOS44NzQyLTY2Ljg4MjYtNjYuNzUxNS02Ni44ODI2LTM2Ljg1NTggMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44ODI2QzE5OS4xNjM5IDg2MC43NjkzIDIyOS4wNTk2IDg5MC43MDkgMjY1LjkxNjQgODkwLjcwOXpNNTExLjU0ODQgODkwLjcwOWMzNi44NTU4IDAgNjYuNzUyNS0yOS45Mzk3IDY2Ljc1MjUtNjYuODYxMSAwLTM2Ljk0MjgtMjkuODk1Ny02Ni44ODI2LTY2Ljc1MjUtNjYuODgyNi0zNi44NzczIDAtNjYuNzUyNSAyOS45Mzk3LTY2Ljc1MjUgNjYuODgyNkM0NDQuNzk1OSA4NjAuNzY5MyA0NzQuNjcxMSA4OTAuNzA5IDUxMS41NDg0IDg5MC43MDl6TTc1NS42NDEzIDY0Ni4xODE5YzM2Ljg1NjggMCA2Ni43NTM1LTI5LjkzOTcgNjYuNzUzNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTY3LTY2Ljg2MTEtNjYuNzUzNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzY4OC44ODk5IDYxNi4yNDIyIDcxOC43NjQgNjQ2LjE4MTkgNzU1LjY0MTMgNjQ2LjE4MTl6TTMxMS43MDM2IDI5MC42OTcyYzI0LjI4MTEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTQ0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMTYgMC00My45ODkgMTkuNzI4NC00My45ODkgNDQuMDUzNXYyMDAuMTA0OTZDMjY3LjcxNDYgMjcwLjk5MDMgMjg3LjQwMiAyOTAuNjk3MiAzMTEuNzAzNiAyOTAuNjk3MnoiIGZpbGw9IiM1ZTdhODgiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==)
    no-repeat 7px 5px;
  padding-left: 36px;
  color: #666;
}

/*transition*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}
/*下拉框*/
.calendar-dropdown {
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
  z-index: 999;
}
.calendar-dropdown:before {
  position: absolute;
  left: 30px;
  top: -10px;
  content: "";
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #dedede;
}
.calendar-dropdown:after {
  position: absolute;
  left: 30px;
  top: -9px;
  content: "";
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.calendar-dialog-mask {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
}

.calendar-dialog-body {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.mint-button--default {
  color: #fff;
}
</style>
