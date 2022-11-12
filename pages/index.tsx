import { useSpeechSynthesis } from "react-speech-kit";

export default function Home() {
  const { speak } = useSpeechSynthesis();

  return (
    <button onClick={() => speak({ text: "Quero pizza!!!!!" })}>Speak</button>
  );
}
