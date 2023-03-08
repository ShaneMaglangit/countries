import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  onToggle: (active: boolean) => void;
};

export default function FilterBadge({ children, onToggle }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    onToggle(active);
  }, [active, onToggle]);

  return (
    <div
      className={`${
        active ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
      } cursor-pointer rounded-full px-4 py-1 text-sm`}
      onClick={() => setActive(!active)}>
      {children}
    </div>
  );
}
