import { useEffect, useState } from 'react';
import { getpost, deletepost} from '../api/getpost'
import { Form } from './Form';
import '../App.css'

export const Posts = () => {

  const [data, setData] = useState([])


  const getpostdata = (async () => {
    const res = await getpost();
    setData(res.data);

  })

  useEffect(() => {
    getpostdata();
  }, []);


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

  return (
    <>
<section  className='section-form'>
  <Form data={data} setData={setData}/>

</section>

      <section className='section-post'>
        <ul>
          {data.map((curElem) => {
            const { title, id, body } = curElem;
            return <li key={id}>
              <p>TITLE:{title}</p>
              <p>BODY:{body}</p>
              <button>Edit</button>
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
