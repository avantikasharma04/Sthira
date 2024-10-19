import React, { useState } from 'react';
import pep1 from '../Gencomp/pep1.jpeg';

const Gen1 = () => {
    const [formData, setFormData] = useState({
        nationality: '',
        gender: '',
        ageGroup: '',
        identity: '',
        relationshipStatus: ''
    });
    const [error, setError] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form (simple validation example)
        if (!formData.nationality || !formData.gender || !formData.ageGroup) {
            setError('Please fill in all required fields');
            return;
        }

        try {
            const response = await fetch('http://your-backend-api-url.com/general-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // assuming JWT token for logged-in users
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Form submitted successfully:', result);
                // Redirect to next form or show success message
            } else {
                console.error('Error submitting form:', result);
                setError(result.message || 'An error occurred while submitting the form');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-backgroundColor2 flex items-center justify-center pt-20">
            <div className="bg-backgroundColor mt-6 mb-6 p-8 rounded-lg shadow-lg w-full max-w-md">
                <img src={pep1} alt="Mental Health" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h1 className='text-4xl'>Help us know you <span className='text-backgroundColor2'>Better</span></h1>
                <br />
                <p className='text-justify text-green-700'>
                    *The following questions are designed to match you to provide better chatbot assistance or a licensed therapist based on your therapy needs and personal preferences.
                </p>
                <br />
                {error && <p className="text-red-500">{error}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700">What is Your Nationality</label>
                        <select
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">-- select one --</option>
                            <option value="afghan">Afghan</option>
                            <option value="american">American</option>
                            <option value="andorran">Andorran</option>
                            <option value="angolan">Angolan</option>
                            <option value="antiguans">Antiguans</option>
                            <option value="argentinean">Argentinean</option>
                            <option value="armenian">Armenian</option>
                            <option value="australian">Australian</option>
                            <option value="austrian">Austrian</option>
                            <option value="azerbaijani">Azerbaijani</option>
                            <option value="bahamian">Bahamian</option>
                            <option value="bahraini">Bahraini</option>
                            <option value="bangladeshi">Bangladeshi</option>
                            <option value="barbadian">Barbadian</option>
                            <option value="barbudans">Barbudans</option>
                            <option value="batswana">Batswana</option>
                            <option value="belarusian">Belarusian</option>
                            <option value="belgian">Belgian</option>
                            <option value="belizean">Belizean</option>
                            <option value="beninese">Beninese</option>
                            <option value="bhutanese">Bhutanese</option>
                            <option value="bolivian">Bolivian</option>
                            <option value="bosnian">Bosnian</option>
                            <option value="brazilian">Brazilian</option>
                            <option value="british">British</option>
                            <option value="bruneian">Bruneian</option>
                            <option value="bulgarian">Bulgarian</option>
                            <option value="burkinabe">Burkinabe</option>
                            <option value="burmese">Burmese</option>
                            <option value="burundian">Burundian</option>
                            <option value="cambodian">Cambodian</option>
                            <option value="cameroonian">Cameroonian</option>
                            <option value="canadian">Canadian</option>
                            <option value="cape verdean">Cape Verdean</option>
                            <option value="central african">Central African</option>
                            <option value="chadian">Chadian</option>
                            <option value="chilean">Chilean</option>
                            <option value="chinese">Chinese</option>
                            <option value="colombian">Colombian</option>
                            <option value="comoran">Comoran</option>
                            <option value="congolese">Congolese</option>
                            <option value="costa rican">Costa Rican</option>
                            <option value="croatian">Croatian</option>
                            <option value="cuban">Cuban</option>
                            <option value="cypriot">Cypriot</option>
                            <option value="czech">Czech</option>
                            <option value="danish">Danish</option>
                            <option value="djibouti">Djibouti</option>
                            <option value="dominican">Dominican</option>
                            <option value="dutch">Dutch</option>
                            <option value="east timorese">East Timorese</option>
                            <option value="ecuadorean">Ecuadorean</option>
                            <option value="egyptian">Egyptian</option>
                            <option value="emirian">Emirian</option>
                            <option value="equatorial guinean">Equatorial Guinean</option>
                            <option value="eritrean">Eritrean</option>
                            <option value="estonian">Estonian</option>
                            <option value="ethiopian">Ethiopian</option>
                            <option value="fijian">Fijian</option>
                            <option value="filipino">Filipino</option>
                            <option value="finnish">Finnish</option>
                            <option value="french">French</option>
                            <option value="gabonese">Gabonese</option>
                            <option value="gambian">Gambian</option>
                            <option value="georgian">Georgian</option>
                            <option value="german">German</option>
                            <option value="ghanaian">Ghanaian</option>
                            <option value="greek">Greek</option>
                            <option value="grenadian">Grenadian</option>
                            <option value="guatemalan">Guatemalan</option>
                            <option value="guinea-bissauan">Guinea-Bissauan</option>
                            <option value="guinean">Guinean</option>
                            <option value="guyanese">Guyanese</option>
                            <option value="haitian">Haitian</option>
                            <option value="herzegovinian">Herzegovinian</option>
                            <option value="honduran">Honduran</option>
                            <option value="hungarian">Hungarian</option>
                            <option value="icelander">Icelander</option>
                            <option value="indian">Indian</option>
                            <option value="indonesian">Indonesian</option>
                            <option value="iranian">Iranian</option>
                            <option value="iraqi">Iraqi</option>
                            <option value="irish">Irish</option>
                            <option value="israeli">Israeli</option>
                            <option value="italian">Italian</option>
                            <option value="ivorian">Ivorian</option>
                            <option value="jamaican">Jamaican</option>
                            <option value="japanese">Japanese</option>
                            <option value="jordanian">Jordanian</option>
                            <option value="kazakhstani">Kazakhstani</option>
                            <option value="kenyan">Kenyan</option>
                            <option value="kittian and nevisian">Kittian and Nevisian</option>
                            <option value="kuwaiti">Kuwaiti</option>
                            <option value="kyrgyz">Kyrgyz</option>
                            <option value="laotian">Laotian</option>
                            <option value="latvian">Latvian</option>
                            <option value="lebanese">Lebanese</option>
                            <option value="liberian">Liberian</option>
                            <option value="libyan">Libyan</option>
                            <option value="liechtensteiner">Liechtensteiner</option>
                            <option value="lithuanian">Lithuanian</option>
                            <option value="luxembourger">Luxembourger</option>
                            <option value="macedonian">Macedonian</option>
                            <option value="malagasy">Malagasy</option>
                            <option value="malawian">Malawian</option>
                            <option value="malaysian">Malaysian</option>
                            <option value="maldivan">Maldivan</option>
                            <option value="malian">Malian</option>
                            <option value="maltese">Maltese</option>
                            <option value="marshallese">Marshallese</option>
                            <option value="mauritanian">Mauritanian</option>
                            <option value="mauritian">Mauritian</option>
                            <option value="mexican">Mexican</option>
                            <option value="micronesian">Micronesian</option>
                            <option value="moldovan">Moldovan</option>
                            <option value="monacan">Monacan</option>
                            <option value="mongolian">Mongolian</option>
                            <option value="moroccan">Moroccan</option>
                            <option value="mosotho">Mosotho</option>
                            <option value="motswana">Motswana</option>
                            <option value="mozambican">Mozambican</option>
                            <option value="namibian">Namibian</option>
                            <option value="nauruan">Nauruan</option>
                            <option value="nepalese">Nepalese</option>
                            <option value="new zealander">New Zealander</option>
                            <option value="ni-vanuatu">Ni-Vanuatu</option>
                            <option value="nicaraguan">Nicaraguan</option>
                            <option value="nigerien">Nigerien</option>
                            <option value="north korean">North Korean</option>
                            <option value="northern irish">Northern Irish</option>
                            <option value="norwegian">Norwegian</option>
                            <option value="omani">Omani</option>
                            <option value="pakistani">Pakistani</option>
                            <option value="palauan">Palauan</option>
                            <option value="panamanian">Panamanian</option>
                            <option value="papua new guinean">Papua New Guinean</option>
                            <option value="paraguayan">Paraguayan</option>
                            <option value="peruvian">Peruvian</option>
                            <option value="polish">Polish</option>
                            <option value="portuguese">Portuguese</option>
                            <option value="qatari">Qatari</option>
                            <option value="romanian">Romanian</option>
                            <option value="russian">Russian</option>
                            <option value="rwandan">Rwandan</option>
                            <option value="saint lucian">Saint Lucian</option>
                            <option value="salvadoran">Salvadoran</option>
                            <option value="samoan">Samoan</option>
                            <option value="san marinese">San Marinese</option>
                            <option value="sao tomean">Sao Tomean</option>
                            <option value="saudi">Saudi</option>
                            <option value="scottish">Scottish</option>
                            <option value="senegalese">Senegalese</option>
                            <option value="serbian">Serbian</option>
                            <option value="seychellois">Seychellois</option>
                            <option value="sierra leonean">Sierra Leonean</option>
                            <option value="singaporean">Singaporean</option>
                            <option value="slovakian">Slovakian</option>
                            <option value="slovenian">Slovenian</option>
                            <option value="solomon islander">Solomon Islander</option>
                            <option value="somali">Somali</option>
                            <option value="south african">South African</option>
                            <option value="south korean">South Korean</option>
                            <option value="spanish">Spanish</option>
                            <option value="sri lankan">Sri Lankan</option>
                            <option value="sudanese">Sudanese</option>
                            <option value="surinamer">Surinamer</option>
                            <option value="swazi">Swazi</option>
                            <option value="swedish">Swedish</option>
                            <option value="swiss">Swiss</option>
                            <option value="syrian">Syrian</option>
                            <option value="taiwanese">Taiwanese</option>
                            <option value="tajik">Tajik</option>
                            <option value="tanzanian">Tanzanian</option>
                            <option value="thai">Thai</option>
                            <option value="togolese">Togolese</option>
                            <option value="tongan">Tongan</option>
                            <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                            <option value="tunisian">Tunisian</option>
                            <option value="turkish">Turkish</option>
                            <option value="tuvaluan">Tuvaluan</option>
                            <option value="ugandan">Ugandan</option>
                            <option value="ukrainian">Ukrainian</option>
                            <option value="uruguayan">Uruguayan</option>
                            <option value="uzbekistani">Uzbekistani</option>
                            <option value="venezuelan">Venezuelan</option>
                            <option value="vietnamese">Vietnamese</option>
                            <option value="welsh">Welsh</option>
                            <option value="yemenite">Yemenite</option>
                            <option value="zambian">Zambian</option>
                            <option value="zimbabwean">Zimbabwean</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What is Your Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Select your option</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="trans">Trans</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What is your Age-group?</label>
                        <select
                            name="ageGroup"
                            value={formData.ageGroup}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Select your option</option>
                            <option value="5-10">5-10</option>
                            <option value="11-15">11-15</option>
                            <option value="16-20">16-20</option>
                            <option value="21-30">21-30</option>
                            <option value="31+">31+</option>
                            <option value="60+">60+</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What is your relationship status?</label>
                        <select
                            name="relationshipStatus"
                            value={formData.relationshipStatus}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                           <option value="">Select your option</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="In a realtionship">In a realtionship</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Choose not to reveal">Choose not to reveal</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">How do you identify yourself?</label>
                        <select
                            name="orientation"
                            value={formData.orientation}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        > <option value="">Select your option</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="In a realtionship">In a realtionship</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Choose not to reveal">Choose not to reveal</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700">How important is religion in your life</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Significantly important">Significantly important</option>
                            <option value="Important">Important</option>
                            <option value="Not Important">Not Important</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Do you consider yourself spiritual?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Have you ever tried therapy before?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What led you to consider therapy today?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="I felt like it">I felt like it</option>
                            <option value="I feel depressed">I feel depressed</option>
                            <option value="I still don't know">I still don't know</option>
                            <option value="I need someone to talk too">I need someone to talk too</option>
                            <option value="I don't feel good">I don't feel good</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What are your expectations from your therapist? A therapist who...</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Straight-forward">Straight-forward</option>
                            <option value="Gentle">Gentle</option>
                            <option value="Flexible">Flexible</option>
                            <option value="I am okay with anything">I am okay with anything</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700">How would you rate your physical health?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">How would you rate your eating habits?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Are you currently experiencing overwhelming sadness, grief, or depression?
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Little interest or pleasure in doing things.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Little interest or pleasure in doing things.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-justify">Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.

                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Feeling down, depressed or hopeless.</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Trouble falling asleep, staying asleep, or sleeping too much.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Feeling tired or having little energy.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Poor appetite or overeating.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-justify">Feeling bad about yourself - or that you are a failure or have let yourself or your family down.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-900">
                      <a href="/">Submit</a>  
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Gen1;
