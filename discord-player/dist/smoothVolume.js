"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VolumeTransformer_1 = require("./VoiceInterface/VolumeTransformer");
if (!("DISABLE_DISCORD_PLAYER_SMOOTH_VOLUME" in process.env)) {
    try {
        // eslint-disable-next-line
        const mod = require("prism-media");
        if (typeof mod.VolumeTransformer.hasSmoothing !== "boolean") {
            Reflect.set(mod, "VolumeTransformer", VolumeTransformer_1.VolumeTransformer);
        }
    }
    catch {
        /* do nothing */
    }
}
