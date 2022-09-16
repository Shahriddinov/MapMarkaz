import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../../Ing/uz.json";
import ru from "../../Ing/ru.json";

i18next.use(initReactI18next).init({
	resources: {
		uz: {
			translation: uz,
		},
		ru: {
			translation: ru,
		},
	},
	lng: localStorage.getItem("lng") || "uz",
});

export default i18next;