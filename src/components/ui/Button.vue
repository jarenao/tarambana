<template>
  <button
    :class="[
      'font-semibold focus:outline-none focus:ring transition duration-300',
      sizeClasses,
      colorClasses,
      isFullWidth ? 'w-full' : '',
      isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
    ]"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
/**Ej Uso
 *  <Button label="Primary Button" color="primary" size="md" @click="handleClick" />
    <Button label="Secondary Button" color="secondary" size="lg" :isFullWidth="true" />
    <Button label="Danger Button" color="danger" size="sm" :isDisabled="true" />
    <Button color="primary" size="md">Custom Slot Content</Button>
 */
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value) // Validación
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value) // Validación
  },
  isFullWidth: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

// Emitir evento de clic
const emit = defineEmits(['click'])
function handleClick(event) {
  if (!props.isDisabled) emit('click', event)
}

const sizeClasses = computed(() => {
  return (
    {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg'
    }[props.size] || 'px-4 py-2 text-base'
  ) // Valor por defecto
})

const colorClasses = computed(() => {
  return (
    {
      primary: 'bg-primary text-white focus:ring-blue-300',
      secondary: 'bg-secondary text-white focus:ring-gray-300',
      danger: 'bg-red-500 text-white focus:ring-red-300'
    }[props.color] || 'bg-primary text-white focus:ring-blue-300'
  ) // Valor por defecto
})
</script>
