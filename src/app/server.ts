"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { redis } from "@/database/redis";
import { revalidatePath } from "next/cache";

const randomstring = require("randomstring");

export async function AddMessage() {
  const key: string = randomstring.generate();
  await redis.set(key, "Hello World");
  revalidatePath("/");
}
