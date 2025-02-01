import ContactList from "./components/ContactList";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      <h2>{featuredUser}</h2>
      {featuredUser ? (
        <SnigleUserDetails />
      ) : (
        (<ContactList setFeaturedUser={setFeaturedUser} />) < ContactList
      )}
    </>
  );
}

export default App;
