import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const apiURL = "https://jsonplaceholder.typicode.com/users/";
  const [user, setUser] = useState(null);

  function fetchUser(apiURL, userId) {
    fetch(`${apiURL}${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  // Ovo se izvršava svaki put kada se komponenta renderira
  // Ovo ne raditi jer će prouzročiti beskonačnu petlju,
  // zbog toga što se komponenta svaki put ponovno renderira kada promijenimo state
  //   useEffect(() => {
  //     fetch(`${apiURL}${userId}`)
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   });

  // Izvršava se nakon svakog renderiranja
  useEffect(() => {
    console.log("Rendered");
  });

  // Izvršava se samo jednom, nakon prvog/početnog renderiranja
  useEffect(() => {
    console.log("Mounted");
    fetchUser(apiURL, userId);
  }, []);

  // Izvršava se samo kada se userId promijeni
  useEffect(() => {
    console.log("User changed to: " + userId);
    fetchUser(apiURL, userId);
  }, [userId]);

  return <div>{user ? user.name : "Loading..."}</div>;
}

export default UserProfile;
