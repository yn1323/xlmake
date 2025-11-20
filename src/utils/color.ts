export function toArgb(hex: string): string {
  if (!hex) return 'FF000000';
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  if (hex.length === 6) {
    return 'FF' + hex.toUpperCase();
  }
  return hex.toUpperCase(); // Assume already ARGB or invalid
}
