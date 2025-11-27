import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function AGHLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 162 243"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn('text-foreground', props.className)}
    >
      <path
        d="M51.6 211.2V99.6H0V211.2H51.6Z"
        fill="#006642"
        className="group-hover:fill-primary transition-colors"
      />
      <path
        d="M106.8 211.2V0L106.8 0C106.8 20.4 102.6 39.6 96 58.8L95.4 60.6C95.4 60.6 95.4 60.6 95.4 60.6C88.2 81.6 81 102.6 73.2 124.2L72.6 126L54.6 125.4V211.2H106.8Z"
        fill="#231F20"
        className="group-hover:fill-primary transition-colors"
      />
      <path
        d="M162 211.2V99.6H110.4V211.2H162Z"
        fill="#990033"
        className="group-hover:fill-primary transition-colors"
      />
      <path
        d="M39.6 242.4C39.6 242.4 39.6 242.4 39.6 242.4H59.4V231L59.4 231C61.8 235.2 66.6 238.2 72.6 238.2C78 238.2 82.2 236.4 85.2 232.2C88.2 228 90 221.4 90 213V192H69.6V213.6C69.6 218.4 68.4 221.4 66.6 223.2C64.8 225 61.8 226.2 58.2 226.2C54.6 226.2 51.6 225 49.2 222.6C46.8 220.2 45.6 216.6 45.6 212.4V192H25.2V229.2H39.6V242.4Z"
        transform="translate(-25.2, -192) scale(2.4)"
        fill="#231F20"
        className="group-hover:fill-primary transition-colors"
      />
      <path
        d="M129 242.4V230.4L128.4 230.4C126.6 234 123 236.4 117.6 237.6V219.6C120.6 218.4 123 216.6 124.2 214.2C125.4 211.8 126 208.2 126 204V192H105.6V229.2H120V242.4H129Z"
        transform="translate(-25.2, -192) scale(2.4)"
        fill="#231F20"
        className="group-hover:fill-primary transition-colors"
      />
      <path
        d="M153 238.2C159.6 238.2 165 235.8 169.2 231C173.4 226.2 175.8 219.6 175.8 211.8C175.8 204 173.4 197.4 169.2 192.6C165 187.8 159.6 185.4 153 185.4C146.4 185.4 141 187.8 136.8 192.6C132.6 197.4 130.2 204 130.2 211.8C130.2 219.6 132.6 226.2 136.8 231C141 235.8 146.4 238.2 153 238.2ZM153 226.8C150.6 226.8 148.5 225.9 146.7 224.1C144.9 222.3 144 219.9 144 216.9V206.7C144 203.7 144.9 201.3 146.7 199.5C148.5 197.7 150.6 196.8 153 196.8C155.4 196.8 157.5 197.7 159.3 199.5C161.1 201.3 162 203.7 162 206.7V216.9C162 219.9 161.1 222.3 159.3 224.1C157.5 225.9 155.4 226.8 153 226.8Z"
        transform="translate(-25.2, -192) scale(2.4)"
        fill="#231F20"
        className="group-hover:fill-primary transition-colors"
      />
    </svg>
  );
}
