<script setup lang="ts">
import { graphql } from '@/gql'
import { Tags_Enum } from '@/gql/graphql'
import { useQuery } from '@urql/vue'
import { computed, ref } from 'vue'

defineProps<{
  msg: string
}>()

const selectedTag = ref(Tags_Enum.Backlog)

const tagsQuery = useQuery({
  query: graphql(/* GraphQL */ `
    query Tags {
      tags {
        value
        comment
      }
    }
  `)
})

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
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <select v-model="selectedTag">
      <option disabled value="">Please select one</option>
      <option v-for="tag in tagsQuery.data?.value?.tags" :key="tag.value" :value="tag.value">
        {{ tag.comment }}
      </option>
    </select>
    <ul>
      <li v-for="ticket in ticketsQuery.data?.value?.tickets" :key="ticket.ticket_id">
        {{ ticket.name }}
        <h4 v-for="xrefTag in ticket.xref_ticket_tags" :key="xrefTag.tag.value">
          {{ xrefTag.tag.comment }}
        </h4>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
