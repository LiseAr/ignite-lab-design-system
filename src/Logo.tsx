interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
    return (
      <svg
        width={192}
        height={154}
        viewBox="0 0 192 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M99.483 149.781c38.159 0 69.093-30.934 69.093-69.094 0-38.159-30.934-69.093-69.093-69.093-38.16 0-69.094 30.934-69.094 69.094 0 38.159 30.934 69.093 69.094 69.093z"
          stroke="#0C4A6E"
          strokeWidth={8.04}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M143.609 27.533c21.748-5.968 38.08-5.418 42.948 2.905 8.636 14.996-23.319 49.7-71.371 77.416-48.052 27.716-94.062 38.08-102.777 23.084-4.79-8.323 2.905-22.77 18.922-38.63"
          stroke="#0C4A6E"
          strokeWidth={8.04}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M93.483 143.188c38.159 0 69.093-30.935 69.093-69.094C162.576 35.934 131.642 5 93.483 5c-38.16 0-69.094 30.934-69.094 69.094 0 38.159 30.934 69.094 69.094 69.094z"
          stroke="#C4C4CC"
          strokeWidth={8.04}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M137.609 20.939c21.748-5.967 38.08-5.418 42.948 2.905 8.636 14.996-23.319 49.7-71.371 77.416-48.052 27.716-94.062 38.08-102.777 23.084-4.79-8.323 2.905-22.77 18.922-38.63"
          stroke="#C4C4CC"
          strokeWidth={8.04}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  


