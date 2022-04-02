<template>
  <div>
      <nav-menu />
      <adornos />
      <final />
  </div>
</template>

<script>
import adornos from '../components/adornosSection.vue';
import final from '../components/footCreador.vue';

export default{
    name: "app",
    components: {
        adornos,
        final
    },
};
</script>

