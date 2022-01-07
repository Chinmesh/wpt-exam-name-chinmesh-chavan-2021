import { append } from "express/lib/response";
import { useEffect, useState } from "react";
import axios from "axios";


export default function App() {
  return (
    < My />
  );

}





function My() {
  const [msg, setMsg] = useState("");
  const [lsit, setlist] = useState([]);

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };
  const addMsg = async () => {
    const url = "http://localhost:4000/deliver";
    const data = {
      msg: msg,
    };
    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newList);
    setMsg("");
  };

  const getMsgs = async () => {
    const url = "https://localhost:4000/msgs";
    const result = await axios.get(url);
    const list = result.data;
    const newlist = [...list];
    setlist = (newlist);

    useEffect(() => getMsgs(), []);
    return (
      <div>
        <h1>
          Mychange app
        </h1>
        <input type="text" name="" id="" value={msg} onchange={handleMsgChange}
          placeholder="enter your chat" />
        <div> <input type="button" name="" value="send" /></div>


        {
          list.map((item, index) => (
            <div key={index}>{item, msg}</div>

          ))}

      </div>
    )






  }
}

