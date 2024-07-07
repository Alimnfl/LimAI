"use client";

import { requestToGroqAI } from "@/utils/groq";
import { ChangeEvent, FormEvent, useState } from "react";

interface messageAIProps {
  content: string;
  role: string;
}

interface UsageMessageProps {
  completion_time: number;
  completion_tokens: number;
  prompt_time: number;
  prompt_token: number;
  total_time: number;
  total_tokens: number;
}

interface ChoicesProps {
  finish_reason: string;
  index: number;
  message: messageAIProps;
}

interface XGroq {
  id: string;
}

interface ContentAIProps {
  choices: ChoicesProps[];
  created: number;
  id: string;
  model: string;
  object: string;
  system_fingerprint?: string;
  usage: UsageMessageProps;
  x_groq: XGroq;
}

function ContentAI() {
  const [inputValue, setInputValue] = useState<string>("");
  const [content, setContent] = useState<ContentAIProps>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const AI = await requestToGroqAI(inputValue);
    const contentAIProp: ContentAIProps = {
      choices: AI.choices,
      created: AI.created,
      id: AI.id,
      model: AI.model,
      object: AI.object,
      system_fingerprint: AI.system_fingerprint,
      usage: AI.usage,
    };
    setContent(contentAIProp);
    console.log(contentAIProp);
  };

  return (
    <div className="flex flex-col text-white max-w-5xl gap-4 w-full h-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col gap-4"
      >
        <label className="gap-2 flex flex-col">
          <p className="flex items-center font-semibold text-2xl justify-center">
            Free AI for everyone
          </p>
          <input
            type="text"
            className="w-[600px] p-4 rounded-md text-black"
            placeholder="Search about your needs."
            id="content"
            name="content"
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="w-[600px] rounded-md text-medium p-3 bg-slate-800"
        >
          Search
        </button>
      </form>

      {content && (
        <div className="flex max-w-[600px] w-full bg-gray-600 p-4 rounded-md items-center justify-center h-full">
          {content?.choices.map((d) => (
            <div className="flex flex-col w-full h-full" key={d.index}>
              {d.message.content.split("\n\n").map((paragraph, i) => (
                <div key={i}></div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContentAI;
