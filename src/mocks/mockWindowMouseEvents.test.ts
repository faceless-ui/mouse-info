// @ts-nocheck
const mockWindowMouseEvents = () => {
  if (window?.document) {
    window.document.mouseTo = function mouseTo(xCoord, yCoord) {
      if (xCoord <= window.innerWidth && yCoord <= window.innerHeight) {
        const event = new window.Event('mousemove');
        event.clientX = xCoord;
        event.clientY = yCoord;

        window.document.dispatchEvent(event);
      }
    };

    window.document.mouseEnter = () => window.document.dispatchEvent(new window.Event('mouseenter'));
    window.document.mouseLeave = () => window.document.dispatchEvent(new window.Event('mouseleave'));
  }
};

export default mockWindowMouseEvents;
