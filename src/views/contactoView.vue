<template>
  <div>
      <nav-menu />
      <contacto />
      <final />
  </div>
</template>

<script>
import contacto from '../components/contactoSection.vue';
import final from '../components/footCreador.vue';

export default{
    name: "app",
    components: {
        contacto,
        final
    },
};
</script>

