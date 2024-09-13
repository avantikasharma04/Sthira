import React from 'react';
import Body from '../Forms/Body.png'

const BodyImage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Header Section with Image */}
        <div className="text-center mb-8">
          <img
            src={Body}
            alt="Mental Health Survey"
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">Body Image Satisfaction Rating Scale</h2>
        </div>

        {/* General Evaluation Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">General Evaluation</h3>
          <p className="text-gray-600 mb-2">
          Adopted from THE BODY-IMAGE QUESTIONNAIRE </p>
          <p className="text-red-500 text-sm mb-4">Please note, all fields are required.</p>
        </div>

        {/* Question 1 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">1. I look like I have bad health</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

       {/* Question 2 */}
       <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">2. I look physically unattractive</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 3 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">3. My image is a source of my displeasure</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 4 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">4. I look limpure and dirty</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 5 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">5. I look daring</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 6 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">6. I look full of life</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 7 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">7. I look like something that must not be touched</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 8 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">8. I look tender and loving</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 9 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">9. I look appeasing</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 10 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">10. I seem to not have any expression</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 11 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">11. I look like I have a lot to show</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 12 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">12. I look lnervous and worried</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 13 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">13. I look young</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 14 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">14. I donot look sexy at all</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 15 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">15. I look robust and resistant</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 16 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">16. I look sad and depressive</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>


  {/* Question 17 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">17. My apppreance is something that people will love to look at.</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 18 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">18. I look energetic.</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Strongly Agree' :value === 2 ? 'Agree' :value === 3 ? 'Neither agree nor disagree' :value === 4 ? 'Disagree' : value === 5 ? 'Strongly Disagree' : ''}</span>
              </label>
            ))}
          </div>
        </div>


        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyImage;
