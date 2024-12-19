import "mdui/components/radio-group"
import "mdui/components/radio"
import "mdui/components/card"
import "mdui/components/divider"
import {useState} from "react";
import {getPaletteColor, getThemeMode, setPalette} from "../styles/PaletteTheme";


import "./PalettePage.css"
import {useNavigate} from "react-router-dom";

export const PalettePage = () => {
  const curMode = getThemeMode()
  const curColor = getPaletteColor()


  const colors = [
    '#769CDF', '#B33B15', '#63A002', '#FFDE3F',
    '#DE57F7', '#5EAFB3', '#F89162', '#6F6FA2',
  ];
  const [selectedColor, setSelectedColor] = useState(curColor);

  const handleModeChange = (e) => {
    e.preventDefault();
    const mode = e.target.value;
    setPalette({mode: mode});
  }

  // 点击颜色块时的处理函数
  const handleColorClick = (color) => {
    setSelectedColor(color); // 设置选中的颜色
    console.log(color)
    setPalette({color: color})
  };

  const navigate = useNavigate();
  const handleBack = () => {
    if(window.history.length > 1){
      navigate(-1);
    }else{
      navigate('/');
    }
  }

  return (
    <div className={"palette-page-wrap"}>
      <div className="content-wrap">

        <div className="left">
          <span className={"title"}>修改主题</span>
          <div className="mode-select-wrap">
            <mdui-radio-group value={curMode} onInput={handleModeChange}>
              <mdui-radio name="mode" value="light">亮色</mdui-radio>
              <mdui-radio name="mode" value="dark">暗色</mdui-radio>
              <mdui-radio name="mode" value="auto">自动</mdui-radio>
            </mdui-radio-group>
          </div>
          <div className="color-select-wrap">
            {colors.map((color, index) => (
              <div
                key={index}
                className={"chip"}
                style={{
                  backgroundColor: color,
                  width: '45px',
                  height: '45px',
                  borderRadius: '4px',
                  border: selectedColor === color ? '2px solid rgb(var(--mdui-color-secondary))' : '1px solid rgb(var(--mdui-color-outline-variant))',
                  cursor: 'pointer',
                }}
                onClick={() => handleColorClick(color)}
              />
            ))}
            {/*<input type="color"/>*/}
          </div>
          <div className="buttons">

            <mdui-button onClick={handleBack} variant={"tonal"}>确定</mdui-button>
          </div>
        </div>
        <mdui-divider vertical middle/>
        <div className="palette-wrap">
          <mdui-card variant={"filled"}>
            <span className={"title"}>色卡</span>
            <div className="display-wrap">
              <div className="left">
                <div className="main">
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-primary))",
                      color: "rgb(var(--mdui-color-on-primary))"
                    }}>主题色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-primary))",
                      color: "rgb(var(--mdui-color-primary))"
                    }}>主要内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-secondary))",
                      color: "rgb(var(--mdui-color-on-secondary))"
                    }}>次要色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-secondary))",
                      color: "rgb(var(--mdui-color-secondary))"
                    }}>次要内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-tertiary))",
                      color: "rgb(var(--mdui-color-on-tertiary))"
                    }}>第三色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-tertiary))",
                      color: "rgb(var(--mdui-color-tertiary))"
                    }}>第三内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-primary-container))",
                      color: "rgb(var(--mdui-color-on-primary-container))"
                    }}>主题容器色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-primary-container))",
                      color: "rgb(var(--mdui-color-primary-container))"
                    }}>主要容器内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-secondary-container))",
                      color: "rgb(var(--mdui-color-on-secondary-container))"
                    }}>次要容器色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-secondary-container))",
                      color: "rgb(var(--mdui-color-secondary-container))"
                    }}>次要容器内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-tertiary-container))",
                      color: "rgb(var(--mdui-color-on-tertiary-container))"
                    }}>第三容器色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-tertiary-container))",
                      color: "rgb(var(--mdui-color-tertiary-container))"
                    }}>第三容器内容色
                    </div>
                  </div>
                </div>
                <div className="sub">
                  <div className="row-1 row">
                    <div className="surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-dim))",
                           color: "rgb(var(--mdui-color-on-surface-dim))"
                         }}
                    >
                      深色背景
                    </div>
                    <div className="surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface))",
                           color: "rgb(var(--mdui-color-on-surface))"
                         }}
                    >
                      背景
                    </div>
                    <div className="surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-bright))",
                           color: "rgb(var(--mdui-color-on-surface-bright))"
                         }}
                    >
                      亮色背景
                    </div>
                  </div>
                  <div className="row-2 row">
                    <div className="surface-level"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-container-lowest))",
                           color: "rgb(var(--mdui-color-on-surface-container-lowest))"
                         }}
                    >
                      底层背景容器
                    </div>
                    <div className="surface-level"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-container-low))",
                           color: "rgb(var(--mdui-color-on-surface-container-low))"
                         }}
                    >
                      低层背景容器
                    </div>
                    <div className="surface-level"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-container))",
                           color: "rgb(var(--mdui-color-on-surface-container))"
                         }}
                    >
                      背景容器
                    </div>
                    <div className="surface-level"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-container-high))",
                           color: "rgb(var(--mdui-color-on-surface-container-high))"
                         }}
                    >
                      高层背景容器
                    </div>
                    <div className="surface-level"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-surface-container-highest))",
                           color: "rgb(var(--mdui-color-on-surface-container-highest))"
                         }}
                    >
                      最高背景容器
                    </div>
                  </div>
                  <div className="row-3 row">
                    <div className="on-surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-on-surface))",
                           color: "rgb(var(--mdui-color-surface))"
                         }}
                    >
                      背景内容
                    </div>
                    <div className="on-surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-on-surface-variant))",
                           color: "rgb(var(--mdui-color-surface-variant))"
                         }}
                    >
                      变体背景内容
                    </div>
                    <div className="on-surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-outline))",
                           color: "rgb(var(--mdui-color-outline-variant))"
                         }}
                    >
                      框线颜色
                    </div>
                    <div className="on-surface"
                         style={{
                           backgroundColor: "rgb(var(--mdui-color-outline-variant))",
                           color: "rgb(var(--mdui-color-outline))"
                         }}
                    >
                      变体框线色
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="main">

                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-error))",
                      color: "rgb(var(--mdui-color-on-error))"
                    }}>错误色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-error))",
                      color: "rgb(var(--mdui-color-error))"
                    }}>错误内容色
                    </div>
                  </div>
                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-error-container))",
                      color: "rgb(var(--mdui-color-on-error-container))"
                    }}>错误容器色
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-on-error-container))",
                      color: "rgb(var(--mdui-color-error-container))"
                    }}>错误容器内容色
                    </div>
                  </div>
                </div>
                <div className="sub">

                  <div className="block">
                    <div className="item" style={{
                      backgroundColor: "rgb(var(--mdui-color-inverse-surface))",
                      color: "rgb(var(--mdui-color-inverse-on-surface))"
                    }}>对比背景
                    </div>
                    <div className="on-item" style={{
                      backgroundColor: "rgb(var(--mdui-color-inverse-on-surface))",
                      color: "rgb(var(--mdui-color-inverse-surface))"
                    }}>对比背景内容
                    </div>
                  </div>

                  <div className="item" style={{
                    backgroundColor: "rgb(var(--mdui-color-inverse-primary))",
                    color: "rgb(var(--mdui-color-inverse-on-primary))"
                  }}>对比主色
                  </div>
                </div>
              </div>
            </div>
          </mdui-card>
        </div>
      </div>
    </div>
  )
}