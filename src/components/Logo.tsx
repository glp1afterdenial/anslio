export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized orchid — two wing petals, top sepal, two lower sepals, lip, center */}
      {/* Left wing petal */}
      <path
        d="M16 15 C12 11, 4 9, 3 13.5 C2 17.5, 10 18, 16 15Z"
        fill="#c45d3e"
      />
      {/* Right wing petal */}
      <path
        d="M16 15 C20 11, 28 9, 29 13.5 C30 17.5, 22 18, 16 15Z"
        fill="#c45d3e"
      />
      {/* Top sepal */}
      <path
        d="M16 15 C14 11, 14 4, 16 2 C18 4, 18 11, 16 15Z"
        fill="#c45d3e"
        opacity="0.85"
      />
      {/* Lower-left sepal */}
      <path
        d="M16 15 C13 17, 7 23, 9 25 C11 26, 14 20, 16 15Z"
        fill="#c45d3e"
        opacity="0.75"
      />
      {/* Lower-right sepal */}
      <path
        d="M16 15 C19 17, 25 23, 23 25 C21 26, 18 20, 16 15Z"
        fill="#c45d3e"
        opacity="0.75"
      />
      {/* Orchid lip */}
      <path
        d="M13.5 16 C14 19.5, 15 22, 16 23.5 C17 22, 18 19.5, 18.5 16 C17 17.5, 15 17.5, 13.5 16Z"
        fill="#6b7c5e"
      />
      {/* Center */}
      <circle cx="16" cy="14.5" r="1.8" fill="#f6f2ec" />
    </svg>
  );
}
