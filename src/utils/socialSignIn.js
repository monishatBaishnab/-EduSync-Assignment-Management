import toast from "react-hot-toast";

export const socialSignIn = async (axios, signIn, navigate, state) => {
    const toastId = toast.loading('Signining user...');
    try {
        const user = await signIn();

        if (user) {
            try {
                await axios.post('/token', { email: user?.email });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await axios.post('/logout');
            } catch (error) {
                console.log(error);
            }
        }
        toast.success('Sign-in success.', { id: toastId });
        if (state) {
            navigate(state);
        } else {
            navigate('/');
        }
    } catch (err) {
        console.log(err.message);
        toast.error('Sign-in failed.', { id: toastId });
    }
}