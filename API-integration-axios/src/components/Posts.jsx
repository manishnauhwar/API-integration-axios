import { useEffect, useState } from 'react';
import { getpost, deletepost } from '../api/getpost'
import { Form } from './Form';
import '../App.css'

export const Posts = () => {

  const [data, setData] = useState([])
  const [updatedata, setUpdatedata] = useState({});


  const getpostdata = (async () => {
    const res = await getpost();
    setData(res.data);

  })

  useEffect(() => {
    getpostdata();
  }, []);
//----------Delete a post------
  const handledeletepost = (async (id) => {
    try {
      const res = await deletepost(id);
      if (res.status === 200) {
        const newData = data.filter((curElem) => {
          return curElem.id !== id;
        });
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  })
//-------------Update a post---------
  const handleupdatepost =(curElem) => setUpdatedata(curElem);


  return (
    <>
      <section className='section-form'>
        <Form data={data}
          setData={setData}
          updatedata={updatedata}
          setUpdatedata={setUpdatedata} />

      </section>

      <section className='section-post'>
        <ul>
          {data.map((curElem) => {
            const { title, id, body } = curElem;
            return <li key={id}>
              <p>TITLE:{title}</p>
              <p>BODY:{body}</p>
              <button onClick={() => handleupdatepost(curElem)}>Edit</button>
              <button
                className='btn-delete' onClick={() => handledeletepost(id)}>
                Delete
              </button>

            </li>
          })}
        </ul>
      </section>
    </>
  )
};
