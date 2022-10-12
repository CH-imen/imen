import "./css/main.css";
import DisplayTodos from "./components/Addtask";
import Todo from "./components/Task";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        ToDo Application 
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todo />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
