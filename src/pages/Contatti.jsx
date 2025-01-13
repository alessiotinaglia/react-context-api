import React from 'react';

export default function ContactInfoPage() {
  return (
    <div className="container mt-2">
      <h2>I miei contatti</h2>
      
      <h4>Se hai domande o desideri entrare in contatto con me, puoi utilizzare i seguenti metodi:</h4>
      
      <div className="">
        <h4>Telefono</h4>
        <p>📞 +39 123 456 789</p>
      </div>
      
      <div className="">
        <h4>Email</h4>
        <p>📧 <a href="mailto:tuoemail@example.com">tuoemail@example.com</a></p>
      </div>
      
      <div className="">
        <h4>Indirizzo</h4>
        <p>🏠 Via Esempio, 123, 00100 Roma (Italia)</p>
      </div>

      <div className="">
        <h4>Social Media</h4>
        <p>
          📱 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>

    </div>
  );
}
