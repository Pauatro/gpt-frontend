import Icon from "./Icon.tsx";

export const ConversationBox = () => {
  return (
    <div className="justify-self-center flex border rounded-2xl w-full md:max-w-3xl xl:max-w-5xl h-full px-4 pb-1">
      <input
        className="bg-transparent text-white placeholder:text-gray-500 w-full outline-none"
        name="conversationBox"
        placeholder="Type here to talk to the model..."
      />
      <button>
        <Icon type="send" />
      </button>
    </div>
  );
};
