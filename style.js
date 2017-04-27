import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "html": {
        "backgroundColor": "#000100",
        "color": "#448fda",
        "width": "100%",
        "height": "100%"
    },
    "body": {
        "width": "100%",
        "height": "100%",
        "fontFamily": "'Montserrat', sans-serif"
    },
    "container": {
        "display": "flex",
        "flexDirection": "column"
    },
    "title": {
        "fontFamily": "code",
        "letterSpacing": 0.4,
        "lineHeight": 40,
        "paddingLeft": 20,
        "fontSize": 24,
        "color": "#fff"
    },
    "center": {
        "fontSize": 24
    },
    "light-title": {
        "color": "#000"
    },
    "menu": {
        "width": "100%",
        "position": "fixed",
        "top": 0,
        "WebkitTransition": "all 0.3s ease",
        "MozTransition": "all 0.3s ease",
        "OTransition": "all 0.3s ease",
        "transition": "all 0.3s ease",
        "zIndex": 1030
    },
    "light-menu": {
        "backgroundColor": "#fff",
        "color": "#000"
    },
    "item-menu": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "last-child-menu": {
        "paddingRight": 40
    },
    "menu-center": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "menu-center ul": {},
    "menu-center ul li": {
        "listStyle": "none",
        "display": "inline"
    },
    "menu-link": {
        "color": "#fff",
        "fontSize": 18,
        "textDecoration": "none",
        "opacity": 0.8
    },
    "light-menu-link": {
        "color": "#000",
        "opacity": 0.8
    },
    "light-menu-link:hover": {
        "fontWeight": "bold"
    },
    "menu-link:hover": {
        "fontWeight": "bold"
    },
    "active": {
        "color": "#ff0080"
    },
    "space-between": {
        "WebkitJustifyContent": "space-between",
        "justifyContent": "space-between"
    },
    "space-between li": {
        "lineHeight": 70
    },
    "flex-container": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "MsBoxOrient": "horizontal",
        "display": "flex"
    },
    "subtitle": {
        "textAlign": "center"
    },
    "home": {
        "minHeight": "100%",
        "width": 100 * vh,
        "overflow": "hidden"
    },
    "hr": {
        "backgroundColor": "#448fda",
        "height": 1,
        "border": 0
    },
    "vision": {
        "width": "100%",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 5,
        "backgroundColor": "#000",
        "display": "flex",
        "paddingRight": 5
    },
    "useCase": {
        "width": "100%",
        "textAlign": "center"
    },
    "howWorks": {
        "width": "100%",
        "textAlign": "center"
    },
    "whitePaper": {
        "width": "100%",
        "textAlign": "center",
        "height": 30
    },
    "contact": {
        "height": 27,
        "width": "100%",
        "textAlign": "center",
        "marginTop": 3
    },
    "footer": {
        "marginTop": 30,
        "backgroundColor": "rgba(255, 255, 255, 0.1)",
        "textAlign": "center",
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "color": "rgba(255, 255, 255, 0.541176)",
        "width": "100%",
        "minHeight": 100
    },
    "rwd-table": {
        "borderSpacing": 0,
        "borderCollapse": "collapse",
        "marginTop": 5,
        "marginRight": "auto",
        "marginBottom": 5,
        "marginLeft": "auto",
        "maxWidth": 800,
        "textAlign": "left",
        "overflow": "hidden"
    },
    "rwd-table td": {
        "display": "block",
        "marginTop": 0.5,
        "marginRight": 1,
        "marginBottom": 0.5,
        "marginLeft": 1
    },
    "rwd-table td:first-child": {
        "paddingTop": 0.5
    },
    "rwd-table td:last-child": {
        "paddingBottom": 0.5
    },
    "rwd-table td:before": {
        "fontWeight": "bold",
        "width": 6.5,
        "display": "inline-block"
    },
    "item-td": {
        "fontWeight": "bold"
    },
    "rwd-table tr": {
        "borderColor": "#fff"
    },
    "parent": {
        "marginTop": 5,
        "display": "flex"
    },
    "col": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "width": "50%"
    },
    "col p": {
        "marginTop": "10%",
        "marginRight": 0,
        "marginBottom": "10%",
        "marginLeft": 0,
        "float": "right",
        "width": 500,
        "textAlign": "right"
    },
    "download": {
        "marginTop": 7
    },
    "white-paper": {
        "paddingTop": 0.5,
        "paddingRight": 0.8,
        "paddingBottom": 0.5,
        "paddingLeft": 0.8,
        "border": "1px solid #fff",
        "textDecoration": "none",
        "color": "#ff0080",
        "fontSize": 20
    },
    "white-paper:hover": {
        "borderColor": "#ff0080"
    },
    "mail": {
        "fontSize": 140,
        "textDecoration": "none",
        "color": "#ff0080"
    },
    "canvas-wrap": {
        "position": "relative"
    },
    "overlay": {
        "position": "absolute",
        "top": 40 * vh,
        "textAlign": "center",
        "width": "100%"
    },
    "overlay h1": {
        "fontSize": 5
    },
    "overlay h2": {
        "fontSize": 3
    },
    "h-title": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 5
    },
    "h-title-center": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "justice": {
        "width": 400,
        "position": "relative",
        "top": -4
    }
});