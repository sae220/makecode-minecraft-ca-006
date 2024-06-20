namespace agent {
  //% group="Actions" weight=269
  //% block="エージェントに前へオークの看板を置かせる"
  export function placeOakSignForward(): void {
    blocks.place(OAK_SIGN, posAgentCamera(0, 0, 1));
  }
}
