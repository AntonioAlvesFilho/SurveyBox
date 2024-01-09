<template>
  <div>
    <div>
      <label for="facialVisitorHourEntry"
        >Quantidade de horas para remoção de visitante do reconhecimento facial
        após entrar. Selecione a opção desejada:</label
      >
      <div class="form-floating mb-3 align-center">
        <VField
          name="facialVisitorHourEntry"
          rules="required"
          v-model="selectedFacialVisitorHourEntry"
          as="select"
          class="form-control"
          id="facialVisitorHourEntrySelect"
        >
          <option value="" disabled>Selecione uma quantidade de Horas</option>
          <option
            v-for="option in selectOptionsEntry"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </VField>
        <ErrorMessage
          class="errorText"
          name="facialVisitorHourEntry"
        ></ErrorMessage>
      </div>
    </div>

    <div>
      <label for="facialVisitorHourNotEntry"
        >Quantidade de horas para remoção de visitante do reconhecimento facial
        caso seja autorizado mas não entre. Selecione a opção desejada:</label
      >
      <div class="form-floating mb-3 align-center">
        <VField
          name="facialVisitorHourNotEntry"
          rules="required"
          v-model="selectedFacialVisitorHourNotEntry"
          as="select"
          class="form-control"
          id="facialVisitorHourNotEntrySelect"
        >
          <option value="" disabled>Selecione uma quantidade de Horas</option>
          <option
            v-for="option in selectOptionsNotEntry"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </VField>
        <ErrorMessage
          class="errorText"
          name="facialVisitorHourNotEntry"
        ></ErrorMessage>
      </div>
    </div>
  </div>
</template>
<script>
import { useField } from 'vee-validate'
export default {
  setup() {
    const { value: selectedFacialVisitorHourEntry } = useField(
      'facialVisitorHourEntry'
    )

    const { value: selectedFacialVisitorHourNotEntry } = useField(
      'facialVisitorHourNotEntry'
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
      selectedFacialVisitorHourEntry,
      selectOptionsEntry,
      selectedFacialVisitorHourNotEntry,
      selectOptionsNotEntry
    }
  }
}
</script>
<style></style>
