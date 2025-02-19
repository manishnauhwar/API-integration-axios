import { useEffect, useState } from 'react';
import getpost from '../api/getpost'
import '../App.css'

export const Posts = () => {

  const [data, setData] = useState([])


  const getpostdata = (async () => {
    const res = await getpost();
    console.log(res.data);
    setData(res.data);

  })

  useEffect(() => {
    (async () => {
      const res = await getpost();
      setData(res.data);
    })();
  }, []);
    



  return (
    <>
      <section className='section-post'>
        <ul>
        {data.map((curElem) => {
          const { title, id, body } = curElem;
         return <li key={id}>
          <span className="post-id">{id}</span>
            <p>TITLE:{title}</p>
            <p>BODY:{body}</p>
            <button>Edit</button>
            <button className='btn-delete'>Delete</button>

          </li>
        })}
        </ul>
      </section>
    </>
  )
};
