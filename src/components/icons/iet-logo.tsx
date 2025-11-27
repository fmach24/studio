import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function IETLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn('text-foreground', props.className)}
    >
      <circle cx="50" cy="50" r="48" fill="#333" />
      <text
        x="50"
        y="62"
        fontFamily="sans-serif"
        fontSize="40"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        <tspan>ie</tspan>
        <tspan dy="-10" fontSize="12">
          AGH
        </tspan>
        <tspan>t</tspan>
      </text>
    </svg>
  );
}
