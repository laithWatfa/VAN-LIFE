import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/van");
        const data = await res.json();
        if (!res.ok) return;
        setVans(data);
      } catch (err) {}
      fetchVans();
    };
  }, []);
  return (
    <h1>
      Vans Page
      {/* {vans.map((van) => (
        <h2>{van.name}</h2>
      ))} */}
      {vans.name}
    </h1>
  );
};
export default Vans;
