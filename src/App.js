import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>
        Personal Digital Assistants
      </div>
      <ProfileCard  title="Alexa" handle="@alexa22"/>
      <ProfileCard  title="Cortana" handle="@cortana99"/>
      <ProfileCard  title="Siri" handle="@siri01"/>
    </div>
  );
}

export default App;
