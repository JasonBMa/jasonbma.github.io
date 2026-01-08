import Navbar from '../Components/Navbar';
import Me from '../Components/Graphics/Images/SlightSideView.jpg';
import linkedin from '../Components/Graphics/Socials/Black_Linkedin_icon.png';
import email from '../Components/Graphics/Socials/Email_icon.png';
import github from '../Components/Graphics/Socials/Github_icon.png';


function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="block text-7xl text-green-500 font-bold text-center my-8">Contact me here</h1>

      {/* Contact Card */}
      <div className="flex justify-center">
        <div className="rounded border-4 bg-slate-100 border-green-300 p-4 shadow-md shadow-green-500">
          <div className="flex">
            <img className="w-28 h-28 p-1 border-2 border-green-300 mr-4" src={Me} alt="Jason Ma"/>
            <div className="font-thin">
              <p className="text-xl">Contact:</p>
              <p><img src={email} alt="Email" className="w-6 h-6 inline-block mr-2 to-black" /><a href="mailto:jasonbma317@gmail.com" rel="noreferrer" target="_blank">jasonbma317@gmail.com</a></p>
              <p><img src={linkedin} alt="LinkedIn" className="w-6 h-6 inline-block mr-2" /><a href="https://www.linkedin.com/in/jason-b-ma/" rel="noreferrer" target="_blank">linkedin.com/in/jason-b-ma/</a></p>
              <p><img src={github} alt="GitHub" className="w-6 h-6 inline-block mr-2" /><a href="https://www.github.com/JasonBMa" rel="noreferrer" target="_blank">github.com/JasonBMa</a></p>

            </div>
          </div>
            <p className="text-2xl">Jason Ma</p>
            <div className="flex justify-between">
              <p className="text-lg italic">SWE</p>
              <p className="text-lg italic"></p>
            </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;