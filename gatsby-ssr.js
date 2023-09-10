import React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Nunito/Nunito-VariableFont_wght.ttf"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
    ])
}
