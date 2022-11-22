import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../../Ing/uz.json";
import uz_latin from "../../Ing/uz_latin.json";
import ru from "../../Ing/ru.json";

i18next.use(initReactI18next).init({
	resources: {
		uz: {
			translation: uz,
		},
		uz_latin: {
			translation: uz_latin,
		},
		ru: {
			translation: ru,
		},
	},
	lng: localStorage.getItem("lng") || "uz",
});

export default i18next;