<template>
  <div>
    <ApresentationVue />
    <VForm>
      <QuestionBox1Identification v-if="QuestionBox === 1" />
      <QuestionBox2FacialHourVisitor v-if="QuestionBox === 2" />
      <QuestionBox3FacialHourEmployee v-if="QuestionBox === 3" />

      <div class="button-div">
        <button
          class="btn btn-secondary"
          @click.prevent="preveousQuestion(QuestionBox)"
          v-if="QuestionBox > 1"
        >
          Voltar
        </button>
        <p v-if="QuestionBox < 1"></p>
        <button
          class="btn btn-success"
          @click.prevent="nextQuestion(QuestionBox)"
        >
          Próxino
        </button>
      </div>
    </VForm>
  </div>
</template>
<script>
import ApresentationVue from './ApresentationVue.vue'
import QuestionBox1Identification from './QuestionBox1Identification.vue'
import QuestionBox2FacialHourVisitor from './QuestionBox2FacialHourVisitor.vue'
import QuestionBox3FacialHourEmployee from './QuestionBox3FacialHourEmployee.vue'

export default {
  data() {
    return {
      QuestionBox: 1
    }
  },

  components: {
    ApresentationVue,
    QuestionBox1Identification,
    QuestionBox2FacialHourVisitor,
    QuestionBox3FacialHourEmployee
  },
  methods: {
    nextQuestion(data) {
      this.QuestionBox = data + 1
    },
    preveousQuestion(data) {
      this.QuestionBox = data - 1
    }
  },
  watch: {
    QuestionBox(newValue) {
      console.log(newValue)
    }
  }
}
</script>
<style scoped>
.button-div {
  display: flex;
  justify-content: space-around;
}
</style>
