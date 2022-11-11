import _ from 'lodash';
import './style.css';

const questionsArray = [{
  Question: "What level of English do I need in order to join the Program?",
  Description: "Like many global schools and companies, we use English as the default language for all communications. A lot of great jobs out there require a good English level so it is critical that you perfect this language if you want to be a successful global developer. "
},
{
  Question: "Is there an age limit to join Microverse?",
  Description: "Due to legal reasons, we can only accept students over the age of 18. However, once you turn 18, we happily invite you to proceed with your Microverse application."
},
{
  Question: "Is it possible to work and study full time at Microverse?",
  Description: "Unfortunately, we can't accept students who have other commitments while going through the Program (e.g. a part-time or full-time job). Microverse's web development program is very intense and it requires a full-time commitment. As a student, you will be coding for 8-9 hours a day while collaborating with your coding partner. "
},
{
  Question: "Why do I need to have financial support in order to join the program?",
  Description: "Remember, you won't pay Microverse anything until you get a job. We believe that everyone deserves an opportunity to become a software developer, and our payment model reflects that. However, you will need to pay for your basic needs (e.g., rent, food, internet and electricity bills) while going through our program and until your first paycheck comes in."
},
{
  Question: "What are the computer specs required for joining the Program?",
  Description: "At a minimum, we ask 1.6 GHz processor, 4 GB RAM, 120 GB hard drive, Microphone with good audio quality, Webcam with clear image. But If you want an optimal experience and can afford to upgrade your computer, we recommend 2 GHz processor, 8 GB RAM and 256 GB solid-state hard drive"
},
{
  Question: "Is Windows suitable as an operating system when studying at Microverse?",
  Description: "If you use Windows 10, you might be able to get by as it comes with some Linux utilities (e.g. WSL). However, there still can be some difficulties along the way."
},
{
  Question: "What should I do if my city experiences power outages and/or has an unstable internet service?",
  Description: "A great question! As you know, a stable electricity supply and a high-speed and stable internet connection are two of our requirements to join and succeed at Microverse. If your area is prone to power outages or unstable internet service, there are still things you can do to make sure these don't stand in the way of your success at Microverse."
},
{
  Question: "Why is my connection so important?",
  Description: "During the Microverse program, you will be Zoom video (and screen-share) calls with your peers on a daily basis. If one or more students have a suboptimal internet connection, that makes it very frustrating and ruins the collaborative learning experience for everyone! Thus, we have systems set up to help monitor your connection via Zoom's APIs and ensure that your connection is up to video call standards."
},
{
  Question: "Should I join the Program if I'm temporarily available but plan to go back to a job soon?",
  Description: "Our program is designed for those who are willing and able to commit to their education full-time for 12 months (the seven months of the program plus a minimum of 5 months before you get your first paycheck). If your availability to join the Program full-time is only temporary, then it would not make sense for you to join the Program now."
},
{
  Question: "What level of programming experience do I need in order to join the Program?",
  Description: "To avoid making subjective decisions, we have created a list of more objective experience levels. <br/><br/> Level 0: I have no experience coding <br/> Level 1: I have completed some basic tutorials and courses. <br/><br/> If you are in Level 0 or Level 1, you'll likely need a bit more practice before taking on the technical challenges in our application process. Don't worry, though; we're here to help you! <br/> You can choose to go through the Level Up Experience where you'll learn alongside other applicants, as well as, in coordinated sessions within the Level Up world. <br/> These resources provide a great introduction to HTML, CSS, JavaScript, and Git and help you pass our technical challenges. <br/><br/> Level 2: I'm comfortable building simple algorithms and applications <br/> Level 3: I have built and deployed applications used by real users in production <br/><br/> If you are in Level 2 - 3, you are already a great fit for Microverse! You should try our Admissions Coding Challenges right after signing up. <br/><br/> Level 4: I'm a professional software developer, but I want to improve my skills. <br/><br/> If you are in Level 4, then we still think that you could greatly benefit from our program. However, you must know that, regardless of how much experience you already have, you will still have to go through our entire full-time curriculum. <br/><br/> Level 5: I'm a professional software developer and I just want a remote job <br/><br/> We are first and foremost a school and not a recruiting firm. If all you want is help to find a remote job, then we believe Microverse is not the right fit for you."
}]

questionsArray.forEach((question) =>{
  const sectionCenter = document.querySelector('.section-center');
  sectionCenter.innerHTML += `<article class="question">
  <div class="question-title">
    <p>${question.Question}</p>
    <button type="button" class="question-btn">
      <span class="plus-icon">
        <i class="far fa-plus-square"></i>
      </span>
      <span class="minus-icon">
        <i class="far fa-minus-square"></i>
      </span>
    </button>
  </div>
  <div class="question-text">
    <p>${question.Description}</p>
  </div>
</article>`
})

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  })
});