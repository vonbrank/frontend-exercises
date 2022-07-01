import { configureStore } from "@reduxjs/toolkit/";
import NavigationReducer from "./NavigationSlice";
import IntroductionReducer from "./IntroductionSlice";

export default configureStore({
    reducer: {
        Navigation: NavigationReducer,
        Introduction: IntroductionReducer,
    },
});
