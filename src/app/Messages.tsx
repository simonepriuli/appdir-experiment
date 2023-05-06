export default function Messages(props: { messages: string[] }) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {props.messages.map((message) => {
        return (
          <div key={message} className="p-3 bg-slate-200 rounded-full">
            {message}
          </div>
        );
      })}
    </div>
  );
}
