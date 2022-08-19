import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="359" y="245" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="284" y="288" rx="3" ry="3" width="410" height="6" /> 
    <rect x="379" y="203" rx="3" ry="3" width="380" height="6" /> 
    <rect x="464" y="301" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="130" cy="128" r="125" /> 
    <rect x="2" y="272" rx="10" ry="10" width="280" height="25" /> 
    <rect x="4" y="319" rx="10" ry="10" width="280" height="88" /> 
    <rect x="1" y="430" rx="10" ry="10" width="95" height="30" /> 
    <rect x="133" y="423" rx="22" ry="22" width="150" height="42" />
  </ContentLoader>
)

export default Skeleton;
