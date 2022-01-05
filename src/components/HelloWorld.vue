<script setup lang="ts">
import { ref } from 'vue';
import { used } from '../tree-shaking1';
import * as tree from '../tree-shaking2';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  {{ used() }}
  {{ tree.used2() }}
</template>
