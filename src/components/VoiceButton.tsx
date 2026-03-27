interface VoiceButtonProps {
  text: string;
  enabled: boolean;
}

const VoiceButton = ({ text, enabled }: VoiceButtonProps) => {
  const speak = () => {
    if (!enabled || !('speechSynthesis' in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      type="button"
      onClick={speak}
      className="rounded-xl bg-calm-100 px-3 py-2 text-sm font-medium text-calm-700 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={!enabled}
    >
      🔊 Voice prompt
    </button>
  );
};

export default VoiceButton;
