<template>
  <div>
    <div :key="member.id" v-for="member in apiResponse.members">
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
    </div>

    <div :class="$style.pagination">
      <v-pagination
        v-if="this.apiResponse.pagesCount > 1"
        :class="$style.pagination"
        :value="page"
        :length="pagesCount"
        :total-visible="7"
        @input="handlePaging"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ApiResponse } from "../../model/member";

export default Vue.extend({
  name: "ListComponent",
  props: {
    apiResponse: {} as PropOptions<ApiResponse>,
    offset: Number,
    pageLimit: Number,
    method: { type: Function }
  },
  data: function() {
    return {
      page: 1
    };
  },
  computed: {
    pagesCount: function() {
      return Number(this.apiResponse.pagesCount);
    }
  },
  methods: {
    openURL: function(url: string) {
      window.open(url);
    },
    handlePaging: function(page: number) {
      this.page = page;
      this.$emit("handle-paging", page);
    }
  },
  watch: {
    offset: function(val) {
      this.page = val == 0 ? 1 : this.page;
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

.pagination {
  max-width: 435px;
  padding: 10px 16px;
  text-align: center;
}
</style>

