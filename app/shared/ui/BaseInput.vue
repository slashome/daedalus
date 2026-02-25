<template>
  <div class="base-input-wrapper">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      class="base-input"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
  label?: string
  placeholder?: string
}>()
defineEmits<{ 'update:modelValue': [value: string] }>()
const inputId = `input-${Math.random().toString(36).slice(2)}`
</script>

<style scoped>
.base-input-wrapper { display: flex; flex-direction: column; gap: 0.25rem; }
label { font-size: 0.85rem; font-weight: 500; color: #374151; }
.base-input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}
.base-input:focus { border-color: #2563eb; }
</style>
