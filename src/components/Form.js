import React, { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("Ayberk");
  const [description, setDescription] = useState("");
  const genders = ["Erkek", "Kadın"];
  const [gender, setGender] = useState("2");
  const [categories, setCategories] = useState([]);
  const [level, setLevel] = useState("1");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const [rules, setRules] = useState([
    { key: 1, value: "1. şart kabul edildi", checked: false },
    { key: 2, value: "2. şart kabul edildi", checked: false },
    { key: 3, value: "3. şart kabul edildi", checked: false },
    { key: 4, value: "4. şart kabul edildi", checked: true },
  ]);

  const categoriesList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "HTML" },
    { key: 3, value: "CSS" },
    { key: 4, value: "JavaScript" },
    { key: 5, value: "Tailwind" },
    { key: 6, value: "Bootstrap" },
  ];

  const levels = [
    { key: "newbie_dev", value: "Newbie" },
    { key: "jr_dev", value: "Junior" },
    { key: "sr_dev", value: "Senior" },
  ];

  const selectedGender = genders[gender];
  const selectedCategories = categoriesList.filter((category) =>
    categories.includes(category.key.toString())
  );

  const checkRule = (key, checked) => {
    setRules((prevRules) =>
      prevRules.map((rule) => {
        if (key === rule.key) {
          return { ...rule, checked };
        }
        return rule;
      })
    );
  };

  const isFormDisabled = !(
    rules.every((rule) => rule.checked) &&
    level &&
    avatar
  );

  const handleSubmit = () => {
    // Devam Et butonuna tıklandığında gerçekleştirilecek işlemleri buraya yazın
    console.log("Form submitted");
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => setName("ali")}>
        Change to Name
      </button>
      <input
        className="form-control"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name}
      <br />

      <textarea
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {description}
      <br />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="form-select"
      >
        <option value="">Seçiniz</option>
        {genders.map((gender, index) => (
          <option value={index} key={index}>
            {gender}
          </option>
        ))}
      </select>
      {selectedGender}
      <br />

      <select
        value={categories}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => option.value)
          )
        }
        multiple
        className="form-select"
      >
        {categoriesList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br />

      <div>
        <h5>Selected Categories:</h5>
        {selectedCategories.map((category) => (
          <p key={category.key}>{category.value}</p>
        ))}
      </div>
      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
            disabled={!isFormDisabled}
          />
          Şartları kabul ediyorum.
          {rule.value}
        </label>
      ))}

      <pre>{JSON.stringify(rules, null, 2)}</pre>

      {levels.map((l) => (
        <label key={l.key}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
            disabled={!isFormDisabled}
          />
          {l.value}
        </label>
      ))}
      <br />

      {level}

      <br />

      <input
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
        disabled={!isFormDisabled}
      />

      {avatar && (
        <>
          <h5>{avatar.name}</h5>
          {image && <img src={image} alt="avatar" />}
        </>
      )}

      {!isFormDisabled && (
        <button className="btn btn-success" onClick={handleSubmit}>
          Devam Et
        </button>
      )}
    </>
  );
};

export default Form;
