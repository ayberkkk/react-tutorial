import { useTranslation } from "react-i18next";

export default function Next18() {
  const { t, i18n } = useTranslation();

  const clickHandler = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div>
      <p>Aktif dil: {i18n.language}</p>

      <button
        className="btn btn-outline-primary"
        onClick={() => clickHandler("tr")}
      >
        TR
      </button>
      <button
        className="btn btn-outline-info"
        onClick={() => clickHandler("en")}
      >
        EN
      </button>
      <h3>{t("welcome")}</h3>
    </div>
  );
}
