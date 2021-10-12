import React,{ useState } from "react";
import './Home.css';
function Home() {

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

    const isEmail = () =>{
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if(email.match(regex)) {
          mail.style.display = 'none';
          return true;
        }else{
          mail.style.display = 'block';
          mail.style.animation = 'dongle 1s';
          setTimeout(()=>{
            mail.style.animation = 'none';
          }, 1000)
          return false
        }
      }
      
  const sucessMessage = () =>{
    let fromMess = document.querySelector('.form-message');
    fromMess.innerHTML = 'Merci nous vous contacterez le plutôt possible';
    fromMess.style.opacity = '1';
    fromMess.style.color = 'rgb(101, 247, 3)';

    document.getElementById('email').classList.remove('error');
    document.getElementById('pwd').classList.remove('error');

    setTimeout(()=>{
      fromMess.style.opacity = '0';
    },1500);
  }

    const failMessage = (messages) =>{
      let fromMess = document.querySelector('.form-message');
      fromMess.innerHTML = messages;
      fromMess.style.opacity = '1';
      fromMess.style.color = '#ff4d4d';

      document.getElementById('email').classList.add('error');
      document.getElementById('pwd').classList.add('error');
    }

    

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isEmail() && pwd){
      sendFeedback("template_a8d6ou7", {
       
        email,
        pwd,
      });
    } else{
      failMessage('Merci de bien vouloir remplir les champs avec *');
    };
    }
    

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_5hsnflh", templateId, variables)
      .then((res) => {
        sucessMessage();
        setEmail("");
        setPwd("");        
      })
      .catch(
        (err) =>{
          failMessage("Une erreur s'est produite, veuillez réessayer.")
        })
  };

    return (
        <div >
        
    <form className="contact-form">
    <h2>Connectez-vous</h2>
    <div className="form-content">      
      <div className="email-content">
        <label id="not-mail">Email non valide</label>
        <input
          type="mail"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email *"
          value={email}
          autoComplete="off"
        />
      </div><input
      type="password"
      id="pwd"
      name="pwd"
      onChange={(e) => setPwd(e.target.value)}
      placeholder="mot de passe"
      value={pwd}
    />
    </div>
    <div className="form-message"></div>
    <input
      className="button__Connecter"
      type="button"
      value="Connecter"
      onClick={handleSubmit}
    />
    <input
      className="button"
      type="button"
      value="Inscrivez-vous"
      
    />
    
  </form>
        </div>
    )
}

export default Home
