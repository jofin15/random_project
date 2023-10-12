import React, { useState } from "react";
import "./brand.css";
import { google, slack, dropbox, shopify, atlassian } from "./import";

function Brand() {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={google}></img>
      </div>
      <div>
        <img src={slack}></img>
      </div>
      <div>
        <img src={dropbox}></img>
      </div>
      <div>
        <img src={shopify}></img>
      </div>
      <div>
        <img src={atlassian}></img>
      </div>
    </div>
  );
}
export default Brand;
