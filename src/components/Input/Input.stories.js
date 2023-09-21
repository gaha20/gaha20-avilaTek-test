import { Input } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    property1: {
      options: ["area", "default", "filled", "focus", "labeless"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "area",
    className: {},
    barClassName: {},
    overlapGroupClassName: {},
    divClassName: {},
    text: "Lorem ipsum",
  },
};
