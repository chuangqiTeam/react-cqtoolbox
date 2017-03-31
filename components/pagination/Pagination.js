import React from 'react';

export const pageFactory = (Button) => {
  return ({value, isActive, onClick, theme}) =>
    <Button className={theme.space} label={value} primary={isActive} onClick={onClick}/>
};

export const ellipsisFactory = (Button) => {
  return ({onClick, theme}) =>
    <Button className={theme.space} label="..." onClick={onClick}/>
};

export const firstPageLinkFactory = (Button, FontIcon) => {
  return ({isActive, onClick, theme}) =>
    <Button className={theme.space} label={<FontIcon value="verticle-right" />} onClick={onClick}/>
};

export const lastPageLinkFactory = (Button, FontIcon) => {
  return ({isActive, onClick, theme}) =>
    <Button className={theme.space} label={<FontIcon value="verticle-left" />} onClick={onClick}/>
};

export const previousPageLinkFactory = (Button, FontIcon) => {
  return ({isActive, onClick, theme}) =>
    <Button className={theme.space} label={<FontIcon value="left" />} onClick={onClick}/>
};

export const nextPageLinkFactory = (Button, FontIcon) => {
  return ({isActive, onClick, theme}) =>
    <Button className={theme.space} label={<FontIcon value="right" />} onClick={onClick}/>
};
