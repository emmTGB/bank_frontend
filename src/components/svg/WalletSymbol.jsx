import "./MateriableSVG.css"
export const WalletSymbol = props => (
  <svg className={"wallet-symbol"}
    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 192 192" height="192" viewBox="0 0 192 192"
       width="192">
    <rect fill="none" height="192" width="192"/>
    <g>
      <g>
        <path className={"surface-variant"}
          d="M180,78H12V51.5C12,36.86,24.13,25,39.1,25H152.9c14.96,0,27.1,11.86,27.1,26.5V78z" fill="#34A853"/>
        <path className={"tertiary"}
          d="M180,100H12V73.5C12,58.86,24.13,47,39.1,47H152.9c14.96,0,27.1,11.86,27.1,26.5V100z" fill="#FBBC04"/>
        <path className={"inverse-primary"}
          d="M180,122H12V95.5C12,80.86,24.13,69,39.1,69l113.81,0c14.96,0,27.1,11.86,27.1,26.5V122z" fill="#EA4335"/>
        <path className={"primary"}
          d="M12,84.11l106.67,24.71c12.64,2.93,25.97,0.21,36.31-7.41L180,83v57.75c0,14.5-12.13,26.25-27.1,26.25 H39.1C24.13,167,12,155.25,12,140.75V84.11z"
          fill="#4285F4"/>
      </g>
    </g>
  </svg>
)