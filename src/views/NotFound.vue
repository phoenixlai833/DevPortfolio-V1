<script setup>
import FilledButton from '../components/FilledButton.vue';
</script>

<template>
    <div class="center">
        <h2>Sorry, this page does not exist!</h2>
        <RouterLink to="/">
            <FilledButton buttonText="Back to Home" />
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: "NotFound"
};
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
}

@media only screen and (max-width: 768px) {
    h2 {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

}
</style>