import AddMessageComponent from "./AddMessage";
import { redis } from "@/database/redis";
import Messages from "./Messages";

//server component that fetches all the messages from the DB
export default async function Home() {
  
  const keys = await redis.keys("*");
  const messages: string[] = [];

  await Promise.all(keys.map(async (key) => {
    const message = await redis.get(key) as string;
    messages.push(message);
  }));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-4xl font-bold text-center">
        AppDir experiment with server actions and{" "}
        <a className="underline" href="https://github.com/pingdotgg/zact">
          Zact
        </a>
      </p>

      <div className="mt-10"></div>

      <AddMessageComponent />
      <Messages messages={messages} />
      
    </div>
  );
}
