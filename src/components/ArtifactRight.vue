<script setup>
</script>

<template>
    <div id="ArtifactRight">
    <div v-motion-fade class="hero_image" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
    </div>
    <!-- <div class="img-wrapper">
                                                                                                                                                                                                                                                                                            <div id="prjPhoto" class="hero_image" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                        </div> -->
        <div v-motion-fade class="link_icons">
            <h4 v-if="inProgress">In-progress</h4>
            <a v-if="githubLink" :href="githubLink" target="_blank"> <img class="social"
                    src="/assets/icons/github.svg" /></a>
            <a v-if="siteLink" :href="siteLink" target="_blank"><img class="social" src="/assets/icons/eye.svg" /></a>
        </div>
        <div class="context">
            <h4>Context</h4>

            <div class="context_description">
                <p>{{ context }}</p>
                <div class="context_tech">
                    <span class="tech" v-for="tech in technologies">
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>
        <div v-motion-fade-visible class="demo_video">
            <iframe width="100%" height="100%" :src="demoVideo" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                                    </iframe> -->
        </div>
        <div v-motion-fade-visible v-if="challengeBig && challengeSmall" class="challenge">
            <h4>Solution</h4>
            <div class="challenge_description">
                <p class="overviews">{{ challengeBig }}</p>
                <p>{{ challengeSmall }}</p>
            </div>
        </div>
        <hr v-motion-fade-visible v-if="challengeBig && challengeSmall && solutionBig && solutionSmall">
        <div v-motion-fade-visible v-if="solutionBig && solutionSmall" class="solution">
            <h4>Challenges</h4>
            <div class="solution_description">
                <p class="overviews">{{ solutionBig }}</p>
                <p>{{ solutionSmall }}</p>
            </div>
        </div>
        <div v-motion-fade-visible v-if="img1 && img2 && img3 && img4" class="image_gallery">
            <div class="image_row">
                <div class="img1" :style="{ backgroundImage: 'url(' + img1 + ')' }"></div>
                <div class="img2" :style="{ backgroundImage: 'url(' + img2 + ')' }"></div>
                <div class="img3" :style="{ backgroundImage: 'url(' + img3 + ')' }"></div>
            </div>
            <div class="img3_small" :style="{ backgroundImage: 'url(' + img3 + ')' }"></div>
            <div class="img4" :style="{ backgroundImage: 'url(' + img4 + ')' }"></div>
        </div>
        <div v-motion-fade-visible v-if="takeawaysBig && takeawaysSmall" class="takeaways">
            <h4>Takeaways</h4>
            <div class="takeaways_description">
                <p class="overviews">{{ takeawaysBig }}</p>
                <p>{{ takeawaysSmall }}</p>
            </div>
        </div>
        <div v-motion-fade-visible v-if="niceToHaves" class="nicetohaves">
            <h4>Nice To Haves</h4>
            <div class="nicetohaves_description">
                <p>{{ niceToHaves }}</p>
        </div>
    </div>
    <!-- <hr>
        <div class="seemore">
            <h4>See More</h4>
            <div class="seemore_description">
                <p class="overviews">LocalToMe is a web application that allows users to search for local businesses and
                    events. Users can
                    also create an account to save their favorite businesses and events.</p>
            </div>
            <div class="seemore_projects">
                <div class="img-wrapper">
                    <div class="prj1" :style="{ backgroundImage: 'url(' + prj1 + ')' }"></div>
                    <div class="seemore_projects_title">Innota</div>
                </div>
                <div class="img-wrapper">
                    <div class="prj2" :style="{ backgroundImage: 'url(' + prj2 + ')' }"></div>
                </div>
                <div class="img-wrapper">
                    <div class="prj3" :style="{ backgroundImage: 'url(' + prj3 + ')' }"></div>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div> -->
    </div>
</template>

