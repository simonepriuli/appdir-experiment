"use client";

import { AddMessage } from "./server";

export default function AddMessageComponent() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <button
        type="button"
        className="p-4 bg-white rounded-md"
        onClick={() => AddMessage}
      >
        Aggiungi messaggio
      </button>
    </div>
  );
}
