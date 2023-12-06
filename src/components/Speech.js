import React from 'react';
import './Speech.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




function Speech() {
  const startlistenig = () => SpeechRecognition.startListening({ continuous: true,language:'en-IN' });

  // const stoplistening = ()=> SpeechRecognition.stopListening();

  
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null                                                                                                    
  }

  return (
    <div>
      <div className="container">
        <div className="subc">
        {transcript}
        </div>
        <div className="but">
        <button onClick={startlistenig}> start listen</button>
        <button onClick={SpeechRecognition.stopListening}>stop listen</button>
        <button>copy</button>
        </div>
        
      </div>
    </div>
  )
}

export default Speech
