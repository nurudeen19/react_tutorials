import bulma from 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-success">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="conatiner">
        <div className="section">
        <div className="columns is-centered">
            <div className="column is-3">
              <ProfileCard  
                title="Alexa" 
                handle="@alexa22" 
                image={AlexaImage}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"/>
            </div>
            <div className="column is-3">
              <ProfileCard  
                title="Cortana" 
                handle="@cortana99" 
                image={CortanaImage}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"/>
            </div>
            <div className="column is-3">
              <ProfileCard  
                title="Siri" 
                handle="@siri01" 
                image={SiriImage}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"/>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
    </div>
  );
}

export default App;
