import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Group, Title, NavLink, Text, Stack, Grid, Button, ActionIcon } from '@mantine/core';
import { useDisclosure, useElementSize } from '@mantine/hooks';
import { theme } from './theme';
import { IconHome, IconBriefcase, IconSchool, IconMist, IconBrandGithub } from '@tabler/icons-react';

function App() {
  const [ opened, {toggle} ] = useDisclosure();
  const { ref, height } = useElementSize();
  const iconSize = 40;

  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <AppShell
        header={{ height: height }}
        navbar={{
          width: 250,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        footer={{ height: 40 }}
        padding="sm"
      >
        <AppShell.Header p='xs'>
          <Grid align='center' ref={ref}>
            <Grid.Col span={{base: 12, sm: 6}}>
              <Group>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Title order={1}>Tyler Veeman</Title>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group align='center' justify='right'>
                <ActionIcon variant="transparent" size={iconSize+5}>
                  <img src="github-mark-white.png" width={iconSize} height={iconSize} onClick={() => window.open("https://github.com/tec109", '_blank')}/>
                </ActionIcon>
                <ActionIcon variant="transparent" size={iconSize+5}>
                  <img src="In-Blue-96.png" width={iconSize} height={iconSize} onClick={() => window.open("https://www.linkedin.com/in/tyler-veeman/", '_blank')}/>
                </ActionIcon>
                <ActionIcon variant="transparent" size={iconSize+5}>
                  <img src="Instagram_Glyph_Gradient.png" width={iconSize} height={iconSize} onClick={() => window.open("https://www.instagram.com/tec109/", '_blank')}/>
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
        </AppShell.Header>

        <AppShell.Navbar p="sm">
          <NavLink
            href='#' // Change this to the correct URL
            label='Home'
            leftSection={<IconHome stroke={2}/>}
            active={true}
          />
          <NavLink
            href='#' // Change this to the correct URL
            label='Employment'
            leftSection={<IconBriefcase stroke={2}/>}
          />
          <NavLink
            href='#' // Change this to the correct URL
            label='Education'
            leftSection={<IconSchool stroke={2}/>}
          />
          <NavLink
            href='#' // Change this to the correct URL
            label='Skills'
            leftSection={<IconMist stroke={2}/>}
          />
        </AppShell.Navbar>

        <AppShell.Main>This site is under construction. Please come back soon!</AppShell.Main>
        <AppShell.Footer p='xs'>
          <Text ta='center' size='xs'>
            © 2025 Tyler Rod Veeman. All rights reserved.
          </Text>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App
