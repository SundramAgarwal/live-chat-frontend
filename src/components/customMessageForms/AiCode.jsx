import { usePostAiCodeMutation } from "@/state/api";
import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

const AiCode = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [triggerCode] = usePostAiCodeMutation();

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    triggerCode(form);
    setMessage("");
    setAttachment("");

    // its working like this
    // 1 - triggercode is triggering  the data of form
    // 2 - and sending it to usePostAiCodeMutation i.e in state folder api.js from where api calling is done to backend
    // 3 - after that post request is made in the routes i.e named as openai
  };

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AiCode;
