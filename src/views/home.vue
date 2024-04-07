<template>
  <section>
    <cartBox :cart="cart" :currency="currency" :cartTotal="cartTotal"></cartBox>

    <div class="row">
      <div class="col-sm-3 text-start">
        <div class="border p-3 rounded">
          <h5 class="fw-bold">Filters </h5>
          <hr />
          <div class="form-label text-center">
            Price <strong>0</strong> to <strong>{{ max }}</strong> &#8377;
          </div>
          <div class="d-flex justify-content-between">
            <div>&#8377; 0</div>
            <div>&#8377; {{ maxProductPrice }}</div>
          </div>
          <input
            v-model.number="max"
            type="range"
            name=""
            class="form-range"
            min="0"
            :max="maxProductPrice"
          />
          <hr />
        </div>
      </div>

      <div class="col-sm-9 text-start">
        <topFilter  :filterProducts="filterProducts" v-model="displayLabels" @setSort="findsort"></topFilter>    
        <hr />

        <div
          v-for="items in filterProducts"
          :key="items.id"
          id="display-list"
          class=" p-3"
        >
          <div
            v-if="items.price <= Number(max)"
            class="row"
            style="background: #f1f1f1"
          >
            <div class="col-sm-2 position-relative">
              <img
                class="img-fluid d-block m-4 rounded shadow"
                :src="items.imgSrc"
                :alt="items.name"
              />
              <span
                v-if="items.price >= 800 && displayLabels"
                class="badge bg-success priceHintLabel"
                >Primer</span
              >
              <span
                v-else-if="
                  items.price < 800 && items.price > 200 && displayLabels
                "
                class="badge bg-primary priceHintLabel"
                >Value</span
              >
              <span
                v-else-if="items.price <= 200 && displayLabels"
                class="badge bg-danger priceHintLabel"
                >Sale</span
              >
            </div>
            <div class="col-sm-10 text-start p-5">
              <h4 class="fw-bold">{{ items.name }}</h4>
              <p>{{ items.description }}</p>
              <div class="fw-bold mx-1">
                &#8377; {{ currency(items.price) }}
              </div>
              <div class="text-start">
                <div class="mt-3">
                  <button class="btn btn-sm btn-success bg-success-subtle text-black mx-2"
                    @click="addToCart(items)"><i class="bi bi-cart4"></i> Add to Cart</button>
                  <button class="btn btn-sm btn-success mx-2"
                    @click="checkOut(items)"><i class="bi bi-lightning-fill"></i> Buy Now </button>
                  <button class="btn btn-sm btn-outline-success mx-2" 
                    @click="wishlist(items)"><i class="bi bi-suit-heart"></i>add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import cartBox from '@/components/cartBox.vue'
import topFilter from '@/components/topFilter.vue'
export default {
  data() {
    return {
      cks: true,
      displayLabels: true,
      max: 700,
      maxProductPrice: 1000,
      cart: [],
      displayCart: false,
      products: [],
      checkOut: [],
      wishList:[]
    }
  },
  components: {
    cartBox,
    topFilter
  },
  created() {
    this.fetchData()
  },
  beforeUpdate() {
    this.maxVal()
  },
  computed: {
    filterProducts() {
      return this.products.filter(item => item.price <= this.max)
    },
   
    cartTotal() {
      //return this.cart.length
      return this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
    }
  },
  methods: {
    currency(value) {
      return `${Number.parseFloat(value).toFixed(2)}`
    },
    addToCart(product) {
      this.cart.push(product)
    },
    addToCheckout(product){
      this.checkOut.push(product)
    },
    addToWishlist(product){
      this.wishList.push(product)
    },

    maxVal() {
      //console.log(this.products);
      this.maxProductPrice = Math.max(
        ...this.products.map(product => product.price)
      )
    },
    async fetchData() {
      try {
        const response = await axios.get(
          'https://jayeshwpatil.github.io/jsonDataFiles/shoppingCart.json'
        )
        this.products = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    findsort(data){
      if(data == "LtoH") {
        this.products = this.products.sort((a,b)=> a.price - b.price);
      }
      else if(data == "HtoL"){
        this.products = this.products.sort((a,b)=> b.price - a.price);
      }
     
    }
  }
}
</script>

<style>
.priceHintLabel {
  position: absolute;
  right: -5px;
  top: 30px;
}
.customSelect {
  min-width: 185px;
  padding: 2px 10px !important;
}
</style>
