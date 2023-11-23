import { Steps, ConfigProvider } from "antd";
const items = [
  {
    title: "Formål",
  },
  {
    title: "Præferencer",
  },
  {
    title: "Alder",
  },
  {
    title: "Hudtype",
  },
];
const ProgressBar = ({ step }) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#002643",
          colorText: "#002643",
        },
      }}
    >
      <div className="my-5 text-white">
        <Steps
          current={step - 1}
          size="small"
          labelPlacement="vertical"
          items={items}
        />
      </div>
    </ConfigProvider>
  </>
);
export default ProgressBar;
