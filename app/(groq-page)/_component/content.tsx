import React, { ChangeEvent, FormEvent, useState } from "react";

function ContentAI() {
  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log("Content :", content);
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col gap-4"
      >
        <label className="gap-2 flex flex-col">
          <p>Free AI for everyone, supported by GroqAI</p>
          <input
            type="text"
            className="w-[400px] text-black"
            placeholder="Search about your needs."
            id="content"
            name="content"
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="w-[400px] rounded-md text-xl p-3 bg-slate-800"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default ContentAI;
