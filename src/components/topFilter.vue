<template>
  <div
    class="px-3 fw-bold py-1 d-flex justify-content-between align-items-center"
  >
    <div>
      <span class="badge bg-success">{{ filterProducts.length }}</span> Result Found
      
    </div>
    <sortBy ></sortBy>
    <div>
      <!--{{ mainvalue }}-->
      <input
        name="maincheckbox"
        v-model="mainvalue"
        v-on:change="checkBoxValue()"
        class="form-check-input"
        type="checkbox"
        id="showLabels"
      />
      <label for="showLabels" class="mx-2">
        <span class="badge bg-dark"> Show Labels</span>
      </label>
    </div>
  </div>
</template>

<script>
import sortBy from '@/components/sortBy.vue'
export default {
  data() {
    return {
      mainvalue: this.modelValue,
      
    }
  },
  components: {
    sortBy
  },
  props: ['filterProducts', 'modelValue'],
  emits: ['update:modelValue'],
  methods: {
    checkBoxValue() {
      this.$emit('update:modelValue', this.mainvalue)
    },
    
  }
}
</script>

<style></style>
