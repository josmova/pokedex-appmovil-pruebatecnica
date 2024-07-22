import React from 'react';
import { Container, Name, Value, BarBackground, Bar } from '../../styles/atoms/StatBarStyles';

interface StatBarProps {
  name: string;
  value: number;
}

const StatBar: React.FC<StatBarProps> = ({ name, value }) => {
  const maxStatValue = 100; 

  return (
    <Container>
      <Name>{name.toUpperCase()}</Name>
      <Value>{value.toString().padStart(3, '0')}</Value>
      <BarBackground>
        <Bar style={{ width: `${(value / maxStatValue) * 100}%` }} />
      </BarBackground>
    </Container>
  );
};

export default StatBar;
