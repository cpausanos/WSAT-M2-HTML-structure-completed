import Card from "./Card";
import profilePhoto from '../assets/images/profile.jpg';

function About() {
  return (
    <Card title="About Me">
      <img src={profilePhoto} alt="Profile photo" />

      <p>
        A dedicated IT student at USTP - CDO Campus with a passion
        for web development.
      </p>

      <p>
        I am building my expertise in frontend and backend technologies,
        always eager to learn and take on new challenges in the world of technology.
      </p>

      <p>
        Email:
        <a href="mailto:pausanoschristianpaul033@gmail.com">
          pausanoschristianpaul033@gmail.com
        </a>
      </p>
    </Card>
  );
}

export default About;