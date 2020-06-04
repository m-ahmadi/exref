.vue files translate to Vue.component() calls

<template>
	<!-- markup -->
</template>

<script>
	// js here
</script>

<style>
	/* css here*/
</style>

<style lang="scss">
	// scss here
</style>

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
separate files

<template>
  <div>This will be pre-compiled</div>
</template>

<script src="./my-component.js"></script>

<style src="./my-component.css"></style>        global
<style scoped src="./my-component.css"></style> scoped (limit css to this component only)
<style lang="scss">
	@import './foo.scss';
</style>