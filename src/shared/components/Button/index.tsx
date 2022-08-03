import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}>;

export function Button(props: Props) {
  return (
    <button className="bg-primary py-5 px-9 text-white rounded-full text-xl leading-5 font-bold">
      {props.children}
    </button>
  );
}
