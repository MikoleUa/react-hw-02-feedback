export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((e) => (
    <button key={e} name={e} onClick={onLeaveFeedback}>
      {e.toUpperCase()}
    </button>
  ));
}
