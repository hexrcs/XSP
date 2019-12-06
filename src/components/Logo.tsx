import React from "react";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  margin: 1rem;
`;

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CenteredSVG = styled.svg`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <CenteredSVG
        xmlns="http://www.w3.org/2000/svg"
        width="106"
        height="39"
        aria-labelledby="xspTitle xspDesc"
        role="img"
      >
        <title id="xspTitle">XSP logo</title>
        <desc id="xspDesc">The bold text logo of this webapp.</desc>
        <path
          fill="#000"
          fillOpacity=".9"
          fillRule="evenodd"
          d="M35 30.1h2v8H19v-8h1.9L18 26.2h-.5l-2.8 4h2V38H0v-7.9h2.5l9.2-10.3L2.1 8.5h-2V.7h18v7.8h-1.8l2.6 4h.5l2.6-4h-1.8V.7H37v7.8h-2.5l-9.1 10.3L35 30zm18.8 8.6a46 46 0 0 1-15-2.6v-9.5h10.5c0 1 .2 1.7.7 2.2.4.4 1.2.6 2.4.6 1 0 1.7-.1 2.2-.4.4-.3.6-.8.6-1.4 0-.5-.2-1-.6-1.3-.4-.4-1.2-.8-2.2-1.1l-4.1-1.5c-3.6-1.3-6.1-3-7.7-4.7a11 11 0 0 1-2.3-7.4c0-3.8 1.3-6.7 3.7-8.6 2.5-2 6.6-3 12.4-3 2.8 0 5.4.3 7.9.8 2.4.6 4.4 1.3 6 2.3v8.6h-9.7c0-1.6-1-2.4-3-2.4-1 0-1.6 0-2 .3-.4.3-.6.7-.6 1.3 0 .5.2 1 .7 1.3l2.3 1 4.2 1.4c3.3 1.2 5.8 2.7 7.4 4.5 1.5 1.9 2.3 4.3 2.3 7.3 0 4-1.4 7-4.1 9.2-2.7 2-6.8 3-12 3zM71.4 30h2.4V8.5h-2.4V.7h21.1c4.1 0 7.3.9 9.5 2.6 2.1 1.8 3.2 4.7 3.2 8.7 0 4-1 6.8-3.2 8.6a14.6 14.6 0 0 1-9.5 2.6h-5.2v7h4.6V38H71.4v-7.9zM89 16.4c1.9 0 2.8-1 2.8-3v-1.8c0-1-.2-1.8-.7-2.3-.5-.5-1.2-.8-2-.8h-1.7v8h1.6z"
        />
      </CenteredSVG>
      <Separator />
      <CenteredSVG
        xmlns="http://www.w3.org/2000/svg"
        width="263"
        height="21"
        aria-labelledby="subTitle subDesc"
        role="img"
      >
        <title id="subTitle">Xiaoru's SQL Playground</title>
        <desc id="subDesc">Description text or subtitle of this webapp.</desc>
        <path
          fill="#000"
          fillOpacity=".9"
          fillRule="evenodd"
          d="M10.6 16l-3.4-4.9L3.9 16H0l5.2-7.1L.4 2h3.7l3.2 4.5L10.5 2H14L9 8.8l5.3 7.2h-3.7zm5.3-10.8h3V16h-3V5.2zm1.5-1.5a2 2 0 0 1-1.4-.5c-.3-.3-.5-.7-.5-1.2s.2-1 .5-1.2a2 2 0 0 1 1.4-.5c.6 0 1 .1 1.4.4.4.4.6.8.6 1.2 0 .6-.2 1-.6 1.3a2 2 0 0 1-1.4.5zm9 1.4c1.7 0 3 .4 4 1.2.8.8 1.2 2 1.2 3.6V16h-2.9v-1.3c-.6 1-1.7 1.5-3.3 1.5a5 5 0 0 1-2.1-.5c-.6-.2-1-.6-1.4-1.1a3 3 0 0 1-.5-1.7c0-1 .4-1.8 1.2-2.4.7-.5 1.9-.8 3.4-.8h2.5c0-.7-.2-1.2-.6-1.6-.4-.4-1-.5-1.9-.5a5.4 5.4 0 0 0-3 1l-1.2-2.2c.6-.4 1.3-.8 2.1-1 .9-.2 1.7-.3 2.6-.3zm-.2 9c.6 0 1-.2 1.4-.4.5-.3.8-.6 1-1.1v-1.1h-2.2c-1.3 0-2 .4-2 1.3 0 .4.2.7.5 1 .3.1.8.3 1.3.3zM40 16c-1.2 0-2.2-.2-3-.7a5.3 5.3 0 0 1-3-4.8c0-1 .3-2 .8-2.8.5-.9 1.2-1.5 2.1-2 1-.5 2-.7 3-.7 1.2 0 2.2.2 3 .7a5.3 5.3 0 0 1 3 4.8c0 1-.3 2-.8 2.9-.5.8-1.2 1.5-2.1 2-.9.4-2 .7-3 .7zm0-2.5c.8 0 1.4-.3 2-.8a3 3 0 0 0 .7-2.2 3 3 0 0 0-.8-2.2c-.5-.5-1.1-.8-2-.8-.7 0-1.4.3-2 .8a3 3 0 0 0-.7 2.2c0 1 .3 1.6.8 2.2.5.5 1.2.8 2 .8zm11.2-7c.3-.5.8-.9 1.5-1.1.6-.3 1.3-.4 2.2-.4V8h-.7c-1 0-1.6.2-2.1.7-.5.5-.8 1.2-.8 2.2V16h-3.1V5.2h3v1.5zm16.7-1.4V16h-3v-1.3c-.4.5-.9.8-1.4 1-.6.3-1.2.5-2 .5-1.3 0-2.4-.4-3.3-1.3-.8-.8-1.2-2-1.2-3.6v-6H60v5.6c0 1.7.7 2.6 2.2 2.6.7 0 1.3-.3 1.8-.8.4-.5.7-1.2.7-2.1V5.2h3zM72.2 1c.6 0 1 .2 1.4.5.4.4.6.8.6 1.4l-.1.8-.5 1.2-1.1 2.9h-2l.9-3.2c-.4-.1-.6-.3-.8-.6a2 2 0 0 1-.3-1 1.8 1.8 0 0 1 2-2zm7.6 15.2c-.9 0-1.8-.1-2.6-.4-.9-.2-1.6-.5-2-.8l1-2.2 1.7.7 2 .3c1.3 0 2-.3 2-1 0-.3-.2-.5-.5-.6a8 8 0 0 0-1.7-.4 16 16 0 0 1-2.2-.4c-.6-.2-1-.5-1.5-1-.4-.4-.6-1-.6-1.8 0-.7.2-1.3.6-1.8.4-.6 1-1 1.7-1.3a10.5 10.5 0 0 1 5-.2l1.8.7-1 2.2c-1-.5-2-.8-3.1-.8-.7 0-1.2.1-1.5.3-.4.2-.5.4-.5.7 0 .4.2.6.5.7.4.2 1 .3 1.7.4l2.2.5c.6.2 1 .5 1.5.9.4.4.6 1 .6 1.8 0 .7-.2 1.3-.6 1.8-.4.5-1 1-1.8 1.2-.7.3-1.7.5-2.7.5zm18 0c-1.1 0-2.2-.1-3.2-.4-1-.3-1.9-.7-2.5-1.2l1-2.4c.7.4 1.4.8 2.2 1a8 8 0 0 0 2.5.4 4 4 0 0 0 2-.4c.5-.2.7-.6.7-1a1 1 0 0 0-.4-.9 3 3 0 0 0-1-.5l-1.6-.5-2.7-.7c-.6-.3-1.2-.7-1.7-1.2-.5-.6-.7-1.3-.7-2.3 0-.8.2-1.5.6-2.2.5-.7 1.1-1.2 2-1.6A10.8 10.8 0 0 1 101 2c.8.3 1.6.6 2.2 1l-1 2.5a7.8 7.8 0 0 0-3.9-1.1c-.9 0-1.5.1-2 .4-.4.3-.6.7-.6 1.2 0 .4.2.8.7 1 .5.3 1.3.5 2.3.7 1 .3 2 .5 2.6.8.7.2 1.3.6 1.8 1.2.5.5.7 1.3.7 2.2 0 .8-.2 1.5-.7 2.2-.4.7-1 1.2-2 1.6-.9.3-2 .5-3.2.5zm23.5 1.3c-.4.6-1 1-1.6 1.3-.7.3-1.4.4-2.2.4-1 0-2-.2-2.8-.6-.8-.5-1.8-1.3-2.9-2.4a7.9 7.9 0 0 1-3.3-1.2 6.9 6.9 0 0 1-3.2-6 7 7 0 0 1 3.7-6.3c1.2-.6 2.5-1 4-1 1.4 0 2.7.4 3.9 1a7 7 0 0 1 3.7 6.3 7 7 0 0 1-5 6.8l1 .8 1 .2a3 3 0 0 0 2.3-1l1.4 1.7zM108.6 9c0 .9.2 1.6.6 2.3a4 4 0 0 0 1.5 1.6c.7.4 1.4.6 2.3.6.8 0 1.5-.2 2.2-.6a4 4 0 0 0 1.6-1.6c.4-.7.5-1.4.5-2.3a4 4 0 0 0-2.1-4c-.7-.3-1.4-.5-2.2-.5-.9 0-1.6.2-2.3.6a4 4 0 0 0-1.5 1.6c-.4.7-.6 1.4-.6 2.3zm14.7-7h3.3v11.4h7V16h-10.3V2zm24.3 0c1.3 0 2.3.2 3.2.6 1 .4 1.7 1 2.2 1.8.4.7.7 1.6.7 2.7 0 1-.3 1.9-.7 2.7-.5.7-1.2 1.3-2.2 1.7-.9.4-2 .6-3.2.6h-2.8V16h-3.2V2h6zm-.2 7.5c1 0 1.7-.2 2.3-.6.5-.5.7-1 .7-1.8s-.2-1.4-.7-1.8c-.6-.5-1.3-.7-2.3-.7h-2.6v4.9h2.6zm8.8-8.3h3.1V16h-3V1.2zM166.8 5c1.7 0 3 .4 3.9 1.2.9.8 1.3 2 1.3 3.6V16h-3v-1.3c-.5 1-1.6 1.5-3.2 1.5a5 5 0 0 1-2.1-.5c-.6-.2-1.1-.6-1.4-1.1a3 3 0 0 1-.5-1.7c0-1 .4-1.8 1.1-2.4.8-.5 2-.8 3.5-.8h2.5c0-.7-.2-1.2-.6-1.6-.4-.4-1-.5-1.9-.5a5.4 5.4 0 0 0-3 1l-1.2-2.2c.6-.4 1.3-.8 2.1-1 .8-.2 1.7-.3 2.5-.3zm-.2 9c.5 0 1-.2 1.4-.4.4-.3.7-.6.9-1.1v-1.1h-2.1c-1.3 0-2 .4-2 1.3 0 .4.2.7.5 1 .3.1.7.3 1.3.3zm19-8.9l-4.9 11.5a5.6 5.6 0 0 1-1.8 2.6c-.8.5-1.6.7-2.7.7-.5 0-1 0-1.6-.2l-1.4-.7 1.2-2.3a2.7 2.7 0 0 0 1.7.7c.5 0 .8 0 1-.3.4-.2.6-.5.8-1V16l-4.6-10.9h3.2l3 7.3 3-7.3h3zm12.3 0v9c0 2-.5 3.4-1.5 4.4-1 1-2.6 1.4-4.5 1.4-1 0-2 0-3-.3s-1.7-.7-2.3-1.1l1.2-2.3 1.7 1 2.1.2c1.1 0 1.9-.2 2.4-.7.5-.5.8-1.2.8-2.2v-.5c-.8 1-2 1.4-3.4 1.4-1 0-2-.2-2.7-.7a5 5 0 0 1-2.7-4.5 5 5 0 0 1 2.7-4.5c.8-.5 1.7-.7 2.7-.7 1.5 0 2.7.5 3.5 1.5V5.2h3zm-6 7.7c1 0 1.6-.2 2.1-.7.6-.5.8-1.1.8-2 0-.7-.2-1.3-.8-1.8-.5-.5-1.2-.8-2-.8a3 3 0 0 0-2 .8c-.6.5-.8 1-.8 1.9 0 .8.2 1.4.8 1.9a3 3 0 0 0 2 .7zM204 6.7c.4-.6.9-1 1.5-1.2.7-.3 1.4-.4 2.2-.4V8h-.7c-.9 0-1.6.2-2 .7-.6.5-.8 1.2-.8 2.2V16H201V5.2h3v1.5zm10.9 9.5c-1.2 0-2.2-.3-3-.8a5.3 5.3 0 0 1-3-4.8c0-1 .3-2 .8-2.8.5-.9 1.2-1.5 2.1-2 1-.5 2-.7 3-.7 1.2 0 2.2.2 3 .7a5.3 5.3 0 0 1 3 4.8c0 1-.3 2-.8 2.9-.5.8-1.2 1.5-2.1 2-.9.4-2 .7-3 .7zm0-2.6c.8 0 1.4-.3 2-.8a3 3 0 0 0 .7-2.2 3 3 0 0 0-.8-2.2c-.5-.5-1.1-.8-2-.8-.7 0-1.4.3-2 .8a3 3 0 0 0-.7 2.2c0 1 .3 1.6.8 2.2.5.5 1.2.8 2 .8zm19-8.4V16h-3v-1.3c-.3.5-.8.8-1.4 1a4.6 4.6 0 0 1-5.2-.8c-.9-.8-1.3-2-1.3-3.6v-6h3.1v5.6c0 1.7.8 2.6 2.2 2.6.8 0 1.4-.3 1.8-.8.5-.5.7-1.2.7-2.1V5.2h3.1zm9.7-.1c1.3 0 2.4.4 3.2 1.2.9.8 1.3 2 1.3 3.5V16H245v-5.7c0-.8-.2-1.5-.6-1.9-.4-.4-1-.6-1.6-.6-.8 0-1.4.2-2 .7-.4.5-.6 1.2-.6 2.2V16H237V5.2h3v1.3c.4-.5.9-.8 1.5-1 .6-.3 1.3-.4 2-.4zm18.6-4V16h-3v-1.2c-.7.9-1.8 1.4-3.3 1.4-1 0-2-.3-2.8-.7a4.9 4.9 0 0 1-1.9-2 6 6 0 0 1-.7-2.9c0-1 .2-2 .7-2.9.5-.8 1.1-1.5 2-2 .8-.4 1.7-.6 2.7-.6a4 4 0 0 1 3.2 1.3V1.2h3.1zm-5.8 12.5c.8 0 1.5-.3 2-.8a3 3 0 0 0 .8-2.2 3 3 0 0 0-.8-2.2c-.5-.5-1.2-.8-2-.8s-1.4.3-2 .8a3 3 0 0 0-.7 2.2c0 1 .2 1.6.7 2.2.6.5 1.2.8 2 .8z"
        />
      </CenteredSVG>
    </LogoContainer>
  );
}