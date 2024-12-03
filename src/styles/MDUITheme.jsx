const rgb = (rgb)=>{
  const match = rgb.match(/(\d+),\s*(\d+),\s*(\d+)$/);
  if (match) {
    return "#" +
      ("0" + parseInt(match[1]).toString(16)).slice(-2) +
      ("0" + parseInt(match[2]).toString(16)).slice(-2) +
      ("0" + parseInt(match[3]).toString(16)).slice(-2);
  }
  return '#668800'; // 默认颜色
}

const varCSS = (variable)=>{
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

export const MDUITheme = () => {
  return {
    palette: {
      mode: 'dark',
      primary: {
        main: rgb(varCSS("--mdui-color-primary")),
        contrastText: rgb(varCSS("--mdui-color-on-primary"))
      },
      onPrimary: {
        main: rgb(varCSS("--mdui-color-on-primary")),
        contrastText: rgb(varCSS("--mdui-color-primary"))
      },
      primaryContainer: {
        main: rgb(varCSS("--mdui-color-primary-container")),
        contrastText: rgb(varCSS("--mdui-color-on-primary-container"))
      },
      onPrimaryContainer: {
        contrastText: rgb(varCSS("--mdui-color-primary-container")),
        main: rgb(varCSS("--mdui-color-on-primary-container"))
      },
      secondary: {
        main: rgb(varCSS("--mdui-color-secondary")),
        contrastText: rgb(varCSS("--mdui-color-on-secondary"))
      },
      onSecondary: {
        main: rgb(varCSS("--mdui-color-on-secondary")),
        contrastText: rgb(varCSS("--mdui-color-secondary"))
      },
      secondaryContainer: {
        main: rgb(varCSS("--mdui-color-secondary-container")),
        contrastText: rgb(varCSS("--mdui-color-on-secondary-container"))
      },
      onSecondaryContainer: {
        contrastText: rgb(varCSS("--mdui-color-secondary-container")),
        main: rgb(varCSS("--mdui-color-on-secondary-container"))
      },
      tertiary: {
        main: rgb(varCSS("--mdui-color-tertiary")),
        contrastText: rgb(varCSS("--mdui-color-on-tertiary"))
      },
      onTertiary: {
        main: rgb(varCSS("--mdui-color-on-tertiary")),
        contrastText: rgb(varCSS("--mdui-color-tertiary"))
      },
      tertiaryContainer: {
        main: rgb(varCSS("--mdui-color-tertiary-container")),
        contrastText: rgb(varCSS("--mdui-color-on-tertiary-container"))
      },
      onTertiaryContainer: {
        contrastText: rgb(varCSS("--mdui-color-tertiary-container")),
        main: rgb(varCSS("--mdui-color-on-tertiary-container"))
      },
      error: {
        main: rgb(varCSS("--mdui-color-error")),
        contrastText: rgb(varCSS("--mdui-color-on-error"))
      },
      onError: {
        main: rgb(varCSS("--mdui-color-on-error")),
        contrastText: rgb(varCSS("--mdui-color-error"))
      },
      errorContainer: {
        main: rgb(varCSS("--mdui-color-error-container")),
        contrastText: rgb(varCSS("--mdui-color-on-error-container"))
      },
      onErrorContainer: {
        contrastText: rgb(varCSS("--mdui-color-error-container")),
        main: rgb(varCSS("--mdui-color-on-error-container"))
      },
      background: {
        default: rgb(varCSS("--mdui-color-background")),
        paper: rgb(varCSS("--mdui-color-surface"))
      },
      onBackground: {
        main: rgb(varCSS("--mdui-color-on-background"))
      },
      surface: {
        main: rgb(varCSS("--mdui-color-surface")),
        contrastText: rgb(varCSS("--mdui-color-on-surface"))
      },
      onSurface: {
        main: rgb(varCSS("--mdui-color-on-surface")),
        contrastText: rgb(varCSS("--mdui-color-surface"))
      },
      outline: {
        main: rgb(varCSS("--mdui-color-outline"))
      },
      shadow: {
        main: rgb(varCSS("--mdui-color-shadow"))
      },
      scrim: {
        main: rgb(varCSS("--mdui-color-scrim"))
      }
    }

  }
}