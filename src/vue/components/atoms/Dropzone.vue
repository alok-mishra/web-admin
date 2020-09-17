<template>
  <div v-on="events" class="dropzone" :class="{ dragging }">
    <slot>
      <span class="text-h4">{{ label }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

export default defineComponent({

  props: {
    label: {
      type: String,
      default: () => 'Drop files',
    },
  },

  setup(_props, { emit }) {
    const count = ref(0);
    const dragging = computed(() => Boolean(count.value));

    const dragenter = ($event: DragEvent) => {
      count.value++;
      $event.preventDefault();
      emit('dragenter', $event);
    };

    const dragleave = ($event: DragEvent) => {
      $event.preventDefault();
      count.value--;
      emit('dragleave', $event);
    };

    const dragend = ($event: DragEvent) => {
      $event.preventDefault();
      emit('dragend', $event);
    };

    const dragover = ($event: DragEvent) => {
      $event.preventDefault();
      emit('dragover', $event);
    };

    const drop = async ($event: DragEvent) => {
      $event.preventDefault();
      count.value = 0;
      emit('drop', $event);
    };

    return {
      dragging,
      events: {
        dragenter,
        dragleave,
        dragend,
        dragover,
        drop,
      },
    };
  },
});
</script>
<style scoped>
.dropzone {
  border: 1px solid #c9c9c9;
  padding: 15px;
  transition: all 1s;
}

.dragging {
  background-color: #f1f1f1;
  border-color: black;
}
</style>