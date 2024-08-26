import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgHamburger({ title, titleId, ...props }: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="hamburger_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>{'.hamburger_svg__cls-2{fill:#4b4b4b}'}</style>
      </defs>
      <path d="M50.75 50H9.25A4.47 4.47 0 015 45.35V0h50v45.35A4.47 4.47 0 0150.75 50z" fill="#c9c9c9" />
      <path
        className="hamburger_svg__cls-2"
        d="M47.42 15.59H12.58a1.5 1.5 0 010-3h34.84a1.5 1.5 0 010 3zM47.42 26.5H12.58a1.5 1.5 0 110-3h34.84a1.5 1.5 0 010 3zM47.42 37.41H12.58a1.5 1.5 0 110-3h34.84a1.5 1.5 0 010 3z"
      />
    </svg>
  );
}

export default SvgHamburger;
