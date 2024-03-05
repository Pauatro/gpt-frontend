import send from "./send.svg";

export const ConversationButton = () => {
  return (
    <button className="text-white w-5">
      <img src={send} alt="Send Icon" />
    </button>
  );
};
