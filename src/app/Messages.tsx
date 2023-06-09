export default function Messages(props: { messages: string[] }) {
  return (
    <div className="flex flex-col gap-2 mt-4 max-w-md max-h-72 overflow-y-scroll p-4">
      {props.messages.map((message) => {
        return (
          <div key={message} className="p-3 bg-slate-300 rounded-full">
            {message}
          </div>
        );
      })}
    </div>
  );
}
