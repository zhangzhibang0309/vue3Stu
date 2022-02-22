<script>
import { ref } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  setup() {
    let counter = ref(0);

    const increment = () => counter.val++;
    const decrement = () => counter.value--;

    return () => {
      return (
        <div>
          <h2>当前计数： {counter.value}</h2>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          <HelloWorld>{{ default: (props) => <button>我是按钮</button> }}</HelloWorld>
        </div>
      );
    };
  },
};
</script>