export const handlePress = (prev, value) => {
  if (value === 'C') return '';
  if (value === '←') return prev.slice(0, -1);
  if (value === '=') {
    try {
      const expression = prev.replace(/×/g, '*').replace(/÷/g, '/');
      if (!/^[0-9+\-*/.() ]*$/.test(expression)) return 'Error';
      const result = Function(`"use strict"; return (${expression})`)();
      return result.toString();
    } catch {
      return 'Error';
    }
  }

  const operators = ['+', '-', '×', '÷'];
  const lastChar = prev.slice(-1);

  if (prev === '' && operators.includes(value) && value !== '-') return prev;
  if (operators.includes(lastChar) && operators.includes(value)) return prev;

  return prev + value;
};
