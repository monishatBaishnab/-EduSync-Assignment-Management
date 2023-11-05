import FrequentlyAskQuestions from "../../layouts/FAQ/FAQ";
import Features from "../../layouts/features/Features";
import Header from "../../layouts/header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <Features />
            <FrequentlyAskQuestions />
        </div>
    );
};

export default Home;