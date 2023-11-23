import { Steps } from "antd";
const items = [
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
];
const ProgressBar = ({ step }) => (
  <>
    <Steps
      current={step - 1}
      size="small"
      labelPlacement="vertical"
      items={items}
    />
  </>
);
export default ProgressBar;
