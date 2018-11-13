<template>
  <div>
    <subcom :msg="id"></subcom>
  </div>
</template>


<script>
import subcom from "./../subcom/subcom.vue";
export default {
  components: {
    subcom
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created() {}
};
</script>


<style scoped>

</style>
