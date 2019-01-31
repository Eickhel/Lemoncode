<template>
  <div>
    <v-flex xs12 sm6 :class="$style.root">
      <v-text-field
        solo
        hide-details
        label="Organization name"
        class="mr-2"
        :class="$style.textField"
        v-model="orgName"
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
      <v-btn color="error" @click="resetData">Reset</v-btn>
    </v-flex>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LookUpComponent",
  props: {
    loading: Boolean,
    organizationName: String,
    method: { type: Function }
  },
  data: function() {
    return {
      orgName: this.organizationName,
      pageLimit: 5,
      pages: [
        { value: 5, text: "5" },
        { value: 10, text: "10" },
        { value: 15, text: "15" },
        { value: 20, text: "20" }
      ]
    };
  },
  methods: {
    loadMembers: function() {
      this.$emit("load-members");
    },
    resetData: function() {
      this.orgName = "";
      this.pageLimit = 5;
      this.$emit("reset-data");
    }
  },
  watch: {
    orgName: function(value) {
      this.$emit("org-name-change", value);
    },
    pageLimit: function(value) {
      this.$emit("page-value-change", value);
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
</style>
