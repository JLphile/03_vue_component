export default {
  data() {
    return {
      message:'Hello World'
    }
  },
  created() {
    console.log('message created',this.message)
  }
}