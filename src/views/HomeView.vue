<template>
    <div>
        <nav-menu />
        <landing />
    </div>
</template>

<script>
import landing from '../components/LandingPage.vue';

export default{
    name: "app",
    components: {
        landing,
    },
};
</script>
<style>
</style>