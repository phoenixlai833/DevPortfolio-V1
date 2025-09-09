<script setup>
import ArtifactRight from '../components/ArtifactRight.vue';
import NotFound from './NotFound.vue';
import { useRoute } from "vue-router";
</script>

<template>
    <div id="artifact"
        v-if="artifactId == 'BCHomeEnergyPlanner' || artifactId == 'ProperateStudio3D' || artifactId == 'DowcoConsultants' || artifactId == 'InnotaTechnologies'">
        <div v-motion-fade class="leftside">
            <!-- <div class="back_arrow_container" @click="$router.go(-1)"><img class="back_arrow"
                                                                                                                                                                                                                                                                                                                                                                                                                                            src="/assets/icons/arrowLeft.svg" /></div> -->
            <a href="#Projects">
                <div class="back_arrow_container"><img class="back_arrow" src="/assets/icons/arrowLeft.svg" /></div>
            </a>
            <div class="title_container">
                <span v-if="artifactId == 'BCHomeEnergyPlanner'">BC Home Energy Planner<br>
                    <h4 class="role">Frontend, Backend</h4>
                </span>
                <span v-if="artifactId == 'ProperateStudio3D'">Properate Studio3D<br>
                    <h4 class="role">Frontend</h4>
                </span>
                <span v-if="artifactId == 'InnotaTechnologies'">Innota Technologies<br>
                    <h4 class="role">Frontend, Backend, UX/UI<br />(pass: InnotaIsAwesome2023)</h4>
                </span>
                <span v-if="artifactId == 'DowcoConsultants'">Dowco Consultants<br>
                    <h4 class="role">Frontend, UI</h4>
                </span>
                <!-- <div class="up_arrow_container"><img class="up_arrow" src="/assets/icons/arrowUp.svg" /></div> -->
            </div>
        </div>
        <div class="rightside">
            <div v-if="artifactId == 'BCHomeEnergyPlanner'">
                <ArtifactRight heroImage="/assets/images/Bchep/b-hero.webp" siteLink="https://bchomeenergyplanner.ca/"
                    context="The BC government engaged Properate, a company specializing in environmental building science, energy modeling, and retrofits, to create the BC Home Energy Planner—a digital tool that helps residents understand and improve their home’s energy efficiency. The goal was to provide accurate, actionable energy reports with minimal user input, supporting retrofit planning, rebate access, and climate resilience."
                    :technologies="['Vue', 'Nuxt', 'Firebase']"
                    demoVideo="https://www.youtube.com/embed/K4eEaYYhwkc?si=YLugAkW3X7szfqwz"
                    solutionBig="The main challenge was translating complex energy modeling and diverse climate and building data into a minimal-input, user-friendly tool while meeting strict government standards."
                    solutionSmall="Developing the BC Home Energy Planner required balancing technical complexity with an accessible user experience. One major challenge was translating sophisticated energy modeling calculations—normally requiring extensive data and expertise—into a tool that could generate accurate home energy reports with minimal user input. Integrating diverse datasets, including climate records, geographic information, and building specifications, demanded careful planning to ensure reliability and consistency across different home types and locations. Additionally, close collaboration with BC government stakeholders was critical, as policy requirements and energy standards had to be reflected precisely in the platform. Coordinating these technical, data, and stakeholder requirements while maintaining a smooth, intuitive interface pushed the team to innovate both in frontend design and backend architecture, ensuring that the tool would be practical, accurate, and easy for residents to use."
                    challengeBig="Create a planner that delivers intuitive, data-driven energy assessments for homeowners and renters, simplifying complex energy modeling into actionable insights and connecting users to government incentives and certified contractors."
                    challengeSmall="The BC Home Energy Planner provides residents with clear, data-driven insights into their home’s energy performance, translating complex modeling into simple, actionable recommendations. Users receive personalized energy scores, retrofit guidance, rebate information, and connections to certified contractors, enabling them to reduce energy costs and greenhouse gas emissions. The tool’s minimal-input design increases accessibility for a wide range of households, from renters to single-family homeowners, while the integration of climate and map data ensures reports are accurate and relevant. By bridging technical precision with an intuitive user experience, the platform empowers British Columbians to make informed decisions about energy efficiency and climate resilience."
                    img1="/assets/images/Bchep/b-1.png" img2="/assets/images/Bchep/b-2.png"
                    img3="/assets/images/Bchep/b-3.png" img4="/assets/images/Bchep/b-4.webp"
                    takeawaysBig="Bridged complex energy modeling with an intuitive interface, delivering actionable insights that empower users and support government energy efficiency goals."
                    takeawaysSmall="This project reinforced the importance of bridging complex technical systems with intuitive user experiences, showing how thoughtful design and close collaboration with stakeholders can turn sophisticated data into actionable insights that empower users and drive real-world impact."
                    niceToHaves="An opportunity for growth is expanding coverage to apartment buildings and embedding the energy rating system in new construction, broadening its influence on sustainable housing." />
            </div>
            <div v-if="artifactId == 'ProperateStudio3D'">
                <ArtifactRight heroImage="/assets/images/f2-studio3D.png" siteLink="https://properate.io/stride"
                    context="Properate, a climate-tech company specializing in energy modeling and building retrofits, created Stride—a mobile platform that allows HVAC professionals to size and plan heat pump installations more efficiently. The BC government and private contractors needed a solution to accelerate energy-efficient retrofits without sacrificing accuracy. I contributed to developing the web component of Stride, which connects user data from mobile scans to an interactive, browser-based interface, enabling full 3D model manipulation and F280-compliant heat load reporting."
                    :technologies="['Vue', 'Nuxt', 'Three.js', 'Tailwind']"
                    demoVideo="https://www.youtube.com/embed/wvjtU-SVwi0?si=dcG6wA9n-vD38Odu"
                    challengeBig="Built a web platform to manage, refine, and simulate home energy models seamlessly."
                    challengeSmall="I took part in developing the web interface where users’ LiDAR scans are automatically uploaded into their profiles. Users can view, edit, and refine 3D home models, add or modify entities and project data, and simulate changes to generate CSA F280-compliant heat load reports. The platform integrates mobile field data with interactive modeling tools, providing HVAC professionals with a complete workflow to plan and size retrofits efficiently while maintaining accuracy and compliance."
                    solutionBig="Bridging complex modeling data with a user-friendly interface for professionals in the field."
                    solutionSmall="A key challenge was transforming detailed LiDAR and energy modeling data into an intuitive web experience. The system needed to handle large 3D datasets, allow real-time edits and simulations, and maintain compliance with CSA F280 standards. Additionally, integrating user data from the mobile app into a responsive web interface required careful backend coordination and strong collaboration with both internal teams and external stakeholders to ensure accuracy, usability, and workflow efficiency."
                    img1="/assets/images/Studio3D/s-1.png" img2="/assets/images/Studio3D/s-2.png"
                    img3="/assets/images/Studio3D/s-3.png" img4="/assets/images/Studio3D/s-4.png"
                    takeawaysBig="Bridging technical precision and usability empowers professionals and improves workflow efficiency."
                    takeawaysSmall="This project reinforced the value of connecting sophisticated technical systems with intuitive interfaces. By translating complex 3D scans and energy models into actionable tools, we enabled HVAC professionals to make precise decisions quickly, improving project efficiency and client outcomes. The experience highlighted the importance of collaboration between developers, designers, and stakeholders to deliver tools that balance accuracy, usability, and real-world impact."
                    niceToHaves="Future improvements could include collaborative features that allow multiple team members or stakeholders to work on the same 3D home model in real time. This would improve workflow efficiency, ensure consistency across edits, and enable HVAC professionals and project teams to make faster, coordinated decisions, ultimately enhancing the impact and usability of Stride/Studio." />
            </div>
            <!-- inProgress="true" -->
            <div v-if="artifactId == 'InnotaTechnologies'">
                <ArtifactRight heroImage="/assets/images/f3-InnotaTech.png" siteLink="https://innota-tech.up.railway.app/"
                    context="In my last semester at BCIT, I participated in the ISSP(Industry Sponsored Student Projects) program in a team of four classmates. We chose to work with Innota Technologies, a startup that aims to develop an educational note-taking app with a Figma-like interface. Together, we scoped out an MVP that was feasible within the given timeline and added additional features with any remaining time. After discussions with the client, we focused on building out the main note-taking functionality for phase 1, which included a split-screen with one side as the PDF reader and the other as a canvas. The scope was limited to restricting uploads to PDFs only and focusing on the desktop browser version, although we made it responsive with the extra time. Since this was a new project, we had to start from scratch with no existing design or prototype. We worked in a SCRUM-like setting, using Trello and Slack, and met weekly with the client to provide updates and ensure that we were on track with the project's direction."
                    :technologies="['React', 'MVC', 'MongoDB', 'Docker']"
                    demoVideo="https://www.youtube.com/embed/TYhk05ouNJA"
                    challengeBig="The project utilizes javascript/React libraries to create a platform where users can upload and highlight sections on PDF files, with the sections showing up as notes on a Figma-like canvas that serves as a mind map workspace, where all changes are saved in a MongoDB database and Dockerized."
                    challengeSmall="We began by researching and testing various javascript/React libraries that could speed up the development process. After careful consideration, we selected a few libraries, which we utilized to develop the prototype we designed in Figma. On the left PDF side of the application, the user can upload or drag and drop PDF files into the designated area, where they can highlight sections to add notes that appear on the right side of the screen. The right canvas side of the application displays the highlight notes, which can be scrolled back to in the PDF section. The canvas top menu provides a range of functionalities, including search, show all connections, delete connections, create comments, pan mode, undo/redo, and a brush tool for freehand drawing. For comments, there are two pop-up menus: the context menu enables users to delete, clone, create connections to other notes, and show a link back to the pdf, while the comment editor menu allows users to update the color, fonts, and structure of the comment. The slider in the center of the screen can adjust the viewport size of each section so the user can toggle between full or partial screen modes. Finally, all changes made by the user are saved in a MongoDB database, and the entire application is Dockerized per the client's request for portability across machines."
                    solutionBig="Unfamiliar libraries and technology, figuring out design and user experience with changing opinions while developing, and restrictions on libraries were the project's main challenges."
                    solutionSmall="One of the main challenges we faced during this project was the lack of familiarity with the libraries and some of the technology we used, which required us to learn how to implement the desired features and test the limits of these new tools during the process. Another challenge was figuring out a good design and user experience while navigating through varying opinions and changes. Additionally, since we relied on libraries that were built upon other libraries or HTML elements, we faced restrictions on what was possible to customize, prompting us to duplicate some of the source code into our own project files and adjusting them to fit our needs to ensure that the functionality would remain the same even if the packages update in the future."
                    img1="/assets/images/InnotaTech/it-1.png" img2="/assets/images/InnotaTech/it-2.png"
                    img3="/assets/images/InnotaTech/it-3.png" img4="/assets/images/InnotaTech/it-4.png"
                    takeawaysBig="Effective communication, awareness of limitations in using existing libraries, understanding and supporting the team, taking initiative, and positive energy were key to a successful project outcome."
                    takeawaysSmall="Frequent and honest communication is necessary for ensuring that everyone is on the same page and that tasks are completed efficiently. Also, while existing libraries can be helpful for faster iterations, they may come with limitations and issues that require more effort to solve down the line. In addition, I learned the importance of understanding each team member's strengths and weaknesses, self-assigning tasks that are interesting to each person, supporting each other, and maintaining a positive outlook. These factors were essential in creating a great team dynamic and working collaboratively towards a successful project outcome. By acknowledging and utilizing each member's unique skills and perspectives, we were able to overcome challenges and create a cohesive final product."
                    niceToHaves="While Phase 1 of the project was the main focus for our team, later versions will include features that provide even more value to its users. One of these is the ability to download all of the canvas notes in a formatted document, making it easy for users to review and study the material. Another feature is a workspace where users can see all of the documents they have uploaded to the platform, providing a central location for accessing their work. In the further future, Innota aims to include collaborative multi-user for students and analytic features as a valuable tool for educators to tailor instruction and improve learning outcomes."
                    prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f3-Dowco.png" />
            </div>
            <div v-if="artifactId == 'DowcoConsultants'">
                <ArtifactRight heroImage="/assets/images/f4-Dowco.png" siteLink="https://www.dowco.com/"
                    context="During my internship at Evolve Branding, I was involved in a project for one of their major clients, The Dowco Group of Companies. Dowco is a renowned detail engineering firm that has contributed to some of the world's most famous buildings, including the One World Trade Center, the Walt Disney Concert Hall, and Hudson Yards. Evolve had previously helped Dowco rebrand their business, but it has been a few years since their last website update. For this project, I was tasked to update the homepage and mega menu to better reflect the scope of their business and provide a more modern, clean user experience. We worked closely with Dowco to deliver a website that accurately represented their brand and showcased their impressive portfolio of work."
                    :technologies="['HTML', 'SCSS', 'JavaScript', 'jQuery', 'PHP']"
                    demoVideo="https://www.youtube.com/embed/xFAafo2JlCs"
                    challengeBig="The project involved participating in meetings, researching, ideating based on the existing branding, designing and developing responsive pages, and working with a large codebase."
                    challengeSmall="I participated in client meetings, where I carefully listened to their needs and concerns, researched their competitors, and took feedback from the CEO. Based on the existing branding, I came up with ideas to create a modern and updated look and created prototypes in Figma. When designing and developing the pages, I made sure that they were all responsive and could be easily accessed on mobile devices. I worked with a large codebase that had different styles of implementation due to it being passed around developers. To fit the codebase, I used HTML, SCSS, and Javascript, and created the homepage in isolation to avoid potential conflicts in CSS. Finally, I relinked all the menu, footer, and homepage items with the new design and deployed the changes via client's server."
                    solutionBig="Disorganization, inconsistency, and previous varying development approaches posed challenges for making changes to the site."
                    solutionSmall="During the project, I faced several challenges such as dealing with a disorganized folder and files, the lack of standardization due to different developers working on the code at various times, and the need to make changes carefully to avoid breaking other parts of the site. Furthermore, the implementation of the menu varied across pages using PHP, JQuery, or plain HTML, which required me to understand how the files worked together and adjust accordingly."
                    img1="/assets/images/Dowco/d-4.png" img2="/assets/images/Dowco/d-3.png"
                    img3="/assets/images/Dowco/d-1.png" img4="/assets/images/Dowco/d-2.png"
                    takeawaysBig="Adopting a coding standard can significantly improve the quality of the code, and understanding the client's business needs is crucial."
                    takeawaysSmall="Through the process of completing the project, I learned that having a coding standard and implementing regular code reviews is crucial for efficient development and maintenance. Consistency in coding practices ensures that the code is easier to understand, debug, and update, making it easier for developers to work on the project. Additionally, I feel that understanding the client's business needs is vital to ensuring their satisfaction. By communicating effectively and listening carefully to their requirements, we were able to provide a customized solution that met their needs and exceeded their expectations."
                    niceToHaves="" prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f1-Evolve.png" />
            </div>
        </div>
    </div>
    <div v-else>
        <NotFound />
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

h4.role {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    margin: 2% 0 0 0;
    opacity: 25%;
}

span {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    font-size: 5rem;
}

.title_container {
    /* width: 80%; */
    overflow-wrap: break-word;
}

.leftside {
    /* outline: solid 1px black; */
    /* display: flex; */
    /* flex-direction: row; */
    width: 30%;
    padding: 5%;
    /* height: 100%; */
    /* height: 72vh; */
    /* overflow-y: hidden; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.rightside {
    width: 70%;
    /* background-color: var(--text-color); */
}

@media only screen and (max-width: 900px) {
    #artifact::-webkit-scrollbar {
        display: none;
    }

    #artifact {
        flex-direction: column;
        height: 100%;
        overflow: scroll;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    span {
        font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
        font-size: 4rem;
    }

    .title_container {
        margin-top: 10%;
        /* width: 75%; */
    }

    .leftside {
        margin-top: 5%;
        padding: 30px;
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