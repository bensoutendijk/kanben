<script setup lang="ts">
import type { Tags_Enum } from "@/gql/graphql";

import { computed, ref } from "vue";
import { graphql } from "@/gql";
import { useQuery } from "@urql/vue";

const selectedTag = ref<Tags_Enum>();

const tagsQuery = useQuery({
  query: graphql(/* GraphQL */ `
    query Tags {
      tags {
        value
        comment
      }
    }
  `)
});

const ticketsQuery = useQuery({
  query: graphql(/* GraphQL */ `
    query Tickets($where: tickets_bool_exp) {
      tickets(where: $where) {
        ticket_id
        name
        description
        created_at
        updated_at
        xref_ticket_tags {
          tag {
            value
            comment
          }
        }
      }
    }
  `),
  variables: computed(() => ({
    where: {
      xref_ticket_tags: {
        tag_value: {
          _eq: selectedTag.value
        }
      }
    }
  }))
});
</script>

<template>
  <div class="home-container">
    <select v-model="selectedTag">
      <option disabled value="">Please select one</option>
      <option v-for="tag in tagsQuery.data?.value?.tags" :key="tag.value" :value="tag.value">
        {{ tag.comment }}
      </option>
    </select>
    <ul>
      <li v-for="ticket in ticketsQuery.data?.value?.tickets" :key="ticket.ticket_id">
        {{ ticket.name }}: <span style="font-size: 0.75em">{{ ticket.description }}</span>
        <ul>
          <li v-for="xrefTag in ticket.xref_ticket_tags" :key="xrefTag.tag.value">
            {{ xrefTag.tag.comment }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.home-container {
  height: 100%;
}
</style>
