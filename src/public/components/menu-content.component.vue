<script>
export default {
  name: "menu-content"
}
</script>

<template>
  <pv-toolbar style=" padding: 1rem 1rem 1rem 1.5rem; background:red ">
    <template #start>
      <div class="flex align-items-center gap-2">
        <h3>About Peru</h3>
        <pv-button label="Files" text plain />
        <pv-button label="Edit" text plain />
        <pv-button label="View" text plain />
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <pv-button label="Share" severity="contrast" size="small" />
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>