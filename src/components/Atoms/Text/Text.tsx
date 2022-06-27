import { TextProps } from './Text.models';

const Text = (props: TextProps) => {
  const { children, bold, color, size, italic, ariaLabel } = props;
  return (
    <p
      className={` text-center
        ${color ? color : 'text-slate-500'}
        ${bold ? 'font-black' : 'font-medium'}
        ${italic ? 'italic' : 'non-italic'}
        ${size ? size : 'text-base'}`}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};

export default Text;
