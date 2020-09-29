<template>
  <div :class="{'hover:shadow-xl': isClickable}" class="rounded-lg p-5 shadow-lg transition-shadow duration-100">
    <div v-if="logo" class="w-2/12 rounded-lg mb-2">
      <img :src="logo" alt="logo" class="w-full">
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    isClickable: {
      type: Boolean,
      default: false,
    },
    logo: {
      type: String,
      required: false,
    },
  },
});
</script>
