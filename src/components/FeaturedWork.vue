<template>
    <div v-motion :initial="{ opacity: 0, y: 25 }" :visible="{ opacity: 1, y: 0 }" class="large_feature_container"
        :style="{ flexDirection: directionType }">
        <div class="image_container">
            <div class="image_border" v-on:click="openLink(siteLink)"></div>
            <div class="img-wrapper">
                <div id="prjPhoto" class="imageCrop" :style="{ backgroundImage: 'url(' + imagePath + ')' }">
                </div>
            </div>
        </div>
        <div class="spacer"></div>
        <div class="large_feature_right">
            <div class="large_feature_title">
                <div class="title_items">
                    <h4>{{ itemNum }}&nbsp;&nbsp;&nbsp;Featured Work</h4>
                    <div class="title_items_icons">
                        <a v-if="githubLink" :href="githubLink" target="_blank"> <img class="social" src="/assets/icons/github.svg" /></a>
                        <a v-if="siteLink" :href="siteLink" target="_blank"><img class="social" src="/assets/icons/eye.svg" /></a>
                    </div>
                    <h4 v-if="inProgress">In-progress</h4>
                </div>
                <hr>
            </div>
            <div class="large_feature_info">
                <span class="projectTitle">{{ title }}</span>
                <p>{{ description }}</p>
                <span v-for="tech in technologies">
                    {{ tech }}
                </span>
            </div>
            <router-link :to=seeMoreLink>
                <div class="large_feature_link">
                    Case Study
                </div>
            </router-link>
        </div>
    </div>
    <div class="small_feature_container">
        <div class="small_feature_title">
            <div class="title_items">
                <h4>{{ itemNum }}&nbsp;&nbsp;&nbsp;Featured Work</h4>
                <div class="title_items_icons">
                    <a v-if="githubLink" :href="githubLink"> <img class="social" src="/assets/icons/github.svg" /></a>
                    <a :href="siteLink"><img class="social" src="/assets/icons/eye.svg" /></a>
                </div>
            </div>
            <hr>
        </div>
        <div class="image_container">
            <div class="image_border" v-on:click="openLink(siteLink)"></div>
            <div class="img-wrapper">
                <div id="prjPhoto" class="imageCrop" :style="{ backgroundImage: 'url(' + imagePath + ')' }">
                </div>
            </div>
        </div>
        <div class="small_feature_info">
            <span class="projectTitle">{{ title }}</span>
            <p>{{ description }}</p>
            <span v-for="tech in technologies">
                {{ tech }}
            </span>
        </div>
        <router-link :to=seeMoreLink>
            <div class="small_feature_link">Case Study
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "FeaturedWork",
    props: ["directionType", "imagePath", "itemNum", "githubLink", "siteLink", "inProgress", "title", "description", "technologies", "seeMoreLink"],
    methods: {
        openLink(link) {
            window.open(link, "_blank");
        }
    }
};
</script>

<style scoped>
span.projectTitle {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    opacity: 100%;
    font-size: 3.5rem;
}

p {
    margin: 1% 0 5% 0;
}

span {
    font-family: "Lato-regular", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    opacity: 25%;
    margin-right: 5%;
}

.spacer {
    width: 5%;
}

.image_container {
    width: 50%;
    height: 25vw;
    background-color: black;
}

.image_border {
    border: 0 solid var(--theme-color);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}

.image_border:hover {
    border: 25px solid var(--theme-color);
}

.img-wrapper {
    background-color: var(--theme-color);
    width: 100%;
    height: 100%;
}

.imageCrop {
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--theme-color);
    transition: all 0.3s ease-in-out;
}

.image_border:hover+.img-wrapper #prjPhoto {
    filter: grayscale(0%) contrast(1);
    mix-blend-mode: normal;
}

hr {
    border: none;
    height: 1px;
    background-color: black;
    margin-top: 5px;
}

.social {
    height: 20px;
    margin-left: 30px;
    transition: all 0.3s ease-in-out;
}

.social:hover {
    opacity: 50%;
}

.title_items {
    display: flex;
    justify-content: space-between;
}

.large_feature_info,
.small_feature_info,
.large_feature_link,
.small_feature_link {
    margin-top: 5%;
}

.large_feature_link,
.small_feature_link {
    border: 1px solid black;
    max-width: 40%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lato-regular", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    opacity: 100%;
    transition: all 0.3s ease-in-out;
}


.large_feature_link:hover,
.small_feature_link:hover {
    background-color: black;
    color: var(--theme-color);
}

.large_feature_container {
    display: flex;
    align-items: start;
    margin: 10% 0;
}

.large_feature_right {
    width: 50%;
}

.small_feature_container {
    display: none;
}

@media only screen and (max-width: 768px) {
    .small_feature_link {
        max-width: 35%;
    }

    .large_feature_info {
        display: none;
    }

    .image_border:hover {
        border: 15px solid var(--theme-color);
    }

    .image_container {
        width: 100%;
        height: 45vw;
    }

    .imageCrop {
        margin: 5% 0;
    }

    .small_feature_container {
        display: block;
        margin: 10% 0;
    }

    .large_feature_container {
        display: none;
    }
}

@media only screen and (min-width: 1400px) {
    .large_feature_link {
        max-width: 20%;
    }
}
</style>