
<template>
    <div class="contact">
        <span v-motion-fade-visible>Let's Connect</span>
        <div v-motion-fade-visible class="contact_text_container">
            <h3>Whether just a chat or work inquiry, my inbox is always open and I’d love to connect. Thank you for
                making
                this far, have a great day! </h3>
        </div>
        <div v-motion :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }" class="contact_icons">
            <a href="https://github.com/phoenixlai833" target="_blank"><img class="social"
                    src="/assets/icons/github.svg" /></a>
            <a href="https://www.linkedin.com/in/phoenix-lai/" target="_blank"><img class="social social_middle"
                    src="/assets/icons/linkedin.svg" /></a>
            <a href="mailto:phoenixlai833@gmail.com"><img class="social" src="/assets/icons/email.svg" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
};
</script>

<style scoped>
span {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    font-size: 5rem;
}

.social_middle {
    margin: 0 5vw;
}

.social {
    height: 30px;
}

.contact_text_container {
    width: 60%;
    margin: 2vw 0 4vw 0;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10%;
}

@media only screen and (max-width: 768px) {
    span {
        font-size: 3.2rem;
    }

    .social {
        height: 20px;
    }

    .contact_text_container {
        width: 75%;
        margin: 2vw 0 6vw 0;
    }
}
</style>