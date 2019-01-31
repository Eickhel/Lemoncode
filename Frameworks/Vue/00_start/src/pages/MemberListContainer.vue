<template>
  <div>
    <header-component/>
    <look-up-component
      :loading="loading"
      :organization-name="organizationName"
      @org-name-change="setOrganizationName"
      @page-value-change="setPageLimit"
      @load-members="loadAllMembers"
      @reset-data="resetData"
    />
    <list-component
      :api-response="apiResponse"
      :offset="currentOffset"
      :page-limit="pageLimit"
      @handle-paging="handlePaging"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { HeaderComponent, LookUpComponent, ListComponent } from "./components";
import { ApiResponse, createDefaultApiResponse } from "../model/member";
import { memberAPI } from "../api/memberAPI";

export default Vue.extend({
  name: "MemberListContainer",
  components: { HeaderComponent, LookUpComponent, ListComponent },
  data: () => ({
    loading: false,
    organizationName: "lemoncode",
    pageLimit: 5,
    currentOffset: 0,
    apiResponse: createDefaultApiResponse() as ApiResponse
  }),
  methods: {
    loadMembers: function() {
      if (this.organizationName.length > 0) {
        this.loading = true;

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
    loadAllMembers: function() {
      this.currentOffset = 0;
      this.loadMembers();
    },
    setOrganizationName: function(value: string) {
      this.organizationName = value;
      this.currentOffset = 0;
      this.apiResponse = createDefaultApiResponse();
    },
    setPageLimit: function(value: number) {
      this.pageLimit = value;
    },
    resetData: function() {
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
    }
  }
});
</script>