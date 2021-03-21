<template>
  <v-container class="content" fluid>
    <v-toolbar flat dense class="content-nav">

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Survey</v-tab>
          <v-tab>Other useful links</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-container>
</template>

<style scoped>
.content{
  height: 100%;
  padding:0;
}

.content-nav{
  border-bottom: 1px solid #e0e0e0;
}
</style>

<script>
export default {
  computed:{
    title(){
      return this.$route.params.sn
    }
  }
}
</script>
