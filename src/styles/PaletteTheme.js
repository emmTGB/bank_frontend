import {removeColorScheme, setColorScheme, setTheme} from "mdui";


export const setPalette = ({color, mode}) => {
  if(color){
    localStorage.setItem("palette", color);
  }
  if(mode){
    localStorage.setItem("themeMode", mode);
  }

  applyTheme()
}

export const applyTheme = () => {
  const color = localStorage.getItem("palette");
  const mode = localStorage.getItem("themeMode");

  if(mode){
    setTheme(mode)
  }else{
    setTheme("auto")
  }
  if(color){
    setColorScheme(color)
  }else{
    removeColorScheme()
  }
}

export const getThemeMode = () => {
  return localStorage.getItem("themeMode") || "auto";
}

export const getPaletteColor = () => {
  return localStorage.getItem("palette") || null;
}

export const getMuiMode = () =>{
  const mode = localStorage.getItem("themeMode") || "auto";
  if(mode === "auto"){
    return getSystemTheme()
  }else{
    return mode
  }
}

const getSystemTheme = () => {
  if (window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return darkModeMediaQuery.matches ? 'dark' : 'light';
  }
  return 'light'; // 默认返回浅色模式
};