<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import Layout from '~/src/vue/layouts/Layout.vue';


export default defineComponent({

  components: {
    Layout,
  },
});
</script>
