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
  /*

chunk-373CG7ZK.js?v=07b68a61:11553 Uncaught (in promise) 
Error: Too many re-renders. React limits the number of renders 
to prevent an infinite loop.
  */
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
