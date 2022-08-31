import { SelectBox } from "components";
export default {
  title: "figtion/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder5",
  variant: "OutlineGray401",
  size: "sm",
  className: "w-[300px]",
};
