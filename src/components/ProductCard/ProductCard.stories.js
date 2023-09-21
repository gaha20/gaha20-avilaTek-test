import { ProductCard } from ".";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  argTypes: {
    property1: {
      options: ["adding", "default", "horizontal", "w-button", "w-category", "responsive", "paw-rating", "related"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "adding",
    rating: "/img/rating-25.svg",
  },
};
