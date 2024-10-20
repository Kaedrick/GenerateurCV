import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [cvs, setCvs] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/cv')
      .then((res) => res.json())
      .then((data) => setCvs(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/cv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        description,
        education: education.split(','),
        experience: experience.split(','),
        visible,
      }),
    })
      .then((res) => res.json())
      .then((newCv) => setCvs([...cvs, newCv]));
  };

  return (
    <div>
      <h1>Liste des CVs</h1>
      <ul>
        {cvs.map((cv) => (
          <li key={cv._id}>
            <strong>{cv.firstName} {cv.lastName}</strong> - {cv.description} - Éducation : {cv.education.join(', ')} - Expérience : {cv.experience.join(', ')}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Prénom"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nom"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Éducation"
        />
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Expérience"
        />
        <label>
          Rendre visible :
          <input
            type="checkbox"
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
          />
        </label>
        <button type="submit">Ajouter un CV</button>
      </form>
    </div>
  );
};

export default App;
