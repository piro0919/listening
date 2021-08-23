import NotSupported from "components/templates/NotSupported";
import Top from "components/templates/Top";
import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Pages() {
  const { browserSupportsSpeechRecognition, startListening, stopListening } =
    useMemo(() => SpeechRecognition, []);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const handleStart = useCallback(async () => {
    await startListening({ continuous: true, language: "ja" });
  }, [startListening]);
  const text = useMemo(() => transcript.replaceAll(" ", "\n"), [transcript]);

  return browserSupportsSpeechRecognition() ? (
    <Top
      isListening={listening}
      onReset={resetTranscript}
      onStart={handleStart}
      onStop={stopListening}
      text={text}
    />
  ) : (
    <NotSupported />
  );
}

export default Pages;
