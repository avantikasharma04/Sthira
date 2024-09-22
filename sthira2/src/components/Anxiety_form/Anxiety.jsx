import React from 'react';
import Anxiety from './anxiety.png'

const BodyImage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Header Section with Image */}
        <div className="text-center mb-8">
          <img
            src={Anxiety}
            alt="Mental Health Survey"
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">Beck Anxiety Inventory (BAI)</h2>
        </div>

        {/* General Evaluation Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">General Evaluation</h3>
          <p className="text-gray-600 mb-2">
          Below is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been
bothered by that symptom during the past month, including today, by circling the number in the corresponding space in the
column next to each symptom. </p>
          <p className="text-red-500 text-sm mb-4">Please note, all fields are required.</p>
        </div>

        {/* Question 1 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">1.Numbness or tingling</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

             {/* Question 2 */}
             <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">2.Feeling hot</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>


     {/* Question 3 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">3.Wobbliness in legs</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>


     {/* Question 4 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">4.Unable to relax</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>


     {/* Question 5 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">5.Fear of worst happening </label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 6 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">6.Dizzy or lightheaded</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 7 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">7.Heart pounding / racing</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 8 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">8.Unsteady</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 9 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">9.Terrified or afraid</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 10 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">10.Nervous</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 11 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">11.Feeling of choking</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 12 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">12.Hands trembling</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

     {/* Question 13 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">13.Shaky / unsteady</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 14 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">14.Fear of losing control</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 15 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">15.Difficulty in breathing</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 16 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">16.Fear of dying</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 17 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">17.Scared</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 18 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">18.Indigestion</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

         {/* Question 19 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">19.Faint / lightheaded</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>

  {/* Question 20 */}
  <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">20.Face flushed</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
              </label>
            ))}
          </div>
        </div>


          {/* Question 21 */}
     <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">21.Hot / cold sweats</label>
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name="interest" value={value} className="form-radio text-blue-600" />
                <span>{value === 1 ? 'Not at all' :value === 2 ? 'Mildly,but it sisnot bother me much' :value === 3 ? 'Moderately-it was not pleasant at times' :value === 4 ? 'Severly-it bothered me a lot' :''}</span>
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
