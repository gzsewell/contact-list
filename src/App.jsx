import ContactList from "./components/ContactList";
import SingleUserDetails from "./components/SingleUserDetails/SingleUserDetail";
import { useState } from "react";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      <h2>{featuredUser}</h2>
      {featuredUser ? (
        <SingleUserDetails />
      ) : (
        (<ContactList setFeaturedUser={setFeaturedUser} />) < ContactList
      )}
    </>
  );
}

export default App;
