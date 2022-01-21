<template>
  <div>
    <div class="cont1 fontsize">content1</div>
    <div class="cont2 fontsize">content2</div>
    <div class="cont3 fontsize">content3</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>


<style scoped>
.cont1 {
  color: red;
}
.cont2 {
  color: green;
}
.cont3 {
  color: blue;
}
.fontsize {
    font-size: 24px;
}
</style>