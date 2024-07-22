import styled from '@emotion/native';
import theme from '../../../../config/theme/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const CardContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const HeaderContent = styled.View`
  background-color: ${theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SearchBarWrapper = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const IconButtonWrapper = styled.View`
  margin-left: 10px;
`;
