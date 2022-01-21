<template>
  <div class="container mx-auto w-auto">
    <img
      src="https://www.apple.com/v/macbook-air/j/images/overview/hero_endframe__ea0qze85eyi6_large.jpg"
      class="rounded-lg"
    />
    <div class="sm_flex flex-wrap overflow-hidden">
      <div class="sm_w-1/2  lg_1/4 content">
        <h2 class="text-4xl">Best practices don’t actually work.</h2>
        <p>
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
      <div class="sm_w-1/2 lg_1/4 border rounded-lg border-solid border-slate-600 mt-1 hover_bg-emerald-800 hover_text-slate-100">
        <h2 class="text-4xl">Best practices don’t actually work.</h2>
        <p>
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
      <div class="sm_w-1/2 lg_1/4 border rounded-lg border-solid border-slate-600 mt-1 hover_bg-emerald-800 hover_text-slate-100">
        <h2 class="text-4xl">Best practices don’t actually work.</h2>
        <p>
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
      <div class="sm_w-1/2 lg_1/4 border rounded-lg border-solid border-slate-600 mt-1 hover_bg-emerald-800 hover_text-slate-100">
        <h2 class="text-4xl">Best practices don’t actually work.</h2>
        <p>
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
      </div>
    </div>
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
</style>
