import './App.css';
import ContactCard from './components/ContactCard';
import contactsData from './contacts.json';
import { useState } from 'react';

function App() {
  const [sortName, setSortName] = useState(contactsData.slice(0, 6));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(6));

  const addRandomContact = () => {
    // Randomly select a contact from the remaining contacts array
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    // Add the random contact to the sortName array
    const newSortName = [...sortName, randomContact];

    // Update the state with the new sortName and remainingContacts arrays
    setSortName(newSortName);
    setRemainingContacts(remainingContacts.filter(contact => contact.id !== randomContact.id));
  };

  const sortByPopularity = () => {
    let sortedPop = [...sortName].sort((a, b) => {
      return b.popularity - a.popularity
    })
    setSortName(sortedPop)
  }

  const sortByName = () => {
    let sortedName = [...sortName].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setSortName(sortedName)
  }

  const handleDeleteContact = (id) => {
    setSortName(sortName.filter(contact => contact.id !== id));
  }

  return (
    <div className="App" >
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {sortName.map(contact => (
            <ContactCard key={contact.id} name={contact} onDelete={handleDeleteContact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
