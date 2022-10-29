const LANGUAGES_COLOR: { [key: string]: string } = {
  javascript: '🟡',
  typescript: '🔵',
}

export const LanguajeByColor = (languaje: string) => {
  const languajeLower = languaje.toLowerCase()
  return LANGUAGES_COLOR[languajeLower] || '⚫'
}
