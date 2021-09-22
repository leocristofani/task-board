import { useEffect, useState } from "react";
import { useURL } from "../../../../shared/url-privoder/url-provider";

export default function useExpanded() {
  const url = useURL();

  const allExpanded = url.getParam("expanded") === "true";

  const [expanded, setExpanded] = useState(allExpanded);

  useEffect(() => {
    setExpanded(allExpanded);
  }, [allExpanded]);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return { expanded, toggleExpanded };
}
