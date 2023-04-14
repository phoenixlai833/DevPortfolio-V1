<script setup>
import FilledButton from './FilledButton.vue';
import FeaturedWork from './FeaturedWork.vue';
import OtherProject from './OtherProject.vue';
</script>

<template>
    <!-- inProgress="true"  -->
    <FeaturedWork directionType="row-reverse" imagePath="/assets/images/f4-InnotaTech.png" itemNum="01"
        siteLink="https://innota-tech.up.railway.app/" title="Innota Technologies"
        description="Developed a proof of concept educational app for Innota Technologies to showcase their product to investors. Worked on phase 1 which focuses on note taking for students where they can upload and highlight large pdfs, create, edit, and connect notes, draw, take pdf images and more in a split screen Figma-like interface. Worked in a student group of 4 with weekly sprints to rapidly iterate and build out the clients vision."
        :technologies="['React', 'MVC', 'MongoDB', 'Docker']" seeMoreLink="/artifact/InnotaTechnologies" />

    <FeaturedWork directionType="row" imagePath="/assets/images/f2-LocalToMe.png" itemNum="02"
        githubLink="https://github.com/phoenixlai833/LocalToMe" siteLink="https://localtome.vercel.app/" title="LocalToMe"
        description="LocalToMe is a web app that locates and provides low-income families/individuals with free or accessible food resources near their area within their budgets. Users can search for food banks on the map page, easily find out if they qualify, get directions and more. To build community, signed-in users are able to post news and events that relate to this topic. They can also customize their profiles and view saved food banks or events in the favourites page."
        :technologies="['React', 'Next.js', 'Firebase', 'Styled Components', 'Vercel']" seeMoreLink="/artifact/LocalToMe" />

    <FeaturedWork directionType="row-reverse" imagePath="/assets/images/f3-Dowco.png" itemNum="03"
        siteLink="https://www.dowco.com/" title="Dowco Consultants"
        description="Redesigned and developed a new homepage and navigation for Dowco Construction Consultants, to better showcase the company and fix any issues with the current version. Communicated directly with the client from ideation to development to understand their vision and pivot as necessary. Had to isolate the new homepage and build new navigation upon existing sites files without compromising the rest of the pages."
        :technologies="['HTML', 'SCSS', 'JavaScript', 'jQuery', 'PHP']" seeMoreLink="/artifact/DowcoConsultants" />

    <FeaturedWork directionType="row" imagePath="/assets/images/f1-Evolve.png" itemNum="04"
        siteLink="https://evolve-website-a0510.web.app/" title="Evolve Site"
        description="Helped build out the new design for Evolve Branding’s company site, an extension for their EvolveX app ecosystem. Learned and used Flutter to allow the web app to be easily scaled between desktop and mobile. Designed new pages as needed and implemented them on approval. Attended regular meetings with the founder and corresponded with fellow developers in the team throughout the process."
        :technologies="['Flutter', 'Firebase', 'Android Studios']" seeMoreLink="/artifact/EvolveSite" />
    <div class="circle_spacer">
        <div class="circle_three"></div>
    </div>
    <img class="cross" src="/assets/icons/cross.svg" />
    <div class="other_projects">
        <h3 v-motion-fade-visible>Other Projects</h3>
        <span v-motion-fade-visible>Don’t be shy, take a look</span>
        <div v-motion-fade-visible class="other_projects_container">
            <OtherProject siteLink="https://caring-library-production.up.railway.app/" title="Concord Chathub"
                description="Discord clone built with SignalR to practice real-time web applications. Users can create, join rooms, and view other users in the room. They can also send messages and view them in real time."
                :technologies="['C#', '.NET', 'SignalR', 'PostgreSQL', 'React', 'Tailwind']" />
            <OtherProject githubLink="https://github.com/phoenixlai833/TrashQueens"
                siteLink="https://trash-queens-dev.vercel.app/" title="Trash Queens"
                description="A speed based recycling desktop game that educates people of all ages on how to recycle properly. Inspired by personal struggles, this app gamifies that experience by seeing how many correct answers the player can get in a minute. Wrong answers will slowly deteriorate the environment as a trash mountain appears."
                :technologies="['Vue.js', 'Railway']" />
            <OtherProject githubLink="https://github.com/phoenixlai833/TacticalPigeon"
                siteLink="https://tacticalpigeon-production.up.railway.app/" title="Tactical Pigeon"
                description="Tactical pigeon is a turn based strategy game based on the classic rock, paper, scissors, but pigeons with forks and viking shields. Play on your own or connect with other players to fight for the dropped hot dog. Given a certain number or shields and forks, users have to defend themselves on their game board and attack an empty spot on the opponents. The last one standing wins."
                :technologies="['HTML', 'CSS', 'Javascript']" />

        </div>
        <div v-motion-fade-visible class="design_link">
            <h3>For more design related work, view my</h3>&nbsp;&nbsp;
            <FilledButton buttonText="v1 portfolio" link="https://www.phoenixlai.com/" class="v1" />
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
    margin-bottom: 10%;
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