<template lang="pug">
.h-screen.pt-10
  .flex.max-w-sm.mx-auto.p-6.rounded-lg.rounded-full.bg-emerald-700 
    .flex-shrink-0
      img.h-12.w-12(src="../assets/logo.png")
    .ml-6
      h4.text-center.text-xl.text-gray-900.leading-tight.font-serif.hover_text-cyan-500.divide-x-2.divide-green-500 ChitChat
      p.text-base.text-gray-600.leading-normal You have a message!
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
</style>
