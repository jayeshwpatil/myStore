<template>
  <div>
      <select class="form-select customSelect fw-bold" v-model="sortSetting" v-on:change="sortOption">
        <option selected value="">Sort By</option>
        <option value="LtoH">Price - Low to High</option>
        <option value="HtoL">Price - High to Low</option>
      </select> 
    </div>
</template>

<script>
export default {
data(){
    return{
        sortSetting : ""
    }
},
methods : {
    sortOption(){
        this.$parent.$emit("setSort",this.sortSetting)
    }
}
}
</script>

<style>

</style>