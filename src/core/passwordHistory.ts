import { ref } from "vue";

export type PasswordHistoryValue = {
  timestamp: number;
  input: string;
  output: string;
};

const load = (): PasswordHistoryValue[] => {
  const item = localStorage.getItem("passwordHistory");
  if (item === null) return [];

  return JSON.parse(item);
};

export const passwordHistory = ref<PasswordHistoryValue[]>(
  new Proxy<PasswordHistoryValue[]>(load(), {
    set: function (target, property, value, receiver) {
      console.log(`ref: ${value}`);

      const result = Reflect.set(target, property, value, receiver);

      localStorage.setItem("passwordHistory", JSON.stringify(passwordHistory.value));

      return result;
    },
  })
);
