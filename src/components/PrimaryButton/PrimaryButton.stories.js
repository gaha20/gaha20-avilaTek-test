import { PrimaryButton } from ".";

export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    property1: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "disabled",
    className: {},
    divClassName: {},
    text: "Title",
  },
};
