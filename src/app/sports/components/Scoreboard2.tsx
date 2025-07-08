'use client';

import { useEffect, useState } from 'react';


import ArchiveList from './ArchiveList';

export default function Scoreboard2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/sports/scorboard2.json');
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <ArchiveList items={items} />
    </div>
  );
}
