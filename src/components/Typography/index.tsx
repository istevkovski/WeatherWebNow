import { MotionProps } from 'motion/react';
import { HTMLAttributes } from 'react';
import * as S from './index.styles';

export type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type TProps = {
	tag?: TVariant;
	children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement> &
	MotionProps;

export const Typography = ({ tag = 'p', children, ...props }: TProps) => (
	<S.Typography tag={tag} {...props}>
		{children}
	</S.Typography>
);
