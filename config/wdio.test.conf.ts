import {config as baseConfig} from "../wdio.conf.ts"

export const config = Object.assign(baseConfig,{
    environment:"TEST",
    sauseLabURL: "https://www.saucedemo.com/"

})