import React from "react";
import "./Speech.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Speech() {
  const startlistenig = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  // const stoplistening = ()=> SpeechRecognition.stopListening();
  let letter = true;

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const handlecopied = () => {
    const copytext = document.querySelector(".subc");
    const Text = copytext.innerHTML;
    navigator.clipboard.writeText(Text);
    letter = false;
  };

  return (
    <>
      <div className="container">
        <div className="subc">{letter ? transcript : ""}</div>
      </div>
      <div className="but">
        <button onClick={startlistenig}> Start listen</button>
        <button onClick={SpeechRecognition.stopListening}>Stop listen</button>
        <button onClick={handlecopied}>copy</button>
      </div>
    </>
  );
}

export default Speech;
