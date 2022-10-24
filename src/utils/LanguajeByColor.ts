
export const LanguajeByColor = (languaje: string) => {
  const languajeLower = languaje.toLowerCase()

  if (languajeLower === 'javascript') return '🟡'
  if (languajeLower === 'typescript') return '🔵'

  return '🟢'
}
