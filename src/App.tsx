import './App.css';
import Avatar from './Avatar';

function App() {
  const bart = {
    image:
      'https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png',
    firstName: 'Bart',
    lastName: 'Simpson',
  };

  const homer = {
    image:
      'https://www.stickees.com/files/cartoon/the-simpsons/2378-network-sticker.png',
    firstName: 'Homer',
    lastName: 'Simpson',
  };

  const simpsons = [homer, bart];

  return (
    <>
      {simpsons.map((simpson, i) => (
        <Avatar
          key={i}
          firstName={simpson.firstName}
          lastName={simpson.lastName}
          image={simpson.image}
        />
      ))}
    </>
  );
}

export default App;
