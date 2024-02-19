import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const target = event.target.parentNode.childNodes[0].innerText;
    setToDos([]);
    toDos.map((todo) => {
      if (todo !== target) {
        setToDos((currentArray) => [...currentArray, todo]);
        return todo;
      }
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const target = event.target.parentNode.childNodes[0].innerText;
    const editValue = prompt("원래 값:" + { target }, "수정할 값을 입력하세요");
    setToDos([]);
    toDos.map((todo) => {
      if (todo === target) {
        todo = editValue;
      }
      setToDos((current) => [...current, todo]);
      return "9";
    });
  };

  return (
    <div>
      <h1>투두 앱!({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write!"
        />
        <button>Add To do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((todo, index) => (
          <li value={todo} key={index}>
            <span style={{ marginRight: "10px" }}>{todo}</span>
            <button style={{ marginRight: "10px" }} onClick={handleEdit}>
              수정
            </button>
            <button onClick={handleDelete}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
