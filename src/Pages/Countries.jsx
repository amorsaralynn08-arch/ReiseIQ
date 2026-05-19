import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Countries = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchCountry = async () => {
    try {
      const ref = doc(db, "countries", id);
      const snap = await getDoc(ref);

      console.log("EXISTS:", snap.exists());

      if (snap.exists()) {
        setCountry(snap.data());
      } else {
        setCountry(null);
      }

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  fetchCountry();
}, [id]);
  if (loading) return <div>Loading...</div>;

  if (!country) return <div>Country not found</div>;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>{country.summary}</p>
    </div>
  );
};

export default Countries;