<template>
  <div>
    <h1>invés de column, usar row</h1>
  </div>
</template>
<script>
import { useField } from 'vee-validate'
export default {
  setup() {
    const { value: selectedFacialWeekHourEntry } = useField(
      'facialweekHourEntry'
    )

    const { value: selectedFacialWeekHourNotEntry } = useField(
      'facialweekHourNotEntry'
    )

    const selectOptionsEntry = [
      { value: 'hour1', text: '6 Horas' },
      { value: 'hour2', text: '12 Horas' },
      { value: 'hour3', text: '18 Horas' },
      { value: 'hour4', text: '24 Horas' },
      { value: 'hour5', text: '30 Horas' },
      { value: 'hour6', text: '36 Horas' },
      { value: 'hour7', text: '48 Horas' },
      { value: 'hour8', text: '72 Horas' }
    ]

    const selectOptionsNotEntry = selectOptionsEntry

    return {
      selectedFacialWeekHourEntry,
      selectOptionsEntry,
      selectedFacialWeekHourNotEntry,
      selectOptionsNotEntry
    }
  }
}
</script>
<style></style>
