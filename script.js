{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function showMessage() \{\
    document.getElementById('card').style.display = 'none';\
    document.getElementById('message').style.display = 'block';\
\}\
\
function response(answer) \{\
    alert(answer ? "Yay! \uc0\u55357 \u56470 " : "Oh no! \u55357 \u56468 ");\
    // Here, you can add any additional actions based on the response.\
\}\
}