<template>
  <v-app>
    <member-list-container/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberListContainer } from "./pages";

export default Vue.extend({
  name: "App",
  components: { MemberListContainer }
});
</script>
