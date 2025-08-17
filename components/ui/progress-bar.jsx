"use client";

export default function ProgressBar({ total, answered }) {
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 50,
        height: "6px",
        background: "#e0e7ef",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${percent}%`,
          background:
            "linear-gradient(90deg, #1e3a8a 0%, #60a5fa 100%)",
          transition: "width 0.3s cubic-bezier(.4,1,.7,1)",
        }}
      />
    </div>
  );
}
