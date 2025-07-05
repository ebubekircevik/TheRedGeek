interface TheRedGeekIconProps {
  className?: string;
  size?: number;
}

export default function TheRedGeekIcon({
  className = "w-10 h-10",
  size = 40,
}: TheRedGeekIconProps) {
  return (
    <img
      src="/icon.svg"
      alt="TheRedGeek Logo"
      className={className}
      width={size}
      height={size}
    />
  );
}
