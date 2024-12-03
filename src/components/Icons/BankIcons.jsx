import React from "react";

export const BankIcons = ({bank}) => {
  switch (bank) {
    case 'BOC':
      return (
        <BocIcon/>
      )
    case 'CCB':
      return (<CcbIcon/>)
    case 'ABC':
      return (<AbcIcon/>)
    case 'ICBC':
      return (<IcbcIcon/>)
    default:
      return null
  }
}

export const BocIcon = () => {
  return (
    <svg t="1732631043877" className="icon" viewBox="0 0 1024 1024" version="1.1"
         xmlns="http://www.w3.org/2000/svg" p-id="1551" data-darkreader-inline-fill="" width="200" height="200">
      <path
        d="M925.589 494.311c-5.329-147.147-96.193-247.421-96.193-247.421C688.876 82 508.66 97.38 508.66 97.38c-192.456-6.156-310.802 140.33-310.802 140.33-80.962 97.079-90.109 186.541-90.109 186.541-35.904 150.25 38.927 279.74 38.927 279.74 55.742 101.73 114.541 148.802 209.983 193.416 95.465 44.777 240.594 38.62 330.702-6.849 90.095-45.524 145.076-95.614 195.475-190.38 50.373-94.855 42.754-205.867 42.754-205.867m-455.878 341.5s-151.21-8.464-234.443-154.95c0 0-71.814-103.306-42.034-232.02 29.807-128.713 99.296-180.317 113.065-193.412 13.744-13.081 102.714-66.558 163.412-65.573v153.406h-64.142s-87.064 5.393-90.122 102.507V587.6s2.298 87.131 92.405 97.123h61.859v151.089m-51.955-241.253s-15.25 3.854-17.535-13.852V445.033s2.285-14.634 13.73-14.634h188.62s16.069-3.139 17.576 14.634v131.789s3.84 20.817-11.45 17.736h-190.94m367.352 99.401c-61.111 94.02-177.194 137.223-231.393 141.852V684.722h71.773s76.41-15.394 80.96-95.587v-161.08s-12.266-80.89-96.957-84.793h-55.776v-153.37s95.451 7.674 172.571 79.395c77.13 71.667 96.967 143.343 105.394 181.906 8.387 38.546 14.503 148.728-46.572 242.766"
        fill="#9E1F31" p-id="1552" data-darkreader-inline-fill=""
        style={{'--darkreader-inline-fill': '#5c272b',}}></path>
    </svg>
  )
}

export const AbcIcon = () => {
  return (
    <svg t="1733133800339" className="icon" viewBox="0 0 1325 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="2419" data-darkreader-inline-fill="" width="200" height="200">
      <path
        d="M635.482353 349.364706c-9.035294 0-16.564706-6.023529-18.070588-15.058824-3.011765-28.611765 0-58.729412 0-88.847058V120.470588c0-4.517647-1.505882-30.117647 1.505882-30.117647h91.858824c3.011765 0 1.505882 54.211765 1.505882 60.235294v156.611765c0 6.023529 3.011765 18.070588 0 22.588235 0 3.011765-1.505882 7.529412-3.011765 10.541177-4.517647 9.035294-19.576471 7.529412-27.105882 7.529412-16.564706 1.505882-30.117647 1.505882-46.682353 1.505882z m134.023529-249.976471C944.188235 144.564706 1076.705882 301.176471 1084.235294 486.4c13.552941 218.352941-149.082353 414.117647-364.423529 444.235294-237.929412 31.623529-462.305882-149.082353-477.364706-391.529412-13.552941-201.788235 121.976471-390.023529 317.741176-438.211764v231.905882c0 25.6-1.505882 39.152941 27.105883 39.152941 15.058824 0 30.117647-1.505882 45.17647 0 25.6 1.505882 21.082353 24.094118 21.082353 45.176471v96.37647c-9.035294-18.070588-42.164706-10.541176-57.223529-10.541176H542.117647c-12.047059-1.505882-16.564706-7.529412-18.070588-18.070588v-60.235294V210.823529C406.588235 263.529412 329.788235 384 329.788235 513.505882c0 164.141176 124.988235 310.211765 289.129412 332.8V670.117647c0-7.529412 3.011765-16.564706-6.023529-16.564706h-45.176471c-13.552941 0-40.658824 4.517647-43.670588-15.058823-1.505882-10.541176 0-22.588235 0-33.129412v-99.388235c0 7.529412 3.011765 15.058824 12.047059 16.564705 21.082353 4.517647 48.188235 0 69.270588 0 15.058824 0 46.682353-7.529412 51.2 13.552942 3.011765 13.552941 0 27.105882 0 40.658823v66.258824c0 6.023529 0 6.023529 4.517647 9.035294 3.011765 1.505882 10.541176 0 15.058823 0v-85.835294c0-15.058824-6.023529-45.176471 18.070589-45.176471 22.588235-3.011765 48.188235 0 70.77647 0 15.058824 0 43.670588 6.023529 42.164706-18.070588v88.847059c0 10.541176-4.517647 33.129412 0 42.164706 13.552941 30.117647-79.811765 15.058824-88.847059 18.070588-6.023529 1.505882-3.011765-1.505882-4.517647 6.023529-1.505882 3.011765 0 9.035294 0 12.047059V844.8C873.411765 822.211765 999.905882 677.647059 999.905882 512c0-129.505882-76.8-249.976471-192.752941-304.188235v240.941176c0 4.517647-3.011765 30.117647 0 33.129412 0 9.035294-4.517647 18.070588-15.058823 18.070588-22.588235 4.517647-51.2 0-73.788236 0-15.058824 0-36.141176-6.023529-43.670588 10.541177v-85.835294c0-15.058824-7.529412-49.694118 12.047059-54.211765 18.070588-6.023529 79.811765 12.047059 82.823529-15.058824 4.517647-39.152941 0-84.329412 0-124.988235V99.388235z"
        fill="#009C96" p-id="2420" data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#2c6a63"}}
        data-spm-anchor-id="a313x.search_index.0.i0.19f93a81AHDsEO" className="selected"></path>
    </svg>
  )
}

