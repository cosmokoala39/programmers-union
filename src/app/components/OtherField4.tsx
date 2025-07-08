'use client';

import { useEffect, useState } from 'react';
import ArticleWidgetGrid from '../props/ArticleWidgetGrid';

export default function OtherField4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/articles/widget4.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <main className="container">
      {data.length > 0 && <ArticleWidgetGrid data={data} />}
    </main>
  );
}
