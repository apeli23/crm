import { ColorModeContext, useMode } from './theme';
//the code below gives abilioty to passs in the themes into material UI
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  //access to the theme and color mode we created in `theme.js`
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/*resets css to default */}
      <div className="App"></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
