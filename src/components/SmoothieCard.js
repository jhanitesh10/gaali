const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.text}</h3>
      <p>{smoothie.description}</p>
    </div>
  );
};

export default SmoothieCard;
