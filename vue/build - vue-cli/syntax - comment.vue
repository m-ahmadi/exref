<!--
summary:
	inside template:               html comment
	inside script:                 javascript comment
	inside style:                  css comment
	outside template/script/style: html comment
-->

<template>
	<!-- html style for inside template tag -->
	
  <h1>Not commented out</h1>
  <!-- <h2>commented out</h2> -->
</template>

<!-- html style for outside template/script/style tags -->

<script>
// js style for inside script tag
/* */

var a = "b";
</script>

<style>
/* css style for inside style tag */
#app {
	background: red;
}
</style>