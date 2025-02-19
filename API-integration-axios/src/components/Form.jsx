import { useState } from "react"
import { postdata } from "../api/getpost";

export const Form = ({ data, setData }) => {

  const [adddata, setAdddata] = useState({
    title: "",
    body: "",
  });

  const handleinputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdddata((prev) => ({
      ...prev, [name]: value
    }));
  }

  const addPostdata = async () => {
    const res = await postdata(adddata);

    if ((res.status === 201)) {
      setData([...data, res.data,]);
      setAdddata({title:" " , body:" "});
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostdata();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">  </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add Title"
          autoComplete="off"
          value={adddata.title}
          onChange={handleinputchange}
        />
      </div>
      <div>
        <label htmlFor="body">  </label>
        <input
          type="text"
          id="body"
          name="body"
          placeholder="Add Body"
          autoComplete="off"
          value={adddata.body}
          onChange={handleinputchange}
        />
      </div>
      <button>Submit</button>

    </form>
  )
}