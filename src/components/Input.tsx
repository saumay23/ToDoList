import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Input = (props: { handler: (item: string) => void }) => {
  const inputBox = useRef<HTMLInputElement>(null);
  const { handler } = props;
  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter data here!!"
        className="p-3 focus:outline-none w-[90%] border border-slate-400"
        ref={inputBox}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (inputBox.current && inputBox.current.value.length > 0) {
              handler(inputBox.current.value);
              inputBox.current.value = "";
            }
          }
        }}
      />
      <div
        className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center"
        onClick={() => {
          if (inputBox.current && inputBox.current.value.length > 0) {
            handler(inputBox.current.value);
            inputBox.current.value = "";
          }
        }}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Input;
