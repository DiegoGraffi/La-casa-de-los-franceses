type IconProps = {
  color?: string;
};

export default function CartIcon({ color }: IconProps) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 25 24"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 22C20.8284 22 21.5 21.3284 21.5 20.5C21.5 19.6716 20.8284 19 20 19C19.1716 19 18.5 19.6716 18.5 20.5C18.5 21.3284 19.1716 22 20 22Z"
        fill={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22C10.8284 22 11.5 21.3284 11.5 20.5C11.5 19.6716 10.8284 19 10 19C9.17157 19 8.5 19.6716 8.5 20.5C8.5 21.3284 9.17157 22 10 22Z"
        fill={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 4H22.5L20.5 15H16M17 4L16 15M17 4H11.25M16 15H12M11.25 4H5.5L7.5 15H12M11.25 4L12 15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4C5.33333 3.33333 4.5 2 2.5 2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 15H7.5H5.73077C3.94646 15 3 15.7812 3 17C3 18.2188 3.94646 19 5.73077 19H20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
