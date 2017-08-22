<template>
  <form>
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input v-model="product.name" id="productName" type="text" class="form-control" maxlength="32" placeholder="Enter product name">
      </div>
      <div class="form-group">
        <label for="productDescription">Product Description
            <small class="text-muted">(optional)</small>
        </label>
        <textarea v-model="product.description" id="productDescription" class="form-control" rows="3" maxlength="128" placeholder="Enter product description"></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input v-model="product.price" id="price" type="number" class="form-control" placeholder="Enter price" number>
      </div>
      <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Save product</button>
  </form>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        onSubmit(){
            this.$emit('submit', this.product);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
