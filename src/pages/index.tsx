import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, Box } from '@mantine/core';
import { Layout } from '../components/Layout/Layout';
//import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'absolute',
    width: '1920px',
    height: '1001px',
    left: '0px',
    top: '0px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    gap: '147px',
    position: 'absolute',
    width: '1700px',
    height: '722px',
    left: '110px',
    top: '60px',
    opacity: '0.8',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    gap: '1463px',
    width: '1700px',
    height: '106px',
    left: '110px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  logo: {
    width: '190px',
    height: '106px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
  logoText: {
    position: 'absolute',
    width: '164px',
    height: '58px',
    left: '26px',
    top: '24px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '48px',
    lineHeight: '58px',
    textTransform: 'capitalize',
    color: '#000000',
  },
  logoCircle: {
    position: 'absolute',
    width: '106px',
    height: '106px',
    left: '0px',
    top: '0px',
    backgroundColor: '#94D0D5',
    borderRadius: '50%',
  },
  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <Layout>
      <Box
        className={classes.hero}
        sx={() => ({
          backgroundImage: 'url(/images/hero.png)',
        })}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
          className={classes.overlay}
        >
          <Box className={classes.navbar}>
            <Box className={classes.logo}>
            <Box className={classes.logoCircle} />
              <Text className={classes.logoText}>
                Portfo.
              </Text>
            </Box>
          </Box>
        </Overlay>
        <Container className={classes.container}>
          <Title className={classes.title}>A fully featured React components library</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Get started
          </Button>
        </Container>
      </Box>
    </Layout>
  );
}
