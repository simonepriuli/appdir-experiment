"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { redis } from "@/database/redis";
import { revalidatePath } from "next/cache";
import { defaultMessages } from "./defaultmessages";

const randomstring = require("randomstring");

function RandomMessage() {
  const randomIndex = Math.floor(Math.random() * defaultMessages.length);
  const randomMessage = defaultMessages[randomIndex];
  return randomMessage;
}

export async function AddMessage() {
  const key: string = randomstring.generate();
  await redis.set(key, RandomMessage());
  revalidatePath("/");
}
