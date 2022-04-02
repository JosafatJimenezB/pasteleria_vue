<template>
  <div>
      <nav-menu />
      <pedidos />
      <final />
  </div>
</template>

<script>
import pedidos from '../components/pedidoSection.vue';
import final from '../components/footCreador.vue';

export default{
    name: "app",
    components: {
        pedidos,
        final
    },
};
</script>