import React from 'react'
import { Link } from 'react-router-dom';
import '../HomeUser.css';
import './Testfrom.css';


function Testfrom() {
    return (
        <div className="home__user__main">
            <div className="partie1">
                <img src='../icons/test.jpg' alt='oups!!!' className='icon__homeuseré'></img>
            </div>
            <div className='form__user'>
            <form className="eval-formé">
            <h3>formulaire de demande de Vaccination</h3>
            <div className="form-content">      
                  <label>
                  centre de santé
                  <select>
                    <option value="petit">Yoff</option>
                    <option value="moyene">Fann</option>
                    <option value="max"> ville DAKAR</option>
                  </select>
                </label>
                <label>
                  Type de vaccin
                  <select>
                    <option value="petitT">AstraZeneca </option>
                    <option value="moyeneT">v</option>
                    <option value="maxT"> > 20</option>
                  </select>
                </label>
                <label>
                  nombre de dose
                  <select>
                    <option value="perso">1er dose</option>
                    <option value="taxi">2em dose</option>
                    <option value="commun">en commun</option>
                  </select>
                </label>
            </div>
            <div className="form-message"></div>
            <input
              className="button"
              type="button"
              value="Envoyer"
            />
          </form>
            </div>
            <div className="partie2é">
                <div className='en__tete__user'>
                        <div className='info__user'>
                            <ul className='ul__infouser'>
                                <li><strong>âges :</strong> 22ans</li>
                                <li><strong>Adresse :</strong> Fass</li>
                                <li><strong>téléphone :</strong> 722586995</li>
                                <li><strong>Groupe sangain :</strong> A-</li>
                            </ul>
                        </div>
                        <div className='photo__text'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='images__user' ><path fill="#E4EBF1" d="M77.5,103.4C77.5,103.4,77.5,103.4,77.5,103.4c-0.2,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0L64,108.7l-12.5-5.1c-0.3-0.1-0.6-0.2-1-0.2v-0.6c4.3-2.6,9.1-7.3,13.5-15.7c0.5,0.9,0.9,1.8,1.4,2.6c4,6.8,8.2,10.8,12.1,13.1V103.4z"/><path fill="#FFF" d="M98.2,115.9l-22.2-9c-1.5,5.3-7.7,8.3-12.2,8.9v0.1c-0.7,0-1.9-0.1-2-0.1c-4.3-0.8-8.3-3.7-9.7-8.8l-22.2,9l0,0C52,123.1,76,123.1,98.2,115.9L98.2,115.9z"/><path fill="#F7EBDE" d="M76,101.2v6.5l0,0c-3.5,12-20.5,12-23.9,0l0,0l0-6.5"/><path fill="#F7EBDE" d="M96.3,59c0-26.4-13.1-39.9-32.3-39.9S31.7,32.7,31.7,59c-6.2,0.5-4.8,14.6,2.2,13.8c2,5.7,4.2,10.4,6.5,14.4c7.9,13.5,16.9,17.5,23.5,17.5c8.5,0,21.1-6.6,30-31.8C101.1,73.6,102.5,59.5,96.3,59z"/><path fill="#454B54" d="M64 107.6c-5.6 0-16.4-2.5-26.1-18.9-2.5-4.3-4.8-9.3-6.8-14.9-.6-1.6.3-3.3 1.8-3.8 1.6-.6 3.3.3 3.8 1.8 1.9 5.2 4 9.9 6.3 13.9 2.8 4.8 10.5 16 20.9 16 5 0 17.6-2.9 27.2-29.8.6-1.6 2.3-2.4 3.8-1.8 1.6.6 2.4 2.3 1.8 3.8C86 104.3 70.3 107.6 64 107.6zM96.3 62c-1.7 0-3-1.3-3-3 0-23.4-10.7-36.9-29.3-36.9-13.2 0-22.4 6.7-26.7 19.3-1.6 4.7-2.4 10.1-2.6 16.2 0 1.6-1.4 2.9-3 2.9 0 0 0 0-.1 0-1.7 0-3-1.4-2.9-3.1.1-6.7 1.1-12.7 2.9-18C36.7 24.4 48.2 16.1 64 16.1c22.1 0 35.3 16 35.3 42.9C99.3 60.7 97.9 62 96.3 62z"/><path fill="#454B54" d="M30 119.7c-1.2 0-2.3-.7-2.8-1.9-.6-1.5.1-3.3 1.6-3.9l22.1-9c1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l-22.1 9C30.7 119.6 30.3 119.7 30 119.7zM98.1 119.7c-.4 0-.8-.1-1.1-.2l-22.1-9c-1.5-.6-2.3-2.4-1.6-3.9.6-1.5 2.4-2.3 3.9-1.6l22.1 9c1.5.6 2.3 2.4 1.6 3.9C100.4 119 99.2 119.7 98.1 119.7z"/><path fill="#454B54" d="M64 119.7c-7.1 0-12.9-4.4-14.8-11.2-.5-1.6.5-3.3 2.1-3.7 1.6-.5 3.3.5 3.7 2.1 1.5 5.1 5.6 6.9 9.1 6.9s7.6-1.8 9.1-6.9c.5-1.6 2.1-2.5 3.7-2.1 1.6.5 2.5 2.1 2.1 3.7C76.9 115.3 71.1 119.7 64 119.7zM33.4 75.8c-2.5 0-4.8-1.2-6.4-3.5-2.4-3.4-2.9-8.6-1.2-12.2 1.1-2.4 3.2-4 5.8-4.1 1.7-.1 3.1 1.1 3.2 2.8.1 1.7-1.1 3.1-2.8 3.2-.2 0-.4 0-.8.7-.8 1.6-.4 4.6.7 6.2.7.9 1.3 1 1.8.9 1.6-.2 3.1 1 3.3 2.6.2 1.6-1 3.1-2.6 3.3C34 75.8 33.7 75.8 33.4 75.8zM94.6 75.8c-.3 0-.6 0-.9 0-1.6-.2-2.8-1.7-2.6-3.3.2-1.6 1.7-2.8 3.3-2.6.5.1 1.1 0 1.8-.9 1.1-1.6 1.5-4.5.7-6.2C96.5 62 96.2 62 96.1 62c-1.7-.1-2.9-1.6-2.8-3.2.1-1.7 1.5-2.9 3.2-2.8 2.5.2 4.6 1.7 5.8 4.1 1.7 3.6 1.2 8.9-1.2 12.2C99.4 74.6 97.1 75.8 94.6 75.8z"/><g><path fill="#FFF" d="M96.3,59H31.7L33,33.3c0.4-8,7-14.3,15-14.3h32c8,0,14.6,6.3,15,14.3L96.3,59z"/></g><g><path fill="#454B54" d="M96.3,62C96.3,62,96.3,62,96.3,62H31.7c-0.8,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.8-2.2L30,33.1C30.5,23.5,38.4,16,48,16h32c9.6,0,17.5,7.5,18,17.1l1.3,25.4c0,0.2,0,0.3,0,0.5C99.3,60.7,98,62,96.3,62z M34.9,56h58.3L92,33.4C91.7,27,86.4,22,80,22H48c-6.4,0-11.7,5-12,11.4L34.9,56z"/></g><g><path fill="#454B54" d="M76.3,47H51.7c-1.7,0-3-1.3-3-3s1.3-3,3-3h24.6c1.7,0,3,1.3,3,3S77.9,47,76.3,47z"/></g><g><path fill="#FFF" d="M64 37.2A7 7 0 1 0 64 51.2A7 7 0 1 0 64 37.2Z"/></g><g><path fill="#454B54" d="M64,54.2c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S69.5,54.2,64,54.2z M64,40.2c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S66.2,40.2,64,40.2z"/></g></svg>
                            
                            <h3 className='h3__user__name'>Ikram BARKAD</h3>
                        </div>
                </div>
                <div className='teche__user'>
                <Link to='/test'><button className="button1 button4 button3">Test</button></Link>
                <button className="button1 button4 button3">Vaccination</button>
                <button className="button1 button4 button3">Passe sanitaire</button>
                <div className='bar' />
                <button className="button1 button4 button3">Gérer Test</button>
                <button className="button1 button4 button3">Gérer Vaccination</button>
                <button className="button1 button4 button3">Actualiser passe</button>
                <button className="button1 button4 button2">Déconnecter</button>
                </div>
            </div>
            
        </div>
    )
}

export default Testfrom
