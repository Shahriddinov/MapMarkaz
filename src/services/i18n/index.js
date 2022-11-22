import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import uz from "../../Ing/uz.json";
import uz_kiril from "../../Ing/uz_kiril.json";
import ru from "../../Ing/ru.json";

i18next.use(initReactI18next).init({
	resources: {
		uz: {
			translation: uz,
		},
		uz_kiril: {
			translation: uz_kiril,
		},
		ru: {
			translation: ru,
		},
	},
	lng: localStorage.getItem("lng") || "uz",
});

export default i18next;