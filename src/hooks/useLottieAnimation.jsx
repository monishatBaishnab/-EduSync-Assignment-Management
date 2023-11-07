import { useLottie } from "lottie-react";
import collaborationData from '../assets/animation/Animation - 1699168639767.json';
import resourceData from '../assets/animation/Animation - 1699168779061.json';
import markingData from '../assets/animation/Animation - 1699168979754.json';
import managementData from '../assets/animation/Animation - 1699169096665.json';
import loadingData from '../assets/animation/loading.json';
import errorData from '../assets/animation/error.json';

const useLottieAnimation = () => {
    const collaborationOption = {
        animationData: collaborationData,
        loop: true
    };
    const resourceOption = {
        animationData: resourceData,
        loop: true
    };
    const markingOption = {
        animationData: markingData,
        loop: true
    };
    const managemenOption = {
        animationData: managementData,
        loop: true
    };
    const loadingOption = {
        animationData: loadingData,
        loop: true
    };
    const errorOption = {
        animationData: errorData,
        loop: true
    };


    const collaboration = useLottie(collaborationOption);
    const resource = useLottie(resourceOption);
    const marking = useLottie(markingOption);
    const managemen = useLottie(managemenOption);
    const loading = useLottie(loadingOption);
    const error = useLottie(errorOption);

    const animations = {
        collaboration: collaboration.View,
        resource: resource.View,
        marking: marking.View,
        managemen: managemen.View,
        loading: loading.View,
        error: error.View
    }

    return animations;
};

export default useLottieAnimation;