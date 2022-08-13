.vue files translate to Vue.component() calls

only one <template/> block allowed per each .vue file
<template></template>

only one <script/> block allowed per each .vue file
<script>
	import './foo.scss';          // scss another way
	export default {...?vmOptions} // must export object
</script>

multiple <style/> blocks are allowed
<style></style>                   global
<style scoped></style>            scoped (only this component)
<style module|module="a"></style> module
<style lang="scss"></style>       preprocessor
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
separate files

relative paths must start with ./
paths not starting with ./ refer to node_modules

<template src="./template.html"></template>
<script src="./script.js"></script>

<style src="./style.css"></style>
<style src="./style.css" scoped|module|module="a"></style>
<style lang="scss">
	@import './foo.scss';
</style>
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
comments

<!--
	inside template:               html comment
	inside script:                 javascript comment
	inside style:                  css comment
	outside template/script/style: html comment
-->

<!-- html style for outside template/script/style tags -->

<template>
	<!--  -->
</template>

<script>
	//
	/* */
</script>

<style>
	/*  */
</style>
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@