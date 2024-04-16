<script>
import FooterContent from "./public/components/footer.coponent.vue";
import {CountryApiService} from "./country/services/country-api.service.js";
import {Country} from "./country/model/country.entity.js";
import CountryCard from "./country/components/country-card.component.vue";
import MenuContent from "./public/components/menu-content.component.vue";

export default {
  name: "App",
  components:{MenuContent, CountryCard, FooterContent},
  data(){
    return{
sidebarVisible:false,
      countries:[],
      pais: Object,
      errors:[],
      countryApi:new CountryApiService()
    }
  },
  created() {
    this.getCountryByNames('peru');
  },
  methods: {
    //counstruir pais a partir de los datos de respuesta
    buildCountryFromResponseData(countrie) {
      //name, officialName, currency, capital, region, subregion, languages, area, population, flag, coatOfArms
      let lenguage = Object.values(countrie.languages).join(', ')
      return new Country(
          countrie.name.common,
          countrie.name.official,
          countrie.currencies.PEN.name,
          countrie.capital[0],
          countrie.region,
          countrie.subregion,
          lenguage,
          countrie.fifa,
          countrie.population,
          countrie.flags.png,
          countrie.coatOfArms.png
      )
    },
    getCountryByNames(name) {
      this.countryApi.getCountryByName(name)
          .then(response => {
            //response.data es un array de objetos de un solo elemento
            //quiero devolver el objeto de ese elemento a peru
            let peru = response.data[0];
            this.pais = this.buildCountryFromResponseData(peru);
          }).catch(e => this.errors.push(e));
    }
  }
}
</script>

<template>
  <menu-content></menu-content>
  <div>
    <country-card :country="pais"></country-card>
  </div>
  <footer-content></footer-content>
</template>

<style scoped>
</style>