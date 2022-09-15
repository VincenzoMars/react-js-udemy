import { createPortal } from "react-dom";
import PortalProps from "../types/props/PortalProps";

const Portal = (props: PortalProps) => {
  let targetElement: HTMLElement | null = document.getElementById(props.target);

  if (!targetElement) {
    const newTargetElement = document.createElement("div");
    newTargetElement.setAttribute("id", props.target);
    document.querySelector("body")!.appendChild(newTargetElement);
    targetElement = document.getElementById(props.target) as HTMLElement;
  }

  return createPortal(props.children, targetElement);
};

export default Portal;
