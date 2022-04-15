import React from "react";
import TypeIt from "typeit-react";

const typeit = (instance) => {
  instance
    .pause(1000)
    .type('<span style="font-family: Segoe UI Emoji">👋</span>')
    .type("&nbsp;Hi there! I am Udbhav")
    .pause(750)
    .move(-6)
    .type("NG")
    .pause(750)
    .move(-2)
    .type("https://")
    .pause(750)
    .move(8)
    .type(".com")
    .pause(1000);
  return instance;
};

export default function Type() {
  return (
    <div className="type-writer">
      <TypeIt
        element="h1"
        options={{
          waitUntilVisible: true,
          loop: true
        }}
        getBeforeInit={typeit}
      />
    </div>
  )
}