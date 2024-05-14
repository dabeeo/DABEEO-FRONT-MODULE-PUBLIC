import '@src/index.css';

import {AlignItems, FlexDirection, JustifyContent} from '@components/Stack/Stack.types';
import styled from '@emotion/styled';

type StyledStackProps = {
  flexDirection?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: number;
};

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
  align-items: ${({alignItems}) => alignItems};
  justify-content: ${({justifyContent}) => justifyContent};
  gap: ${({gap}) => gap && `${gap / 10}rem`};
`;
