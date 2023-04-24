<template>
    <div v-motion-fade-visible class="section">
        <div class="oval"></div>
        <h3 v-bind:id="titleText">{{ titleText }}</h3>
    </div>
</template>
  
<script>
export default {
    name: "SectionTitle",
    props: ["titleText"]
};
</script>
  
<style scoped>
.section {
    display: flex;
    align-items: center;
    margin-bottom: 5%;
}

.oval {
    width: 30px;
    height: 15px;
    border-radius: 50%;
    background-color: black;
    margin-right: 30px;
}

@media only screen and (max-width: 768px) {
    .oval {
        width: 20px;
        height: 10px;
        margin-right: 20px;
    }
}
</style>