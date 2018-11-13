<template>
<div>
    <div class="numbox">
        <div class="num" @click="sub">-</div>
        <div class="num" v-text="count"></div>
        <div class="num" @click="add">+</div>
    </div>
</div>
  
</template>


<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  methods: {
    setCount: function() {
      this.$emit("data", this.count);
    },
    sub: function() {
      this.count--;
      if (this.count < 1) {
        this.count = 1;
      }
      this.setCount();
    },
    add: function() {
      this.count++;
      this.setCount();
    }
  },
  created() {}
};
</script>


<style scoped>
.num {
    border: 1px solid  #000;
    width: 40px;
    height: 30px;
    display: inline-block;
     text-align: center;
    line-height: 30px; 
}

</style>
