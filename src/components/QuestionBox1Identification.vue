<template>
  <div>
    <label for="name">Qual é o seu Nome?</label>
    <div class="form-floating mb-3 align-center">
      <VField
        name="name"
        rules="required|alpha_spaces"
        v-model="name"
        type="text"
        class="form-control"
        id="floatingName"
        placeholder="Horacio"
      />
      <ErrorMessage class="errorText" name="name"></ErrorMessage>
    </div>
  </div>

  <div>
    <label for="owner">Você é o responsável?</label>
    <div class="form-floating mb-3 align-center">
      <VField name="owner" type="radio" value="yes" /> Sim
      <VField name="owner" type="radio" value="no" /> Não
      <ErrorMessage class="errorText" name="owner"></ErrorMessage>
    </div>
  </div>

  <div>
    <label for="condominiumName">Qual é o nome do Condomínio?</label>
    <div class="form-floating mb-3 align-center">
      <VField
        name="condominiumName"
        rules="required|alpha_spaces"
        v-model="condominiumName"
        type="text"
        class="form-control"
        id="floatingcondominiumName"
      />
      <ErrorMessage class="errorText" name="condominiumName"></ErrorMessage>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
