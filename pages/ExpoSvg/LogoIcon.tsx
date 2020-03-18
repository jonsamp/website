import React from "react";
import { useTheme, useFontSize } from "../../hooks";
import { Defs, Path, Stop, Svg, LinearGradient } from "react-native-svg";

function LogoIcon() {
  const theme = useTheme();
  return (
    <Svg
      width={79 * useFontSize(0.035)}
      height={40 * useFontSize(0.035)}
      viewBox="0 0 79 40"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.929 18.857h24v2.286h-24v-2.286z"
        fill={theme.text.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.786 32V8h2.285v24h-2.285z"
        fill={theme.text.color}
      />
      <Path
        d="M25.5 4.571a4.571 4.571 0 11-9.143 0 4.571 4.571 0 019.143 0zM25.5 35.429a4.571 4.571 0 11-9.143 0 4.571 4.571 0 019.143 0z"
        fill={theme.text.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.635 27.677l16.97-16.97 1.617 1.616-16.97 16.97-1.617-1.616z"
        fill={theme.text.color}
      />
      <Path
        d="M35.07 12.323a4.571 4.571 0 11-6.464-6.465 4.571 4.571 0 016.465 6.465zM13.251 34.142a4.571 4.571 0 11-6.465-6.465 4.571 4.571 0 016.465 6.465zM5.5 24.571a4.571 4.571 0 110-9.142 4.571 4.571 0 010 9.142z"
        fill={theme.text.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.252 10.707l16.97 16.97-1.616 1.616-16.97-16.97 1.616-1.616z"
        fill={theme.text.color}
      />
      <Path
        d="M28.606 34.142a4.572 4.572 0 116.465-6.465 4.572 4.572 0 01-6.465 6.465zM6.786 12.323a4.571 4.571 0 116.466-6.465 4.571 4.571 0 01-6.466 6.465z"
        fill={theme.text.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.929 32V8h2.285v24H56.93z"
        fill="#FFC952"
      />
      <Path
        d="M62.643 4.571a4.571 4.571 0 11-9.143 0 4.571 4.571 0 019.143 0zM62.643 35.429a4.571 4.571 0 11-9.143 0 4.571 4.571 0 019.143 0z"
        fill="#FFC952"
      />
      <Path
        d="M73.5 24.571a4.571 4.571 0 110-9.142 4.571 4.571 0 010 9.142z"
        fill="#F349EB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.357 18.857h49.714v2.286H20.357v-2.286z"
        fill="url(#paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.778 27.677l16.97-16.97 1.617 1.616-16.97 16.97-1.617-1.616z"
        fill="#FF7473"
      />
      <Path
        d="M72.213 12.323a4.571 4.571 0 11-6.464-6.465 4.571 4.571 0 016.465 6.465zM50.394 34.142a4.571 4.571 0 11-6.465-6.464 4.571 4.571 0 016.465 6.464z"
        fill="#FF7473"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.394 10.707l16.97 16.97-1.615 1.616-16.971-16.97 1.616-1.616z"
        fill="#1E90FF"
      />
      <Path
        d="M65.749 34.142a4.572 4.572 0 116.465-6.465 4.572 4.572 0 01-6.465 6.465zM43.93 12.323a4.572 4.572 0 116.465-6.465 4.572 4.572 0 01-6.466 6.465z"
        fill="#1E90FF"
      />
      <Defs key={theme.text.color}>
        <LinearGradient
          id="paint0_linear"
          x1="21"
          y1="20"
          x2="70"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor={theme.text.color} />
          <Stop offset="1" stopColor="#F349EB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default LogoIcon;
