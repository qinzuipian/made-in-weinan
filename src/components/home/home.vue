<template>
 <div>	<!-- 轮播图展示 -->
		<mt-swipe :auto="2000">
			<mt-swipe-item><img src="../../../statics/imgs/swip1.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip2.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip3.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip4.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip5.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip6.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../../statics/imgs/swip7.jpg" alt=""></mt-swipe-item>
       </mt-swipe>
       <grid  
            :draggable="true"
            :sortable="true"
            :items="items"
            :height="100"
            :width="100">
            <template slot="cell" scope="props">
                <div class="icon">{{props.item}}</div>
            </template>
        </grid>
 </div>
</template>


<script>
export default {
    data(){
        return {
          items: [ '以人为本','展现文化','贴近实际','贴近群众']
        }

    },
    methods:{

    },
    created(){

    }
  
}
</script>


<style scoped>
.mint-swipe {
  margin-top: 40px;
  height: 260px;
}
.mint-swipe-item {
  background-color: #ff0;
  height: 260px;
}
.mint-swipe-item img {
    width: 100%;
    height: 260px;
}
.icon {
    position: relative;
    background-color: transparent;
    margin: 20px;
    width: 60px;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0,0,0,.7);
    font-weight: 900;
    font-size: 40px;
    font-family: serif;
    line-height: 66px;
    text-align: center;
    transition: all .3s;
    cursor: pointer;
    color: #fff;
    z-index: 999;
    background-image: url(../../../statics/imgs/bj1.jpg);
}

</style>
