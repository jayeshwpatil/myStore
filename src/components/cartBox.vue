<template>
  <div  class="dropdown dropdown-start text-end">
      <button
        class="btn btn-success dropdown-toggle mx-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-cart4"></i>
        <span class="fw-bold mx-1">{{ cart.length }}</span>
      </button>

      <ul class="dropdown-menu shadow">
        <li
          v-for="(items, index) in cart"
          :key="index"
          class="d-flex px-3 py-1 border-bottom"
        >
          <div class="w-75">{{ items.name }}</div>
          <div class="fw-bold text-end w-25">{{ currency(items.price) }}</div>
        </li>
        <div
          class="fw-bold border border-success bg-success text-end px-3 py-2 text-white"
        >
          Total : {{ currency(cartTotal) }}
        </div>
      </ul>
    </div> 
    
</template>

<script>
export default {
  props: ["cart", "currency", "cartTotal"],
}
</script>

<style>

</style>