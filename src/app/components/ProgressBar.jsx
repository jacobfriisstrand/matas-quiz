import { Steps } from "antd";
const items = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
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
