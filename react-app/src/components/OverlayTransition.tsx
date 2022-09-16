import "./OverlayTransition.scss";

const OverlayTransition = (props: any) => {
  const { dispatchTransition } = props;
  return (
    <div className="overlay-transition-wrapper">
      <div
        className={`transition-block large ${
          dispatchTransition ? "animation-slide-through" : ""
        } speed-1 color-1`}
      ></div>
      <div
        className={`transition-block medium ${
          dispatchTransition ? "animation-slide-through" : ""
        } speed-2 color-2`}
      ></div>
      <div
        className={`transition-block small ${
          dispatchTransition ? "animation-slide-through" : ""
        } speed-3 color-3`}
      ></div>
    </div>
  );
};

export default OverlayTransition;
