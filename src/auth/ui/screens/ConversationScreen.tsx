import type { FC } from "react";
import logo from "../components/assets/logo.svg";
import { ConversationBox } from "../components/ConversationBox";

export const ConversationScreen: FC = () => {

  return (
    <div className="grid grid-rows-[1fr_50px] bg-gray-900 h-screen p-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={logo} className="w-12" alt="App Logo" />
        <p className="text-white text-2xl font-light">How can I help you today?</p>
      </div>
      <ConversationBox />
    </div>
  );
};
