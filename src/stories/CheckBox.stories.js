import { CheckBox } from "components";
export default {
  title: "figtion/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder2",
  variant: "OutlineGray401",
  size: "sm",
  inputClassName: "mr-1",
};
