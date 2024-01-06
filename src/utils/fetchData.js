
export const fetchData = async (axios, url) => {
    try {
        const res = await axios.get(url);
        return res?.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
