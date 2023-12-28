<template>
  <div>{{ formatNumber(counterValue) }}</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  props: {
    counter: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const counterValue = ref(0)
    let targetNumber = props.counter
    const duration = 1000

    let startTime = null
    let rafId = null

    const startCount = () => {
      startTime = Date.now()
      rafId = requestAnimationFrame(updateCount)
    }

    const formatNumber = (value) => {
      const formattedNumber = new Intl.NumberFormat().format(value)
      return formattedNumber
    }

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentValue = Math.floor(progress * targetNumber)
        counterValue.value = currentValue
        rafId = requestAnimationFrame(updateCount)
      } else {
        counterValue.value = targetNumber
      }
    }

    onMounted(() => {
      startCount()
    })

    watch(
      () => props.counter,
      (newValue) => {
        // Update the targetNumber and start the count
        targetNumber = newValue
        startCount()
      }
    )

    return {
      counterValue,
      formatNumber
    }
  }
}
</script>
