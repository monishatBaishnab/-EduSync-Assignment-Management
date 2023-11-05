import useLottieAnimation from "../../hooks/useLottieAnimation";

const Loading = () => {
    const {loading} = useLottieAnimation();
    return (
        <div className="flex items-center justify-center absolute left-0 right-0 bottom-0 top-0 bg-white z-50">
            {loading}
        </div>
    );
};

export default Loading;