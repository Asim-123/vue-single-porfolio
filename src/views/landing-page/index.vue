<template>
  <div>
    <appHeader />
    <appHero/>
    <appAbout />
    <appResume/>
    <appServices/>
    <appSkills/>
    <appHire/>
    <appContact/>
    <appFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appHeader from "../../components/app-header.vue";
import appHero from "../../components/app-hero.vue";
import appAbout from "../../components/app-aboutme.vue"
import appResume from "../../components/app-resume.vue"
import appServices from "../../components/app-services.vue"
import appSkills from "../../components/app-skills.vue"
import appHire from "../../components/app-hireme.vue"
import appContact from "../../components/app-contact.vue"
import appFooter from "../../components/app-footer.vue"
export default defineComponent({
    name : "homePage",
  components: {
    appHeader,
    appHero,
    appAbout,
    appResume,
    appServices,
    appSkills,
    appHire,
    appContact,
    appFooter,
  },
});
</script>

<style>
body {
  background-color: #000000;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
