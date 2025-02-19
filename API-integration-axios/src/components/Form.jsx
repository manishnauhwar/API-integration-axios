import { useEffect, useState } from "react"
import { postdata,updatepost } from "../api/getpost";

export const Form = ({ data, setData, updatedata, setUpdatedata }) => {

  const [adddata, setAdddata] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updatedata).length === 0;

  useEffect(() => {
    updatedata &&
      setAdddata({
        title: updatedata.title || "",
        body: updatedata.body || "",
      });

  }, [updatedata]);


  //--------------Add New data----------
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
      setAdddata({ title: " ", body: " " });
    }
  }

  //--------update post data-------
  const updatepostdata = async () => {
    try {
    const res = await updatepost(updatedata.id, adddata);
    if (res.status === 200) {
      setData((prev) =>{
         return prev.map((curElem) => {
        return curElem.id === res.data.id ? res.data : curElem;
      });
      });
          setAdddata({title:"" , body:""});
          setUpdatedata({});
    };
  } catch (error) {
   console.log(error);   
  }
  }
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const action = e.nativeEvent.submitter.value;
      if (action === "Add") {
        addPostdata();
      }
      else if (action === "Edit") {
        updatepostdata();
      }
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
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}</button>

      </form>
    )
  }