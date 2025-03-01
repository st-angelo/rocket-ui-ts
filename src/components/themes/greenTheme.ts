import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import typography from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'

const palette = generatePalette({
  primary: {
    lighter: '#9dffd4',
    light: '#67eaa2',
    main: '#2ab773',
    dark: '#008647',
    darker: '#00581e',
    contrastText: '#fff',
    rgba: 'rgba(38, 198, 218, 1)'
  },
  secondary: {
    lighter: '#6db45f',
    light: '#3d8433',
    main: '#005604',
    dark: '#002c00',
    darker: '#003000',
    contrastText: '#fff',
    rgba: 'rgba(0, 86, 4, 1)'
  },
  background: {
    default: '#eff7f0',
    paper: '#fff'
  },
  sideMenu: {
    bgColor: '#7eb58b',
    color: '#005604',
    hoverBgColor: 'rgb(239,247,240, 0.5)',
    hoverTextColor: '#005604',
    bgOpacity: '0.8'
  }
} as PaletteOptions)

const greenTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

greenTheme.components = componentsOverride(greenTheme)

export default greenTheme
