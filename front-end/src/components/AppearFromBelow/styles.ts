import styled from 'styled-components';

const getTransitionTime = ({ timeInMs }: WrapperProps) =>
  `${timeInMs}ms ease-in-out`;

type WrapperProps = { timeInMs: number };

export const Wrapper = styled.div<WrapperProps>`
  transition: transform ${getTransitionTime}, opacity ${getTransitionTime};
`;
