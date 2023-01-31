<script setup>
</script>

<template>
    <div id="Home">
        <div class="home_s1">
            <div class="home_s1_left">
                <div class="name_block">
                    <span class="my_name">PHOENIX</span>
                    <div class="name_bottom">
                        <span class="my_name">LAI</span> <span class="my_title">Designer & Developer</span>
                    </div>
                </div>
                <div class="small_name_block">
                    <span class="small_my_name">PHOENIX LAI</span>
                    <span class="small_my_title">Designer & Developer</span>
                </div>
            </div>
            <div class="home_s1_right">
                <div class="circle_one"></div>
            </div>
        </div>
        <div class="home_s2">
            <div class="home_s2_left">
                <div class="circle_two"></div>
            </div>
            <div class="home_s2_right">
                <div class="sloganContainer">
                    <span class="slogan">I love to break and build things.</span>
                    <h3>Welcome, I am a full-stack web developer and experiential designer with a focus on
                        front-end development.</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
};
</script>

<style scoped>
.slogan {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    font-size: 5rem;
}

.home_s1,
.home_s2 {
    display: flex;
}

.home_s1_left {
    width: 50%;
    padding: 3% 0 0 0;
}

.name_block {
    width: 560px;
}

.small_name_block {
    display: none;
}

.small_my_name {
    font-family: "Kozuka-Mincho-Pro-L.ttf", serif;
    font-size: 13vw;
    line-height: 10vw;
}

.small_my_title {
    font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
    font-size: 4vw;
}

.my_name {
    font-family: "Kozuka-Mincho-Pro-L.ttf", serif;
    font-size: 12.8rem;
    line-height: 100px;
}

.name_bottom {
    display: flex;
    justify-content: space-between;
}

.my_title {
    font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
    font-size: 2.4rem;
}

.home_s1_right {
    width: 50%;
    display: flex;
    justify-content: end;
}

.home_s2_left {
    width: 50%;
    display: flex;
    justify-content: start;
}

.circle_two {
    position: absolute;
    top: -40px;
    left: -50px;
    width: 600px;
    height: 200px;
    border-radius: 50%;
    background-size: cover;
    animation: morph2 10s ease infinite alternate;
    opacity: 30%;
    background: linear-gradient(189deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 21%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.13774152208201895) 48%, rgba(0, 0, 0, 0) 63%, rgba(0, 0, 0, 0.1787509858044164) 71%);
}

@keyframes morph2 {
    0% {
        transform: rotate(20deg) translate(-200px, 50%) scaleX(1) scaleY(0.25);
        /* opacity: 0%; */
    }

    100% {
        transform: rotate(10deg) translate(-200px, 50%) scaleX(0) scaleY(1.25);
    }
}

.circle_one {
    position: absolute;
    top: -15px;
    width: 400px;
    height: 200px;
    border-radius: 50%;
    background-size: cover;
    animation: morph1 9s ease infinite alternate;
    background: linear-gradient(192deg, rgba(0, 0, 0, 0.3071822478991597) 7%, rgba(0, 0, 0, 0) 26%, rgba(0, 0, 0, 0.16152398459383754) 62%, rgba(0, 0, 0, 0.5004595588235294) 93%, rgba(0, 0, 0, 0) 110%);
    opacity: 30%;
}

@keyframes morph1 {
    0% {
        transform: rotate(110deg) translate(-100px, -10%) scaleX(0) scaleY(1);
        /* opacity: 0%; */
    }

    100% {
        transform: rotate(120deg) translate(-100px, -10%) scaleX(1) scaleY(0);
    }
}


.home_s2 {
    margin-top: 10vw;
}

.home_s2_right {
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .slogan {
        font-size: 4rem;
    }

    .circle_two {
        top: -25px;
        width: 500px;
        height: 100px;
    }

    .circle_one {
        width: 300px;
        height: 100px;
        top: 10px;
        right: -100px;
    }

    .home_s1 {
        display: flex;
        flex-direction: column;
    }

    .home_s1_left {
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .home_s1_right {
        height: 75px;
    }

    .name_block {
        width: 100%;
    }

    .small_name_block {
        display: flex;
        flex-direction: column;
    }

    .home_s1_right {
        width: 100%;
    }

    .name_block {
        display: none;
    }

    .home_s2 {
        display: flex;
        flex-direction: column-reverse;
    }

    .home_s2_right {
        width: 100%;
        padding-bottom: 10vw;
    }
}
</style>