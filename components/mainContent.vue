<template>
    <div class="mainContent">
        <div class="leftColumn">
            <h1>The Witcher</h1>
            <div class="content">
                <PartialsInformations/>
                <PartialsStory/>
                <PartialsTrailers/>
                <PartialsFooter/>   
            </div>
        </div>
        <div class="rightColumn">
            <div class="poster">
                <img src="~/assets/img/poster.jpg" alt="">
                <div class="overlay"></div>
            </div>
            <nuxt-link to="/">
                <div class="play">
                    <img src="~/assets/img/play.svg" alt="" width="24" height="24">
                </div>
            </nuxt-link>
        </div>
    </div>
</template>