<script setup>
import ArtifactRight from '../components/ArtifactRight.vue';
import { useRoute } from "vue-router";
</script>

<template>
    <div id="artifact">
        <div class="leftside">
            <!-- <div class="back_arrow_container" @click="$router.go(-1)"><img class="back_arrow"
                                                                                                                        src="/assets/icons/arrowLeft.svg" /></div> -->
            <a href="#Projects">
                <div class="back_arrow_container"><img class="back_arrow" src="/assets/icons/arrowLeft.svg" /></div>
            </a>
            <div class="title_container">
                <span v-if="artifactId == 'LocalToMe'">LocalToMe</span>
                <span v-if="artifactId == 'EvolveSite'">Evolve Site</span>
                <span v-if="artifactId == 'DowcoConsultants'">Dowco Consultants</span>
                <span v-if="artifactId == 'InnotaTech'">Innota Tech</span>
                <!-- <div class="up_arrow_container"><img class="up_arrow" src="/assets/icons/arrowUp.svg" /></div> -->
            </div>
        </div>
        <div class="rightside">
            <div v-if="artifactId == 'LocalToMe'">
                <ArtifactRight heroImage="/assets/images/f2-LocalToMe.png"
                    githubLink="https://github.com/phoenixlai833/LocalToMe" siteLink="https://localtome.vercel.app/"
                    context="LocalToMe is a web app that locates and provides low-income families/individuals with free or accessible food resources near their area within their budgets. Users can search for food banks on the map page, easily find out if they qualify, get directions and more. To build community, signed-in users are able to post news and events that relate to this topic. They can also customize their profiles and view saved food banks or events in the favourites page."
                    :technologies="['React', 'Next.js', 'firebase', 'Styled Components', 'Vercel']" demoVideo=""
                    challengeBig="" challengeSmall="" solutionBig="" solutionSmall="" img1=""
                    img2="/assets/images/f3-Dowco.png" img3="" img4="" takeawaysBig="" takeawaysSmall="" niceToHaves=""
                    prj1="/assets/images/f1-Evolve.png" prj2="/assets/images/f3-Dowco.png"
                    prj3="/assets/images/f1-Evolve.png" />
            </div>
            <div v-if="artifactId == 'EvolveSite'">
                <ArtifactRight heroImage="/assets/images/f1-Evolve.png" siteLink="https://evolve-website-a0510.web.app/"
                    context="Helped build out the new design for Evolve Branding’s company site, an extension for their EvolveX app ecosystem. Learned and coded in Flutter to allow the web app to be easily scaled between desktop and mobile. Designed new pages as needed and implemented them on approval. Attended regular meetings with the founder and corresponded with fellow developers in the team throughout the process."
                    :technologies="['Flutter', 'Firebase', 'Android Studios']" demoVideo="" challengeBig=""
                    challengeSmall="" solutionBig="" solutionSmall="" img1="" img2="" img3="" img4="" takeawaysBig=""
                    takeawaysSmall="" niceToHaves="" prj1="/assets/images/f2-LocalToMe.png"
                    prj2="/assets/images/f3-Dowco.png" prj3="/assets/images/f1-Evolve.png" />
            </div>
            <div v-if="artifactId == 'DowcoConsultants'">
                <ArtifactRight heroImage="/assets/images/f3-Dowco.png" siteLink="https://www.dowco.com/"
                    context="Redesigned and developed a new homepage and navigation for Dowco Construction Consultants, to better showcase the company and fix any issues with the current version. Communicated directly with the client from ideation to development to understand their vision and pivot as necessary. Had to isolate the new homepage and build new navigation upon existing sites files without compromising the rest of the pages."
                    :technologies="['HTML', 'SCSS', 'jQuery']" demoVideo="" challengeBig="" challengeSmall="" solutionBig=""
                    solutionSmall="" img1="" img2="" img3="" img4="" takeawaysBig="" takeawaysSmall="" niceToHaves=""
                    prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f1-Evolve.png" />
            </div>
            <div v-if="artifactId == 'InnotaTech'">
                <ArtifactRight heroImage="/assets/images/f4-InnotaTech.png" inProgress="true"
                    context="Helped build out the new design for Evolve Branding’s company site, an extension for their EvolveX app ecosystem. Learned and coded in Flutter to allow the web app to be easily scaled between desktop and mobile. Designed new pages as needed and implemented them on approval. Attended regular meetings with the founder and corresponded with fellow developers in the team throughout the process."
                    :technologies="['React', 'MVC', 'Mongodb', 'Docker']" demoVideo="" challengeBig="" challengeSmall=""
                    solutionBig="" solutionSmall="" img1="" img2="" img3="" img4="" takeawaysBig="" takeawaysSmall=""
                    niceToHaves="" prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f3-Dowco.png" />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Artifact",
    computed: {
        artifactId() {
            return this.$route.params.id;
        }
    }
};
</script>

<style scoped>
#artifact {
    display: flex;
    flex-direction: row;
    padding: 0;
    /* overflow-y: hidden; */
}

.back_arrow_container {
    min-width: 50px;
}

.up_arrow_container {
    width: 35px;
    margin-top: 200px;
}

span {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    font-size: 5rem;
}

.title_container {
    width: 80%;
    overflow-wrap: break-word;
}

.leftside {
    /* display: flex; */
    /* flex-direction: row; */
    width: 30%;
    /* height: 72vh; */
    /* overflow-y: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.rightside {
    width: 70%;
    background-color: var(--text-color);
}

@media only screen and (max-width: 900px) {
    #artifact {
        flex-direction: column;
    }

    .title_container {
        margin-top: 10%;
        /* width: 75%; */
    }

    .leftside {
        margin: 5% 0;
        width: 100%;
        /* height: 30vh; */
        display: block;
    }

    .rightside {
        width: 100%;
        height: 70vh;
    }
}
</style>