"use strict";(self.webpackChunkrocket_ui=self.webpackChunkrocket_ui||[]).push([[770],{"./src/stories/buttons/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:function(){return Button_stories_Button},ButtonColors:function(){return ButtonColors},ButtonSizes:function(){return ButtonSizes},ButtonVariants:function(){return ButtonVariants},ButtonWithIcon:function(){return ButtonWithIcon},DisabledButton:function(){return DisabledButton},LoadingButton:function(){return Button_stories_LoadingButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.21.0-c4ef698c89-7b33e25bfa.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),prop_types=__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/styles/styled.js"),LoadingButton=__webpack_require__("./.yarn/__virtual__/@mui-lab-virtual-579fcef647/0/cache/@mui-lab-npm-5.0.0-alpha.124-375512a3da-bc96ada0f2.zip/node_modules/@mui/lab/LoadingButton/LoadingButton.js"),es=__webpack_require__("./.yarn/cache/ramda-npm-0.28.0-6a5fe8f6cc-44ea6e5010.zip/node_modules/ramda/es/index.js"),basicColors=["primary","secondary","info","success","warning","danger","error","rose","theme","white","dark","default","inherit"],isBasicColor=function isBasicColor(color){return(0,es.q9t)(color,basicColors)},PREFIX="StyledButton",classes={justIcon:PREFIX+"-justIcon",button:PREFIX+"-button",gradient:PREFIX+"-gradient"},localProps=["round","right","justIcon","wd","capitalize"],createButton=function createButton(loading){return(0,styled.ZP)(loading?LoadingButton.Z:Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!(0,es.q9t)(prop,localProps)}})((function(_ref){var _ref2,theme=_ref.theme,round=_ref.round,right=_ref.right,wd=_ref.wd,color=_ref.color,capitalize=_ref.capitalize,defaultFont=theme.typography.defaultFont,colorIsNotInherit=color&&"inherit"!==color;return(_ref2={})["&."+classes.button]=Object.assign({},defaultFont,{fontWeight:"bold"},round&&{borderRadius:"30px"},right&&{float:"right"},wd&&{minWidth:"160px"},!capitalize&&{textTransform:"none"},{"&.MuiButton-sizeTiny":{padding:"4px 4px",fontSize:"10px"},"&.Mui-disabled":{pointerEvents:"auto","&.MuiButton-outlined, &.MuiButton-text":{"&:hover":{backgroundColor:"transparent"}}}}),_ref2["&."+classes.gradient]=Object.assign({},colorIsNotInherit&&{background:theme.palette.gradients[color],backgroundColor:theme.palette[color].main,color:theme.palette[color].contrastText},{mozTransition:"all .4s ease-in-out",oTransition:"all .4s ease-in-out",webkitTransition:"all .4s ease-in-out",transition:"all .4s ease-in-out","&:hover,&:focus":{background:color&&"inherit"!==color&&theme.palette.createGradient([theme.palette[color].light,theme.palette[color].main,theme.palette[color].dark]),mozTransition:"all .4s ease-in-out",oTransition:"all .4s ease-in-out",webkitTransition:"all .4s ease-in-out",transition:"all .4s ease-in-out"},"&.Mui-disabled":{background:theme.palette.createGradient([theme.palette.grey[5008],theme.palette.grey[50048]]),color:theme.palette.action.disabled}}),_ref2["&."+classes.justIcon]={"&.MuiButton-sizeTiny":{padding:"3px",minWidth:"36px",width:"36px",height:"36px"},"&.MuiButton-sizeSmall":{padding:"7px",minWidth:"40px",width:"40px",height:"40px"},"&.MuiButton-sizeMedium":{padding:"11px",minWidth:"48px",width:"48px",height:"48px"},"&.MuiButton-sizeLarge":{padding:"15px",minWidth:"52px",width:"52px",height:"52px"}},_ref2}))},Tooltip=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/Tooltip/Tooltip.js"),classnames=__webpack_require__("./.yarn/cache/classnames-npm-2.3.2-d2fdae468d-2c62199789.zip/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),_excluded=["children","color","size","tooltip","round","right","justIcon","className","disabled","onClick","loading","gradient","capitalize"],Button_Button=function Button(_ref){var _ref2,_Object$assign,children=_ref.children,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,tooltip=_ref.tooltip,round=_ref.round,right=_ref.right,justIcon=_ref.justIcon,className=_ref.className,disabled=_ref.disabled,onClick=_ref.onClick,loading=_ref.loading,gradient=_ref.gradient,_ref$capitalize=_ref.capitalize,capitalize=void 0===_ref$capitalize||_ref$capitalize,rest=objectWithoutPropertiesLoose_default()(_ref,_excluded),buttonStyles=function getColorStyles(color){if(!color)return{};if(isBasicColor(color))return{color:color,variant:"contained"};if((0,es.q9t)("NoBackground",color)){var extractedColor=(0,es.gxs)("NoBackground","",color);return{color:isBasicColor(extractedColor)?extractedColor:void 0,variant:"text"}}if((0,es.q9t)("WithBackground",color)){var _extractedColor=(0,es.gxs)("WithBackground","",color);return{color:isBasicColor(_extractedColor)?_extractedColor:void 0,variant:"outlined"}}return"transparent"===color?{color:"primary",variant:"text"}:{}}(color),btnClasses=classnames_default()(Object.assign({},className?((_ref2={})[className]=className,_ref2):{},((_Object$assign={})[classes.justIcon]=justIcon,_Object$assign[classes[size]]=size,_Object$assign[classes.gradient]=gradient,_Object$assign))),classNames=classes.button+" "+btnClasses,Comp=(0,react.useMemo)((function(){return createButton(loading)}),[loading]),baseComp=(0,jsx_runtime.jsx)(Comp,Object.assign({size:size,round:round,right:right,className:classNames,disabled:disabled,onClick:disabled?void 0:onClick,component:disabled?"div":"button",capitalize:capitalize},loading?{loading:loading}:{},buttonStyles,rest,{children:children}));return tooltip?(0,jsx_runtime.jsx)(Tooltip.Z,{title:tooltip,children:baseComp}):baseComp};Button_Button.propTypes={color:prop_types_default().oneOf(["primary","secondary","info","success","warning","error","rose","default","white","dark","transparent","inherit"]),loading:prop_types_default().bool,round:prop_types_default().bool,children:prop_types_default().node,onClick:prop_types_default().func,variant:prop_types_default().oneOf(["contained","text","outlined"]),disabled:prop_types_default().bool,className:prop_types_default().string,wd:prop_types_default().bool,justIcon:prop_types_default().bool,right:prop_types_default().bool,size:prop_types_default().oneOf(["tiny","small","medium","large"]),tooltip:prop_types_default().string,capitalize:prop_types_default().bool,gradient:prop_types_default().bool},Button_Button.__docgenInfo={description:"Buttons allow users to take actions, and make choices, with a single tap. \nIt triggers an action or event when activated.\n\nProps of the [Material-UI Button](https://mui.com/material-ui/api/button/#props) component are also available.",methods:[],displayName:"Button",props:{color:{defaultValue:{value:"'primary'",computed:!1},description:"Color of the button.",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1},{value:"'rose'",computed:!1},{value:"'default'",computed:!1},{value:"'white'",computed:!1},{value:"'dark'",computed:!1},{value:"'transparent'",computed:!1},{value:"'inherit'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"@default 'medium'\nSize of the button.",type:{name:"enum",value:[{value:"'tiny'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},capitalize:{defaultValue:{value:"true",computed:!1},description:"@default true\nIf true, button text is capitalized.",type:{name:"bool"},required:!1},loading:{description:"If true, button is in loading state.",type:{name:"bool"},required:!1},round:{description:"If true, rounded corners are enabled.",type:{name:"bool"},required:!1},children:{description:"Content of the component.",type:{name:"node"},required:!1},onClick:{description:'Callback fired when a "click" event is detected.',type:{name:"func"},required:!1},variant:{description:"Variant to use.",type:{name:"enum",value:[{value:"'contained'",computed:!1},{value:"'text'",computed:!1},{value:"'outlined'",computed:!1}]},required:!1},disabled:{description:"If true, the button will be disabled.",type:{name:"bool"},required:!1},className:{description:"A custom class provided.",type:{name:"string"},required:!1},wd:{description:"If true,  the button's min width will be set to 160px.",type:{name:"bool"},required:!1},justIcon:{description:"If true, the button will be smaller.",type:{name:"bool"},required:!1},right:{description:"If true, the button will float to the right.",type:{name:"bool"},required:!1},tooltip:{description:"Tooltip of the button.",type:{name:"string"},required:!1},gradient:{description:"If true, a gradient background is applied.",type:{name:"bool"},required:!1}}};var buttons_Button_Button=Button_Button,Box=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/Box/Box.js"),Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/Grid/Grid.js"),buttons_Button=buttons_Button_Button,ButtonColorsPreview=(__webpack_require__("./src/components/themes/index.ts"),function ButtonColorsPreview(){return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:3,justifyContent:"center",children:[(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"primary",children:"Primary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"primary",gradient:!0,children:"Primary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"primary",variant:"outlined",children:"Primary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"primary",variant:"text",children:"Primary"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"secondary",children:"Secondary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"secondary",gradient:!0,children:"Secondary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"secondary",variant:"outlined",children:"Secondary"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"secondary",variant:"text",children:"Secondary"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"info",children:"Info"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"info",gradient:!0,children:"Info"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"info",variant:"outlined",children:"Info"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"info",variant:"text",children:"Info"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"success",children:"Success"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"success",gradient:!0,children:"Success"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"success",variant:"outlined",children:"Success"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"success",variant:"text",children:"Success"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"error",children:"Error"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"error",gradient:!0,children:"Error"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"error",variant:"outlined",children:"Error"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"error",variant:"text",children:"Error"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"warning",children:"Warning"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"warning",gradient:!0,children:"Warning"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"warning",variant:"outlined",children:"Warning"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"warning",variant:"text",children:"Warning"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"rose",children:"Rose"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"rose",gradient:!0,children:"Rose"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"rose",variant:"outlined",children:"Rose"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"rose",variant:"text",children:"Rose"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"default",children:"Default"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"default",gradient:!0,children:"Default"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"default",variant:"outlined",children:"Default"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"default",variant:"text",children:"Default"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"dark",children:"Dark"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"dark",gradient:!0,children:"Dark"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"dark",variant:"outlined",children:"Dark"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"dark",variant:"text",children:"Dark"})})]}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,rowSpacing:2,columnSpacing:4,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"inherit",variant:"contained",children:"Inherit"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"inherit",variant:"outlined",children:"Inherit"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"inherit",variant:"text",children:"Inherit"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,spacing:2,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2,children:(0,jsx_runtime.jsx)(buttons_Button,{color:"white",children:"White"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:3,md:2})]})]})});ButtonColorsPreview.displayName="ButtonColorsPreview",ButtonColorsPreview.__docgenInfo={description:"",methods:[],displayName:"ButtonColorsPreview"};var ButtonSizesPreview=function ButtonSizesPreview(){return(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,rowSpacing:2,children:[(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,spacing:3,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"tiny",children:"Tiny"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"small",children:"Small"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"medium",children:"Medium"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",children:"Large"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",wd:!0,children:"Wide"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,md:3,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",fullWidth:!0,children:"Full-width"})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,container:!0,spacing:3,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"tiny",round:!0,children:"Tiny"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"small",round:!0,children:"Small"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"medium",round:!0,children:"Medium"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",round:!0,children:"Large"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",wd:!0,round:!0,children:"Wide"})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:6,md:3,children:(0,jsx_runtime.jsx)(buttons_Button,{size:"large",fullWidth:!0,round:!0,children:"Full-width"})})]})]})};ButtonSizesPreview.displayName="ButtonSizesPreview",ButtonSizesPreview.__docgenInfo={description:"",methods:[],displayName:"ButtonSizesPreview"};var FormControlLabel=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Switch=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-9c56b1a509/0/cache/@mui-material-npm-5.11.14-d960a59e03-48fdd56ee5.zip/node_modules/@mui/material/Switch/Switch.js"),ButtonLoadingPreview=function ButtonLoadingPreview(){var _useState=(0,react.useState)(!1),loading=_useState[0],setLoading=_useState[1],toggleLoading=(0,react.useCallback)((function(){return setLoading((function(current){return!current}))}),[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Switch.Z,{checked:loading,onChange:toggleLoading,name:"loading",color:"primary"}),label:"Loading",sx:{mb:"15px"}}),(0,jsx_runtime.jsxs)(Box.Z,{columnGap:"15px",display:"flex",children:[(0,jsx_runtime.jsx)(buttons_Button,{variant:"contained",loading:loading,children:"Contained"}),(0,jsx_runtime.jsx)(buttons_Button,{variant:"outlined",loading:loading,children:"Outlined"}),(0,jsx_runtime.jsx)(buttons_Button,{variant:"text",loading:loading,children:"Text"})]})]})};ButtonLoadingPreview.__docgenInfo={description:"",methods:[],displayName:"ButtonLoadingPreview"};var Rocket=__webpack_require__("./.yarn/__virtual__/@mui-icons-material-virtual-15a16b4366/0/cache/@mui-icons-material-npm-5.11.11-940fa0a0ab-6ec89f3c68.zip/node_modules/@mui/icons-material/Rocket.js"),ButtonWithIconPreview=function ButtonWithIconPreview(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(buttons_Button,{size:"small",startIcon:(0,jsx_runtime.jsx)(Rocket.Z,{}),sx:{mr:"15px"},children:"start icon"}),(0,jsx_runtime.jsx)(buttons_Button,{endIcon:(0,jsx_runtime.jsx)(Rocket.Z,{}),sx:{mr:"15px"},children:"end icon"}),(0,jsx_runtime.jsx)(buttons_Button,{startIcon:(0,jsx_runtime.jsx)(Rocket.Z,{}),endIcon:(0,jsx_runtime.jsx)(Rocket.Z,{}),sx:{mr:"15px"},children:"both icons"}),(0,jsx_runtime.jsx)(buttons_Button,{tooltip:"justIcon={true} size='tiny'",size:"tiny",justIcon:!0,sx:{mr:"15px"},children:(0,jsx_runtime.jsx)(Rocket.Z,{})}),(0,jsx_runtime.jsx)(buttons_Button,{tooltip:"justIcon={true} size='small'",size:"small",justIcon:!0,sx:{mr:"15px"},children:(0,jsx_runtime.jsx)(Rocket.Z,{})}),(0,jsx_runtime.jsx)(buttons_Button,{tooltip:"justIcon={true} size='medium'",size:"medium",justIcon:!0,sx:{mr:"15px"},children:(0,jsx_runtime.jsx)(Rocket.Z,{})}),(0,jsx_runtime.jsx)(buttons_Button,{tooltip:"justIcon={true} size='large'",size:"large",justIcon:!0,sx:{mr:"15px"},children:(0,jsx_runtime.jsx)(Rocket.Z,{})}),(0,jsx_runtime.jsx)(buttons_Button,{tooltip:"justIcon={true} size='large'",size:"large",justIcon:!0,disabled:!0,children:(0,jsx_runtime.jsx)(Rocket.Z,{})})]})};ButtonWithIconPreview.__docgenInfo={description:"",methods:[],displayName:"ButtonWithIconPreview"};var Button_stories={title:"Components/Buttons/Button",component:buttons_Button_Button,tags:["autodocs"]},Button_stories_Button={args:{children:"My button"}},DisabledButton={args:{children:"My button",disabled:!0,tooltip:"I have a tooltip"},render:function render(args){return(0,jsx_runtime.jsxs)(Box.Z,{columnGap:"15px",display:"flex",children:[(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{gradient:!0})),(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{variant:"outlined"})),(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{variant:"text"}))]})}},ButtonVariants={render:function render(args){return(0,jsx_runtime.jsxs)(Box.Z,{columnGap:"15px",display:"flex",children:[(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{variant:"contained",children:"Variant contained"})),(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{variant:"outlined",children:"Variant outlined"})),(0,jsx_runtime.jsx)(buttons_Button_Button,Object.assign({},args,{variant:"text",children:"Variant text"}))]})}},ButtonColors={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n        <Button color="color-code-here" gradient>\n          Primary\n        </Button>\n        ',format:!0}}},render:function render(){return(0,jsx_runtime.jsx)(ButtonColorsPreview,{})}},ButtonSizes={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:'\n        <Button size="size-code-here">\n          Tiny\n        </Button>\n        ',format:!0}}},render:function render(){return(0,jsx_runtime.jsx)(ButtonSizesPreview,{})}},Button_stories_LoadingButton={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"\n        <Button loading>\n          Loading Button\n        </Button>\n        ",format:!0}}},render:function render(){return(0,jsx_runtime.jsx)(ButtonLoadingPreview,{})}},ButtonWithIcon={parameters:{controls:{hideNoControlsWarning:!0},docs:{source:{code:"\n        <Button startIcon={<RocketIcon />} >\n          Button text\n        </Button>\n        ",format:!0}}},render:function render(){return(0,jsx_runtime.jsx)(ButtonWithIconPreview,{})}},__namedExportsOrder=["Button","DisabledButton","ButtonVariants","ButtonColors","ButtonSizes","LoadingButton","ButtonWithIcon"];Button_stories_Button.parameters={...Button_stories_Button.parameters,docs:{...Button_stories_Button.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'My button'\n  }\n}",...Button_stories_Button.parameters?.docs?.source},description:{story:"The default Button component.",...Button_stories_Button.parameters?.docs?.description}}},DisabledButton.parameters={...DisabledButton.parameters,docs:{...DisabledButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: \'My button\',\n    disabled: true,\n    tooltip: \'I have a tooltip\'\n  },\n  render: function render(args) {\n    return /*#__PURE__*/_jsxs(Box, {\n      columnGap: "15px",\n      display: "flex",\n      children: [/*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        gradient: true\n      })), /*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        variant: "outlined"\n      })), /*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        variant: "text"\n      }))]\n    });\n  }\n}',...DisabledButton.parameters?.docs?.source},description:{story:"Disabling a Button component.",...DisabledButton.parameters?.docs?.description}}},ButtonVariants.parameters={...ButtonVariants.parameters,docs:{...ButtonVariants.parameters?.docs,source:{originalSource:'{\n  render: function render(args) {\n    return /*#__PURE__*/_jsxs(Box, {\n      columnGap: "15px",\n      display: "flex",\n      children: [/*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        variant: "contained",\n        children: "Variant contained"\n      })), /*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        variant: "outlined",\n        children: "Variant outlined"\n      })), /*#__PURE__*/_jsx(ButtonComponent, Object.assign({}, args, {\n        variant: "text",\n        children: "Variant text"\n      }))]\n    });\n  }\n}',...ButtonVariants.parameters?.docs?.source},description:{story:"The Button comes with three variants: `contained` (default), `text` and `outlined`.\r\n\n- `(undefined)`: the button appears with the default style\r\n- `contained`: contains background styling\r\n- `outlined`: removes background styling\r\n- `text`: removes background and border styling",...ButtonVariants.parameters?.docs?.description}}},ButtonColors.parameters={...ButtonColors.parameters,docs:{...ButtonColors.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: "\\n        <Button color=\\"color-code-here\\" gradient>\\n          Primary\\n        </Button>\\n        ",\n        format: true\n      }\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/_jsx(ButtonColorsPreview, {});\n  }\n}',...ButtonColors.parameters?.docs?.source},description:{story:'To pretify a Button, it comes with a large variaty of available colors that can be applied.\r\n\nIf the Button has `variant="contained"`, there is an aditional property `gradient`, that can be associated with each color.',...ButtonColors.parameters?.docs?.description}}},ButtonSizes.parameters={...ButtonSizes.parameters,docs:{...ButtonSizes.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: "\\n        <Button size=\\"size-code-here\\">\\n          Tiny\\n        </Button>\\n        ",\n        format: true\n      }\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/_jsx(ButtonSizesPreview, {});\n  }\n}',...ButtonSizes.parameters?.docs?.source},description:{story:"A button supports `tiny`, `small`, `medium` and `large` size. Default size is `medium`.",...ButtonSizes.parameters?.docs?.description}}},Button_stories_LoadingButton.parameters={...Button_stories_LoadingButton.parameters,docs:{...Button_stories_LoadingButton.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: "\\n        <Button loading>\\n          Loading Button\\n        </Button>\\n        ",\n        format: true\n      }\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/_jsx(ButtonLoadingPreview, {});\n  }\n}',...Button_stories_LoadingButton.parameters?.docs?.source},description:{story:"Rocket-UI offers loading buttons that can show loading state and disable interactions.\r\n\nToggle the loading switch to see the transition between the different states.",...Button_stories_LoadingButton.parameters?.docs?.description}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true\n    },\n    docs: {\n      source: {\n        code: "\\n        <Button startIcon={<RocketIcon />} >\\n          Button text\\n        </Button>\\n        ",\n        format: true\n      }\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/_jsx(ButtonWithIconPreview, {});\n  }\n}',...ButtonWithIcon.parameters?.docs?.source},description:{story:"Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.",...ButtonWithIcon.parameters?.docs?.description}}}}}]);