import { Service } from ".";

export default {
  title: "Components/Service",
  component: Service,
  argTypes: {
    property1: {
      options: ["w-CTA", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "w-CTA",
    text: "Peluquería",
  },
};
