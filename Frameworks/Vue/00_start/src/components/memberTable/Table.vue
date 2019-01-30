<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Github's members directory</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-flex xs12 sm6 :class="$style.root">
      <v-text-field
        solo
        hide-details
        label="Organization name"
        class="mr-2"
        :class="$style.textField"
        v-model="organizationName"
      ></v-text-field>
      <v-select
        solo
        hide-details
        label="Rows per page"
        :class="$style.pageField"
        :items="pages"
        v-model="pageLimit"
      ></v-select>
    </v-flex>
    <v-flex xs12 sm6 class="pl-3 pt-2">
      <v-btn color="info" :loading="loading" :disabled="loading" @click="loadMembers">Load</v-btn>
      <v-btn color="error" @click="reset">Reset</v-btn>
    </v-flex>
    <member-row :api-response="apiResponse" @handle-paging="handlePaging" :offset="currentOffset"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberRow from "./Row.vue";
import { ApiResponse, createDefaultApiResponse } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberRow },
  data: () => ({
    loading: false,
    organizationName: "lemoncode",
    pageLimit: 5,
    currentOffset: 0,
    apiResponse: createDefaultApiResponse() as ApiResponse,
    pages: [
      { value: 5, text: "5" },
      { value: 10, text: "10" },
      { value: 15, text: "15" },
      { value: 20, text: "20" }
    ]
  }),
  methods: {
    loadMembers: function() {
      this.loading = true;

      if (this.organizationName.length > 0) {
        memberAPI
          .getAllMembers(
            this.organizationName,
            this.pageLimit,
            this.currentOffset
          )
          .then(apiResponse => {
            this.apiResponse = apiResponse;
          });
      }
    },
    reset: function() {
      this.organizationName = "";
      this.currentOffset = 0;
      this.apiResponse = createDefaultApiResponse();
    },
    handlePaging: function(page: number) {
      this.currentOffset = this.pageLimit * (page - 1);
      this.loadMembers();
    }
  },
  watch: {
    apiResponse() {
      this.loading = false;
    },
    organizationName() {
      this.currentOffset = 0;
      this.apiResponse = createDefaultApiResponse();
    }
  }
});
</script>

<style module>
.root {
  padding: 20px 0 0 20px;
  display: inline-flex;
}

.textField {
  width: 250px;
}

.pageField {
  width: 140px;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
