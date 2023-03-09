<script setup>
</script>

<template>
    <div id="ArtifactRight">
        <!-- <div class="hero_image" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
                                                                </div> -->
        <div class="img-wrapper">
            <div id="prjPhoto" class="hero_image" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
            </div>
        </div>
        <div class="link_icons">
            <h4 v-if="inProgress">In-progress</h4>
            <a v-if="githubLink" :href="githubLink" target="_blank"> <img class="social"
                    src="/assets/icons/github.svg" /></a>
            <a v-if="siteLink" :href="siteLink" target="_blank"><img class="social" src="/assets/icons/eye.svg" /></a>
        </div>
        <div class="context">
            <h4>Context</h4>

            <div class="context_description">
                <p class="overviews">{{ context }}</p>
                <div class="context_tech">
                    <span class="tech" v-for="tech in technologies">
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>
        <div v-if="demoVideo" class="demo_video"></div>
        <div v-if="challengeBig && challengeSmall" class="challenge">
            <h4>challenge</h4>
            <div class="challenge_description">
                <p class="overviews">{{ challengeBig }}</p>
                <p>{{ challengeSmall }}</p>
            </div>
        </div>
        <hr v-if="challengeBig && challengeSmall && solutionBig && solutionSmall">
        <div v-if="solutionBig && solutionSmall" class="solution">
            <h4>Solution</h4>
            <div class="solution_description">
                <p class="overviews">{{ solutionBig }}</p>
                <p>{{ solutionSmall }}</p>
            </div>
        </div>
        <div v-if="img1 && img2 && img3 && img4" class="image_gallery">
            <div class="image_row">
                <div class="img1" :style="{ backgroundImage: 'url(' + img1 + ')' }"></div>
                <div class="img2" :style="{ backgroundImage: 'url(' + img2 + ')' }"></div>
                <div class="img3" :style="{ backgroundImage: 'url(' + img2 + ')' }"></div>
            </div>
            <div class="img4"></div>
        </div>
        <div v-if="takeawaysBig && takeawaysSmall" class="takeaways">
            <h4>Takeaways</h4>
            <div class="takeaways_description">
                <p class="overviews">{{ takeawaysBig }}</p>
                <p>{{ takeawaysSmall }}</p>
            </div>
        </div>
        <div v-if="nicetohaves" class="nicetohaves">
            <h4>Nice To Haves</h4>
            <div class="nicetohaves_description">
                <p>{{ nicetohaves }}</p>
            </div>
    </div>
    <!-- <hr> -->
    <!-- <div class="seemore">
            <span>See More</span>
            <div class="seemore_description">
                <span>LocalToMe is a web application that allows users to search for local businesses and events. Users can
                    also create an account to save their favorite businesses and events.</span>
            </div>
            <div class="seemore_projects">
                <a href="#">
                    <router-link>
                        <div class="prj1" :style="{ backgroundImage: 'url(' + prj1 + ')' }"></div>
                    </router-link>
                </a>
                <a href="#">
                    <div class="prj2" :style="{ backgroundImage: 'url(' + prj2 + ')' }"></div>
                </a>
                <a href="#">
                    <div class="prj3" :style="{ backgroundImage: 'url(' + prj3 + ')' }"></div>
                                                                                                                                                                                                                    </a>
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
}

.tech {
    font-family: "Lato-regular", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    opacity: 25%;
    margin-right: 5%;
}

.context_tech {
    margin-top: 2%;
}

.context_description {
    width: 80%
}

.context,
.challenge {
    display: flex;
    justify-content: space-between;
}

p.overviews {
    font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
    font-size: 3rem;
}

/* h4 {
    margin-right: 50px;
} */

.social {
    height: 20px;
    margin-left: 30px;
    transition: all 0.3s ease-in-out;
}

.link_icons {
    display: flex;
    justify-content: flex-end;
    margin: 2% 0 5% 0;
}

.img-wrapper {
    background-color: var(--theme-color);
    width: 100%;
    height: 50vh;
}

.hero_image {
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--theme-color);
    transition: all 0.3s ease-in-out;
}

.img-wrapper:hover .hero_image {
    filter: grayscale(0%) contrast(1);
    mix-blend-mode: normal;
}

.hero_image {
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


@media screen and (max-width: 900px) {

    p.overviews {
        font-family: "Lato-Light", Avenir, Helvetica, Arial, sans-serif;
        /* font-size: 2.5rem; */
        font-size: 2rem;
    }

    .link_icons {
        margin: 5% 0 10% 0;
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