<template>
  <div class="contain">
    <div>
      <SurveyBoxVue />
    </div>
  </div>
</template>

<script>
import SurveyBoxVue from '@/components/SurveyBoxVue.vue'
export default {
  name: 'HomeView',
  components: { SurveyBoxVue }
}
</script>

<style scoped>
.contain {
  width: auto;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
