import React, { useState } from "react";

const Alcohol = () => {
  const [formValues, setFormValues] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const getRiskLevel = (totalScore) => {
    if (totalScore >= 20) return "Possible alcohol dependence";
    if (totalScore >= 16) return "Harmful drinking";
    if (totalScore >= 8) return "Hazardous drinking";
    return "Low risk";
  };

  const handleSubmit = () => {
    const totalScore = Object.values(formValues).reduce((acc, value) => acc + parseInt(value || 0), 0);
    const riskLevel = getRiskLevel(totalScore);
    setResultMessage(`Your total AUDIT score is ${totalScore}. Risk Level: ${riskLevel}.`);
    // Further actions can be added here, such as sending the form data to the backend
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h2 className="font-bold text-2xl">Alcohol Use Questionnaire</h2>
        </div>

        {/* Question 1 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            1. How often do you have a drink containing alcohol?
          </label>
          {["Never", "Monthly or less", "2 to 4 times a month", "2 to 3 times a week", "4 or more times a week"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q1"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            2. How many drinks containing alcohol do you have on a typical day when you are drinking?
          </label>
          {["1 or 2", "3 or 4", "5 or 6", "7, 8, or 9", "10 or more"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q2"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            3. How often do you have six or more drinks on one occasion?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q3"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 4 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            4. How often during the last year have you found that you were not able to stop drinking once you had started?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q4"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 5 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            5. How often during the last year have you failed to do what was normally expected from you because of drinking?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q5"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 6 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            6. How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q6"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 7 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            7. How often during the last year have you had a feeling of guilt or remorse after drinking?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q7"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 8 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            8. How often during the last year have you been unable to remember what happened the night before because you had been drinking?
          </label>
          {["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q8"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 9 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            9. Have you or someone else been injured as a result of your drinking?
          </label>
          {["No", "Yes, but not in the last year", "Yes, during the last year"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q9"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Question 10 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            10. Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?
          </label>
          {["No", "Yes, but not in the last year", "Yes, during the last year"].map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name="q10"
                value={index}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Alcohol;
