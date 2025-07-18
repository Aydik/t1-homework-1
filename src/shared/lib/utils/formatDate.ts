export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  const datePart = d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const timePart = d.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${datePart} в ${timePart}`;
}
