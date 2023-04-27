import Loader from 'react-loaders';
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => { 
         setTimeout(() => {
           return setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e)=>{
        e.preventDefault();

         emailjs.sendForm('service_476hrba', 'template_9ma6stg', refForm.current, 'yOt-0O9NqKSrqQO2E')
    .then((result) => {
          alert('Message sent');
          window.location.reload(false);
      }, (error) => {
          alert('Failed to send the message, please try again!');
      });
  };
    

    return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArr={['C','o','n','t','a','c','t' ,' ', 'm', 'e']} index={15}/>
            </h1>
             <p>
            Please use the form below to get in touch with me:
        </p>
        <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                       <input type='text' name="from_name" id="from_name" placeholder='Name' required/> 
                    </li>
                    <li className='half'>
                       <input type='email'  name="from_email" id="from_email" placeholder='Email' required/> 
                    </li>
                    <li >
                       <textarea placeholder='Your message' name='message' required/>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value='SEND'/>
                    </li>
                </ul>
            </form>
        </div>
        </div>
       
    </div>
    <div className='info-map'>
        Oleksandra Shkoda
        <br/>
        United Kingdom
        <br/>
        SW15 1QF
        <br/>
        <span>shkoda.aleksandra@gmail.com</span>
    </div>
    <div className='map-wrap'>
          <MapContainer center={[51.4662897,-0.2250557,17]} zoom={9} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    maxZoom={19} />
            <Marker position={[51.4662897,-0.2250557,17]}>
              <Popup>Oleksandra lives here, come over for a cup of coffee; :)</Popup>
            </Marker>
          </MapContainer>
    </div>
    <Loader type= "pacman"/>
    </>
    );
}

export default Contact