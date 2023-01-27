<template>
    <div id="loading">
        <img src="/PL-logo.svg" />
        <!-- <div class="ovalLoad"></div> -->
    </div>
</template>
  
<script>
export default {
    name: "Loading"
};
</script>

<style scoped>
#loading {
    position: absolute;
    z-index: 10;
    background-color: var(--theme-color);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade 0.5s ease-in 2s;
}

@keyframes fade {
    0% {
        opacity: 100%;

    }

    100% {
        opacity: 0;
    }
}

img {
    height: 100px;
    width: 100px;
    animation: 1s linear fadeIn, 0.5s ease-out 2s fadeOut;
}

@keyframes fadeIn {
    0% {
        /* transform: rotate(0deg) scaleX(1) scaleY(1); */
        opacity: 0%;
    }

    100% {
        /* transform: rotate(180deg) scaleX(0.5) scaleY(2); */
        opacity: 100%;
    }
}

@keyframes squish {
    0% {
        transform: scaleX(1) scaleY(1);
        opacity: 100%;
    }

    100% {
        transform: scaleX(2) scaleY(0);
        opacity: 0%;
    }
}

@keyframes fadeOut {
    0% {
        /* transform: rotate(0deg) scaleX(1) scaleY(1); */
        opacity: 100%;
    }

    100% {
        /* transform: rotate(180deg) scaleX(0.5) scaleY(2); */
        opacity: 0%;
    }
}

.ovalLoad {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: white;
    background-size: cover;
    animation: load 2.25s ease-out 0.25s;
    background: conic-gradient(from 0, var(--theme-color),
            rgba(0, 0, 0, 0.3));
}

@keyframes load {
    0% {
        transform: rotate(0deg) scaleX(1) scaleY(1);
        opacity: 100%;
    }

    100% {
        transform: rotate(180deg) scaleX(0.5) scaleY(2);
        opacity: 0;
    }
}
</style>