import Lottie from "lottie-react";

import loader from '../../assets/lottieJson/loading.json';
import { LoaderContainer } from "../../containers/Loading";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie loop autoPlay animationData={loader} />
    </LoaderContainer>
  );
};

