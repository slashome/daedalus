<template>
  <button
    class="base-btn"
    :class="[`base-btn--${variant}`, { 'base-btn--loading': loading }]"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  loading?: boolean
  disabled?: boolean
}>()
defineEmits<{ click: [e: MouseEvent] }>()
</script>

<style scoped>
.base-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.2s;
}
.base-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.base-btn--primary { background: #2563eb; color: white; }
.base-btn--primary:hover:not(:disabled) { background: #1d4ed8; }
.base-btn--secondary { background: #e5e7eb; color: #374151; }
.base-btn--secondary:hover:not(:disabled) { background: #d1d5db; }
.base-btn--danger { background: #ef4444; color: white; }
.base-btn--danger:hover:not(:disabled) { background: #dc2626; }
</style>
