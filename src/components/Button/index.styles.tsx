import { motion } from 'motion/react';
import styled from 'styled-components';

type TProps = {
	size?: 'small' | 'medium' | 'large';
	variant?: 'filled' | 'tinted' | 'gray' | 'plain';
};

export const Button = styled(motion.button)<TProps>`
	padding: 0.4rem 1rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.3rem;
`;
