import styled from '@emotion/native';
import theme from '../../../../config/theme/theme';

export const Container = styled.View`
  flex-grow: 1;
  padding: 20px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageStyle = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const Type = styled.Text`
  width: 30%;
  font-size: 18px;
  color: ${theme.colors.textAccent};
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  background-color: orange;
  border-radius: 50px;
  text-align: center;
`;

export const DetailsContainerBg = styled.View`
  z-index: -1;
  width: 100%;
  height: 85%;
  background-color: ${theme.colors.background};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: absolute;
  bottom: 0;
  justify-content: center;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const InfoRow = styled.View`
  height: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const InfoBlock = styled.View`
  align-items: center;
  flex: 1;
`;

export const Divider = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${theme.colors.lightGray};
`;

export const InfoText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.textSecondary};
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
