export default function extractDate(dateString: string): string {
  return dateString ? new Date(dateString).toISOString().split('T')[0] : '';
}