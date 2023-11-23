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
          colorPrimary: "#F090B3",
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
          responsive={false}
        />
      </div>
    </ConfigProvider>
  </>
);
export default ProgressBar;
