"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    });

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-primary-dark"></div>
    </div>
  );
}
