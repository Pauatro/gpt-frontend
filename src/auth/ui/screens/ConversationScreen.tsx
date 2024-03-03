import type { FC } from "react";
import logo from "./logo.svg";
import { ConversationBox } from "../ConversationBox";

export const ConversationScreen: FC = () => {

  return (
    <div className="grid grid-rows-[1fr_50px] bg-gray-900 h-screen p-6">
      <div id="logoArea" className="flex flex-col justify-center items-center gap-2">
        <img src={logo} width="50px" alt="App Logo" />
        <p className="text-white text-2xl font-light">How can I help you today?</p>
      </div>
      <ConversationBox />
    </div>
  );
};
