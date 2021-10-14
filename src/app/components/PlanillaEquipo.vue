<template>
  <div>
    <equipos @comenzoPartido="showPlanilla = true"></equipos>
    <div>
      <planilla v-if="showPlanilla"></planilla>
    </div>
  </div>
</template>

<script>
import Planilla from './../components/Planilla.vue';
import Equipos from './../components/Equipos.vue';



export default {
  data() {
    return {
      showPlanilla: false
    };
  },
  components: {
    Planilla,
    Equipos
  },
  name: "PlanillaEquipo"
}
</script>

<style scoped>

</style>