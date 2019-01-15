<template>
  <v-sheet :elevation="2" :class="$style.sheetStyle">
    <v-list>
      <v-list-tile :key="member.id" avatar @click="openURL(member.html_url)">
        <v-list-tile-avatar>
          <img :src="member.avatar_url">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="member.login"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-sheet>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";

interface Props {
  member: PropOptions<Member>;
}

export default Vue.extend({
  name: "MemberRow",
  props: { member: {} } as Props,
  methods: {
    openURL: function(url: string) {
      window.open(url);
    }
  }
});
</script>

<style module>
.sheetStyle {
  width: 400px;
  padding: 0 16px;
  cursor: pointer;
  margin: 10px 0px 0px 16px;
}

.column {
  width: 33.33%;
  text-align: center;
}
</style>
