<script setup>
import FilledButton from './FilledButton.vue';
import FeaturedWork from './FeaturedWork.vue';
import OtherProject from './OtherProject.vue';
</script>

<template>
    <FeaturedWork directionType="row-reverse" imagePath="/assets/images/f1-bchep.png" itemNum="01" role="Frontend, Backend"
        siteLink="https://bchomeenergyplanner.ca/" title="BC Home Energy Planner"
        description="While working at Properate, took part in creating the BC Home Energy Planner, a digital tool for the BC Ministry of Energy, Mines, and Low Carbon Innovation. It delivers energy scores, upgrade recommendations, rebate info, and contractor connections through an intuitive, responsive interface to help residents cut costs and improve climate resilience."
        :technologies="['Vue', 'Nuxt', 'Firebase']" seeMoreLink="/artifact/BCHomeEnergyPlanner" />
    <FeaturedWork directionType="row" imagePath="/assets/images/f2-studio3D.png" itemNum="02" role="Frontend"
        siteLink="https://properate.io/stride" title="Properate Studio3D"
        description="Helped develop the web component of Properate’s Stride platform, enabling 3D home modeling, interactive model adjustments, and F280 energy load reporting. This system connects seamlessly with the Stride mobile app, giving HVAC professionals accurate, real-time heat pump sizing and retrofit planning tools."
        :technologies="['Vue', 'Nuxt', 'Three.js', 'Tailwind']" seeMoreLink="/artifact/ProperateStudio3D" />
    <FeaturedWork directionType="row-reverse" imagePath="/assets/images/f3-InnotaTech.png" itemNum="03"
        role="Frontend, Backend, UX/UI" siteLink="https://innota-tech.up.railway.app/" title="Innota Technologies"
        description="Developed a proof of concept educational app for Innota Technologies to showcase their product to investors. Worked on phase 1 which focuses on note taking for students where they can upload and highlight large pdfs, create, edit, and connect notes, draw, take pdf images and more in a split screen Figma-like interface. Worked in a student group of 4 with weekly sprints to rapidly iterate and build out the clients vision. (pass: InnotaIsAwesome2023)"
        :technologies="['React', 'MVC', 'MongoDB', 'Docker']" seeMoreLink="/artifact/InnotaTechnologies" />
    <FeaturedWork directionType="row" imagePath="/assets/images/f4-Dowco.png" itemNum="04" role="Frontend, UI"
        siteLink="https://www.dowco.com/" title="Dowco Consultants"
        description="Redesigned and developed a new homepage and navigation for Dowco Construction Consultants, to better showcase the company and fix any issues with the current version. Communicated directly with the client from ideation to development to understand their vision and pivot as necessary. Had to isolate the new homepage and build new navigation upon existing sites files without compromising the rest of the pages."
        :technologies="['HTML', 'SCSS', 'JavaScript', 'jQuery', 'PHP']" seeMoreLink="/artifact/DowcoConsultants" />
    <div class="circle_spacer">
        <div class="circle_three"></div>
    </div>
    <img class="cross" src="/assets/icons/cross.svg" />
    <div class="other_projects">
        <h3 v-motion-fade-visible>Other Projects</h3>
        <span v-motion-fade-visible>Don’t be shy, take a look</span>
        <div v-motion-fade-visible class="other_projects_container">
            <OtherProject siteLink="https://evolve-website-a0510.web.app/" title="Evolve Site"
                description="Helped build out the new design for Evolve Branding’s company site, an extension for their EvolveX app ecosystem. Learned and used Flutter to allow the web app to be easily scaled between desktop and mobile. Designed new pages as needed and implemented them on approval. Attended regular meetings with the founder and corresponded with fellow developers in the team throughout the process."
                :technologies="['Flutter', 'Firebase', 'Android Studios']" />
            <OtherProject githubLink="https://github.com/phoenixlai833/LocalToMe" siteLink="https://localtome.vercel.app/"
                title="LocalToMe"
                description="LocalToMe is a web app that locates and provides low-income families/individuals with free or accessible food resources near their area within their budgets. Users can search for food banks on the map page, easily find out if they qualify, get directions and more. To build community, signed-in users are able to post news and events that relate to this topic. They can also customize their profiles and view saved food banks or events in the favourites page."
                :technologies="['React', 'Next.js', 'Firebase', 'Styled Components', 'Vercel']" />
            <OtherProject githubLink="https://github.com/phoenixlai833/TrashQueens"
                siteLink="https://trash-queens-dev.vercel.app/" title="Trash Queens"
                description="A speed based recycling desktop game that educates people of all ages on how to recycle properly. Inspired by personal struggles, this app gamifies that experience by seeing how many correct answers the player can get in a minute. Wrong answers will slowly deteriorate the environment as a trash mountain appears."
                :technologies="['Vue.js', 'Railway']" />

        </div>
        <div v-motion-fade-visible class="design_link">
            <h3>For more design related work, view my</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            <FilledButton buttonText="studio" link="https://www.phoenixlai.studio/" class="v1" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects"
};
</script>

<style scoped>
span {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    opacity: 100%;
    font-size: 3.5rem;
}

.circle_spacer {
    display: flex;
    justify-content: end;
    height: 0;
    width: 100%;
}

.circle_three {
    opacity: 30%;
    width: 500px;
    height: 250px;
    border-radius: 60%;
    background-size: cover;
    animation: morph3 10s ease infinite alternate;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.14405067034700314) 0%, rgba(0, 0, 0, 0) 21%, rgba(0, 0, 0, 0.13143237381703465) 70%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0.37118000788643535) 100%);
}

@keyframes morph3 {
    0% {
        transform: rotate(160deg) translate(-150px, 60%) scaleX(0.65) scaleY(1);
        /* opacity: 0%; */
    }

    100% {
        transform: rotate(165deg) translate(-150px, 60%) scaleX(1) scaleY(0.45);
    }
}

.cross {
    position: absolute;
    width: 10vw;
    transform: translate(-70%, 35%);
}

.other_projects {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.other_projects_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 5% 0;
}

.design_link {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15%;
}

@media only screen and (max-width: 768px) {
    span {
        font-size: 2.5rem;
    }

    .circle_three {
        width: 300px;
        height: 150px;
    }

    .v1 {
        width: 40%;
    }

    .design_link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 75%;
    }

    .other_projects_container {
        flex-direction: column;
        margin: 5% 0 10% 0;
    }

    .cross {
        width: 15vw;
        transform: translate(-30%, 90%);
    }
}
</style>