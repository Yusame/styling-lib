/** @jsxImportSource theme-ui */
import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Text, Card, Grid, Select, Theme, ThemeProvider, Themed } from 'theme-ui';
import { theme1, theme2 } from './../themes/theme';

export default function Themeui(): React.ReactElement {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme1);

  const themes = [
    {
      name: 'theme1',
      value: theme1
    },
    {
      name: 'theme2',
      value: theme2
    }
  ];

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {    
    const theme = themes.find(el => el.name === e.target.value);
    if (undefined !== theme) {
      setSelectedTheme(theme.value);
    }
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <Themed.h1>Awesome themes !</Themed.h1>
      <h1
        sx={{
          color: 'secondary',
          fontFamily: 'heading',
        }}>
          Config
      </h1>
      <Grid gap={2} columns={[1, '2fr 1fr']}>
        <Box>
          <Card variant='primary'>
            <Text>Choisir mon thème</Text>
            <Select
              defaultValue="theme1"
              onChange={handleChange}>
              <option value='theme1'>Theme 1</option>
              <option value='theme2'>Theme 2</option>
            </Select>
          </Card>
        </Box>
        <Box bg="muted">
          <Card variant='compact'>
            <Text>Dark / Light Mode</Text>
            {/* <button
                onClick={(e) => {
                  const next = mode === 'dark' ? 'light' : 'dark';
                  setMode(next);
                }}
              /> */}
          </Card>
        </Box>
      </Grid>
      <h1>My first box</h1>
      <Box p={4} m={20} color="white" bg="primary">
          Beep
      </Box>
      <div
        sx={{
          fontWeight: 'bold',
          fontSize: 4,
          color: 'primary',
        }}
      >
        <p>My Buttons</p>
      </div>
      <Grid m={20} gap={20} columns={[1, null, 3]}>
        <Button variant='primary'>Beep</Button>
        <Button variant='secondary'>Boop</Button>
        <Button variant='disabled'>Beep</Button>
      </Grid>
    </ThemeProvider>
  );
}
