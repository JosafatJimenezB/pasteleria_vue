<template>
  <div>
      <nav-menu />
      <pastel />
      <final />
  </div>
</template>

<script>
import pastel from '../components/pasteleriaSection.vue';
import final from '../components/footCreador.vue';

export default{
    name: "app",
    components: {
        pastel,
        final
    },
};
</script>

