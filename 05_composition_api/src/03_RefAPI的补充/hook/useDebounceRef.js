import { customRef } from "vue";
// 自定义ref
export default function (value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖，实现响应式
        track();
        return value;
      },
      set(newValue) {
        // 输入的时候 做个防抖 延迟
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
