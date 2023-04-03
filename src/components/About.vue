
<template>
    <div v-motion :initial="{ opacity: 0, y: 25 }" :visible="{ opacity: 1, y: 0 }" class="about">
        <div class="picture_section">
            <div class="my_picture"></div>
        </div>
        <div class="about_description">
            <p>Greetings! I'm Phoenix, and I'm deeply interested in the interaction between people and technology,
                particularly the mechanics behind the digital worlds we encounter every day.
                <br />
                <br />
                Despite my unconventional
                background, transitioning from industrial design to experiential design and now to development, I have
                gained invaluable skills and insights that inform my work. <b>My goal is to bridge my knowledge of code and
                    design to create user-centered products and experiences that are both functional and beautiful.</b>
                <br />
                <br />
                As I finish my
                final semester, I'm excited to explore the endless possibilities of coding, where creativity has no bounds
                and there is always more to learn.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
};
</script>

<style scoped>
.about_description,
.picture_section {
    width: 50%;
}

.my_picture {
    background-image: url("/assets/images/about-picBW.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 95%;
    height: 390px;
    position: absolute;
    top: -20px;
    right: -20px;
    /* background-color: aqua; */
}

.my_picture::after {
    background-color: var(--theme-color);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    /* mix-blend-mode: darken; */
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
}

.picture_section {
    background: conic-gradient(from 45deg, var(--theme-color),
            rgba(0, 0, 0, 0.2), var(--theme-color)) fixed;
    /* background: linear-gradient(192deg, rgba(0, 0, 0, 0.6726296958855098) 7%, rgba(0, 0, 0, 0.39534883720930236) 13%, rgba(0, 0, 0, 0.6565295169946332) 21%, rgba(0, 0, 0, 0.527363184079602) 27%, rgba(0, 0, 0, 0.2064676616915423) 32%, rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0.7860696517412935) 51%, rgba(0, 0, 0, 0.3881932021466905) 58%, rgba(0, 0, 0, 0.6815742397137746) 63%, rgba(0, 0, 0, 0.8318425760286225) 73%, rgba(0, 0, 0, 0.1753130590339893) 78%) fixed; */
    height: 400px;
    position: relative;
}

.about {
    display: flex;
    align-items: start;
    padding: 5%;
    gap: 10%;
    margin-top: 5%;
}

@media only screen and (max-width: 768px) {
    .my_picture {
        height: 290px;
    }

    .picture_section {
        height: 300px;
        width: 250px;
        margin: 5%;
    }

    .about_description {
        width: 100%;
    }

    .about {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
}
</style>