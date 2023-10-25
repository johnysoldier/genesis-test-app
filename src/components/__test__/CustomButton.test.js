import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import CustomButton from "../CustomButton.vue";

describe("CustomButton", () => {
  test("disabled button", () => {
    const choice = "Не выбрано";
    const wrapper = mount(CustomButton, {
      props: { choice },
    });
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
  });

  test("not disabled button", () => {
    const choice = "Сделка";
    const wrapper = mount(CustomButton, {
      props: { choice },
    });
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(false);
  });
});