export const CcbIcon = () =>{
  return (
    <svg t="1733133886557" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="4332" data-darkreader-inline-fill="" width="200" height="200">
      <path
        d="M476.553846 54.390154s84.204308-64.512 228.942769-17.604923c0 0 48.718769 17.604923 104.841847 67.465846L984.615385 286.129231l-93.026462 92.435692-265.846154-268.445538S581.435077 55.847385 476.553846 54.390154z m384 356.430769l-109.292308 105.590154s-17.723077 24.969846-32.492307 1.496615l-200.861539-195.072s-17.723077-23.473231-30.995692-2.953846l-202.358154 205.351385s-13.272615 20.519385 2.953846 29.341538l197.907693 196.529231s16.265846 26.387692 31.035077 5.868308l205.272615-205.351385s5.907692-17.604923 38.4-13.193846h209.723077s8.861538 211.219692-153.6 343.236923c0 0-211.180308 209.723077-500.657231 80.659692 0 0-279.118769-96.807385-276.164923-456.152615 0 0 7.364923-240.561231 227.406769-368.167385 0 0 161.004308-118.823385 289.476923-30.798769l304.246154 303.616z"
        fill="#003A90" p-id="4333" data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#182e4f"}}></path>
    </svg>
  )
}

export const IcbcIcon = () => {
  return (
    <svg t="1733133937032" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="7014" data-darkreader-inline-fill="" width="200" height="200">
      <path
        d="M800.137846 548.627692v227.131077h-251.431384v-73.412923h171.165538v-83.810461h-171.165538V391.561846h171.165538V314.604308h-171.165538V241.152h251.431384v226.973538h-171.126154v76.957539h171.126154v3.544615zM512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 101.533538C285.302154 101.533538 101.612308 285.302154 101.612308 512S285.302154 922.427077 512 922.427077c226.697846 0 410.427077-183.729231 410.427077-410.427077 0-226.697846-183.729231-410.466462-410.387692-410.466462z m-36.942769 139.618462v73.452308H303.931077v76.957538h171.126154v226.973539H303.931077v83.810461h171.126154v73.412923H223.704615V545.083077h171.126154v-76.957539H223.704615V241.152h251.392z"
        fill="#D62629" p-id="7015" data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#792e2d"}}></path>
    </svg>
  )
}

export const defaultIcon = () =>{
  return (
    <svg t="1733134062659" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="8092" data-darkreader-inline-fill="" width="200" height="200">
      <path
        d="M650.666667 117.333333V448h277.333333v458.666667h-789.333333v-789.333334h512z m-64 64h-384v661.333334h85.333333v-213.333334h213.333333v213.333334h85.333334v-661.333334z m277.333333 330.666667h-213.333333v330.666667h213.333333V512z m-426.666667 181.333333h-85.333333v149.333334h85.333333v-149.333334zM500.010667 448v64h-213.333334v-64h213.333334z m0-149.333333v64h-213.333334v-64h213.333334z"
        fill="#8a8a8a" p-id="8093" data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#5c5d5a"}}></path>
    </svg>
  )
}