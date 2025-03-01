"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.Util = exports.StreamDispatcher = exports.VoiceUtils = exports.Track = exports.Queue = exports.QueryResolver = exports.ErrorStatusCode = exports.PlayerError = exports.Player = exports.Playlist = exports.ExtractorModel = exports.AudioFilters = void 0;
const tslib_1 = require("tslib");
// try applying smooth volume patch on load
require("./smoothVolume");
const discord_js_1 = require("discord.js");
var AudioFilters_1 = require("./utils/AudioFilters");
Object.defineProperty(exports, "AudioFilters", { enumerable: true, get: function () { return AudioFilters_1.AudioFilters; } });
var ExtractorModel_1 = require("./Structures/ExtractorModel");
Object.defineProperty(exports, "ExtractorModel", { enumerable: true, get: function () { return ExtractorModel_1.ExtractorModel; } });
var Playlist_1 = require("./Structures/Playlist");
Object.defineProperty(exports, "Playlist", { enumerable: true, get: function () { return Playlist_1.Playlist; } });
var Player_1 = require("./Player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return Player_1.Player; } });
var PlayerError_1 = require("./Structures/PlayerError");
Object.defineProperty(exports, "PlayerError", { enumerable: true, get: function () { return PlayerError_1.PlayerError; } });
Object.defineProperty(exports, "ErrorStatusCode", { enumerable: true, get: function () { return PlayerError_1.ErrorStatusCode; } });
var QueryResolver_1 = require("./utils/QueryResolver");
Object.defineProperty(exports, "QueryResolver", { enumerable: true, get: function () { return QueryResolver_1.QueryResolver; } });
var Queue_1 = require("./Structures/Queue");
Object.defineProperty(exports, "Queue", { enumerable: true, get: function () { return Queue_1.Queue; } });
var Track_1 = require("./Structures/Track");
Object.defineProperty(exports, "Track", { enumerable: true, get: function () { return Track_1.Track; } });
var VoiceUtils_1 = require("./VoiceInterface/VoiceUtils");
Object.defineProperty(exports, "VoiceUtils", { enumerable: true, get: function () { return VoiceUtils_1.VoiceUtils; } });
var StreamDispatcher_1 = require("./VoiceInterface/StreamDispatcher");
Object.defineProperty(exports, "StreamDispatcher", { enumerable: true, get: function () { return StreamDispatcher_1.StreamDispatcher; } });
tslib_1.__exportStar(require("./VoiceInterface/VolumeTransformer"), exports);
var Util_1 = require("./utils/Util");
Object.defineProperty(exports, "Util", { enumerable: true, get: function () { return Util_1.Util; } });
tslib_1.__exportStar(require("./types/types"), exports);
tslib_1.__exportStar(require("./utils/FFmpegStream"), exports);
// eslint-disable-next-line @typescript-eslint/no-var-requires
exports.version = require(`${__dirname}/../package.json`).version;
if (!discord_js_1.version.startsWith("14")) {
    process.emitWarning(`Discord.js v${discord_js_1.version} is incompatible with Discord Player v${exports.version}! Please use >=v14.x of Discord.js`);
}
