export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p>
        {good.key}: <span>{good.value}</span>
      </p>
      <p>
        {neutral.key}: <span>{neutral.value}</span>
      </p>
      <p>
        {bad.key}: <span>{bad.value}</span>
      </p>
      <p>
        {total.key}: <span>{total.value}</span>
      </p>
      <p>
        {positivePercentage.key}: <span>{positivePercentage.value}%</span>
      </p>
    </>
  );
}
