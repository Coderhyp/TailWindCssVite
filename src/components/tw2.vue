<template>
  <div>
    <div class="text-red-500 text-2xl">content1</div>
    <div class="text-green-500 text-2xl">content2</div>
    <div class="text-blue-500 text-2xl">content3</div>
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

