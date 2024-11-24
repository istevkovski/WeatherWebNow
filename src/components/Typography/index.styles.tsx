import { createElement } from 'react';
import styled from 'styled-components';
import { TVariant } from '.';

type TProps = {
	tag: TVariant;
	children: React.ReactNode;
};

export const Typography = styled(({ tag, children, ...props }: TProps) =>
	createElement(tag, props, children),
)``;
