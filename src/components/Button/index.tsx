import { MotionProps } from 'motion/react';
import { ButtonHTMLAttributes } from 'react';
import * as S from './index.styles';

type TProps = {
	children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps;

const Button = ({ children, ...props }: TProps) => (
	<S.Button {...props}>{children}</S.Button>
);
export default Button;
