import Header from "./components/Header";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const selector = (state) => {
        return {
            introductionData: state.Introduction.data,
            navigatoinActive: state.Navigation.active,
        };
    };

    const { introductionData, navigatoinActive } = useSelector(selector);

    return (
        <>
            <Header />
            <Features />
            {introductionData.map((data, index) => (
                <Introduction key={index} data={data} />
            ))}
            <ContactUs />
            <Footer />
            <div
                className={`overlay ${navigatoinActive ? "active" : ""}`}
            ></div>
        </>
    );
}

export default App;
