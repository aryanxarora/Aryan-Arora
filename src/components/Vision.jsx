import { motion } from "framer-motion";
import Draggable from "react-draggable";
import "../styles/vision.css";

function Vision() {
  return (
    <div className="bg-black text-center text-white py-36">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 5 }}
        className="font-serif"
      >
        <h1 className="text-6xl lg:text-8xl">👁</h1>
        <h1 className="text-5xl lg:text-7xl">'24 Vision</h1>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="font-sans text-sm text-white"
      >
        <h2>If a flower doesn't bloom</h2>
        <h2>Do you blame the flower? Or do you blame the environment?</h2>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="mt-32"
      >
        {/* https://api.pinterest.com/v5/boards/{board_id} */}
        <div className="gap-0 columns-2 lg:columns-5">
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/25/fb/2c/25fb2cb47f3059ca62ceaa823430dddb.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/61/9f/4a/619f4acb417b338e3dcaf10fe3cb7de4.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/a1/d1/63/a1d1633580ad92a26b8597d89ab92e41.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/f0/89/e6/f089e6d193c40b59e707cf789d6f69ee.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/de/64/d4/de64d4cddf50a34f4a70e42dbc0107b1.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/46/3c/81/463c81e1404d5f0ced0b29b383d821cb.jpg" alt="" />
          <img className="rounded-xl p-2" src="https://i.pinimg.com/564x/00/2d/81/002d818289fd01a925d3ffc4d32b717d.jpg" alt="" />
        </div>
      </motion.div>
    </div>
  );
}

export default Vision;
