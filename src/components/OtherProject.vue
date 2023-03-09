<script setup>

</script>

<template>
    <div class="card_container">
        <div class="social">
            <a v-if="githubLink" :href="githubLink" target="_blank"> <svg width="32" height="20" viewBox="0 0 32 33"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.46176 0.543692C9.72653 0.963023 10.9297 1.54268 12.0407 2.26788C13.6096 1.87542 15.2229 1.67826 16.8423 1.68106C18.5147 1.68106 20.1281 1.88546 21.6405 2.26623C22.751 1.54174 23.9537 0.962637 25.2178 0.543692C26.3916 0.15303 28.064 -0.479943 29.0577 0.59644C29.7314 1.32831 29.8998 2.5547 30.0194 3.49097C30.1541 4.53603 30.1861 5.89758 29.8324 7.24924C31.1849 8.9586 32 10.9976 32 13.2196C32 16.5856 30.1373 19.5081 27.3803 21.5323C26.0534 22.4942 24.5818 23.2483 23.0182 23.7675C23.3786 24.5752 23.5791 25.4686 23.5791 26.4065V31.3516C23.5791 31.7888 23.4016 32.2081 23.0858 32.5172C22.7699 32.8263 22.3415 33 21.8949 33H11.7897C11.343 33 10.9147 32.8263 10.5988 32.5172C10.283 32.2081 10.1055 31.7888 10.1055 31.3516V29.7181C8.49713 29.911 7.14809 29.7395 6.00116 29.2632C4.80201 28.7654 3.96665 27.9939 3.33845 27.2554C2.74225 26.5565 2.09215 24.9807 1.15237 24.6741C0.942481 24.6057 0.748411 24.4975 0.581242 24.3557C0.414074 24.2139 0.277081 24.0412 0.178085 23.8476C-0.0218461 23.4566 -0.0548693 23.0038 0.08628 22.5889C0.227429 22.174 0.531189 21.831 0.930735 21.6354C1.33028 21.4397 1.79289 21.4074 2.21678 21.5455C3.33845 21.9114 4.06939 22.7027 4.56959 23.3389C5.37801 24.3609 6.03484 25.6961 7.31482 26.2285C7.84198 26.4478 8.61502 26.5912 9.82427 26.4296L10.1055 26.3736C10.1087 25.4765 10.2996 24.5896 10.6664 23.7675C9.10274 23.2483 7.63113 22.4942 6.30431 21.5323C3.54729 19.5081 1.68458 16.5872 1.68458 13.2196C1.68458 11.0009 2.49804 8.96354 3.84708 7.25584C3.4934 5.90418 3.52371 4.53933 3.65845 3.49262L3.66687 3.42998C3.78981 2.47063 3.93297 1.3415 4.62012 0.59644C5.61379 -0.479943 7.28788 0.154678 8.46007 0.545341L8.46176 0.543692Z"
                        class="social_icon" />
                </svg></a>
            <a v-if="siteLink" :href="siteLink" target="_blank"><svg width="32" height="15" viewBox="0 0 22 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
                        class="social_icon" />
                </svg></a>
        </div>
        <div class="card_info">
            <div> <span class="projectTitle">{{ title }}</span>
                <p>{{ description }}</p>
            </div>
            <div class="tech">
                <span v-for="tech in technologies">
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OtherProject",
    props: ["githubLink", "siteLink", "title", "description", "technologies"]
};
</script>

<style scoped>
.card_info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

span.projectTitle {
    font-family: "Lato-Thin", Avenir, Helvetica, Arial, sans-serif;
    opacity: 100%;
    font-size: 3.5rem;
}

h2 {
    margin-top: 5%;
}

p {
    margin: 1% 0 5% 0;
}

.tech {
    display: flex;
    flex-wrap: wrap;
}

span {
    font-family: "Lato-regular", Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    opacity: 50%;
    margin-right: 5%;
}

.social {
    display: flex;
    justify-content: end;
}

a {
    margin-left: 20px;
}

.social_icon {
    fill: var(--theme-color);
    transition: all 0.3s ease-in-out;
}

.social_icon:hover {
    opacity: 50%;
}

img {
    color: var(--theme-color);
}

.card_container {
    background-color: black;
    opacity: 50%;
    color: var(--theme-color);
    padding: 3% 3% 5% 3%;
    width: 32%;
    margin-top: 5%;
    transition: all 0.3s ease-in-out;
}

.card_container:hover {
    opacity: 100%;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.5);
    transform: translate(0, -4px);
}

@media only screen and (max-width: 1122px) {
    .card_container {
        padding: 3% 3% 6% 3%;
        width: 48%;
        margin-top: 5%;
    }
}

@media only screen and (max-width: 768px) {
    .card_container {
        padding: 7%;
        width: 100%;
    }
}
</style>