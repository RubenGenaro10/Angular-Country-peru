<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-card",
  props: {
    country: {
      type: Country,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :alt="country.name" :src="country.flag" />
    </template>
    <template #title>{{country.name}}</template>
    <template #subtitle>{{country.officialName}}</template>
    <template #content>
      <p><span>currency:</span>{{country.currency}}</p>
      <p><span>capital:</span>{{country.capital}}</p>
      <p><span>region:</span>{{country.region}}</p>
      <p><span>subregion:</span>{{country.subregion}}</p>
      <p><span>lenguages:</span>{{country.languages}}</p>
      <p><span>area:</span>{{country.area}}</p>
      <p><span>population:</span>{{country.population}}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <pv-button label="Cancel" severity="secondary" outlined class="w-full" />
        <pv-button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>