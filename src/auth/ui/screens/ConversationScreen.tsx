import type { FC } from "react";
import logo from "./logo.svg";

export const ConversationScreen: FC = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 h-screen">
      <div id="logoArea" className="flex flex-col justify-center items-center gap-2">
        <img src={logo} width="50px" alt="OpenAi Logo" />
        <p className="text-white text-2xl font-light">How can I help you today?</p>
      </div>
    </div>
  );
};
