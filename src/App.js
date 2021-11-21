import './App.css';
import ProfileComponent from './profile/profilecomponent'
import ProfilePhoto from './images/ProfilePhoto.jpg'
function App() {
  const handleName = fullName => alert(` The Name of the Profile is ${fullName}`)
  return (
    <div className="App">
      <ProfileComponent fullName="Achref Gasri"
      Bio ={{ 
        diploma : ["bachelor's degree in economics and management" ,"/Applied Bachelor of Computer Science"],
        skills :["HTML5/", "CSS3/", "JS/" , "PHP", "/SQL" ,"/ReactJS","/Monogodb","/Symfony 5","/XML", "/Oracle", "/JAVA" ,"/Github"],
        lang: {  Arabic: "excellent", English: "middle", French: "good"} }}
      Profession="Full Stack Developer"
      handleName= {handleName} >
      <img src={ProfilePhoto} alt="ProfilePhoto" style={{
        borderRadius: "50%",
        display: "block",
        margin: "5vh auto",
        width: "300px",
        height: "300px",
      }}
       />
      </ProfileComponent>
    </div>
  );
}

export default App;