<script>
export default {
    name: "ArtifactRight",
    props: [
        "heroImage",
        "inProgress",
        "githubLink",
        "siteLink",
        "context",
        "technologies",
        "demoVideo",
        "challengeBig",
        "challengeSmall",
        "solutionBig",
        "solutionSmall",
        "img1",
        "img2",
        "img3",
        "img4",
        "takeawaysBig",
        "takeawaysSmall",
        "niceToHaves",
        "prj1",
        "prj2",
        "prj3"],
    methods: {
        openLink(link) {
            window.open(link, "_blank");
        }
    }
};
</script>

<style scoped>

#ArtifactRight {
    /* background-color: aqua; */
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    /* scrollbar-color: red yellow; */
}

.seemore_projects_title {
    z-index: -1;
}

.img-wrapper {
    background-color: var(--theme-color);
    width: 100%;
    height: 20vh;
    margin-top: 2%;
}

.prj1,
.prj2,
.prj3 {
    position: absolute;
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
    width: 100%;
    height: 20vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-color: black; */
    transition: all 0.3s ease-in-out;
}

.img-wrapper:hover .prj1,
.img-wrapper:hover .prj2,
.img-wrapper:hover .prj3 {
    /* filter: grayscale(0%) contrast(1);
    mix-blend-mode: normal; */
    opacity: 0%;
}

.seemore h4 {
    margin: 8% 0 2% 0;
}

.seemore {
    text-align: center;
}

.image_row,
.seemore_projects {
    display: flex;
    justify-content: space-between;
    gap: 2%;
}

.img1,
.img2,
.img3 {
    width: 100%;
    height: 20vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.img3_small {
    display: none;
}

.img4,
.img3_small {
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 2%;
}

hr {
    width: 15%;
    margin: 0 auto;
    border: 0.5px solid black;
}

.demo_video {
    width: 100%;
    height: 50vh;
    /* background-color: black; */
    /* opacity: 25%; */
}

.tech {
    font-family: "Lato-regular", Avenir, Helvetica, Arial, sans-serif;
    font-size: 2rem;
    opacity: 25%;
    margin-right: 5%;
}

.context_tech {
    margin-top: 2%;
}

.context_description,
.challenge_description,
.solution_description,
.takeaways_description,
.nicetohaves_description {
    width: 80%
}

.context,
.challenge,
.solution,
.takeaways {
    display: flex;
    justify-content: space-between;
    margin: 8% 0;
}

.nicetohaves {
    display: flex;
    justify-content: space-between;
    margin-top: 8%;
}

p.overviews {
    font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
    margin-bottom: 2%;
}

/* h4 {
    margin-bottom: 0%;
} */

.social {
    height: 20px;
    margin-left: 30px;
    transition: all 0.3s ease-in-out;
}

.link_icons {
    display: flex;
    justify-content: flex-end;
    margin: 2% 0 2% 0;
}

.hero_image {
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


@media screen and (max-width: 900px) {

    .img4,
    .img3_small {
        width: 100%;
        height: 25vh;
        margin-top: 2%;
        display: block;
    }

    .img3 {
        display: none;
    }

    .img1,
    .img2 {
        height: 20vh;
    }

    hr {
        width: 25%;
    }

    .demo_video {
        height: 30vh;
    }

    .context_description,
    .challenge_description,
    .solution_description,
    .takeaways_description,
    .nicetohaves_description {
        width: 100%
    }

    .context,
    .challenge,
    .solution,
    .takeaways {
        display: block;
        margin: 12% 0;
    }

    .nicetohaves {
        display: block;
        margin-top: 12%;
    }

    p.overviews {
        font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
        /* font-size: 2.5rem; */
        font-size: 2rem;
    }

    .tech {
        font-size: 1.8rem;
    }

    h4 {
        margin-bottom: 2%;
    }

    .link_icons {
        margin: 5% 0 5% 0;
    }

    .img-wrapper,
    .hero_image {
        height: 30vh;
    }

    #ArtifactRight {
        width: 100%;
        height: 100%;
        padding-bottom: 10%;
    }
}

@media only screen and (min-width: 1400px) {
    #ArtifactRight {
        height: 65vh;
    }
}
</style>