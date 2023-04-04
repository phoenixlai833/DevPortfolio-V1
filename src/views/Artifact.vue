<script setup>
import ArtifactRight from '../components/ArtifactRight.vue';
import NotFound from './NotFound.vue';
import { useRoute } from "vue-router";
</script>

<template>
    <div id="artifact"
        v-if="artifactId == 'LocalToMe' || artifactId == 'EvolveSite' || artifactId == 'DowcoConsultants' || artifactId == 'InnotaTechnologies'">
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
                <span v-if="artifactId == 'InnotaTechnologies'">Innota Technologies</span>
                <!-- <div class="up_arrow_container"><img class="up_arrow" src="/assets/icons/arrowUp.svg" /></div> -->
            </div>
        </div>
        <div class="rightside">
            <div v-if="artifactId == 'LocalToMe'">
                <ArtifactRight heroImage="/assets/images/f2-LocalToMe.png"
                    githubLink="https://github.com/phoenixlai833/LocalToMe" siteLink="https://localtome.vercel.app/"
                    context="As part of the ISDP(Interdisciplinary Student Project)  program at BCIT, I worked in a team of three designers and three developers on a project that involved ideating a need for underrepresented groups and developing an app that would provide value and assistance to them. Our task was to start from the ideation stage and work towards a working MVP. After careful consideration, we decided to focus on food resources for low-income families and individuals, especially in light of the impact of COVID-19. Our team wanted to create a user-friendly app that would provide easy access to essential resources for those who require food assistance."
                    :technologies="['React', 'Next.js', 'firebase', 'Styled Components', 'Vercel']"
                    demoVideo="https://www.youtube.com/embed/_M4DFhkupf0"
                    challengeBig="Our research indicated that those who have used the service previously are the ones who contribute the most to food banks and other food aid resources."
                    challengeSmall="Access to food resources can be challenging to navigate and often come with restrictions or certain qualifications. This includes resources such as food banks, community fridges, meal programs, and food drives. Our aim was to make information centralized and easily accessible to those in need by providing a filterable map of all resources using an API provided by the City of Vancouver. Clicking on the pins on the map will provide further information on each resource, including contact information, eligibility criteria, and directions. We also wanted to promote community in a time of uncertainty and incorporated the ability for signed-in users to create events and news related to community food programs. Users can also customize their profiles and favorite food resources and events for later viewing. Our research indicated that those who have used the service previously are the ones who contribute the most to food banks and other food resources. As part of our efforts to foster community and abundance, we created a mascot called Cabbage, which symbolizes resilience and abundance, much like the vegetable it is named after."
                    solutionBig="The project faced challenges in managing the scope and timeline, obtaining information from food banks, and utilizing unfamiliar technologies."
                    solutionSmall="We faced several challenges during the project, including difficulty in sizing the scope and managing the project within our design, development, and testing timeline while balancing other schoolwork. Another challenge was obtaining sufficient information and cooperation from understaffed and busy food banks. Additionally, we wanted to incorporate new technologies such as Firebase, which we were unfamiliar with, so we had to learn and implement them simultaneously. Despite these challenges, we were able to successfully develop the app, thanks to our perseverance and dedication to the project."
                    img1="/assets/images/LocalToMe/l-1.png" img2="/assets/images/LocalToMe/l-3.png"
                    img3="/assets/images/LocalToMe/l-4.png" img4="/assets/images/LocalToMe/l-2.png"
                    takeawaysBig="We learned the importance of choosing the right technology through the challenge of using a NoSQL database for an application with unclearly defined access patterns."
                    takeawaysSmall="From the project, we learned the importance of selecting the right technology that aligns with our needs, as opting for Firebase's NoSQL database proved to be a challenge for the nature of the application. We also realized that having a clear definition of the access pattern at the outset is crucial as our development and design timelines overlapped. This led to having to manually manage CRUD operations on related endpoints individually every time."
                    niceToHaves="With more time we wanted to incorporate different account types for organizers and users, a validation system for accounts to build user trust, a detailed questionnaire during user account creation for more personalized resource recommendations, and a live update feature for food banks to update their profiles on the map in real-time to ensure users receive the most current information available."
                    prj1="/assets/images/f4-InnotaTech.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f3-Dowco.png" />
            </div>
            <div v-if="artifactId == 'EvolveSite'">
                <ArtifactRight heroImage="/assets/images/f1-Evolve.png" siteLink="https://evolve-website-a0510.web.app/"
                    context="At Evolve Branding, and later as a freelancer during the school year, I helped develop their new agency site using Flutter. The project started a few years prior, with the initial design language and a few page designs confirmed. Although various developers had worked on it previously, only minor features had been created. There was a need for more progress so additional pages had to be designed and developed, as well as features that needed to be updated. I worked with another developer remotely, reported to the CEO for regular check-ins and made significant progress to deliver a functional aesthetically pleasing site for the agency."
                    :technologies="['Flutter', 'Firebase', 'Android Studios']"
                    demoVideo="https://www.youtube.com/embed/eCuiXQdurKY"
                    challengeBig="Despite a lack of experience in Dart or Flutter, through online resources, I was able to learn and work on the Evolve Branding project effectively. "
                    challengeSmall="Although I had no prior knowledge of coding in Dart or using the Flutter framework, I taught myself and quickly gained enough proficiency to contribute to the project. I designed and developed additional pages such as the all works, case study page template, and mega menu. I also made sure that all pages were responsive, ensuring optimal user experience across all devices. To maintain communication and provide regular updates, I worked with the CEO and another developer through Github, Slack, and Discord. This allowed us to collaborate effectively and ensure that the project was progressing on track and to the satisfaction of the CEO."
                    solutionBig="Due to unfamiliarity with the language and framework, disorganized code base, and time constraints, I encountered obstacles but overcame and learned from them."
                    solutionSmall="While developing the web app, I encountered several challenges. Firstly, since I was not as familiar with the language and framework used, it took longer to find solutions to certain problems, but this also allowed me to learn and grow. Secondly, the code base lacked structure and coding standards as it had been previously handled by different developers, making it challenging to work with and maintain consistency. Finally, the need to make progress quickly resulted in additional difficulties while working with the code."
                    img1="/assets/images/Evolve/e-2.png" img2="/assets/images/Evolve/e-3.png"
                    img3="/assets/images/Evolve/e-4.png" img4="/assets/images/Evolve/e-1.png"
                    takeawaysBig="Regular communication, establishing coding standards, and seeking help when needed are essential lessons learned from the project."
                    takeawaysSmall="Throughout the project, I learned the importance of regular communication and timely updates to all parties involved to ensure that everyone is on the same page. Additionally, having a common coding standard in place would have greatly eased the development process and made maintenance much simpler. I also realized the benefits of asking for help when needed, as this helped to speed up the workflow and allowed me to learn from my colleagues. Overall, these takeaways were invaluable and will be helpful in future projects."
                    niceToHaves="Unfortunately, due to a heavy workload with school, I had to stop freelancing on the project, but I would have loved to continue working on all the individual case study pages, menu pages, and perfecting the responsiveness of the site. With additional time, I would have also prioritized refactoring and reorganizing the codebase to make it more manageable for future developers."
                    prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f3-Dowco.png"
                    prj3="/assets/images/f1-Evolve.png" />
            </div>
            <div v-if="artifactId == 'DowcoConsultants'">
                <ArtifactRight heroImage="/assets/images/f3-Dowco.png" siteLink="https://www.dowco.com/"
                    context="During my internship at Evolve Branding, I was involved in a project for one of their major clients, The Dowco Group of Companies. Dowco is a renowned detail engineering firm that has contributed to some of the world's most famous buildings, including the One World Trade Center, the Walt Disney Concert Hall, and Hudson Yards. Evolve had previously helped Dowco rebrand their business, but it has been a few years since their last website update. For this project, I was tasked to update the homepage and mega menu to better reflect the scope of their business and provide a more modern, clean user experience. We worked closely with Dowco to deliver a website that accurately represented their brand and showcased their impressive portfolio of work."
                    :technologies="['HTML', 'SCSS', 'jQuery']" demoVideo="https://www.youtube.com/embed/xFAafo2JlCs"
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
            <div v-if="artifactId == 'InnotaTechnologies'">
                <ArtifactRight heroImage="/assets/images/f4-InnotaTech.png" inProgress="true" siteLink=""
                    context="In my last semester at BCIT, I participated in the ISSP(Industry Sponsored Student Projects) program in a team of four classmates. We chose to work with Innota Technologies, a startup that aims to develop an educational note-taking app with a Figma-like interface. Together, we scoped out an MVP that was feasible within the given timeline and added additional features with any remaining time. After discussions with the client, we focused on building out the main note-taking functionality for phase 1, which included a split-screen with one side as the PDF reader and the other as a canvas. The scope was limited to restricting uploads to PDFs only and focusing on the desktop browser version, although we made it responsive with the extra time. Since this was a new project, we had to start from scratch with no existing design or prototype. We worked in a SCRUM-like setting, using Trello and Slack, and met weekly with the client to provide updates and ensure that we were on track with the project's direction."
                    :technologies="['React', 'MVC', 'Mongodb', 'Docker']"
                    demoVideo="https://www.youtube.com/embed/sHSZF0v8yE8"
                    challengeBig="The project utilizes javascript/React libraries to create a platform where users can upload and highlight sections on PDF files, with the sections showing up as notes on a Figma-like canvas that serves as a mind map workspace, where all changes are saved in a MongoDB database and Dockerized."
                    challengeSmall="We began by researching and testing various javascript/React libraries that could speed up the development process. After careful consideration, we selected a few libraries, which we utilized to develop the prototype we designed in Figma. On the left PDF side of the application, the user can upload or drag and drop PDF files into the designated area, where they can highlight sections to add notes that appear on the right side of the screen. The right canvas side of the application displays the highlight notes, which can be scrolled back to in the PDF section. The canvas top menu provides a range of functionalities, including search, show all connections, delete connections, create comments, pan mode, undo/redo, and a brush tool for freehand drawing. For comments, there are two pop-up menus: the context menu enables users to delete, clone, create connections to other notes, and show a link back to the pdf, while the comment editor menu allows users to update the color, fonts, and structure of the comment. The slider in the center of the screen can adjust the viewport size of each section so the user can toggle between full or partial screen modes. Finally, all changes made by the user are saved in a MongoDB database, and the entire application is Dockerized per the client's request for portability across machines."
                    solutionBig="Unfamiliar libraries and technology, figuring out design and user experience with changing opinions while developing, and restrictions on libraries were the project's main challenges."
                    solutionSmall="One of the main challenges we faced during this project was the lack of familiarity with the libraries and some of the technology we used, which required us to learn how to implement the desired features and test the limits of these new tools during the process. Another challenge was figuring out a good design and user experience while navigating through varying opinions and changes. Additionally, since we relied on libraries that were built upon other libraries or HTML elements, we faced restrictions on what was possible to customize, prompting us to duplicate some of the source code into our own project files and adjusting them to fit our needs to ensure that the functionality would remain the same even if the packages update in the future."
                    img1="/assets/images/InnotaTech/it-3.png" img2="/assets/images/InnotaTech/it-6.png"
                    img3="/assets/images/InnotaTech/it-2.png" img4="/assets/images/InnotaTech/it-4.png"
                    takeawaysBig="Effective communication, awareness of limitations in using existing libraries, understanding and supporting the team, taking initiative, and positive energy were key to a successful project outcome."
                    takeawaysSmall="Frequent and honest communication is necessary for ensuring that everyone is on the same page and that tasks are completed efficiently. Also, while existing libraries can be helpful for faster iterations, they may come with limitations and issues that require more effort to solve down the line. In addition, I learned the importance of understanding each team member's strengths and weaknesses, self-assigning tasks that are interesting to each person, supporting each other, and maintaining a positive outlook. These factors were essential in creating a great team dynamic and working collaboratively towards a successful project outcome. By acknowledging and utilizing each member's unique skills and perspectives, we were able to overcome challenges and create a cohesive final product."
                    niceToHaves="While Phase 1 of the project was the main focus for our team, later versions will include features that provide even more value to its users. One of these is the ability to download all of the canvas notes in a formatted document, making it easy for users to review and study the material. Another feature is a workspace where users can see all of the documents they have uploaded to the platform, providing a central location for accessing their work. In the further future, Innota aims to include collaborative multi-user for students and analytic features as a valuable tool for educators to tailor instruction and improve learning outcomes."
                    prj1="/assets/images/f2-LocalToMe.png" prj2="/assets/images/f1-Evolve.png"
                    prj3="/assets/images/f3-Dowco.png" />
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
    /* background-color: var(--text-color); */
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