import Header from "../components/Home/Header/Header";
import FrequentlyAskQuestions from "../layouts/FAQ/FAQ";
import Features from "../layouts/features/Features";

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