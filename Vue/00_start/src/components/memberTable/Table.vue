<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Github's members directory</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-flex xs12 sm6 md3 :class="$style.textField">
      <v-text-field label="Organization name" v-model="organizationName"></v-text-field>
      <v-btn color="info" :loading="loading" :disabled="loading" @click="loadMembers">Load</v-btn>
      <v-btn color="error" @click="reset">Reset</v-btn>
    </v-flex>

    <template v-for="member in members">
      <member-row :key="member.id" :member="member"/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberRow },
  data: () => ({
    loading: false,
    organizationName: "lemoncode",
    members: [] as Member[]
  }),
  methods: {
    loadMembers: function() {
      this.loading = true;
      getAllMembers(this.organizationName).then(members => {
        this.members = members;
      });
    },
    reset: function() {
      this.organizationName = "";
      this.members = [];
    }
  },
  watch: {
    members() {
      this.loading = false;
    }
  }
});
</script>

<style module>
.textField {
  padding: 20px;
}
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
