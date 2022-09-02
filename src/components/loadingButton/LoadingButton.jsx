import Images from "../../media/images";

const LoadingButton = () => {
  return (
    <div className="grid place-content-center">
      <img src={Images.btn_loading} alt="" className="h-6 w-6" />
    </div>
  );
};
export default LoadingButton;
