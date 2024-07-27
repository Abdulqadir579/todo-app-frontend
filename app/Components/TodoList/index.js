const { default: TodoItem } = require("../TodoItem");

const TodosList = ({ todos, onDelete, onUpdate }) => {
  return (
    <>
      {todos?.map(({ text, _id }, index) => {
        return (
          <TodoItem
            onDelete={() => onDelete(_id)}
            onUpdate={() => onUpdate(_id)}
            text={text}
            key={index}
          />
        );
      })}
    </>
  );
};

export default TodosList;
