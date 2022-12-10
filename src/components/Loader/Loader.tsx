import { LoaderContainer } from "../../containers/Loading";
import loader from '../../assets/lottieJson/loading.json';
import Lottie from "lottie-react";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie loop autoPlay animationData={loader} />
    </LoaderContainer>
  );
};

