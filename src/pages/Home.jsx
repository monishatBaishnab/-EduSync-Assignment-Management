import Features from "../components/Home/Features/Features";
import Header from "../components/Home/Header/Header";
import FrequentlyAskQuestions from "../layouts/FAQ/FAQ";

const Home = () => {
    return (
        <>
            <Header />
            <Features />
            <FrequentlyAskQuestions />
        </>
    );
};

export default Home;