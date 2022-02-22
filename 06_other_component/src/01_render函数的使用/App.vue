<script>
import { h, ref } from "vue";
import HelloWorld from "./HelloWorld.vue"

export default {
  render() {
    return h(HelloWorld,null,{
      default: props => h("span",null,`app传入到helloworld中的内容: ${props.name }`)
    })
  },
};
</script>

<style></style>
