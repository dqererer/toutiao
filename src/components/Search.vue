<template>
  <transition name="fade">
    <div class="search layout" v-if="$store.state.showComponent.search.isShow">
      <Back componentName="search"></Back>
      <p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p>
      <p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p><p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p><p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p><p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p><p>
        rfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkkaedsdfrfkkkkkkkkk
      </p>
      
    </div>
  </transition>
</template>

<script>
import Back from './Back';
export default {
  name: 'Search',
  components:{
    Back,
  },
  created: function(){
    // alert(this.$store.state.count);
  },
  methods:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  /* transform: translateX(0);  */
  transition: all .1s ease-out;
}
.fade-leave-active {
  transition: all .1s ease;
}
.fade-enter
/* .fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1rem);
}
</style>
