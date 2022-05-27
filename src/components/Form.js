import FormGroup from "./Bootstrap/FormGroup";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import SkillsList from "./Form/Skills/SkillsList";
import '../styles/App.scss'

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      <h4>Full Name</h4>,
      "This is your full name. This has been generated using your first and last names."
    ],
    FirstName: [
      "text",
      <h5>First Name</h5>,
      "Please enter your first name or given name."
    ],
    LastName: ["text", <h5>Last Name</h5>, "Please enter your last name or surname"],
    Thubmnail: [
      "text",
      <h5>Your Photo</h5>,
      "Please upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here."
    ],
    URL: [
      "text",
      <h5>Website link</h5>,
      "Please enter the URL of your website, where this page is going to be hosted"
    ],
    Description: ["text", <h5>About you</h5>, "Write something nice about you."],
    Keywords: [
      "text",
      <h5>Keywords</h5>,
      "If someone wants to search for you, what keywords should they use?"
    ],
    Address: [
      "text",
      <h5>Where are you?</h5>,
      "Type in your full address to get kidnapped!"
    ],
    Phone: [
      "text",
      <h5>Phone Number</h5>,
      "Please enter your phone number, so we can call you in the midnight!"
    ],
    Email: ["text", <h5>Email Address</h5>, "Tell us your primary email address"],
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio"
    ]
  };
  return (
    <div className="Form">
      <h1 style={{color:'#143b64'}} className="mb-4">Basic Info</h1>
      {Object.keys(FormData).map(
        fd =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              className='shadow'
            />
          )
      )}
      <h3>Experience</h3>
      <ExperienceList />
      <h3>Education</h3>
      <EducationList />
      <h3>Skills</h3>
      <SkillsList />
      <h3>Interests</h3>
      <InterestList />
      <h3>Awards</h3>
      <AwardList />
    </div>
  );
};

export default Form;
