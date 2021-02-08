<template>
  <main>
    <h2>{{title}}</h2>
    <ul>
      <li>Survey links</li>
      <li>Other links</li>
      <li>Checker</li>
      <li>Shell Access</li>
    </ul>
  </main>
</template>

<script>
export default {
  computed:{
    sn(){
      return this.$route.params.sn
    },
    project(){
      return this.$store.state.projects.find(item=>item.sn===this.sn)
    },
    title(){
      return `${this.project.jn} - ${this.project.name} - C${this.project.sn}`
    }
  }
}
</script>