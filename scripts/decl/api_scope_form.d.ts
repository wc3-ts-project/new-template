/// <reference path="./handle.d.ts"/>

declare class Handle {
    static getId(h: handle): integer
}

declare class CameraSetup {
    static create(): camerasetup
    static getDestPositionLoc(whichSetup: camerasetup): location
    static getDestPositionX(whichSetup: camerasetup): real
    static getDestPositionY(whichSetup: camerasetup): real
    static apply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): typeof CameraSetup
    static applyWithZ(whichSetup: camerasetup, zDestOffset: real): void
    static applyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: real): void
    static applyForceDurationWithZ(
        whichSetup: camerasetup,
        zDestOffset: real,
        forceDuration: real
    ): void
    static blzSetLabel(whichSetup: camerasetup, label: string): void
    static blzGetLabel(whichSetup: camerasetup): string
    static setField(
        whichSetup: camerasetup,
        whichField: camerafield,
        value: real,
        duration: real
    ): void
    static getField(whichSetup: camerasetup, whichField: camerafield): real
    static setDestPosition(whichSetup: camerasetup, x: real, y: real, duration: real): void
    static blzApplyForceDurationSmooth(
        whichSetup: camerasetup,
        doPan: boolean,
        forcedDuration: real,
        easeInDuration: real,
        easeOutDuration: real,
        smoothFactor: real
    ): void
}

declare class DialogButton {
    static add(whichDialog: dialog, buttonText: string, hotkey: integer): button
    static addQuit(
        whichDialog: dialog,
        doScoreScreen: boolean,
        buttonText: string,
        hotkey: integer
    ): button
    static getClicked(): button
}

declare class ItemPool {
    static create(): itempool
    static destroy(whichItemPool: itempool): void
    static addItemType(whichItemPool: itempool, itemId: integer, weight: real): void
    static removeItemType(whichItemPool: itempool, itemId: integer): void
    static placeRandom(whichItemPool: itempool, x: real, y: real): item
}

declare class Location {
    static location(x: real, y: real): location
    static remove(whichLocation: location): void
    static move(whichLocation: location, newX: real, newY: real): void
    static getX(whichLocation: location): real
    static getY(whichLocation: location): real
    static getY(whichLocation: location): real
}

// declare const PLAYER_NEUTRAL_PASSIVE: integer
// declare const PLAYER_NEUTRAL_AGGRESSIVE: integer
// declare const PLAYER_COLOR_RED       : playercolor
// declare const PLAYER_COLOR_BLUE      : playercolor
// declare const PLAYER_COLOR_CYAN      : playercolor
// declare const PLAYER_COLOR_PURPLE    : playercolor
// declare const PLAYER_COLOR_YELLOW    : playercolor
// declare const PLAYER_COLOR_ORANGE    : playercolor
// declare const PLAYER_COLOR_GREEN     : playercolor
// declare const PLAYER_COLOR_PINK      : playercolor
// declare const PLAYER_COLOR_LIGHT_GRAY: playercolor
// declare const PLAYER_COLOR_LIGHT_BLUE: playercolor
// declare const PLAYER_COLOR_AQUA       : playercolor
// declare const PLAYER_COLOR_BROWN      : playercolor
// declare const PLAYER_COLOR_MAROON     : playercolor
// declare const PLAYER_COLOR_NAVY       : playercolor
// declare const PLAYER_COLOR_TURQUOISE  : playercolor
// declare const PLAYER_COLOR_VIOLET     : playercolor
// declare const PLAYER_COLOR_WHEAT      : playercolor
// declare const PLAYER_COLOR_PEACH      : playercolor
// declare const PLAYER_COLOR_MINT       : playercolor
// declare const PLAYER_COLOR_LAVENDER   : playercolor
// declare const PLAYER_COLOR_COAL       : playercolor
// declare const PLAYER_COLOR_SNOW       : playercolor
// declare const PLAYER_COLOR_EMERALD    : playercolor
// declare const PLAYER_COLOR_PEANUT     : playercolor
// declare function ConvertPlayerColor(i: integer): playercolor
// declare const PLAYER_GAME_RESULT_VICTORY: playergameresult
// declare const PLAYER_GAME_RESULT_DEFEAT : playergameresult
// declare const PLAYER_GAME_RESULT_TIE    : playergameresult
// declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult
// declare function ConvertPlayerGameResult(i: integer): playergameresult
// declare const PLAYER_SLOT_STATE_EMPTY  : playerslotstate
// declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate
// declare const PLAYER_SLOT_STATE_LEFT   : playerslotstate
// declare function ConvertPlayerSlotState(i: integer): playerslotstate
// declare const PLAYER_STATE_GAME_RESULT: playerstate
// declare const PLAYER_STATE_RESOURCE_GOLD       : playerstate
// declare const PLAYER_STATE_RESOURCE_LUMBER     : playerstate
// declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate
// declare const PLAYER_STATE_RESOURCE_FOOD_CAP   : playerstate
// declare const PLAYER_STATE_RESOURCE_FOOD_USED  : playerstate
// declare const PLAYER_STATE_FOOD_CAP_CEILING    : playerstate
// declare const PLAYER_STATE_GIVES_BOUNTY  : playerstate
// declare const PLAYER_STATE_ALLIED_VICTORY: playerstate
// declare const PLAYER_STATE_PLACED        : playerstate
// declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate
// declare const PLAYER_STATE_OBSERVER         : playerstate
// declare const PLAYER_STATE_UNFOLLOWABLE     : playerstate
// declare const PLAYER_STATE_GOLD_UPKEEP_RATE  : playerstate
// declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate
// declare const PLAYER_STATE_GOLD_GATHERED  : playerstate
// declare const PLAYER_STATE_LUMBER_GATHERED: playerstate
// declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate
// declare function ConvertPlayerState(i: integer): playerstate
// declare const PLAYER_SCORE_UNITS_TRAINED: playerscore
// declare const PLAYER_SCORE_UNITS_KILLED : playerscore
// declare const PLAYER_SCORE_STRUCT_BUILT : playerscore
// declare const PLAYER_SCORE_STRUCT_RAZED : playerscore
// declare const PLAYER_SCORE_TECH_PERCENT : playerscore
// declare const PLAYER_SCORE_FOOD_MAXPROD : playerscore
// declare const PLAYER_SCORE_FOOD_MAXUSED : playerscore
// declare const PLAYER_SCORE_HEROES_KILLED: playerscore
// declare const PLAYER_SCORE_ITEMS_GAINED : playerscore
// declare const PLAYER_SCORE_MERCS_HIRED  : playerscore
// declare const PLAYER_SCORE_GOLD_MINED_TOTAL : playerscore
// declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore
// declare const PLAYER_SCORE_GOLD_LOST_UPKEEP : playerscore
// declare const PLAYER_SCORE_GOLD_LOST_TAX     : playerscore
// declare const PLAYER_SCORE_GOLD_GIVEN        : playerscore
// declare const PLAYER_SCORE_GOLD_RECEIVED     : playerscore
// declare const PLAYER_SCORE_LUMBER_TOTAL      : playerscore
// declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore
// declare const PLAYER_SCORE_LUMBER_LOST_TAX   : playerscore
// declare const PLAYER_SCORE_LUMBER_GIVEN      : playerscore
// declare const PLAYER_SCORE_LUMBER_RECEIVED   : playerscore
// declare const PLAYER_SCORE_UNIT_TOTAL        : playerscore
// declare const PLAYER_SCORE_HERO_TOTAL        : playerscore
// declare const PLAYER_SCORE_RESOURCE_TOTAL    : playerscore
// declare const PLAYER_SCORE_TOTAL             : playerscore
// declare function ConvertPlayerScore(i: integer): playerscore
// declare const EVENT_PLAYER_STATE_LIMIT     : playerevent
// declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent

// declare const EVENT_PLAYER_DEFEAT       : playerevent
// declare const EVENT_PLAYER_VICTORY      : playerevent
// declare const EVENT_PLAYER_LEAVE        : playerevent
// declare const EVENT_PLAYER_CHAT         : playerevent
// declare const EVENT_PLAYER_END_CINEMATIC: playerevent
// declare function ConvertPlayerEvent(i: integer): playerevent
// declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent
// declare const EVENT_PLAYER_UNIT_RESCUED : playerunitevent

// declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent
// declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent

// declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent
// declare const EVENT_PLAYER_UNIT_HIDDEN  : playerunitevent

// declare const EVENT_PLAYER_UNIT_SELECTED  : playerunitevent
// declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent

// declare const EVENT_PLAYER_UNIT_CONSTRUCT_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_UPGRADE_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_TRAIN_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_RESEARCH_START     : playerunitevent
// declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL    : playerunitevent
// declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH    : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_ORDER       : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent

// declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent

// declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent
// declare const EVENT_PLAYER_HERO_SKILL: playerunitevent

// declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent

// declare const EVENT_PLAYER_HERO_REVIVE_START : playerunitevent
// declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent
// declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent
// declare const EVENT_PLAYER_UNIT_SUMMON       : playerunitevent
// declare const EVENT_PLAYER_UNIT_DROP_ITEM    : playerunitevent
// declare const EVENT_PLAYER_UNIT_PICKUP_ITEM  : playerunitevent
// declare const EVENT_PLAYER_UNIT_USE_ITEM     : playerunitevent

// declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent
// declare const EVENT_PLAYER_UNIT_DAMAGED : playerunitevent
// declare const EVENT_PLAYER_UNIT_DAMAGING: playerunitevent

// declare const EVENT_PLAYER_ARROW_LEFT_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_LEFT_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_UP  : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_DOWN   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_UP     : playerevent
// declare const EVENT_PLAYER_MOUSE_DOWN      : playerevent
// declare const EVENT_PLAYER_MOUSE_UP        : playerevent
// declare const EVENT_PLAYER_MOUSE_MOVE      : playerevent
// declare const EVENT_PLAYER_SYNC_DATA       : playerevent
// declare const EVENT_PLAYER_KEY             : playerevent
// declare const EVENT_PLAYER_KEY_DOWN        : playerevent
// declare const EVENT_PLAYER_KEY_UP          : playerevent
// declare const EVENT_PLAYER_UNIT_SELL         : playerunitevent
// declare const EVENT_PLAYER_UNIT_CHANGE_OWNER : playerunitevent
// declare const EVENT_PLAYER_UNIT_SELL_ITEM    : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CAST   : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_EFFECT : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_FINISH : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent
// declare const EVENT_PLAYER_UNIT_PAWN_ITEM    : playerunitevent
// declare function GetBJMaxPlayers(): integer
// declare function GetBJPlayerNeutralVictim(): integer
// declare function GetBJPlayerNeutralExtra(): integer
// declare function GetBJMaxPlayerSlots(): integer
// declare function GetPlayerNeutralPassive(): integer
// declare function GetPlayerNeutralAggressive(): integer

declare class Player {
    static player(number: integer): player
    static getLocal(): player
    static isAlly(whichPlayer: player, otherPlayer: player): boolean
    static isEnemy(whichPlayer: player, otherPlayer: player): boolean
    static isInForce(whichPlayer: player, whichForce: force): boolean
    static isObserver(whichPlayer: player): boolean
    static isVisible(x: real, y: real, whichPlayer: player): boolean
    static isLocationVisible(whichLocation: location, whichPlayer: player): boolean
    static isFogged(x: real, y: real, whichPlayer: player): boolean
    static isLocationFogged(whichLocation: location, whichPlayer: player): boolean
    static isMasked(x: real, y: real, whichPlayer: player): boolean
    static isLocationMasked(whichLocation: location, whichPlayer: player): boolean
    static getRace(whichPlayer: player): race
    static getId(whichPlayer: player): integer
    static getUnitCount(whichPlayer: player, includeIncomplete: boolean): integer
    static getTypedUnitCount(
        whichPlayer: player,
        unitName: string,
        includeIncomplete: boolean,
        includeUpgrades: boolean
    ): integer
    static getStructureCount(whichPlayer: player, includeIncomplete: boolean): integer
    static getState(whichPlayer: player, whichPlayerState: playerstate): integer
    static getScore(whichPlayer: player, whichPlayerScore: playerscore): integer
    static getAlliance(
        sourcePlayer: player,
        otherPlayer: player,
        whichAllianceSetting: alliancetype
    ): boolean
    static getHandicap(whichPlayer: player): real
    static getHandicapXP(whichPlayer: player): real
    static getHandicapReviveTime(whichPlayer: player): real
    static getHandicapDamage(whichPlayer: player): real
    static setHandicap(whichPlayer: player, handicap: real): void
    static setHandicapXP(whichPlayer: player, handicap: real): void
    static setHandicapReviveTime(whichPlayer: player, handicap: real): void
    static setHandicapDamage(whichPlayer: player, handicap: real): void
    static setTechMaxAllowed(whichPlayer: player, techid: integer, maximum: integer): void
    static getTechMaxAllowed(whichPlayer: player, techid: integer): integer
    static addTechResearched(whichPlayer: player, techid: integer, levels: integer): void
    static setTechResearched(whichPlayer: player, techid: integer, setToLevel: integer): void
    static getTechResearched(whichPlayer: player, techid: integer, specificonly: boolean): boolean
    static getTechCount(whichPlayer: player, techid: integer, specificonly: boolean): integer
    static setUnitsOwner(whichPlayer: player, newOwner: integer): void
    static cripple(whichPlayer: player, toWhichPlayers: force, flag: boolean): void
    static setAbilityAvailable(whichPlayer: player, abilid: integer, avail: boolean): void
    static setState(whichPlayer: player, whichPlayerState: playerstate, value: integer): void
    static remove(whichPlayer: player, gameResult: playergameresult): void
    static cacheHeroData(whichPlayer: player): void
    static setColor(whichPlayer: player, color: playercolor): void
    static setAlliance(
        sourcePlayer: player,
        otherPlayer: player,
        whichAllianceSetting: alliancetype,
        value: boolean
    ): void
    static setTaxRate(
        sourcePlayer: player,
        otherPlayer: player,
        whichResource: playerstate,
        rate: real
    ): void
    static setRacePreference(whichPlayer: player, whichRacePreference: racepreference): void
    static setRaceSelectable(whichPlayer: player, value: boolean): void
    static setController(whichPlayer: player, controlType: mapcontrol): void
    static setName(whichPlayer: player, name: string): void
    static setOnScoreScreen(whichPlayer: player, flag: boolean): void
    static getTeam(whichPlayer: player): integer
    static getStartLocation(whichPlayer: player): integer
    static getColor(whichPlayer: player): playercolor
    static getSelectable(whichPlayer: player): boolean
    static getController(whichPlayer: player): mapcontrol
    static getSlotState(whichPlayer: player): playerslotstate
    static getTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): real
    static isRacePrefSet(whichPlayer: player, pref: racepreference): boolean
    static getName(whichPlayer: player): string
    static blzGetTownHallCount(whichPlayer: player): integer
    static blzDecTechResearched(whichPlayer: player, techid: integer, levels: integer): void
    static removeAllGuardPositions(num: player): void
    static triggered(): player
    static setLeaderboard(toPlayer: player, lb: leaderboard): void
    static getLeaderboard(toPlayer: player): leaderboard
    static getWinning(): player
    static filtered(): player
    static enumed(): player
    static convertAliianceType(i: integer): alliancetype
    static convertMouseButtonType(i: integer): mousebuttontype
    static convertColor(i: integer): playercolor
    static convertGameResult(i: integer): playergameresult
    static convertScore(i: integer): playerscore
    static convertSlotState(i: integer): playerslotstate
    static convertState(i: integer): playerstate
    static getEventChatString(): string
    static getEventChatStringMatched(): string
    static blzGetTriggerKey(): oskeytype
    static blzGetTriggerMetaKey(): integer
    static blzGetTriggerIsKeyDown(): boolean
    static blzGetLocale(): string
    static blzGetTriggerMouseX(): real
    static blzGetTriggerMouseY(): real
    static blzGetTriggerMousePosition(): location
    static blzGetTriggerMouseButton(): mousebuttontype
    static getEventState(): playerstate
    static readonly NEUTRAL_PASSIVE: integer
    static readonly NEUTRAL_AGGRESSIVE: integer
    static readonly COLOR_RED: playercolor
    static readonly COLOR_BLUE: playercolor
    static readonly COLOR_CYAN: playercolor
    static readonly COLOR_PURPLE: playercolor
    static readonly COLOR_YELLOW: playercolor
    static readonly COLOR_ORANGE: playercolor
    static readonly COLOR_GREEN: playercolor
    static readonly COLOR_PINK: playercolor
    static readonly COLOR_LIGHT_GRAY: playercolor
    static readonly COLOR_LIGHT_BLUE: playercolor
    static readonly COLOR_AQUA: playercolor
    static readonly COLOR_BROWN: playercolor
    static readonly COLOR_MAROON: playercolor
    static readonly COLOR_NAVY: playercolor
    static readonly COLOR_TURQUOISE: playercolor
    static readonly COLOR_VIOLET: playercolor
    static readonly COLOR_WHEAT: playercolor
    static readonly COLOR_PEACH: playercolor
    static readonly COLOR_MINT: playercolor
    static readonly COLOR_LAVENDER: playercolor
    static readonly COLOR_COAL: playercolor
    static readonly COLOR_SNOW: playercolor
    static readonly COLOR_EMERALD: playercolor
    static readonly COLOR_PEANUT: playercolor
    static convertColor(i: integer): playercolor
    static readonly GAME_RESULT_VICTORY: playergameresult
    static readonly GAME_RESULT_DEFEAT: playergameresult
    static readonly GAME_RESULT_TIE: playergameresult
    static readonly GAME_RESULT_NEUTRAL: playergameresult
    static convertGameResult(i: integer): playergameresult
    static readonly SLOT_STATE_EMPTY: playerslotstate
    static readonly SLOT_STATE_PLAYING: playerslotstate
    static readonly SLOT_STATE_LEFT: playerslotstate
    static convertSlotState(i: integer): playerslotstate
    static readonly GAME_RESULT: playerstate
    static readonly RESOURCE_GOLD: playerstate
    static readonly RESOURCE_LUMBER: playerstate
    static readonly RESOURCE_HERO_TOKENS: playerstate
    static readonly RESOURCE_FOOD_CAP: playerstate
    static readonly RESOURCE_FOOD_USED: playerstate
    static readonly FOOD_CAP_CEILING: playerstate
    static readonly GIVES_BOUNTY: playerstate
    static readonly ALLIED_VICTORY: playerstate
    static readonly PLACED: playerstate
    static readonly OBSERVER_ON_DEATH: playerstate
    static readonly OBSERVER: playerstate
    static readonly UNFOLLOWABLE: playerstate
    static readonly GOLD_UPKEEP_RATE: playerstate
    static readonly LUMBER_UPKEEP_RATE: playerstate
    static readonly GOLD_GATHERED: playerstate
    static readonly LUMBER_GATHERED: playerstate
    static readonly NO_CREEP_SLEEP: playerstate
    static convertState(i: integer): playerstate
    static readonly SCORE_UNITS_TRAINED: playerscore
    static readonly SCORE_UNITS_KILLED: playerscore
    static readonly SCORE_STRUCT_BUILT: playerscore
    static readonly SCORE_STRUCT_RAZED: playerscore
    static readonly SCORE_TECH_PERCENT: playerscore
    static readonly SCORE_FOOD_MAXPROD: playerscore
    static readonly SCORE_FOOD_MAXUSED: playerscore
    static readonly SCORE_HEROES_KILLED: playerscore
    static readonly SCORE_ITEMS_GAINED: playerscore
    static readonly SCORE_MERCS_HIRED: playerscore
    static readonly SCORE_GOLD_MINED_TOTAL: playerscore
    static readonly SCORE_GOLD_MINED_UPKEEP: playerscore
    static readonly SCORE_GOLD_LOST_UPKEEP: playerscore
    static readonly SCORE_GOLD_LOST_TAX: playerscore
    static readonly SCORE_GOLD_GIVEN: playerscore
    static readonly SCORE_GOLD_RECEIVED: playerscore
    static readonly SCORE_LUMBER_TOTAL: playerscore
    static readonly SCORE_LUMBER_LOST_UPKEEP: playerscore
    static readonly SCORE_LUMBER_LOST_TAX: playerscore
    static readonly SCORE_LUMBER_GIVEN: playerscore
    static readonly SCORE_LUMBER_RECEIVED: playerscore
    static readonly SCORE_UNIT_TOTAL: playerscore
    static readonly SCORE_HERO_TOTAL: playerscore
    static readonly SCORE_RESOURCE_TOTAL: playerscore
    static readonly SCORE_TOTAL: playerscore
    static convertScore(i: integer): playerscore
    static readonly EVENT_STATE_LIMIT: playerevent
    static readonly EVENT_ALLIANCE_CHANGED: playerevent

    static readonly EVENT_DEFEAT: playerevent
    static readonly EVENT_VICTORY: playerevent
    static readonly EVENT_LEAVE: playerevent
    static readonly EVENT_CHAT: playerevent
    static readonly EVENT_END_CINEMATIC: playerevent
    static convertEvent(i: integer): playerevent
    static readonly EVENT_UNIT_ATTACKED: playerunitevent
    static readonly EVENT_UNIT_RESCUED: playerunitevent

    static readonly EVENT_UNIT_DEATH: playerunitevent
    static readonly EVENT_UNIT_DECAY: playerunitevent

    static readonly EVENT_UNIT_DETECTED: playerunitevent
    static readonly EVENT_UNIT_HIDDEN: playerunitevent

    static readonly EVENT_UNIT_SELECTED: playerunitevent
    static readonly EVENT_UNIT_DESELECTED: playerunitevent

    static readonly EVENT_UNIT_CONSTRUCT_START: playerunitevent
    static readonly EVENT_UNIT_CONSTRUCT_CANCEL: playerunitevent
    static readonly EVENT_UNIT_CONSTRUCT_FINISH: playerunitevent

    static readonly EVENT_UNIT_UPGRADE_START: playerunitevent
    static readonly EVENT_UNIT_UPGRADE_CANCEL: playerunitevent
    static readonly EVENT_UNIT_UPGRADE_FINISH: playerunitevent

    static readonly EVENT_UNIT_TRAIN_START: playerunitevent
    static readonly EVENT_UNIT_TRAIN_CANCEL: playerunitevent
    static readonly EVENT_UNIT_TRAIN_FINISH: playerunitevent

    static readonly EVENT_UNIT_RESEARCH_START: playerunitevent
    static readonly EVENT_UNIT_RESEARCH_CANCEL: playerunitevent
    static readonly EVENT_UNIT_RESEARCH_FINISH: playerunitevent
    static readonly EVENT_UNIT_ISSUED_ORDER: playerunitevent
    static readonly EVENT_UNIT_ISSUED_POINT_ORDER: playerunitevent
    static readonly EVENT_UNIT_ISSUED_TARGET_ORDER: playerunitevent

    static readonly EVENT_UNIT_ISSUED_UNIT_ORDER: playerunitevent

    static readonly EVENT_HERO_LEVEL: playerunitevent
    static readonly EVENT_HERO_SKILL: playerunitevent

    static readonly EVENT_HERO_REVIVABLE: playerunitevent

    static readonly EVENT_HERO_REVIVE_START: playerunitevent
    static readonly EVENT_HERO_REVIVE_CANCEL: playerunitevent
    static readonly EVENT_HERO_REVIVE_FINISH: playerunitevent
    static readonly EVENT_UNIT_SUMMON: playerunitevent
    static readonly EVENT_UNIT_DROP_ITEM: playerunitevent
    static readonly EVENT_UNIT_PICKUP_ITEM: playerunitevent
    static readonly EVENT_UNIT_USE_ITEM: playerunitevent

    static readonly EVENT_UNIT_LOADED: playerunitevent
    static readonly EVENT_UNIT_DAMAGED: playerunitevent
    static readonly EVENT_UNIT_DAMAGING: playerunitevent
    static convertUnitEvent(i: integer): playerunitevent
    static readonly EVENT_ARROW_LEFT_DOWN: playerevent
    static readonly EVENT_ARROW_LEFT_UP: playerevent
    static readonly EVENT_ARROW_RIGHT_DOWN: playerevent
    static readonly EVENT_ARROW_RIGHT_UP: playerevent
    static readonly EVENT_ARROW_DOWN_DOWN: playerevent
    static readonly EVENT_ARROW_DOWN_UP: playerevent
    static readonly EVENT_ARROW_UP_DOWN: playerevent
    static readonly EVENT_ARROW_UP_UP: playerevent
    static readonly EVENT_MOUSE_DOWN: playerevent
    static readonly EVENT_MOUSE_UP: playerevent
    static readonly EVENT_MOUSE_MOVE: playerevent
    static readonly EVENT_SYNC_DATA: playerevent
    static readonly EVENT_KEY: playerevent
    static readonly EVENT_KEY_DOWN: playerevent
    static readonly KEY_UP: playerevent
    static readonly UNIT_SELL: playerunitevent
    static readonly UNIT_CHANGE_OWNER: playerunitevent
    static readonly UNIT_SELL_ITEM: playerunitevent
    static readonly UNIT_SPELL_CHANNEL: playerunitevent
    static readonly UNIT_SPELL_CAST: playerunitevent
    static readonly UNIT_SPELL_EFFECT: playerunitevent
    static readonly UNIT_SPELL_FINISH: playerunitevent
    static readonly UNIT_SPELL_ENDCAST: playerunitevent
    static readonly UNIT_PAWN_ITEM: playerunitevent
    static getBJMax(): integer
    static getBJNeutralVictim(): integer
    static getBJNeutralExtra(): integer
    static getBJMaxSlots(): integer
    static getNeutralPassive(): integer
    static getNeutralAggressive(): integer
}

declare class MultiboardItem {
    static release(mbi: multiboarditem): void
    static setStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): void
    static setValue(mbi: multiboarditem, val: string): void
    static setValueColor(
        mbi: multiboarditem,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setWidth(mbi: multiboarditem, width: real): void
    static setIcon(mbi: multiboarditem, iconFileName: string): void
}

declare class QuestItem {
    static create(whichQuest: quest): questitem
    static setDescription(whichQuestItem: questitem, description: string): void
    static setCompleted(whichQuestItem: questitem, completed: boolean): void
    static isCompleted(whichQuestItem: questitem): boolean
}

declare class Rect {
    static rect(minx: real, miny: real, maxx: real, maxy: real): rect
    static fromLoc(min: location, max: location): rect
    static remove(whichRect: rect): void
    static set(whichRect: rect, minx: real, miny: real, maxx: real, maxy: real): void
    static setFromLoc(whichRect: rect, min: location, max: location): void
    static moveTo(whichRect: rect, newCenterX: real, newCenterY: real): void
    static moveToLoc(whichRect: rect, newCenterLoc: location): void
    static getCenterX(whichRect: rect): real
    static getCenterY(whichRect: rect): real
    static getMinX(whichRect: rect): real
    static getMinY(whichRect: rect): real
    static getMaxX(whichRect: rect): real
    static getMaxY(whichRect: rect): real
    static enumDestructablesInRect(r: rect, filter: codebool, actionFunc: code): void
    static enumItemsInRect(r: rect, filter: codebool, actionFunc: code): void
    static getWorldBounds(): rect
}

declare class SpecialEffect {
    static add(modelName: string, x: real, y: real): effect
    static addLoc(modelName: string, where: location): effect
    static addTarget(modelName: string, targetWidget: widget, attachPointName: string): effect
    static destroy(whichEffect: effect): void
    static blzGetScale(whichEffect: effect): real
    static blzSetMatrixScale(whichEffect: effect, x: real, y: real, z: real): void
    static blzResetMatrix(whichEffect: effect): void
    static blzSetColorByPlayer(whichEffect: effect, whichPlayer: player): void
    static blzSetColor(whichEffect: effect, r: real, g: real, b: real): void
    static blzSetAlpha(whichEffect: effect, alpha: integer): void
    static blzSetScale(whichEffect: effect, scale: real): void
    static blzSetPosition(whichEffect: effect, x: real, y: real, z: real): void
    static blzSetHeight(whichEffect: effect, height: real): void
    static blzSetTimeScale(whichEffect: effect, timeScale: real): void
    static blzSetTime(whichEffect: effect, time: real): void
    static blzSetOrientation(whichEffect: effect, yaw: real, pitch: real, roll: real): void
    static blzSetYaw(whichEffect: effect, yaw: real): void
    static blzSetPitch(whichEffect: effect, pitch: real): void
    static blzSetRoll(whichEffect: effect, roll: real): void
    static blzSetX(whichEffect: effect, x: real): void
    static blzSetY(whichEffect: effect, y: real): void
    static blzSetZ(whichEffect: effect, z: real): void
    static blzSetPositionLoc(whichEffect: effect, loc: location): void
    static blzGetLocalX(whichEffect: effect): real
    static blzGetLocalY(whichEffect: effect): real
    static blzGetLocalZ(whichEffect: effect): real
    static blzClearSubAnimations(whichEffect: effect): void
    static blzRemoveSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void
    static blzAddSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void
    static blzPlay(whichEffect: effect, whichAnim: animtype): void
    static blzPlayWithTimeScale(whichEffect: effect, whichAnim: animtype, timeScale: real): void
    static convertType(i: integer): effecttype
}

declare class SpellEffect {
    static add(abilityString: string, t: effecttype, x: real, y: real): effect
    static addLoc(abilityString: string, t: effecttype, where: location): effect
    static addById(abilityId: integer, t: effecttype, x: real, y: real): effect
    static addByIdLoc(abilityId: integer, t: effecttype, where: location): effect
    static addTargget(
        modelName: string,
        t: effecttype,
        targetWidget: widget,
        attachPoint: string
    ): effect
    static addTargetById(
        abilityId: integer,
        t: effecttype,
        targetWidget: widget,
        attachPoint: string
    ): effect
}

declare class Ability {
    static blzSetTooltip(abilCode: integer, tooltip: string, level: integer): void
    static blzSetActivatedTooltip(abilCode: integer, tooltip: string, level: integer): void
    static blzSetExtendedTooltip(abilCode: integer, extendedTooltip: string, level: integer): void
    static blzSetActivatedExtendedTooltip(
        abilCode: integer,
        extendedTooltip: string,
        level: integer
    ): void
    static blzSetResearchTooltip(abilCode: integer, researchTooltip: string, level: integer): void
    static blzSetResearchExtendedTooltip(
        abilCode: integer,
        researchExtendedTooltip: string,
        level: integer
    ): void
    static blzGetTooltip(abilCode: integer, level: integer): string
    static blzGetActivatedTooltip(abilCode: integer, level: integer): string
    static blzGetExtendedTooltip(abilCode: integer, level: integer): string
    static blzGetActivatedExtendedTooltip(abilCode: integer, level: integer): string
    static blzGetResearchTooltip(abilCode: integer, level: integer): string
    static blzGetResearchExtendedTooltip(abilCode: integer, level: integer): string
    static blzSetIcon(abilCode: integer, iconPath: string): void
    static blzGetIcon(abilCode: integer): string
    static blzSetActivatedIcon(abilCode: integer, iconPath: string): void
    static blzGetActivatedIcon(abilCode: integer): string
    static blzGetPosX(abilCode: integer): integer
    static blzGetPosY(abilCode: integer): integer
    static blzSetPosX(abilCode: integer, x: integer): void
    static blzSetPosY(abilCode: integer, y: integer): void
    static blzGetActivatedPosX(abilCode: integer): integer
    static blzGetActivatedPosY(abilCode: integer): integer
    static blzSetActivatedPosX(abilCode: integer, x: integer): void
    static blzSetActivatedPosY(abilCode: integer, y: integer): void
    static blzGetManaCost(abilId: integer, level: integer): integer
    static blzGetCooldown(abilId: integer, level: integer): real
    static getEffect(abilityString: string, t: effecttype, index: integer): string
    static getEffectById(abilityId: integer, t: effecttype, index: integer): string
    static getSound(abilityString: string, t: soundtype): string
    static getSoundById(abilityId: integer, t: soundtype): string
    static blzGetBooleanField(whichAbility: ability, whichField: abilitybooleanfield): boolean
    static blzGetIntegerField(whichAbility: ability, whichField: abilityintegerfield): integer
    static blzGetRealField(whichAbility: ability, whichField: abilityrealfield): real
    static blzGetStringField(whichAbility: ability, whichField: abilitystringfield): string
    static blzGetBooleanLevelField(
        whichAbility: ability,
        whichField: abilitybooleanlevelfield,
        level: integer
    ): boolean
    static blzGetIntegerLevelField(
        whichAbility: ability,
        whichField: abilityintegerlevelfield,
        level: integer
    ): integer
    static blzGetRealLevelField(
        whichAbility: ability,
        whichField: abilityreallevelfield,
        level: integer
    ): real
    static blzGetStringLevelField(
        whichAbility: ability,
        whichField: abilitystringlevelfield,
        level: integer
    ): string
    static blzGetBooleanLevelArrayField(
        whichAbility: ability,
        whichField: abilitybooleanlevelarrayfield,
        level: integer,
        index: integer
    ): boolean
    static blzGetIntegerLevelArrayField(
        whichAbility: ability,
        whichField: abilityintegerlevelarrayfield,
        level: integer,
        index: integer
    ): integer
    static blzGetRealLevelArrayField(
        whichAbility: ability,
        whichField: abilityreallevelarrayfield,
        level: integer,
        index: integer
    ): real
    static blzGetStringLevelArrayField(
        whichAbility: ability,
        whichField: abilitystringlevelarrayfield,
        level: integer,
        index: integer
    ): string
    static blzSetBooleanField(
        whichAbility: ability,
        whichField: abilitybooleanfield,
        value: boolean
    ): boolean
    static blzSetIntegerField(
        whichAbility: ability,
        whichField: abilityintegerfield,
        value: integer
    ): boolean
    static blzSetRealField(
        whichAbility: ability,
        whichField: abilityrealfield,
        value: real
    ): boolean
    static blzSetStringField(
        whichAbility: ability,
        whichField: abilitystringfield,
        value: string
    ): boolean
    static blzSetBooleanLevelField(
        whichAbility: ability,
        whichField: abilitybooleanlevelfield,
        level: integer,
        value: boolean
    ): boolean
    static blzSetIntegerLevelField(
        whichAbility: ability,
        whichField: abilityintegerlevelfield,
        level: integer,
        value: integer
    ): boolean
    static blzSetRealLevelField(
        whichAbility: ability,
        whichField: abilityreallevelfield,
        level: integer,
        value: real
    ): boolean
    static blzSetStringLevelField(
        whichAbility: ability,
        whichField: abilitystringlevelfield,
        level: integer,
        value: string
    ): boolean
    static blzSetBooleanLevelArrayField(
        whichAbility: ability,
        whichField: abilitybooleanlevelarrayfield,
        level: integer,
        index: integer,
        value: boolean
    ): boolean
    static blzSetIntegerLevelArrayField(
        whichAbility: ability,
        whichField: abilityintegerlevelarrayfield,
        level: integer,
        index: integer,
        value: integer
    ): boolean
    static blzSetRealLevelArrayField(
        whichAbility: ability,
        whichField: abilityreallevelarrayfield,
        level: integer,
        index: integer,
        value: real
    ): boolean
    static blzSetStringLevelArrayField(
        whichAbility: ability,
        whichField: abilitystringlevelarrayfield,
        level: integer,
        index: integer,
        value: string
    ): boolean
    static blzAddBooleanLevelArrayField(
        whichAbility: ability,
        whichField: abilitybooleanlevelarrayfield,
        level: integer,
        value: boolean
    ): boolean
    static blzAddIntegerLevelArrayField(
        whichAbility: ability,
        whichField: abilityintegerlevelarrayfield,
        level: integer,
        value: integer
    ): boolean
    static blzAddRealLevelArrayField(
        whichAbility: ability,
        whichField: abilityreallevelarrayfield,
        level: integer,
        value: real
    ): boolean
    static blzAddStringLevelArrayField(
        whichAbility: ability,
        whichField: abilitystringlevelarrayfield,
        level: integer,
        value: string
    ): boolean
    static blzRemoveBooleanLevelArrayField(
        whichAbility: ability,
        whichField: abilitybooleanlevelarrayfield,
        level: integer,
        value: boolean
    ): boolean
    static blzRemoveIntegerLevelArrayField(
        whichAbility: ability,
        whichField: abilityintegerlevelarrayfield,
        level: integer,
        value: integer
    ): boolean
    static blzRemoveRealLevelArrayField(
        whichAbility: ability,
        whichField: abilityreallevelarrayfield,
        level: integer,
        value: real
    ): boolean
    static blzRemoveStringLevelArrayField(
        whichAbility: ability,
        whichField: abilitystringlevelarrayfield,
        level: integer,
        value: string
    ): boolean
    static convertBooleanField(i: integer): abilitybooleanfield
    static convertIntegerField(i: integer): abilityintegerfield
    static convertRealField(i: integer): abilityrealfield
    static convertStringField(i: integer): abilitystringfield
    static convertBooleanLevelField(i: integer): abilitybooleanlevelfield
    static convertIntegerLevelField(i: integer): abilityintegerlevelfield
    static convertRealLevelField(i: integer): abilityreallevelfield
    static convertStringLevelField(i: integer): abilitystringlevelfield
    static convertBooleanLevelArrayField(i: integer): abilitybooleanlevelarrayfield
    static convertIntegerLevelArrayField(i: integer): abilityintegerlevelarrayfield
    static convertRealLevelArrayField(i: integer): abilityreallevelarrayfield
    static convertStringLevelArrayField(i: integer): abilitystringlevelarrayfield
}

declare class Destructable {
    static create(
        objectid: integer,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ): destructable
    static createZ(
        objectid: integer,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ): destructable
    static createDead(
        objectid: integer,
        x: real,
        y: real,
        face: real,
        scale: real,
        variation: integer
    ): destructable
    static createDeadZ(
        objectid: integer,
        x: real,
        y: real,
        z: real,
        face: real,
        scale: real,
        variation: integer
    ): destructable
    static remove(d: destructable): void
    static kill(d: destructable): void
    static setInvulnerable(d: destructable, flag: boolean): void
    static isInvulnerable(d: destructable): boolean
    static enumInRect(r: rect, filter: codebool, actionFunc: code): void
    static getTypeId(d: destructable): integer
    static getX(d: destructable): real
    static getY(d: destructable): real
    static setLife(d: destructable, life: real): void
    static getLife(d: destructable): real
    static setMaxLife(d: destructable, max: real): void
    static getMaxLife(d: destructable): real
    static restoreLife(d: destructable, life: real, birth: boolean): void
    static queueAnimation(d: destructable, whichAnimation: string): void
    static setAnimation(d: destructable, whichAnimation: string): void
    static setAnimationSpeed(d: destructable, speedFactor: real): void
    static show(d: destructable, flag: boolean): void
    static getOccluderHeight(d: destructable): real
    static setOccluderHeight(d: destructable, height: real): void
    static getName(d: destructable): string
    static triggered(): destructable
    static filtered(): destructable
    static enumed(): destructable
}

// declare const DIALOG_EVENT_BUTTON_CLICK: dialogevent
// declare const DIALOG_EVENT_DIALOG_CLICK: dialogevent

declare class Dialog {
    static create(): dialog
    static destroy(whichDialog: dialog): void
    static clear(whichDialog: dialog): void
    static setMessage(whichDialog: dialog, messageText: string): void
    static display(whichPlayer: player, whichDialog: dialog, flag: boolean): void
    static getClicked(): dialog
    static readonly EVENT_BUTTON_CLICK: dialogevent
    static readonly EVENT_DIALOG_CLICK: dialogevent
}

declare class FogModifier {
    static createRect(
        forWhichPlayer: player,
        whichState: fogstate,
        where: rect,
        useSharedVision: boolean,
        afterUnits: boolean
    ): fogmodifier
    static createRadius(
        forWhichPlayer: player,
        whichState: fogstate,
        centerX: real,
        centerY: real,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ): fogmodifier
    static createRadiusLoc(
        forWhichPlayer: player,
        whichState: fogstate,
        center: location,
        radius: real,
        useSharedVision: boolean,
        afterUnits: boolean
    ): fogmodifier
    static destroy(whichFogModifier: fogmodifier): void
    static start(whichFogModifier: fogmodifier): void
    static stop(whichFogModifier: fogmodifier): void
}

declare class Force {
    static create(): force
    static destroy(whichForce: force): void
    static addPlayer(whichForce: force, whichPlayer: player): void
    static removePlayer(whichForce: force, whichPlayer: player): void
    static blzHasPlayer(whichForce: force, whichPlayer: player): boolean
    static clear(whichForce: force): void
    static enumPlayers(whichForce: force, filter: codebool): void
    static enumPlayersCounted(whichForce: force, filter: codebool, countLimit: integer): void
    static enumAllies(whichForce: force, whichPlayer: player, filter: codebool): void
    static enumEnemies(whichForce: force, whichPlayer: player, filter: codebool): void
    static forEach(whichForce: force, callback: code): void
    static isInForce(whichPlayer: player, whichForce: force): boolean
}

declare class Frame {
    static blzCreate(
        name: string,
        owner: framehandle,
        priority: integer,
        createContext: integer
    ): framehandle
    static blzCreateSimple(name: string, owner: framehandle, createContext: integer): framehandle
    static blzCreateByType(
        typeName: string,
        name: string,
        owner: framehandle,
        inherits: string,
        createContext: integer
    ): framehandle
    static blzDestroy(frame: framehandle): void
    static blzSetPoint(
        frame: framehandle,
        point: framepointtype,
        relative: framehandle,
        relativePoint: framepointtype,
        x: real,
        y: real
    ): void
    static blzSetAbsPoint(frame: framehandle, point: framepointtype, x: real, y: real): void
    static blzClearAllPoints(frame: framehandle): void
    static blzSetAllPoints(frame: framehandle, relative: framehandle): void
    static blzSetVisible(frame: framehandle, visible: boolean): void
    static blzIsVisible(frame: framehandle): boolean
    static blzGetByName(name: string, createContext: integer): framehandle
    static blzGetName(frame: framehandle): string
    static blzClick(frame: framehandle): void
    static blzSetText(frame: framehandle, text: string): void
    static blzGetText(frame: framehandle): string
    static blzAddText(frame: framehandle, text: string): void
    static blzSetTextSizeLimit(frame: framehandle, size: integer): void
    static blzGetTextSizeLimit(frame: framehandle): integer
    static blzSetTextColor(frame: framehandle, color: integer): void
    static blzSetFocus(frame: framehandle, flag: boolean): void
    static blzSetModel(frame: framehandle, modelFile: string, cameraIndex: integer): void
    static blzSetEnable(frame: framehandle, enabled: boolean): void
    static blzGetEnable(frame: framehandle): boolean
    static blzSetAlpha(frame: framehandle, alpha: integer): void
    static blzGetAlpha(frame: framehandle): integer
    static blzSetSpriteAnimate(frame: framehandle, primaryProp: integer, flags: integer): void
    static blzSetTexture(frame: framehandle, texFile: string, flag: integer, blend: boolean): void
    static blzSetScale(frame: framehandle, scale: real): void
    static blzSetTooltip(frame: framehandle, tooltip: framehandle): void
    static blzCageMouse(frame: framehandle, enable: boolean): void
    static blzSetValue(frame: framehandle, value: real): void
    static blzGetValue(frame: framehandle): real
    static blzSetMinMaxValue(frame: framehandle, minValue: real, maxValue: real): void
    static blzSetStepSize(frame: framehandle, stepSize: real): void
    static blzSetSize(frame: framehandle, width: real, height: real): void
    static blzSetVertexColor(frame: framehandle, color: integer): void
    static blzSetLevel(frame: framehandle, level: integer): void
    static blzSetParent(frame: framehandle, parent: framehandle): void
    static blzGetParent(frame: framehandle): framehandle
    static blzGetHeight(frame: framehandle): real
    static blzGetWidth(frame: framehandle): real
    static blzSetFont(frame: framehandle, fileName: string, height: real, flags: integer): void
    static blzSetTextAlignment(frame: framehandle, vert: textaligntype, horz: textaligntype): void
    static blzTriggered(): framehandle
    static blzGetTriggerValue(): real
    static blzGetTriggerText(): string
    static blzEnableUIAutoPosition(enable: boolean): void
    static blzGetOrigin(frameType: originframetype, index: integer): framehandle
    static blzHideOriginFrames(enable: boolean): void
    static blzLoadTOCFile(TOCFile: string): boolean
    static convertEventType(i: integer): frameeventtype
    static blzGetTriggerType(): frameeventtype
    static convertOriginType(i: integer): originframetype
    static convertPointType(i: integer): framepointtype
    static convertTextAlignType(i: integer): textaligntype
}

declare class GameCache {
    static reloadFromDisk(): boolean
    static init(campaignFile: string): gamecache
    static save(whichCache: gamecache): boolean
    static storeInteger(cache: gamecache, missionKey: string, key: string, value: integer): void
    static storeReal(cache: gamecache, missionKey: string, key: string, value: real): void
    static storeBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void
    static storeUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean
    static storeString(cache: gamecache, missionKey: string, key: string, value: string): boolean
    static syncStoredInteger(cache: gamecache, missionKey: string, key: string): void
    static syncStoredReal(cache: gamecache, missionKey: string, key: string): void
    static syncStoredBoolean(cache: gamecache, missionKey: string, key: string): void
    static syncStoredUnit(cache: gamecache, missionKey: string, key: string): void
    static syncStoredString(cache: gamecache, missionKey: string, key: string): void
    static haveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean
    static haveStoredReal(cache: gamecache, missionKey: string, key: string): boolean
    static haveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
    static haveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean
    static haveStoredString(cache: gamecache, missionKey: string, key: string): boolean
    static flush(cache: gamecache): void
    static flushStoredMission(cache: gamecache, missionKey: string): void
    static flushStoredInteger(cache: gamecache, missionKey: string, key: string): void
    static flushStoredReal(cache: gamecache, missionKey: string, key: string): void
    static flushStoredBoolean(cache: gamecache, missionKey: string, key: string): void
    static flushStoredUnit(cache: gamecache, missionKey: string, key: string): void
    static flushStoredString(cache: gamecache, missionKey: string, key: string): void
    static getStoredInteger(cache: gamecache, missionKey: string, key: string): integer
    static getStoredReal(cache: gamecache, missionKey: string, key: string): real
    static getStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean
    static getStoredString(cache: gamecache, missionKey: string, key: string): string
    static restoreUnit(
        cache: gamecache,
        missionKey: string,
        key: string,
        forWhichPlayer: player,
        x: real,
        y: real,
        facing: real
    ): unit
}

declare class Group {
    static create(): group
    static destroy(whichGroup: group): void
    static addUnit(whichGroup: group, whichUnit: unit): boolean
    static removeUnit(whichGroup: group, whichUnit: unit): boolean
    static blzAddFast(whichGroup: group, addGroup: group): integer
    static blzRemoveFast(whichGroup: group, removeGroup: group): integer
    static clear(whichGroup: group): void
    static blzGetSize(whichGroup: group): integer
    static blzUnitAt(whichGroup: group, index: integer): unit
    static enumOfType(whichGroup: group, unitname: string, filter: codebool): void
    static enumOfPlayer(whichGroup: group, whichPlayer: player, filter: codebool): void
    static enumOfTypeCounted(
        whichGroup: group,
        unitname: string,
        filter: codebool,
        countLimit: integer
    ): void
    static enumInRect(whichGroup: group, r: rect, filter: codebool): void
    static enumInRectCounted(
        whichGroup: group,
        r: rect,
        filter: codebool,
        countLimit: integer
    ): void
    static enumInRange(whichGroup: group, x: real, y: real, radius: real, filter: codebool): void
    static enumInRangeOfLoc(
        whichGroup: group,
        whichLocation: location,
        radius: real,
        filter: codebool
    ): void
    static enumInRangeCounted(
        whichGroup: group,
        x: real,
        y: real,
        radius: real,
        filter: codebool,
        countLimit: integer
    ): void
    static enumInRangeOfLocCounted(
        whichGroup: group,
        whichLocation: location,
        radius: real,
        filter: codebool,
        countLimit: integer
    ): void
    static enumSelected(whichGroup: group, whichPlayer: player, filter: codebool): void
    static immediateOrder(whichGroup: group, order: string): boolean
    static immediateOrderById(whichGroup: group, order: integer): boolean
    static pointOrder(whichGroup: group, order: string, x: real, y: real): boolean
    static pointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean
    static pointOrderById(whichGroup: group, order: integer, x: real, y: real): boolean
    static pointOrderByIdLoc(whichGroup: group, order: integer, whichLocation: location): boolean
    static targetOrder(whichGroup: group, order: string, targetWidget: widget): boolean
    static targetOrderById(whichGroup: group, order: integer, targetWidget: widget): boolean
    static forEach(whichGroup: group, callback: code): void
    static first(whichGroup: group): unit
}

declare class HashTable {
    static init(): hashtable

    static saveInteger(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        value: integer
    ): void
    static saveReal(table: hashtable, parentKey: integer, childKey: integer, value: real): void
    static saveBoolean(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        value: boolean
    ): void
    static saveStr(table: hashtable, parentKey: integer, childKey: integer, value: string): boolean
    static savePlayer(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichPlayer: player
    ): boolean
    static saveWidget(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichWidget: widget
    ): boolean
    static saveDestructable(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichDestructable: destructable
    ): boolean
    static saveItem(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichItem: item
    ): boolean
    static saveUnit(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichUnit: unit
    ): boolean
    static saveAbility(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichAbility: ability
    ): boolean
    static saveTimer(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTimer: timer
    ): boolean
    static saveTrigger(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTrigger: trigger
    ): boolean
    static saveTriggerCondition(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTriggercondition: triggercondition
    ): boolean
    static saveTriggerAction(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTriggeraction: triggeraction
    ): boolean
    static saveTriggerEvent(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichEvent: event
    ): boolean
    static saveForce(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichForce: force
    ): boolean
    static saveGroup(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichGroup: group
    ): boolean
    static saveLocation(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichLocation: location
    ): boolean
    static saveRect(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichRect: rect
    ): boolean
    static saveBooleanExpr(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichBoolexpr: boolexpr
    ): boolean
    static saveSound(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichSound: sound
    ): boolean
    static saveEffect(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichEffect: effect
    ): boolean
    static saveUnitPool(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichUnitpool: unitpool
    ): boolean
    static saveItemPool(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichItempool: itempool
    ): boolean
    static saveQuest(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichQuest: quest
    ): boolean
    static saveQuestItem(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichQuestitem: questitem
    ): boolean
    static saveDefeatCondition(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichDefeatcondition: defeatcondition
    ): boolean
    static saveTimerDialog(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTimerdialog: timerdialog
    ): boolean
    static saveLeaderboard(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichLeaderboard: leaderboard
    ): boolean
    static saveMultiboard(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichMultiboard: multiboard
    ): boolean
    static saveMultiboardItem(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichMultiboardItem: multiboarditem
    ): boolean
    static saveTrackable(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichTrackable: trackable
    ): boolean
    static saveDialog(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichDialog: dialog
    ): boolean
    static saveButton(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichButton: button
    ): boolean
    static saveTextTag(
        table: hashtable,
        parentKey: integer,
        childkey: integer,
        whichTexttag: texttag
    ): boolean
    static saveLightning(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichLightning: lightning
    ): boolean
    static saveImage(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichImage: image
    ): boolean
    static saveUbersplat(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichUbersplat: ubersplat
    ): boolean
    static saveRegion(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichRegion: region
    ): boolean
    static saveFogState(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichFogState: fogstate
    ): boolean
    static saveFogModifier(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichFogModifier: fogmodifier
    ): boolean
    static saveAgent(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichAgent: agent
    ): boolean
    static saveHashtable(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichHashtable: hashtable
    ): boolean
    static saveFrame(
        table: hashtable,
        parentKey: integer,
        childKey: integer,
        whichFrameHandle: framehandle
    ): boolean

    static loadInteger(table: hashtable, parentKey: integer, childKey: integer): integer
    static loadReal(table: hashtable, parentKey: integer, childKey: integer): real
    static loadBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean
    static loadStr(table: hashtable, parentKey: integer, childKey: integer): string
    static loadPlayer(table: hashtable, parentKey: integer, childKey: integer): player
    static loadWidget(table: hashtable, parentKey: integer, childKey: integer): widget
    static loadDestructable(table: hashtable, parentKey: integer, childKey: integer): destructable
    static loadItem(table: hashtable, parentKey: integer, childKey: integer): item
    static loadUnit(table: hashtable, parentKey: integer, childKey: integer): unit
    static loadAbility(table: hashtable, parentKey: integer, childKey: integer): ability
    static loadTimer(table: hashtable, parentKey: integer, childKey: integer): timer
    static loadTrigger(table: hashtable, parentKey: integer, childKey: integer): trigger
    static loadTriggerCondition(
        table: hashtable,
        parentKey: integer,
        childKey: integer
    ): triggercondition
    static loadTriggerAction(table: hashtable, parentKey: integer, childKey: integer): triggeraction
    static loadTriggerEvent(table: hashtable, parentKey: integer, childKey: integer): event
    static loadForce(table: hashtable, parentKey: integer, childKey: integer): force
    static loadGroup(table: hashtable, parentKey: integer, childKey: integer): group
    static loadLocation(table: hashtable, parentKey: integer, childKey: integer): location
    static loadRect(table: hashtable, parentKey: integer, childKey: integer): rect
    static loadBooleanExpr(table: hashtable, parentKey: integer, childKey: integer): boolexpr
    static loadSound(table: hashtable, parentKey: integer, childKey: integer): sound
    static loadEffect(table: hashtable, parentKey: integer, childKey: integer): effect
    static loadUnitPool(table: hashtable, parentKey: integer, childKey: integer): unitpool
    static loadItemPool(table: hashtable, parentKey: integer, childKey: integer): itempool
    static loadQuest(table: hashtable, parentKey: integer, childKey: integer): quest
    static loadQuestItem(table: hashtable, parentKey: integer, childKey: integer): questitem
    static loadDefeatCondition(
        table: hashtable,
        parentKey: integer,
        childKey: integer
    ): defeatcondition
    static loadTimerDialog(table: hashtable, parentKey: integer, childKey: integer): timerdialog
    static loadLeaderboard(table: hashtable, parentKey: integer, childKey: integer): leaderboard
    static loadMultiboard(table: hashtable, parentKey: integer, childKey: integer): multiboard
    static loadMultiboardItem(
        table: hashtable,
        parentKey: integer,
        childKey: integer
    ): multiboarditem
    static loadTrackable(table: hashtable, parentKey: integer, childKey: integer): trackable
    static loadDialog(table: hashtable, parentKey: integer, childKey: integer): dialog
    static loadButton(table: hashtable, parentKey: integer, childKey: integer): button
    static loadTextTag(table: hashtable, parentKey: integer, childKey: integer): texttag
    static loadLightning(table: hashtable, parentKey: integer, childKey: integer): lightning
    static loadImage(table: hashtable, parentKey: integer, childKey: integer): image
    static loadUbersplat(table: hashtable, parentKey: integer, childKey: integer): ubersplat
    static loadRegion(table: hashtable, parentKey: integer, childKey: integer): region
    static loadFogState(table: hashtable, parentKey: integer, childKey: integer): fogstate
    static loadFogModifier(table: hashtable, parentKey: integer, childKey: integer): fogmodifier
    static loadHashtable(table: hashtable, parentKey: integer, childKey: integer): hashtable
    static loadFrame(table: hashtable, parentKey: integer, childKey: integer): framehandle

    static haveSavedInteger(table: hashtable, parentKey: integer, childkey: integer): boolean
    static haveSavedReal(table: hashtable, parentKey: integer, childKey: integer): boolean
    static haveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean
    static haveSavedString(table: hashtable, parentKey: integer, childKey: integer): boolean
    static haveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): boolean

    static removeSavedInteger(table: hashtable, parentKey: integer, childKey: integer): void
    static removeSavedReal(table: hashtable, parentKey: integer, childKey: integer): void
    static removeSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): void
    static removeSavedString(table: hashtable, parentKey: integer, childKey: integer): void
    static removeSavedHandle(table: hashtable, parentKey: integer, childKey: integer): void

    static flushParent(table: hashtable): void
    static flushChild(table: hashtable, parentKey: integer): void
}

declare class Image {
    static create(
        file: string,
        sizeX: real,
        sizeY: real,
        sizeZ: real,
        posX: real,
        posY: real,
        posZ: real,
        originX: real,
        originY: real,
        originZ: real,
        imageType: integer
    ): image
    static destroy(whichImage: image): void
    static show(whichImage: image, flag: boolean): void
    static setConstantHeight(whichImage: image, flag: boolean, height: real): void
    static setPosition(whichImage: image, x: real, y: real, z: real): void
    static setColor(
        whichImage: image,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setRender(whichImage: image, flag: boolean): void
    static setRenderAlways(whichImage: image, flag: boolean): void
    static setAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void
    static setType(whichImage: image, imageType: integer): void
}

declare class Item {
    static blzCreateWithSkin(itemid: integer, x: real, y: real, skinId: integer): item
    static create(itemid: integer, x: real, y: real): item
    static remove(whichItem: item): void
    static getPlayer(whichItem: item): player
    static getTypeId(i: item): integer
    static getX(i: item): real
    static getY(i: item): real
    static setPosition(i: item, x: real, y: real): void
    static setDropOnDeath(whichItem: item, flag: boolean): void
    static setDroppable(i: item, flag: boolean): void
    static setPawnable(i: item, flag: boolean): void
    static setPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void
    static setInvulnerable(whichItem: item, flag: boolean): void
    static isInvulnerable(whichItem: item): boolean
    static setVisibile(whichItem: item, show: boolean): void
    static isVisible(whichItem: item): boolean
    static isOwned(whichItem: item): boolean
    static isPowerup(whichItem: item): boolean
    static isSellable(whichItem: item): boolean
    static isPawnable(whichItem: item): boolean
    static enumInrect(r: rect, filter: codebool, actionFunc: code | null): void
    static getLevel(whichItem: item): integer
    static getType(whichItem: item): itemtype
    static setDropID(whichItem: item, unitId: integer): void
    static getName(whichItem: item): string
    static getCharges(whichItem: item): integer
    static setCharges(whichItem: item, charges: integer): void
    static getUserData(whichItem: item): integer
    static setUserData(whichItem: item, data: integer): void
    static blzSetName(whichItem: item, name: string): void
    static blzGetSkin(whichItem: item): integer
    static blzSetSkin(whichItem: item, skinId: integer): void
    static blzGetAbilityByIndex(whichItem: item, index: integer): ability
    static blzGetAbility(whichItem: item, abilCode: integer): ability
    static blzAddAbility(whichItem: item, abilCode: integer): boolean
    static blzGetBooleanField(whichItem: item, whichField: itembooleanfield): boolean
    static blzGetIntegerField(whichItem: item, whichField: itemintegerfield): integer
    static blzGetRealField(whichItem: item, whichField: itemrealfield): real
    static blzGetStringField(whichItem: item, whichField: itemstringfield): string
    static blzSetBooleanField(
        whichItem: item,
        whichField: itembooleanfield,
        value: boolean
    ): boolean
    static blzSetIntegerField(
        whichItem: item,
        whichField: itemintegerfield,
        value: integer
    ): boolean
    static blzSetRealField(whichItem: item, whichField: itemrealfield, value: real): boolean
    static blzSetStringField(whichItem: item, whichField: itemstringfield, value: string): boolean
    static blzRemoveAbility(whichItem: item, abilCode: integer): boolean
    static filtered(): item
    static enumed(): item
    static blzSetDescription(whichItem: item, description: string): void
    static blzGetDescription(whichItem: item): string
    static blzSetTooltip(whichItem: item, tooltip: string): void
    static blzGetTooltip(whichItem: item): string
    static blzSetExtendedTooltip(whichItem: item, extendedTooltip: string): void
    static blzGetExtendedTooltip(whichItem: item): string
    static blzSetIconPath(whichItem: item, iconPath: string): void
    static blzGetIconPath(whichItem: item): string
    static isIdPowerup(itemId: integer): boolean
    static isIdSellable(itemId: integer): boolean
    static isIdPawnable(itemId: integer): boolean
    static addToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
    static removeFromAllStock(itemId: integer): void
    static convertBooleanField(i: integer): itembooleanfield
    static convertIntegerField(i: integer): itemintegerfield
    static convertRealField(i: integer): itemrealfield
    static convertStringField(i: integer): itemstringfield
    static convertType(i: integer): itemtype
}

declare class Leaderboard {
    static create(): leaderboard
    static destroy(lb: leaderboard): void
    static display(lb: leaderboard, show: boolean): void
    static isDisplayed(lb: leaderboard): boolean
    static getItemCount(lb: leaderboard): integer
    static setSizeByItemCount(lb: leaderboard, count: integer): void
    static addItme(lb: leaderboard, label: string, value: integer, p: player): void
    static removeItem(lb: leaderboard, index: integer): void
    static removePlayerItem(lb: leaderboard, p: player): void
    static clear(lb: leaderboard): void
    static sortItemsByValue(lb: leaderboard, ascending: boolean): void
    static sortItemsByPlayer(lb: leaderboard, ascending: boolean): void
    static sortItemsByLabel(lb: leaderboard, ascending: boolean): void
    static hasPlayerItem(lb: leaderboard, p: player): boolean
    static getPlayerIndex(lb: leaderboard, p: player): integer
    static setLabel(lb: leaderboard, label: string): void
    static getLabelText(lb: leaderboard): string
    static setLabelColor(
        lb: leaderboard,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setValueColor(
        lb: leaderboard,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setStyle(
        lb: leaderboard,
        showLabel: boolean,
        showNames: boolean,
        showValues: boolean,
        showIcons: boolean
    ): void
    static setItemValue(lb: leaderboard, whichItem: integer, val: integer): void
    static setItemLabel(lb: leaderboard, whichItem: integer, val: string): void
    static setItemStyle(
        lb: leaderboard,
        whichItem: integer,
        showLabel: boolean,
        showValue: boolean,
        showIcon: boolean
    ): void
    static setItemLabelColor(
        lb: leaderboard,
        whichItem: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setItemValueColor(
        lb: leaderboard,
        whichItem: integer,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
}

declare class Lightning {
    static add(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        x2: real,
        y2: real
    ): lightning
    static addEx(
        codeName: string,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        z1: real,
        x2: real,
        y2: real,
        z2: real
    ): lightning
    static destroy(whichBolt: lightning): boolean
    static move(
        whichBolt: lightning,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        x2: real,
        y2: real
    ): boolean
    static moveEx(
        whichBolt: lightning,
        checkVisibility: boolean,
        x1: real,
        y1: real,
        z1: real,
        x2: real,
        y2: real,
        z2: real
    ): boolean
    static getColorA(whichBolt: lightning): real
    static getColorR(whichBolt: lightning): real
    static getColorG(whichBolt: lightning): real
    static getColorB(whichBolt: lightning): real
    static setColor(whichBolt: lightning, r: real, g: real, b: real, a: real): boolean
}

declare class Multiboard {
    static create(): multiboard
    static destroy(lb: multiboard): void
    static display(lb: multiboard, show: boolean): void
    static isDisplayed(lb: multiboard): boolean
    static minimize(lb: multiboard, minimize: boolean): void
    static isMinimized(lb: multiboard): boolean
    static clear(lb: multiboard): void
    static setTitleText(lb: multiboard, label: string): void
    static getTitleText(lb: multiboard): string
    static setTitleTextColor(
        lb: multiboard,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static getRowCount(lb: multiboard): integer
    static getColumnCount(lb: multiboard): integer
    static setColumnCount(lb: multiboard, count: integer): void
    static setRowCount(lb: multiboard, count: integer): void
    static setItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): void
    static setItemsValue(lb: multiboard, value: string): void
    static setItemsValueColor(
        lb: multiboard,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setItemsWidth(lb: multiboard, width: real): void
    static setItemsIcon(lb: multiboard, iconPath: string): void
    static suppressDelay(flag: boolean): void
    static getItem(lb: multiboard, row: integer, column: integer): multiboarditem
}

declare class Quest {
    static create(): quest
    static destroy(whichQuest: quest): void
    static setTitle(whichQuest: quest, title: string): void
    static setDescription(whichQuest: quest, description: string): void
    static setIconPath(whichQuest: quest, iconPath: string): void
    static setRequired(whichQuest: quest, required: boolean): void
    static setCompleted(whichQuest: quest, completed: boolean): void
    static setDiscovered(whichQuest: quest, discovered: boolean): void
    static setFailed(whichQuest: quest, failed: boolean): void
    static setEnabled(whichQuest: quest, enabled: boolean): void
    static isRequired(whichQuest: quest): boolean
    static isCompleted(whichQuest: quest): boolean
    static isDiscovered(whichQuest: quest): boolean
    static isFailed(whichQuest: quest): boolean
    static isEnabled(whichQuest: quest): boolean
    static flashDialogButton(): void
    static forceDialogUpdate(): void
}

declare class Region {
    static create(): region
    static remove(whichRegion: region): void
    static addRect(whichRegion: region, r: rect): void
    static clearRect(whichRegion: region, r: rect): void
    static addCell(whichRegion: region, x: real, y: real): void
    static addCellAtLoc(whichRegion: region, whichLocation: location): void
    static clearCell(whichRegion: region, x: real, y: real): void
    static clearCellAtLoc(whichRegion: region, whichLocation: location): void
    static isUnitIn(whichRegion: region, whichUnit: unit): boolean
    static isPointIn(whichRegion: region, x: real, y: real): boolean
    static isLocationIn(whichRegion: region, whichLocation: location): boolean
    static triggered(): region
}

// declare const SOUND_TYPE_EFFECT       : soundtype
// declare const SOUND_TYPE_EFFECT_LOOPED: soundtype
// declare function ConvertSoundType(i: integer): soundtype
// declare const SOUND_VOLUMEGROUP_UNITMOVEMENT : volumegroup
// declare const SOUND_VOLUMEGROUP_UNITSOUNDS   : volumegroup
// declare const SOUND_VOLUMEGROUP_COMBAT       : volumegroup
// declare const SOUND_VOLUMEGROUP_SPELLS       : volumegroup
// declare const SOUND_VOLUMEGROUP_UI           : volumegroup
// declare const SOUND_VOLUMEGROUP_MUSIC        : volumegroup
// declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup
// declare const SOUND_VOLUMEGROUP_FIRE         : volumegroup
// declare function ConvertVolumeGroup(i: integer): volumegroup

declare class Sound {
    static create(
        fileName: string,
        looping: boolean,
        is3D: boolean,
        stopwhenoutofrange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer,
        eaxSetting: string
    ): sound
    static createFilenameWithLabel(
        fileName: string,
        looping: boolean,
        is3D: boolean,
        stopwhenoutofrange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer,
        SLKEntryName: string
    ): sound
    static createFromLabel(
        soundLabel: string,
        looping: boolean,
        is3D: boolean,
        stopwhenoutofrange: boolean,
        fadeInRate: integer,
        fadeOutRate: integer
    ): sound
    static createMIDI(soundLabel: string, fadeInRate: integer, fadeOutRate: integer): sound
    static setParamsFromLabel(soundHandle: sound, soundLabel: string): void
    static setDistanceCutoff(soundHandle: sound, cutoff: real): void
    static setChannel(soundHandle: sound, channel: integer): void
    static setVolume(soundHandle: sound, volume: integer): void
    static setPitch(soundHandle: sound, pitch: real): void
    static setPlayPosition(soundHandle: sound, millisecs: integer): void
    static setDistances(soundHandle: sound, minDist: real, maxDist: real): void
    static setConeAngles(
        soundHandle: sound,
        inside: real,
        outside: real,
        outsideVolume: integer
    ): void
    static setConeOrientation(soundHandle: sound, x: real, y: real, z: real): void
    static setPosition(soundHandle: sound, x: real, y: real, z: real): void
    static setVelocity(soundHandle: sound, x: real, y: real, z: real): void
    static attachToUnit(soundHandle: sound, whichUnit: unit): void
    static start(soundHandle: sound): void
    static stop(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void
    static killWhenDone(soundHandle: sound): void
    static setFacialAnimationLabel(soundHandle: sound, animationLabel: string): boolean
    static setFacialAnimationGroupLabel(soundHandle: sound, groupLabel: string): boolean
    static setFacialAnimationSetFilepath(soundHandle: sound, animationSetFilepath: string): boolean
    static setDialogueSpeakerNameKey(soundHandle: sound, speakerName: string): boolean
    static getDialogueSpeakerNameKey(soundHandle: sound): string
    static setDialogueTextKey(soundHandle: sound, dialogueText: string): boolean
    static getDialogueTextKey(soundHandle: sound): string
    static setDuration(soundHandle: sound, duration: integer): void
    static getDuration(soundHandle: sound): integer
    static setFileDuration(musicFileName: string): integer
    static isPlaying(soundHandle: sound): boolean
    static isLoading(soundHandle: sound): boolean
    static registerStacked(
        soundHandle: sound,
        byPosition: boolean,
        rectwidth: real,
        rectheight: real
    ): void
    static unregisterStacked(
        soundHandle: sound,
        byPosition: boolean,
        rectwidth: real,
        rectheight: real
    ): void
    static convertType(i: integer): soundtype
    static convertVolumeGroup(i: integer): volumegroup
    static volumeGroupSetVolume(vgroup: volumegroup, scale: real): void
    static volumeGroupReset(): void
    static readonly TYPE_EFFECT: soundtype
    static readonly TYPE_EFFECT_LOOPED: soundtype
    static convertType(i: integer): soundtype
    static readonly VOLUMEGROUP_UNITMOVEMENT: volumegroup
    static readonly VOLUMEGROUP_UNITSOUNDS: volumegroup
    static readonly VOLUMEGROUP_COMBAT: volumegroup
    static readonly VOLUMEGROUP_SPELLS: volumegroup
    static readonly VOLUMEGROUP_UI: volumegroup
    static readonly VOLUMEGROUP_MUSIC: volumegroup
    static readonly VOLUMEGROUP_AMBIENTSOUNDS: volumegroup
    static readonly VOLUMEGROUP_FIRE: volumegroup
    static convertVolumeGroup(i: integer): volumegroup
}

declare class TerrainDeformation {
    static crater(
        x: real,
        y: real,
        radius: real,
        depth: real,
        duration: integer,
        permanent: boolean
    ): terraindeformation
    static ripple(
        x: real,
        y: real,
        radius: real,
        depth: real,
        duration: integer,
        count: integer,
        spaceWaves: real,
        timeWaves: real,
        radiusStartPct: real,
        limitNeg: boolean
    ): terraindeformation
    static wave(
        x: real,
        y: real,
        dirX: real,
        dirY: real,
        distance: real,
        speed: real,
        radius: real,
        depth: real,
        trailTime: integer,
        count: integer
    ): terraindeformation
    static random(
        x: real,
        y: real,
        radius: real,
        minDelta: real,
        maxDelta: real,
        duration: integer,
        updateInterval: integer
    ): terraindeformation
    static stop(deformation: terraindeformation, duration: number): void
    static stopAll(): void
}

declare class TextTag {
    static create(): texttag
    static destroy(t: texttag): void
    static setText(t: texttag, s: string, height: real): void
    static setPos(t: texttag, x: real, y: real, heightOffset: real): void
    static setPosUnit(t: texttag, whichUnit: unit, heightOffset: real): void
    static setColor(t: texttag, red: integer, green: integer, blue: integer, alpha: integer): void
    static setVelocity(t: texttag, xvel: real, yvel: real): void
    static setVisibility(t: texttag, flag: boolean): void
    static setSuspended(t: texttag, flag: boolean): void
    static setPermanent(t: texttag, flag: boolean): void
    static setAge(t: texttag, age: real): void
    static setLifespan(t: texttag, lifespan: real): void
    static setFadepoint(t: texttag, fadepoint: real): void
}

declare class Timer {
    static create(): timer
    static destroy(whichTimer: timer): void
    static start(whichTimer: timer, timeout: real, periodic: boolean, handlerFunc: code): void
    static getElapsed(whichTimer: timer): real
    static getRemaining(whichTimer: timer): real
    static getTimeout(whichTimer: timer): real
    static pause(whichTimer: timer): void
    static resume(whichTimer: timer): void
    static expired(): timer
}

declare class TimerDialog {
    static create(t: timer): timerdialog
    static destroy(whichDialog: timerdialog): void
    static setTitle(whichDialog: timerdialog, title: string): void
    static setTitleColor(
        whichDialog: timerdialog,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setTimeColor(
        whichDialog: timerdialog,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static setSpeed(whichDialog: timerdialog, speedMultFactor: real): void
    static display(whichDialog: timerdialog, display: boolean): void
    static isDisplayed(whichDialog: timerdialog): boolean
    static setRealTimeRemaining(whichDialog: timerdialog, timeRemaining: real): void
}

declare class Trackable {
    static create(trackableModelPath: string, x: real, y: real, facing: real): trackable
    static triggered(): trackable
}

declare class Trigger {
    static create(): trigger
    static destroy(whichTrigger: trigger): void
    static reset(whichTrigger: trigger): void
    static enable(whichTrigger: trigger): void
    static disable(whichTrigger: trigger): void
    static isEnabled(whichTrigger: trigger): boolean
    static waitOnSleeps(whichTrigger: trigger, flag: boolean): void
    static isWaitOnSleeps(whichTrigger: trigger): boolean
    static triggered(): trigger
    static getEvalCount(whichTrigger: trigger): integer
    static getExecCount(whichTrigger: trigger): integer
    static addCondition(whichTrigger: trigger, condition: codebool): triggercondition
    static removeCondition(whichTrigger: trigger, whichCondition: triggercondition): void
    static clearConditions(whichTrigger: trigger): void
    static addAction(whichTrigger: trigger, actionFunc: code): triggeraction
    static removeAction(whichTrigger: trigger, whichAction: triggeraction): void
    static clearActions(whichTrigger: trigger): void
    static sleepAction(timeout: real): void
    static waitForSound(s: sound, offset: real): void
    static evaluate(whichTrigger: trigger): boolean
    static execute(whichTrigger: trigger): void
    static executeWait(whichTrigger: trigger): void
    static syncStart(): void
    static syncReady(): void
    static getEventId(): eventid
    static reigsterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event
    static registerDialogEvent(whichTrigger: trigger, whichDialog: dialog): event
    static registerGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event
    static registerTimerEvent(whichTrigger: trigger, timeout: real, periodic: boolean): event
    static registerTimerExpireEvent(whichTrigger: trigger, t: timer): event
    static registerVariableEvent(
        whichTrigger: trigger,
        varName: string,
        opcode: limitop,
        limitval: real
    ): event
    static registerCommandEvent(whichTrigger: trigger, whichAbility: integer, order: string): event
    static blzRegisterFrameEvent(
        whichTrigger: trigger,
        frame: framehandle,
        eventId: frameeventtype
    ): event
    static registerUpgradeCommandEvent(whichTrigger: trigger, whichUpgrade: number): event
    static registerPlayerAllianceChange(
        whichTrigger: trigger,
        whichPlayer: player,
        whichAlliance: alliancetype
    ): event
    static registerPlayerChatEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        chatMessageToDetect: string,
        exactMatchOnly: boolean
    ): event
    static blzRegisterPlayerKeyEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        key: oskeytype,
        metaKey: integer,
        keyDown: boolean
    ): event
    static registerPlayerStateEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        whichState: playerstate,
        opcode: limitop,
        limitval: real
    ): event
    static blzRegisterPlayerSyncEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        prefix: string,
        fromServer: boolean
    ): event
    static registerPlayerEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        whichPlayerEvent: playerevent
    ): event
    static registerUnitInRange(
        whichTrigger: trigger,
        whichUnit: unit,
        range: real,
        filter: codebool
    ): event
    static registerUnitStateEvent(
        whichTrigger: trigger,
        whichUnit: unit,
        whichState: unitstate,
        opcode: limitop,
        limitval: real
    ): event
    static registerPlayerUnitEvent(
        whichTrigger: trigger,
        whichPlayer: player,
        whichPlayerUnitEvent: playerunitevent,
        filter: codebool
    ): event
    static registerEnterRegion(whichTrigger: trigger, whichRegion: region, filter: codebool): event
    static registerLeaveRegion(whichTrigger: trigger, whichRegion: region, filter: codebool): event
    static registerTrackableHitEvent(whichTrigger: trigger, t: trackable): event
    static registerTrackableTrackEvent(whichTrigger: trigger, t: trackable): event
    static registerUnitInRange(
        whichTrigger: trigger,
        whichUnit: unit,
        range: real,
        filter: codebool
    ): event
    static registerUnitStateEvent(
        whichTrigger: trigger,
        whichUnit: unit,
        whichState: unitstate,
        opcode: limitop,
        limitval: real
    ): event
    static registerFilterUnitEvent(
        whichTrigger: trigger,
        whichUnit: unit,
        whichEvent: unitevent,
        filter: codebool
    ): event
    static registerDeathEvent(whichTrigger: trigger, whichWidget: widget): event
    static convertDialogEvent(i: integer): dialogevent
    static convertGameEvent(i: integer): gameevent
    static convertLimitOp(i: integer): limitop
    static convertPlayerEvent(i: integer): playerevent
    static convertPlayerUnitEvent(i: integer): playerunitevent
    static convertUnitEvent(i: integer): unitevent
    static convertWidgetEvent(i: integer): widgetevent
}

// declare function GetSaveBasicFilename(): string
// declare function GetTournamentScore(whichPlayer: player): integer
// declare function GetTournamentFinishNowRule(): integer
// declare function GetTournamentFinishNowPlayer(): player
// declare function GetTournamentScore(whichPlayer: player): integer
// declare function GetTournamentFinishSoonTimeRemaining(): real
// declare function GetEventPlayerChatString(): string
// declare function GetEventPlayerChatStringMatched(): string

// declare function GetEventDamage(): real
// declare function GetEventDamageSource(): unit
// declare function BlzSetEventDamage(damage: real): void
// declare function BlzGetEventDamageTarget(): unit
// declare function BlzGetEventAttackType(): attacktype
// declare function BlzGetEventDamageType(): damagetype
// declare function BlzGetEventWeaponType(): weapontype
// declare function BlzSetEventAttackType(attackType: attacktype): boolean
// declare function BlzSetEventDamageType(damageType: damagetype): boolean
// declare function BlzSetEventWeaponType(weaponType: weapontype): boolean
// declare function GetEventDetectingPlayer(): player
// declare const EVENT_GAME_VICTORY  : gameevent
// declare const EVENT_GAME_END_LEVEL: gameevent

// declare const EVENT_GAME_VARIABLE_LIMIT: gameevent
// declare const EVENT_GAME_STATE_LIMIT   : gameevent

// declare const EVENT_GAME_TIMER_EXPIRED: gameevent

// declare const EVENT_GAME_ENTER_REGION: gameevent
// declare const EVENT_GAME_LEAVE_REGION: gameevent

// declare const EVENT_GAME_TRACKABLE_HIT  : gameevent
// declare const EVENT_GAME_TRACKABLE_TRACK: gameevent

// declare const EVENT_GAME_SHOW_SKILL   : gameevent
// declare const EVENT_GAME_BUILD_SUBMENU: gameevent
// declare const EVENT_PLAYER_STATE_LIMIT     : playerevent
// declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent

// declare const EVENT_PLAYER_DEFEAT       : playerevent
// declare const EVENT_PLAYER_VICTORY      : playerevent
// declare const EVENT_PLAYER_LEAVE        : playerevent
// declare const EVENT_PLAYER_CHAT         : playerevent
// declare const EVENT_PLAYER_END_CINEMATIC: playerevent
// declare function ConvertPlayerEvent(i: integer): playerevent
// declare const EVENT_UNIT_DAMAGED: unitevent
// declare const EVENT_UNIT_DAMAGING: unitevent
// declare const EVENT_UNIT_DEATH     : unitevent
// declare const EVENT_UNIT_DECAY     : unitevent
// declare const EVENT_UNIT_DETECTED  : unitevent
// declare const EVENT_UNIT_HIDDEN    : unitevent
// declare const EVENT_UNIT_SELECTED  : unitevent
// declare const EVENT_UNIT_DESELECTED: unitevent

// declare const EVENT_UNIT_STATE_LIMIT: unitevent

// declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent
// declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent
// declare const EVENT_UNIT_ATTACKED       : unitevent
// declare const EVENT_UNIT_RESCUED        : unitevent

// declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent
// declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent

// declare const EVENT_UNIT_UPGRADE_START : unitevent
// declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent
// declare const EVENT_UNIT_UPGRADE_FINISH: unitevent

// declare const EVENT_UNIT_TRAIN_START : unitevent
// declare const EVENT_UNIT_TRAIN_CANCEL: unitevent
// declare const EVENT_UNIT_TRAIN_FINISH: unitevent

// declare const EVENT_UNIT_RESEARCH_START : unitevent
// declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent
// declare const EVENT_UNIT_RESEARCH_FINISH: unitevent

// declare const EVENT_UNIT_ISSUED_ORDER       : unitevent
// declare const EVENT_UNIT_ISSUED_POINT_ORDER : unitevent
// declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent

// declare const EVENT_UNIT_HERO_LEVEL: unitevent
// declare const EVENT_UNIT_HERO_SKILL: unitevent

// declare const EVENT_UNIT_HERO_REVIVABLE    : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_START : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent
// declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent

// declare const EVENT_UNIT_SUMMON: unitevent

// declare const EVENT_UNIT_DROP_ITEM  : unitevent
// declare const EVENT_UNIT_PICKUP_ITEM: unitevent
// declare const EVENT_UNIT_USE_ITEM   : unitevent

// declare const EVENT_UNIT_LOADED: unitevent
// declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent
// declare const EVENT_DIALOG_CLICK       : dialogevent
// declare const EVENT_GAME_LOADED                : gameevent
// declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent
// declare const EVENT_GAME_TOURNAMENT_FINISH_NOW : gameevent
// declare const EVENT_GAME_SAVE                  : gameevent
// declare const EVENT_GAME_CUSTOM_UI_FRAME       : gameevent
// declare const EVENT_PLAYER_ARROW_LEFT_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_LEFT_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_UP  : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_DOWN   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_UP     : playerevent
// declare const EVENT_PLAYER_MOUSE_DOWN      : playerevent
// declare const EVENT_PLAYER_MOUSE_UP        : playerevent
// declare const EVENT_PLAYER_MOUSE_MOVE      : playerevent
// declare const EVENT_PLAYER_SYNC_DATA       : playerevent
// declare const EVENT_PLAYER_KEY             : playerevent
// declare const EVENT_PLAYER_KEY_DOWN        : playerevent
// declare const EVENT_PLAYER_KEY_UP          : playerevent
// declare const EVENT_PLAYER_UNIT_SELL         : playerunitevent
// declare const EVENT_PLAYER_UNIT_CHANGE_OWNER : playerunitevent
// declare const EVENT_PLAYER_UNIT_SELL_ITEM    : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CAST   : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_EFFECT : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_FINISH : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent
// declare const EVENT_PLAYER_UNIT_PAWN_ITEM    : playerunitevent
// declare const EVENT_UNIT_SELL         : unitevent
// declare const EVENT_UNIT_CHANGE_OWNER : unitevent
// declare const EVENT_UNIT_SELL_ITEM    : unitevent
// declare const EVENT_UNIT_SPELL_CHANNEL: unitevent
// declare const EVENT_UNIT_SPELL_CAST   : unitevent
// declare const EVENT_UNIT_SPELL_EFFECT : unitevent
// declare const EVENT_UNIT_SPELL_FINISH : unitevent
// declare const EVENT_UNIT_SPELL_ENDCAST: unitevent
// declare const EVENT_UNIT_PAWN_ITEM    : unitevent
// declare const LESS_THAN            : limitop
// declare const LESS_THAN_OR_EQUAL   : limitop
// declare const EQUAL                : limitop
// declare const GREATER_THAN_OR_EQUAL: limitop
// declare const GREATER_THAN         : limitop
// declare const NOT_EQUAL            : limitop
// declare function ConvertLimitOp(i: integer): limitop

declare class TriggerEvent {
    static getSaveBasicFilename(): string
    static getTournamentScore(whichPlayer: player): integer
    static getTournamentFinishNowRule(): integer
    static getTournamentFinishNowPlayer(): player
    static getTournamentScore(whichPlayer: player): integer
    static getTournamentFinishSoonTimeRemaining(): real
    static getPlayerChatString(): string
    static getPlayerChatStringMatched(): string
    static blzGetPlayerKey(): oskeytype
    static blzGetPlayerMetaKey(): integer
    static blzGetPlayerIsKeyDown(): boolean
    static blzGetLocale(): string
    static blzGetPlayerMouseX(): real
    static blzGetPlayerMouseY(): real
    static blzGetPlayerMousePosition(): location
    static blzGetPlayerMouseButton(): mousebuttontype
    static getPlayerState(): playerstate
    static getAttacker(): unit
    static getChangingUnit(): unit
    static getChangingUnitPrevOwner(): player
    static getCancelledStructure(): unit
    static getConstructedStructure(): unit
    static getConstructingStructure(): unit
    static getDamage(): real
    static getDamageSource(): unit
    static blzSetDamage(damage: real): void
    static blzGetDamageTarget(): unit
    static blzGetAttackType(): attacktype
    static blzGetDamageType(): damagetype
    static blzGetWeaponType(): weapontype
    static blzSetAttackType(attackType: attacktype): boolean
    static blzSetDamageType(damageType: damagetype): boolean
    static blzSetWeaponType(weaponType: weapontype): boolean
    static getDyingUnit(): unit
    static getKillingUnit(): unit
    static getDecayingUnit(): unit
    static getDetectedUnit(): unit
    static getLevelingUnit(): unit
    static getRevivableUnit(): unit
    static getRevivingUnit(): unit
    static getLearningUnit(): unit
    static getLearnedSkill(): integer
    static getLearnedSkillLevel(): integer
    static getOrderedUnit(): unit
    static getIssuedOrderId(): integer
    static getOrderPointX(): real
    static getOrderPointY(): real
    static getOrderPointLoc(): location
    static getOrderTarget(): widget
    static getOrderTargetDestructable(): destructable
    static getOrderTargetItem(): item
    static getOrderTargetUnit(): unit
    static getManipulatingUnit(): unit
    static getManipulatedItem(): item
    static getTransportUnit(): unit
    static getLoadedUnit(): unit
    static getRescuer(): unit
    static getResearchingUnit(): unit
    static getResearched(): integer
    static getSellingUnit(): unit
    static getSoldUnit(): unit
    static getBuyingUnit(): unit
    static getSoldItem(): item
    static getSpellAbilityUnit(): unit
    static getSpellAbilityId(): integer
    static getSpellAbility(): ability
    static getSpellTargetLoc(): location
    static getSpellTargetX(): real
    static getSpellTargetY(): real
    static getSpellTargetDestructable(): destructable
    static getSpellTargetItem(): item
    static getSpellTargetUnit(): unit
    static getUnitState(): unitstate
    static getSummoningUnit(): unit
    static getSummonedUnit(): unit
    static getTargetUnit(): unit
    static getTrainedUnitType(): integer
    static getTrainedUnit(): unit
    static getDamage(): real
    static getDamageSource(): unit
    static blzSetDamage(damage: real): void
    static blzGetDamageTarget(): unit
    static blzGetAttackType(): attacktype
    static blzGetDamageType(): damagetype
    static blzGetWeaponType(): weapontype
    static blzSetAttackType(attackType: attacktype): boolean
    static blzSetDamageType(damageType: damagetype): boolean
    static blzSetWeaponType(weaponType: weapontype): boolean
    static getDetectingPlayer(): player
    static getId(): eventid
    static readonly GAME_VICTORY: gameevent
    static readonly GAME_END_LEVEL: gameevent

    static readonly GAME_VARIABLE_LIMIT: gameevent
    static readonly GAME_STATE_LIMIT: gameevent

    static readonly GAME_TIMER_EXPIRED: gameevent

    static readonly GAME_ENTER_REGION: gameevent
    static readonly GAME_LEAVE_REGION: gameevent

    static readonly GAME_TRACKABLE_HIT: gameevent
    static readonly GAME_TRACKABLE_TRACK: gameevent

    static readonly GAME_SHOW_SKILL: gameevent
    static readonly GAME_BUILD_SUBMENU: gameevent
    static readonly PLAYER_STATE_LIMIT: playerevent
    static readonly PLAYER_ALLIANCE_CHANGED: playerevent

    static readonly PLAYER_DEFEAT: playerevent
    static readonly PLAYER_VICTORY: playerevent
    static readonly PLAYER_LEAVE: playerevent
    static readonly PLAYER_CHAT: playerevent
    static readonly PLAYER_END_CINEMATIC: playerevent
    static readonly UNIT_DAMAGED: unitevent
    static readonly UNIT_DAMAGING: unitevent
    static readonly UNIT_DEATH: unitevent
    static readonly UNIT_DECAY: unitevent
    static readonly UNIT_DETECTED: unitevent
    static readonly UNIT_HIDDEN: unitevent
    static readonly UNIT_SELECTED: unitevent
    static readonly UNIT_DESELECTED: unitevent

    static readonly UNIT_STATE_LIMIT: unitevent

    static readonly UNIT_ACQUIRED_TARGET: unitevent
    static readonly UNIT_TARGET_IN_RANGE: unitevent
    static readonly UNIT_ATTACKED: unitevent
    static readonly UNIT_RESCUED: unitevent

    static readonly UNIT_CONSTRUCT_CANCEL: unitevent
    static readonly UNIT_CONSTRUCT_FINISH: unitevent

    static readonly UNIT_UPGRADE_START: unitevent
    static readonly UNIT_UPGRADE_CANCEL: unitevent
    static readonly UNIT_UPGRADE_FINISH: unitevent

    static readonly UNIT_TRAIN_START: unitevent
    static readonly UNIT_TRAIN_CANCEL: unitevent
    static readonly UNIT_TRAIN_FINISH: unitevent

    static readonly UNIT_RESEARCH_START: unitevent
    static readonly UNIT_RESEARCH_CANCEL: unitevent
    static readonly UNIT_RESEARCH_FINISH: unitevent

    static readonly UNIT_ISSUED_ORDER: unitevent
    static readonly UNIT_ISSUED_POINT_ORDER: unitevent
    static readonly UNIT_ISSUED_TARGET_ORDER: unitevent

    static readonly UNIT_HERO_LEVEL: unitevent
    static readonly UNIT_HERO_SKILL: unitevent

    static readonly UNIT_HERO_REVIVABLE: unitevent
    static readonly UNIT_HERO_REVIVE_START: unitevent
    static readonly UNIT_HERO_REVIVE_CANCEL: unitevent
    static readonly UNIT_HERO_REVIVE_FINISH: unitevent

    static readonly UNIT_SUMMON: unitevent

    static readonly UNIT_DROP_ITEM: unitevent
    static readonly UNIT_PICKUP_ITEM: unitevent
    static readonly UNIT_USE_ITEM: unitevent

    static readonly UNIT_LOADED: unitevent
    static readonly DIALOG_BUTTON_CLICK: dialogevent
    static readonly DIALOG_CLICK: dialogevent
    static readonly GAME_LOADED: gameevent
    static readonly GAME_TOURNAMENT_FINISH_SOON: gameevent
    static readonly GAME_TOURNAMENT_FINISH_NOW: gameevent
    static readonly GAME_SAVE: gameevent
    static readonly GAME_CUSTOM_UI_FRAME: gameevent

    static readonly PLAYER_ARROW_LEFT_DOWN: playerevent
    static readonly PLAYER_ARROW_LEFT_UP: playerevent
    static readonly PLAYER_ARROW_RIGHT_DOWN: playerevent
    static readonly PLAYER_ARROW_RIGHT_UP: playerevent
    static readonly PLAYER_ARROW_DOWN_DOWN: playerevent
    static readonly PLAYER_ARROW_DOWN_UP: playerevent
    static readonly PLAYER_ARROW_UP_DOWN: playerevent
    static readonly PLAYER_ARROW_UP_UP: playerevent
    static readonly PLAYER_MOUSE_DOWN: playerevent
    static readonly PLAYER_MOUSE_UP: playerevent
    static readonly PLAYER_MOUSE_MOVE: playerevent
    static readonly PLAYER_SYNC_DATA: playerevent
    static readonly PLAYER_KEY: playerevent
    static readonly PLAYER_KEY_DOWN: playerevent
    static readonly PLAYER_KEY_UP: playerevent
    static readonly PLAYER_UNIT_SELL: playerunitevent
    static readonly PLAYER_UNIT_CHANGE_OWNER: playerunitevent
    static readonly PLAYER_UNIT_SELL_ITEM: playerunitevent
    static readonly PLAYER_UNIT_SPELL_CHANNEL: playerunitevent
    static readonly PLAYER_UNIT_SPELL_CAST: playerunitevent
    static readonly PLAYER_UNIT_SPELL_EFFECT: playerunitevent
    static readonly PLAYER_UNIT_SPELL_FINISH: playerunitevent
    static readonly PLAYER_UNIT_SPELL_ENDCAST: playerunitevent
    static readonly PLAYER_UNIT_PAWN_ITEM: playerunitevent
    static readonly UNIT_SELL         : unitevent
    static readonly UNIT_CHANGE_OWNER : unitevent
    static readonly UNIT_SELL_ITEM    : unitevent
    static readonly UNIT_SPELL_CHANNEL: unitevent
    static readonly UNIT_SPELL_CAST   : unitevent
    static readonly UNIT_SPELL_EFFECT : unitevent
    static readonly UNIT_SPELL_FINISH : unitevent
    static readonly UNIT_SPELL_ENDCAST: unitevent
    static readonly UNIT_PAWN_ITEM    : unitevent
    static readonly LIMIT_LESS_THAN            : limitop
    static readonly LIMIT_LESS_THAN_OR_EQUAL   : limitop
    static readonly LIMIT_EQUAL                : limitop
    static readonly LIMIT_GREATER_THAN_OR_EQUAL: limitop
    static readonly LIMIT_GREATER_THAN         : limitop
    static readonly LIMIT_NOT_EQUAL            : limitop
    static convertLimitOp(i: integer): limitop

}

declare class Doodad {
    static setAnimation(
        x: real,
        y: real,
        radius: real,
        doodadID: integer,
        nearestOnly: boolean,
        animName: string,
        animRandom: boolean
    ): void
    static setAnimationRect(r: rect, doodadID: integer, animName: string, animRandom: boolean): void
}

declare class Ubersplat {
    static create(
        x: real,
        y: real,
        name: string,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer,
        forcePaused: boolean,
        noBirthTime: boolean
    ): ubersplat
    static destroy(whichSplat: ubersplat): void
    static reset(whichSplat: ubersplat): void
    static finish(whichSplat: ubersplat): void
    static show(whichSplat: ubersplat, flag: boolean): void
    static setRender(whichSplat: ubersplat, flag: boolean): void
    static setRenderAlways(whichSplat: ubersplat, flag: boolean): void
}

// declare const ATTACK_TYPE_NORMAL: attacktype
// declare const ATTACK_TYPE_MELEE : attacktype
// declare const ATTACK_TYPE_PIERCE: attacktype
// declare const ATTACK_TYPE_SIEGE : attacktype
// declare const ATTACK_TYPE_MAGIC : attacktype
// declare const ATTACK_TYPE_CHAOS : attacktype
// declare const ATTACK_TYPE_HERO  : attacktype
// declare const ANIM_TYPE_BIRTH    : animtype
// declare const ANIM_TYPE_DEATH    : animtype
// declare const ANIM_TYPE_DECAY    : animtype
// declare const ANIM_TYPE_DISSIPATE: animtype
// declare const ANIM_TYPE_STAND    : animtype
// declare const ANIM_TYPE_WALK     : animtype
// declare const ANIM_TYPE_ATTACK   : animtype
// declare const ANIM_TYPE_MORPH    : animtype
// declare const ANIM_TYPE_SLEEP    : animtype
// declare const ANIM_TYPE_SPELL    : animtype
// declare const ANIM_TYPE_PORTRAIT  : animtype
// declare function ConvertAnimType(i: integer): animtype
// declare const SUBANIM_TYPE_ROOTED: subanimtype
// declare const SUBANIM_TYPE_ALTERNATE_EX: subanimtype
// declare const SUBANIM_TYPE_LOOPING: subanimtype
// declare const SUBANIM_TYPE_SLAM: subanimtype
// declare const SUBANIM_TYPE_THROW: subanimtype
// declare const SUBANIM_TYPE_SPIKED: subanimtype
// declare const SUBANIM_TYPE_FAST: subanimtype
// declare const SUBANIM_TYPE_SPIN: subanimtype
// declare const SUBANIM_TYPE_READY: subanimtype
// declare const SUBANIM_TYPE_CHANNEL: subanimtype
// declare const SUBANIM_TYPE_DEFEND: subanimtype
// declare const SUBANIM_TYPE_VICTORY: subanimtype
// declare const SUBANIM_TYPE_TURN: subanimtype
// declare const SUBANIM_TYPE_LEFT: subanimtype
// declare const SUBANIM_TYPE_RIGHT: subanimtype
// declare const SUBANIM_TYPE_FIRE: subanimtype
// declare const SUBANIM_TYPE_FLESH: subanimtype
// declare const SUBANIM_TYPE_HIT: subanimtype
// declare const SUBANIM_TYPE_WOUNDED: subanimtype
// declare const SUBANIM_TYPE_LIGHT: subanimtype
// declare const SUBANIM_TYPE_MODERATE: subanimtype
// declare const SUBANIM_TYPE_SEVERE: subanimtype
// declare const SUBANIM_TYPE_CRITICAL: subanimtype
// declare const SUBANIM_TYPE_COMPLETE: subanimtype
// declare const SUBANIM_TYPE_GOLD: subanimtype
// declare const SUBANIM_TYPE_LUMBER: subanimtype
// declare const SUBANIM_TYPE_WORK: subanimtype
// declare const SUBANIM_TYPE_TALK: subanimtype
// declare const SUBANIM_TYPE_FIRST: subanimtype
// declare const SUBANIM_TYPE_SECOND: subanimtype
// declare const SUBANIM_TYPE_THIRD: subanimtype
// declare const SUBANIM_TYPE_FOURTH: subanimtype
// declare const SUBANIM_TYPE_FIFTH: subanimtype
// declare const SUBANIM_TYPE_ONE: subanimtype
// declare const SUBANIM_TYPE_TWO: subanimtype
// declare const SUBANIM_TYPE_THREE: subanimtype
// declare const SUBANIM_TYPE_FOUR: subanimtype
// declare const SUBANIM_TYPE_FIVE: subanimtype
// declare const SUBANIM_TYPE_SMALL: subanimtype
// declare const SUBANIM_TYPE_MEDIUM: subanimtype
// declare const SUBANIM_TYPE_LARGE: subanimtype
// declare const SUBANIM_TYPE_UPGRADE: subanimtype
// declare const SUBANIM_TYPE_DRAIN: subanimtype
// declare const SUBANIM_TYPE_FILL: subanimtype
// declare const SUBANIM_TYPE_CHAINLIGHTNI: subanimtype
// declare const SUBANIM_TYPE_EATTREE: subanimtype
// declare const SUBANIM_TYPE_PUKE: subanimtype
// declare const SUBANIM_TYPE_FLAIL: subanimtype
// declare const SUBANIM_TYPE_OFF: subanimtype
// declare const SUBANIM_TYPE_SWIM: subanimtype
// declare const SUBANIM_TYPE_ENTANGLE: subanimtype
// declare const SUBANIM_TYPE_BERSERK: subanimtype
// declare function ConvertSubAnimType(i: integer): subanimtype
// declare const PATHING_FLAG_UNWALKABLE  : pathingflag
// declare const PATHING_FLAG_UNFLYABLE   : pathingflag
// declare const PATHING_FLAG_UNBUILDABLE : pathingflag
// declare const PATHING_FLAG_UNPEONHARVEST: pathingflag
// declare const PATHING_FLAG_BLIGHTED     : pathingflag
// declare const PATHING_FLAG_UNFLOATABLE  : pathingflag
// declare const PATHING_FLAG_UNAMPHIBIOUS  : pathingflag
// declare const PATHING_FLAG_UNITEMPLACABLE: pathingflag
// declare function ConvertPathingFlag(i: integer): pathingflag
// declare const UNIT_STATE_LIFE    : unitstate
// declare const UNIT_STATE_MAX_LIFE: unitstate
// declare const UNIT_STATE_MANA    : unitstate
// declare const UNIT_STATE_MAX_MANA: unitstate
// declare function ConvertUnitState(i: integer): unitstate
// declare const MOVE_TYPE_UNKNOWN    : movetype
// declare const MOVE_TYPE_FOOT       : movetype
// declare const MOVE_TYPE_FLY        : movetype
// declare const MOVE_TYPE_HORSE      : movetype
// declare const MOVE_TYPE_HOVER      : movetype
// declare const MOVE_TYPE_FLOAT      :  movetype
// declare const MOVE_TYPE_AMPHIBIOUS :  movetype
// declare const MOVE_TYPE_UNBUILDABLE:  movetype
// declare function ConvertMoveType(i: integer): movetype
// declare const TARGET_FLAG_NONE      : targetflag
// declare const TARGET_FLAG_GROUND    : targetflag
// declare const TARGET_FLAG_AIR       : targetflag
// declare const TARGET_FLAG_STRUCTURE : targetflag
// declare const TARGET_FLAG_WARD      :  targetflag
// declare const TARGET_FLAG_ITEM      :  targetflag
// declare const TARGET_FLAG_TREE      :  targetflag
// declare const TARGET_FLAG_WALL      : targetflag
// declare const TARGET_FLAG_DEBRIS    : targetflag
// declare const TARGET_FLAG_DECORATION: targetflag
// declare const TARGET_FLAG_BRIDGE    : targetflag
// declare function ConvertTargetFlag(i: integer): targetflag
// declare const DEFENSE_TYPE_LIGHT : defensetype
// declare const DEFENSE_TYPE_MEDIUM: defensetype
// declare const DEFENSE_TYPE_LARGE : defensetype
// declare const DEFENSE_TYPE_FORT  : defensetype
// declare const DEFENSE_TYPE_NORMAL: defensetype
// declare const DEFENSE_TYPE_HERO  : defensetype
// declare const DEFENSE_TYPE_DIVINE: defensetype
// declare const DEFENSE_TYPE_NONE  : defensetype
// declare function ConvertDefenseType(i: integer): defensetype
// declare const HERO_ATTRIBUTE_STR: heroattribute
// declare const HERO_ATTRIBUTE_INT: heroattribute
// declare const HERO_ATTRIBUTE_AGI: heroattribute
// declare function ConvertHeroAttribute(i: integer): heroattribute
// declare const ARMOR_TYPE_WHOKNOW: armortype
// declare const ARMOR_TYPE_FLESH  : armortype
// declare const ARMOR_TYPE_METAL  : armortype
// declare const ARMOR_TYPE_WOOD   : armortype
// declare const ARMOR_TYPE_ETHREAL: armortype
// declare const ARMOR_TYPE_STONE  : armortype
// declare function ConvertArmorType(i: integer): armortype
// declare const REGENERATION_TYPE_NONE  : regentype
// declare const REGENERATION_TYPE_ALWAYS: regentype
// declare const REGENERATION_TYPE_BLIGHT: regentype
// declare const REGENERATION_TYPE_DAY   : regentype
// declare const REGENERATION_TYPE_NIGHT : regentype
// declare function ConvertRegenType(i: integer): regentype
// declare const UNIT_TYPE_HERO     : unittype
// declare const UNIT_TYPE_DEAD     : unittype
// declare const UNIT_TYPE_STRUCTURE: unittype

// declare const UNIT_TYPE_FLYING: unittype
// declare const UNIT_TYPE_GROUND: unittype

// declare const UNIT_TYPE_ATTACKS_FLYING: unittype
// declare const UNIT_TYPE_ATTACKS_GROUND: unittype

// declare const UNIT_TYPE_MELEE_ATTACKER : unittype
// declare const UNIT_TYPE_RANGED_ATTACKER: unittype

// declare const UNIT_TYPE_GIANT   : unittype
// declare const UNIT_TYPE_SUMMONED:  unittype
// declare const UNIT_TYPE_STUNNED :  unittype
// declare const UNIT_TYPE_PLAGUED :  unittype
// declare const UNIT_TYPE_SNARED  :  unittype

// declare const UNIT_TYPE_UNDEAD    : unittype
// declare const UNIT_TYPE_MECHANICAL: unittype
// declare const UNIT_TYPE_PEON      : unittype
// declare const UNIT_TYPE_SAPPER    : unittype
// declare const UNIT_TYPE_TOWNHALL  : unittype
// declare const UNIT_TYPE_ANCIENT   : unittype

// declare const UNIT_TYPE_TAUREN      : unittype
// declare const UNIT_TYPE_POISONED    : unittype
// declare const UNIT_TYPE_POLYMORPHED : unittype
// declare const UNIT_TYPE_SLEEPING    : unittype
// declare const UNIT_TYPE_RESISTANT   : unittype
// declare const UNIT_TYPE_ETHEREAL    : unittype
// declare const UNIT_TYPE_MAGIC_IMMUNE: unittype
// declare function ConvertUnitType(i: integer): unittype
// declare const EVENT_UNIT_DAMAGED: unitevent
// declare const EVENT_UNIT_DAMAGING: unitevent
// declare const EVENT_UNIT_DEATH     : unitevent
// declare const EVENT_UNIT_DECAY     : unitevent
// declare const EVENT_UNIT_DETECTED  : unitevent
// declare const EVENT_UNIT_HIDDEN    : unitevent
// declare const EVENT_UNIT_SELECTED  : unitevent
// declare const EVENT_UNIT_DESELECTED: unitevent

// declare const EVENT_UNIT_STATE_LIMIT: unitevent

// declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent
// declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent
// declare const EVENT_UNIT_ATTACKED       : unitevent
// declare const EVENT_UNIT_RESCUED        : unitevent

// declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent
// declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent

// declare const EVENT_UNIT_UPGRADE_START : unitevent
// declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent
// declare const EVENT_UNIT_UPGRADE_FINISH: unitevent

// declare const EVENT_UNIT_TRAIN_START : unitevent
// declare const EVENT_UNIT_TRAIN_CANCEL: unitevent
// declare const EVENT_UNIT_TRAIN_FINISH: unitevent

// declare const EVENT_UNIT_RESEARCH_START : unitevent
// declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent
// declare const EVENT_UNIT_RESEARCH_FINISH: unitevent

// declare const EVENT_UNIT_ISSUED_ORDER       : unitevent
// declare const EVENT_UNIT_ISSUED_POINT_ORDER : unitevent
// declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent

// declare const EVENT_UNIT_HERO_LEVEL: unitevent
// declare const EVENT_UNIT_HERO_SKILL: unitevent

// declare const EVENT_UNIT_HERO_REVIVABLE    : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_START : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent
// declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent

// declare const EVENT_UNIT_SUMMON: unitevent

// declare const EVENT_UNIT_DROP_ITEM  : unitevent
// declare const EVENT_UNIT_PICKUP_ITEM: unitevent
// declare const EVENT_UNIT_USE_ITEM   : unitevent

// declare const EVENT_UNIT_LOADED: unitevent
// declare const EVENT_UNIT_SELL         : unitevent
// declare const EVENT_UNIT_CHANGE_OWNER : unitevent
// declare const EVENT_UNIT_SELL_ITEM    : unitevent
// declare const EVENT_UNIT_SPELL_CHANNEL: unitevent
// declare const EVENT_UNIT_SPELL_CAST   : unitevent
// declare const EVENT_UNIT_SPELL_EFFECT : unitevent
// declare const EVENT_UNIT_SPELL_FINISH : unitevent
// declare const EVENT_UNIT_SPELL_ENDCAST: unitevent
// declare const EVENT_UNIT_PAWN_ITEM    : unitevent
// declare function ConvertUnitEvent(i: integer): unitevent

declare class Unit {
    static create(id: player, unitid: integer, x: real, y: real, face: real): unit
    static createByName(whichPlayer: player, unitname: string, x: real, y: real, face: real): unit
    static createAtLoc(id: player, unitid: integer, whichLocation: location, face: real): unit
    static createAtLocByName(
        id: player,
        unitname: string,
        whichLocation: location,
        face: real
    ): unit
    static createCorpse(whichPlayer: player, unitid: integer, x: real, y: real, face: real): unit
    static kill(whichUnit: unit): void
    static remove(whichUnit: unit): void
    static show(whichUnit: unit, show: boolean): void
    static setState(whichUnit: unit, whichUnitState: unitstate, newVal: real): void
    static setX(whichUnit: unit, newX: real): void
    static setY(whichUnit: unit, newY: real): void
    static setPosition(whichUnit: unit, newX: real, newY: real): void
    static setPositionLoc(whichUnit: unit, whichLocation: location): void
    static setFacing(whichUnit: unit, facingAngle: real): void
    static setFacingTimed(whichUnit: unit, facingAngle: real, duration: real): void
    static setMoveSpeed(whichUnit: unit, newSpeed: real): void
    static setFlyHeight(whichUnit: unit, newHeight: real, rate: real): void
    static setTurnSpeed(whichUnit: unit, newTurnSpeed: real): void
    static setPropWindow(whichUnit: unit, newPropWindowAngle: real): void
    static setAcquireRange(whichUnit: unit, newAcquireRange: real): void
    static setCreepGuard(whichUnit: unit, creepGuard: boolean): void
    static getAcquireRange(whichUnit: unit): real
    static getTurnSpeed(whichUnit: unit): real
    static getPropWindow(whichUnit: unit): real
    static getFlyHeight(whichUnit: unit): real
    static getDefaultAcquireRange(whichUnit: unit): real
    static getDefaultTurnSpeed(whichUnit: unit): real
    static getDefaultPropWindow(whichUnit: unit): real
    static getDefaultFlyHeight(whichUnit: unit): real
    static setOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void
    static setColor(whichUnit: unit, whichColor: playercolor): void
    static setScale(whichUnit: unit, scaleX: real, scaleY: real, scaleZ: real): void
    static setTimeScale(whichUnit: unit, timeScale: real): void
    static setBlendTime(whichUnit: unit, blendTime: real): void
    static setVertexColor(
        whichUnit: unit,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static queueAnimation(whichUnit: unit, whichAnimation: string): void
    static setAnimation(whichUnit: unit, whichAnimation: string): void
    static setAnimationByIndex(whichUnit: unit, whichAnimation: integer): void
    static setAnimationWithRarity(
        whichUnit: unit,
        whichAnimation: string,
        rarity: raritycontrol
    ): void
    static addAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void
    static setLookAt(
        whichUnit: unit,
        whichBone: string,
        lookAtTarget: unit,
        offsetX: real,
        offsetY: real,
        offsetZ: real
    ): void
    static resetLookAt(whichUnit: unit): void
    static setRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void
    static setRescueRange(whichUnit: unit, range: real): void
    static setHeroStr(whichHero: unit, newStr: integer, permanent: boolean): void
    static setHeroAgi(whichHero: unit, newAgi: integer, permanent: boolean): void
    static setHeroInt(whichHero: unit, newInt: integer, permanent: boolean): void
    static getHeroStr(whichHero: unit, includeBonuses: boolean): integer
    static getHeroAgi(whichHero: unit, includeBonuses: boolean): integer
    static getHeroInt(whichHero: unit, includeBonuses: boolean): integer
    static stripHeroLevel(whichHero: unit, howManyLevels: integer): boolean
    static getHeroXP(whichHero: unit): integer
    static setHeroXP(whichHero: unit, newXpVal: integer, showEyeCandy: boolean): void
    static getHeroSkillPoints(whichHero: unit): integer
    static modifySkillPoints(whichHero: unit, skillPointDelta: integer): boolean
    static addHeroXP(whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): void
    static setHeroLevel(whichHero: unit, level: integer, showEyeCandy: boolean): void
    static getHeroLevel(whichHero: unit): integer
    static getLevel(whichUnit: unit): integer
    static getHeroProperName(whichHero: unit): string
    static suspendHeroXP(whichHero: unit, flag: boolean): void
    static isSuspendedXP(whichHero: unit): boolean
    static selectHeroSkill(whichHero: unit, abilcode: integer): void
    static getAbilityLevel(whichUnit: unit, abilcode: integer): integer
    static decAbilityLevel(whichUnit: unit, abilcode: integer): integer
    static incAbilityLevel(whichUnit: unit, abilcode: integer): integer
    static setAbilityLevel(whichUnit: unit, abilcode: integer, level: integer): integer
    static reviveHero(whichHero: unit, x: real, y: real, doEyecandy: boolean): boolean
    static reviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean
    static setExploded(whichUnit: unit, exploded: boolean): void
    static setInvulnerable(whichUnit: unit, flag: boolean): void
    static pause(whichUnit: unit, flag: boolean): void
    static isPaused(whichHero: unit): boolean
    static setPathing(whichUnit: unit, flag: boolean): void
    static select(whichUnit: unit, flag: boolean): void
    static getPointValue(whichUnit: unit): integer
    static addItem(whichUnit: unit, whichItem: item): boolean
    static addItemById(whichUnit: unit, itemId: integer): item
    static addItemToSlotById(whichUnit: unit, itemId: integer, itemSlot: integer): boolean
    static removeItem(whichUnit: unit, whichItem: item): void
    static removeItemFromSlot(whichUnit: unit, itemSlot: integer): item
    static hasItem(whichUnit: unit, whichItem: item): boolean
    static getItemInSlot(whichUnit: unit, itemSlot: integer): item
    static getInventorySize(whichUnit: unit): integer
    static dropItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean
    static dropItemSlot(whichUnit: unit, whichItem: item, slot: integer): boolean
    static dropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
    static useItem(whichUnit: unit, whichItem: item): boolean
    static useItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean
    static useItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean
    static getX(whichUnit: unit): real
    static getY(whichUnit: unit): real
    static getLoc(whichUnit: unit): location
    static getFacing(whichUnit: unit): real
    static getMoveSpeed(whichUnit: unit): real
    static getDefaultMoveSpeed(whichUnit: unit): real
    static getState(whichUnit: unit, whichUnitState: unitstate): real
    static getOwner(whichUnit: unit): player
    static getTypeId(whichUnit: unit): integer
    static getRace(whichUnit: unit): race
    static getName(whichUnit: unit): string
    static getFoodUsed(whichUnit: unit): integer
    static getFoodMade(whichUnit: unit): integer
    static setUseFood(whichUnit: unit, useFood: boolean): void
    static getRallyPoint(whichUnit: unit): location
    static getRallyUnit(whichUnit: unit): unit
    static getRallyDestructable(whichUnit: unit): destructable
    static isInGroup(whichUnit: unit, whichGroup: group): boolean
    static isInForce(whichUnit: unit, whichForce: force): boolean
    static isOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean
    static isAlly(whichUnit: unit, whichPlayer: player): boolean
    static isEnemy(whichUnit: unit, whichPlayer: player): boolean
    static isVisible(whichUnit: unit, whichPlayer: player): boolean
    static isDetected(whichUnit: unit, whichPlayer: player): boolean
    static isInvisible(whichUnit: unit, whichPlayer: player): boolean
    static isFogged(whichUnit: unit, whichPlayer: player): boolean
    static isMasked(whichUnit: unit, whichPlayer: player): boolean
    static isSelected(whichUnit: unit, whichPlayer: player): boolean
    static isRace(whichUnit: unit, whichRace: race): boolean
    static isType(whichUnit: unit, whichUnitType: unittype): boolean
    static is(whichUnit: unit, whichSpecifiedUnit: unit): boolean
    static isInRange(whichUnit: unit, otherUnit: unit, distance: real): boolean
    static isInRangeXY(whichUnit: unit, x: real, y: real, distance: real): boolean
    static isInRangeLoc(whichUnit: unit, whichLocation: location, distance: real): boolean
    static isHidden(whichUnit: unit): boolean
    static isIllusion(whichUnit: unit): boolean
    static isInTransport(whichUnit: unit, whichTransport: unit): boolean
    static isLoaded(whichUnit: unit): boolean
    static shareVision(whichUnit: unit, whichPlayer: player, share: boolean): void
    static suspendDecay(whichUnit: unit, suspend: boolean): void
    static addType(whichUnit: unit, whichUnitType: unittype): boolean
    static removeType(whichUnit: unit, whichUnitType: unittype): boolean
    static addAbility(whichUnit: unit, abilityId: integer): boolean
    static removeAbility(whichUnit: unit, abilityId: integer): boolean
    static makeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: integer): boolean
    static removeBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void
    static removeBuffsEx(
        whichUnit: unit,
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ): void
    static hasBuffsEx(
        whichUnit: unit,
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ): boolean
    static countBuffsEx(
        whichUnit: unit,
        removePositive: boolean,
        removeNegative: boolean,
        magic: boolean,
        physical: boolean,
        timedLife: boolean,
        aura: boolean,
        autoDispel: boolean
    ): number
    static addSleep(whichUnit: unit, add: boolean): void
    static canSleep(whichUnit: unit): boolean
    static addSleepPerm(whichUnit: unit, add: boolean): void
    static canSleepPerm(whichUnit: unit): boolean
    static isSleeping(whichUnit: unit): boolean
    static wakeUp(whichUnit: unit): void
    static applyTimedLife(whichUnit: unit, buffId: integer, duration: real): void
    static ignoreAlarm(whichUnit: unit, flag: boolean): boolean
    static ignoreAlarmToggled(whichUnit: unit): boolean
    static resetCooldown(whichUnit: unit): void
    static setConstructionProgress(whichUnit: unit, constructionPercentage: integer): void
    static setUpgradeProgress(whichUnit: unit, upgradePercentage: integer): void
    static pauseTimedLife(whichUnit: unit, flag: boolean): void
    static setUsesAltIcon(whichUnit: unit, flag: boolean): void
    static damagePoint(
        whichUnit: unit,
        delay: real,
        radius: real,
        x: real,
        y: real,
        amount: real,
        attack: boolean,
        ranged: boolean,
        attackType: attacktype,
        damageType: damagetype,
        weaponType: weapontype
    ): boolean
    static damageTarget(
        whichUnit: unit,
        target: widget,
        amount: real,
        attack: boolean,
        ranged: boolean,
        attackType: attacktype,
        damageType: damagetype,
        weaponType: weapontype
    ): boolean
    static issueImmediateOrder(whichUnit: unit, order: string): boolean
    static issueImmediateOrderById(whichUnit: unit, order: integer): boolean
    static issuePointOrder(whichUnit: unit, order: string, x: real, y: real): boolean
    static issuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean
    static issuePointOrderById(whichUnit: unit, order: integer, x: real, y: real): boolean
    static issuePointOrderByIdLoc(whichUnit: unit, order: integer, whichLocation: location): boolean
    static issueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean
    static issueTargetOrderById(whichUnit: unit, order: integer, targetWidget: widget): boolean
    static issueInstantPointOrder(
        whichUnit: unit,
        order: string,
        x: real,
        y: real,
        instantTargetWidget: widget
    ): boolean
    static issueInstantPointOrderById(
        whichUnit: unit,
        order: integer,
        x: real,
        y: real,
        instantTargetWidget: widget
    ): boolean
    static issueInstantTargetOrder(
        whichUnit: unit,
        order: string,
        targetWidget: widget,
        instantTargetWidget: widget
    ): boolean
    static issueInstantTargetOrderById(
        whichUnit: unit,
        order: number,
        targetWidget: widget,
        instantTargetWidget: widget
    ): boolean
    static issueBuildOrder(whichPeon: unit, unitToBuild: string, x: real, y: real): boolean
    static issueBuildOrderById(whichPeon: unit, unitId: integer, x: real, y: real): boolean
    static issueNeutralImmediateOrder(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitToBuild: string
    ): boolean
    static issueNeutralImmediateOrderById(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitId: integer
    ): boolean
    static issueNeutralPointOrder(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitToBuild: string,
        x: real,
        y: real
    ): boolean
    static issueNeutralPointOrderById(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitId: integer,
        x: real,
        y: real
    ): boolean
    static issueNeutralTargetOrder(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitToBuild: string,
        target: widget
    ): boolean
    static issueNeutralTargetOrderById(
        forWhichPlayer: player,
        neutralStructure: unit,
        unitId: integer,
        target: widget
    ): boolean
    static getCurrentOrder(whichUnit: unit): integer
    static setResourceAmount(whichUnit: unit, amount: integer): void
    static addResourceAmount(whichUnit: unit, amount: integer): void
    static getResourceAmount(whichUnit: unit): integer
    static waygateGetDestinationX(waygate: unit): real
    static waygateGetDestinationY(waygate: unit): real
    static waygateSetDestination(waygate: unit, x: real, y: real): void
    static waygateActivate(waygate: unit, activate: boolean): void
    static waygateIsActive(waygate: unit): boolean
    static addItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
    static addItemToStock(
        whichUnit: unit,
        itemId: integer,
        currentStock: integer,
        stockMax: integer
    ): void
    static addToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
    static addToStock(
        whichUnit: unit,
        unitId: integer,
        currentStock: integer,
        stockMax: integer
    ): void
    static removeItemFromAllStock(itemId: integer): void
    static removeItemFromStock(whichUnit: unit, itemId: integer): void
    static removeFromAllStock(unitId: integer): void
    static removeFromStock(whichUnit: unit, unitId: integer): void
    static setAllItemTypeSlots(slots: integer): void
    static setAllTypeSlots(slots: integer): void
    static setItemTypeSlots(whichUnit: unit, slots: integer): void
    static setTypeSlots(whichUnit: unit, slots: integer): void
    static getUserData(whichUnit: unit): integer
    static setUserData(whichUnit: unit, data: integer): void
    static blzGetMaxHP(whichUnit: unit): integer
    static blzSetMaxHP(whichUnit: unit, hp: integer): void
    static blzGetMaxMana(whichUnit: unit): integer
    static blzSetMaxMana(whichUnit: unit, mana: integer): void
    static blzSetName(whichUnit: unit, name: string): void
    static BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void
    static blzGetBaseDamage(whichUnit: unit, weaponIndex: integer): integer
    static blzSetBaseDamage(whichUnit: unit, baseDamage: integer, weaponIndex: integer): void
    static blzGetDiceNumber(whichUnit: unit, weaponIndex: integer): integer
    static blzSetDiceNumber(whichUnit: unit, diceNumber: integer, weaponIndex: integer): void
    static blzGetDiceSides(whichUnit: unit, weaponIndex: integer): integer
    static blzSetDiceSides(whichUnit: unit, diceSides: integer, weaponIndex: integer): void
    static blzGetAttackCooldown(whichUnit: unit, weaponIndex: integer): real
    static blzSetAttackCooldown(whichUnit: unit, cooldown: real, weaponIndex: integer): void
    static blzGetArmor(whichUnit: unit): real
    static blzSetArmor(whichUnit: unit, armorAmount: real): void
    static blzHideAbility(whichUnit: unit, abilId: integer, flag: boolean): void
    static blzDisableAbility(whichUnit: unit, abilId: integer, flag: boolean, hideUI: boolean): void
    static blzCancelTimedLife(whichUnit: unit): void
    static blzIsSelectable(whichUnit: unit): boolean
    static blzIsInvulnerable(whichUnit: unit): boolean
    static blzInterruptAttack(whichUnit: unit): void
    static blzGetCollisionSize(whichUnit: unit): real
    static blzSetAbilityCooldown(
        whichUnit: unit,
        abilId: integer,
        level: integer,
        cooldown: real
    ): void
    static blzGetAbilityCooldown(whichUnit: unit, abilId: integer, level: integer): real
    static blzGetAbilityCooldownRemaining(whichUnit: unit, abilId: integer): real
    static blzEndAbilityCooldown(whichUnit: unit, abilCode: integer): void
    static blzGetAbilityManaCost(whichUnit: unit, abilId: integer, level: integer): integer
    static blzSetAbilityManaCost(
        whichUnit: unit,
        abilId: integer,
        level: integer,
        manaCost: integer
    ): void
    static blzGetLocalZ(whichUnit: unit): real
    static blzGetZ(whichUnit: unit): real
    static blzGetAbility(whichUnit: unit, abilId: integer): ability
    static blzGetAbilityByIndex(whichUnit: unit, index: integer): ability
    static blzPauseEx(whichUnit: unit, flag: boolean): void
    static blzGetBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean
    static blzGetIntegerField(whichUnit: unit, whichField: unitintegerfield): integer
    static blzGetRealField(whichUnit: unit, whichField: unitrealfield): real
    static blzGetStringField(whichUnit: unit, whichField: unitstringfield): string
    static blzSetBooleanField(
        whichUnit: unit,
        whichField: unitbooleanfield,
        value: boolean
    ): boolean
    static blzSetIntegerField(
        whichUnit: unit,
        whichField: unitintegerfield,
        value: integer
    ): boolean
    static blzSetRealField(whichUnit: unit, whichField: unitrealfield, value: real): boolean
    static blzSetStringField(whichUnit: unit, whichField: unitstringfield, value: string): boolean
    static blzGetWeaponBooleanField(
        whichUnit: unit,
        whichField: unitweaponbooleanfield,
        index: integer
    ): boolean
    static blzGetWeaponIntegerField(
        whichUnit: unit,
        whichField: unitweaponintegerfield,
        index: integer
    ): integer
    static blzGetWeaponRealField(
        whichUnit: unit,
        whichField: unitweaponrealfield,
        index: integer
    ): real
    static blzGetWeaponStringField(
        whichUnit: unit,
        whichField: unitweaponstringfield,
        index: integer
    ): string
    static blzSetWeaponBooleanField(
        whichUnit: unit,
        whichField: unitweaponbooleanfield,
        index: integer,
        value: boolean
    ): boolean
    static blzSetWeaponIntegerField(
        whichUnit: unit,
        whichField: unitweaponintegerfield,
        index: integer,
        value: integer
    ): boolean
    static blzSetWeaponRealField(
        whichUnit: unit,
        whichField: unitweaponrealfield,
        index: integer,
        value: real
    ): boolean
    static blzSetWeaponStringField(
        whichUnit: unit,
        whichField: unitweaponstringfield,
        index: integer,
        value: string
    ): boolean

    static addIndicator(
        whichUnit: unit,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static removeGuardPosition(hUnit: unit): void
    static recycleGuardPosition(hUnit: unit): void
    static triggered(): unit
    static getEntering(): unit
    static getLeaving(): unit
    static getLeveling(): unit
    static getLearning(): unit
    static filtered(): unit
    static enumed(): unit
    static createBlightedGoldmine(id: player, x: real, y: real, face: real): unit

    static blzCreateWithSkin(
        id: player,
        unitid: integer,
        x: real,
        y: real,
        face: real,
        skinId: integer
    ): unit
    static blzGetSkin(whichUnit: unit): integer
    static blzSetSkin(whichUnit: unit, skinId: integer): void
    static blzStartAbilityCooldown(whichUnit: unit, abilCode: integer, cooldown: real): void
    static blzSetFacingEx(whichUnit: unit, facingAngle: real): void
    static blzShowTeamGlow(whichUnit: unit, show: boolean): void
    static convertAnimType(i: integer): animtype
    static convertArmorType(i: integer): armortype
    static convertAttackType(i: integer): attacktype
    static convertDamageType(i: integer): damagetype
    static convertDefenseType(i: integer): defensetype
    static convertHeroAttribute(i: integer): heroattribute
    static convertMoveType(i: integer): movetype
    static convertPathingFlag(i: integer): pathingflag
    static convertPathingType(i: integer): pathingtype
    static convertRegenType(i: integer): regentype
    static convertSubAnimType(i: integer): subanimtype
    static convertTargetFlag(i: integer): targetflag
    static convertBooleanField(i: integer): unitbooleanfield
    static convertCategory(i: integer): unitcategory
    static convertIntegerField(i: integer): unitintegerfield
    static convertRealField(i: integer): unitrealfield
    static convertState(i: integer): unitstate
    static convertStringField(i: integer): unitstringfield
    static convertType(i: integer): unittype
    static convertWeaponBooleanField(i: integer): unitweaponbooleanfield
    static convertWeaponIntegerField(i: integer): unitweaponintegerfield
    static convertWeaponRealField(i: integer): unitweaponrealfield
    static convertWeaponStringField(i: integer): unitweaponstringfield
    static convertWeaponType(i: integer): weapontype
    static readonly ATTACK_TYPE_NORMAL: attacktype
    static readonly ATTACK_TYPE_MELEE: attacktype
    static readonly ATTACK_TYPE_PIERCE: attacktype
    static readonly ATTACK_TYPE_SIEGE: attacktype
    static readonly ATTACK_TYPE_MAGIC: attacktype
    static readonly ATTACK_TYPE_CHAOS: attacktype
    static readonly ATTACK_TYPE_HERO: attacktype
    static readonly ANIM_TYPE_BIRTH: animtype
    static readonly ANIM_TYPE_DEATH: animtype
    static readonly ANIM_TYPE_DECAY: animtype
    static readonly ANIM_TYPE_DISSIPATE: animtype
    static readonly ANIM_TYPE_STAND: animtype
    static readonly ANIM_TYPE_WALK: animtype
    static readonly ANIM_TYPE_ATTACK: animtype
    static readonly ANIM_TYPE_MORPH: animtype
    static readonly ANIM_TYPE_SLEEP: animtype
    static readonly ANIM_TYPE_SPELL: animtype
    static readonly ANIM_TYPE_PORTRAIT: animtype
    static convertAnimType(i: integer): animtype
    static readonly SUBANIM_TYPE_ROOTED: subanimtype
    static readonly SUBANIM_TYPE_ALTERNATE_EX: subanimtype
    static readonly SUBANIM_TYPE_LOOPING: subanimtype
    static readonly SUBANIM_TYPE_SLAM: subanimtype
    static readonly SUBANIM_TYPE_THROW: subanimtype
    static readonly SUBANIM_TYPE_SPIKED: subanimtype
    static readonly SUBANIM_TYPE_FAST: subanimtype
    static readonly SUBANIM_TYPE_SPIN: subanimtype
    static readonly SUBANIM_TYPE_READY: subanimtype
    static readonly SUBANIM_TYPE_CHANNEL: subanimtype
    static readonly SUBANIM_TYPE_DEFEND: subanimtype
    static readonly SUBANIM_TYPE_VICTORY: subanimtype
    static readonly SUBANIM_TYPE_TURN: subanimtype
    static readonly SUBANIM_TYPE_LEFT: subanimtype
    static readonly SUBANIM_TYPE_RIGHT: subanimtype
    static readonly SUBANIM_TYPE_FIRE: subanimtype
    static readonly SUBANIM_TYPE_FLESH: subanimtype
    static readonly SUBANIM_TYPE_HIT: subanimtype
    static readonly SUBANIM_TYPE_WOUNDED: subanimtype
    static readonly SUBANIM_TYPE_LIGHT: subanimtype
    static readonly SUBANIM_TYPE_MODERATE: subanimtype
    static readonly SUBANIM_TYPE_SEVERE: subanimtype
    static readonly SUBANIM_TYPE_CRITICAL: subanimtype
    static readonly SUBANIM_TYPE_COMPLETE: subanimtype
    static readonly SUBANIM_TYPE_GOLD: subanimtype
    static readonly SUBANIM_TYPE_LUMBER: subanimtype
    static readonly SUBANIM_TYPE_WORK: subanimtype
    static readonly SUBANIM_TYPE_TALK: subanimtype
    static readonly SUBANIM_TYPE_FIRST: subanimtype
    static readonly SUBANIM_TYPE_SECOND: subanimtype
    static readonly SUBANIM_TYPE_THIRD: subanimtype
    static readonly SUBANIM_TYPE_FOURTH: subanimtype
    static readonly SUBANIM_TYPE_FIFTH: subanimtype
    static readonly SUBANIM_TYPE_ONE: subanimtype
    static readonly SUBANIM_TYPE_TWO: subanimtype
    static readonly SUBANIM_TYPE_THREE: subanimtype
    static readonly SUBANIM_TYPE_FOUR: subanimtype
    static readonly SUBANIM_TYPE_FIVE: subanimtype
    static readonly SUBANIM_TYPE_SMALL: subanimtype
    static readonly SUBANIM_TYPE_MEDIUM: subanimtype
    static readonly SUBANIM_TYPE_LARGE: subanimtype
    static readonly SUBANIM_TYPE_UPGRADE: subanimtype
    static readonly SUBANIM_TYPE_DRAIN: subanimtype
    static readonly SUBANIM_TYPE_FILL: subanimtype
    static readonly SUBANIM_TYPE_CHAINLIGHTNI: subanimtype
    static readonly SUBANIM_TYPE_EATTREE: subanimtype
    static readonly SUBANIM_TYPE_PUKE: subanimtype
    static readonly SUBANIM_TYPE_FLAIL: subanimtype
    static readonly SUBANIM_TYPE_OFF: subanimtype
    static readonly SUBANIM_TYPE_SWIM: subanimtype
    static readonly SUBANIM_TYPE_ENTANGLE: subanimtype
    static readonly SUBANIM_TYPE_BERSERK: subanimtype
    static convertSubAnimType(i: integer): subanimtype
    static readonly PATHING_FLAG_UNWALKABLE: pathingflag
    static readonly PATHING_FLAG_UNFLYABLE: pathingflag
    static readonly PATHING_FLAG_UNBUILDABLE: pathingflag
    static readonly PATHING_FLAG_UNPEONHARVEST: pathingflag
    static readonly PATHING_FLAG_BLIGHTED: pathingflag
    static readonly PATHING_FLAG_UNFLOATABLE: pathingflag
    static readonly PATHING_FLAG_UNAMPHIBIOUS: pathingflag
    static readonly PATHING_FLAG_UNITEMPLACABLE: pathingflag
    static convertPathingFlag(i: integer): pathingflag
    static readonly STATE_LIFE: unitstate
    static readonly STATE_MAX_LIFE: unitstate
    static readonly STATE_MANA: unitstate
    static readonly STATE_MAX_MANA: unitstate
    static convertState(i: integer): unitstate
    static readonly MOVE_TYPE_UNKNOWN: movetype
    static readonly MOVE_TYPE_FOOT: movetype
    static readonly MOVE_TYPE_FLY: movetype
    static readonly MOVE_TYPE_HORSE: movetype
    static readonly MOVE_TYPE_HOVER: movetype
    static readonly MOVE_TYPE_FLOAT: movetype
    static readonly MOVE_TYPE_AMPHIBIOUS: movetype
    static readonly MOVE_TYPE_UNBUILDABLE: movetype
    static convertMoveType(i: integer): movetype
    static readonly TARGET_FLAG_NONE: targetflag
    static readonly TARGET_FLAG_GROUND: targetflag
    static readonly TARGET_FLAG_AIR: targetflag
    static readonly TARGET_FLAG_STRUCTURE: targetflag
    static readonly TARGET_FLAG_WARD: targetflag
    static readonly TARGET_FLAG_ITEM: targetflag
    static readonly TARGET_FLAG_TREE: targetflag
    static readonly TARGET_FLAG_WALL: targetflag
    static readonly TARGET_FLAG_DEBRIS: targetflag
    static readonly TARGET_FLAG_DECORATION: targetflag
    static readonly TARGET_FLAG_BRIDGE: targetflag
    static convertTargetFlag(i: integer): targetflag
    static readonly DEFENSE_TYPE_LIGHT: defensetype
    static readonly DEFENSE_TYPE_MEDIUM: defensetype
    static readonly DEFENSE_TYPE_LARGE: defensetype
    static readonly DEFENSE_TYPE_FORT: defensetype
    static readonly DEFENSE_TYPE_NORMAL: defensetype
    static readonly DEFENSE_TYPE_HERO: defensetype
    static readonly DEFENSE_TYPE_DIVINE: defensetype
    static readonly DEFENSE_TYPE_NONE: defensetype
    static convertDefenseType(i: integer): defensetype
    static readonly HERO_ATTRIBUTE_STR: heroattribute
    static readonly HERO_ATTRIBUTE_INT: heroattribute
    static readonly HERO_ATTRIBUTE_AGI: heroattribute
    static convertHeroAttribute(i: integer): heroattribute
    static readonly ARMOR_TYPE_WHOKNOW: armortype
    static readonly ARMOR_TYPE_FLESH: armortype
    static readonly ARMOR_TYPE_METAL: armortype
    static readonly ARMOR_TYPE_WOOD: armortype
    static readonly ARMOR_TYPE_ETHREAL: armortype
    static readonly ARMOR_TYPE_STONE: armortype
    static convertArmorType(i: integer): armortype
    static readonly REGENERATION_TYPE_NONE: regentype
    static readonly REGENERATION_TYPE_ALWAYS: regentype
    static readonly REGENERATION_TYPE_BLIGHT: regentype
    static readonly REGENERATION_TYPE_DAY: regentype
    static readonly REGENERATION_TYPE_NIGHT: regentype
    static convertRegenType(i: integer): regentype
    static readonly CATEGORY_GIANT: unitcategory
    static readonly CATEGORY_UNDEAD: unitcategory
    static readonly CATEGORY_SUMMONED: unitcategory
    static readonly CATEGORY_MECHANICAL: unitcategory
    static readonly CATEGORY_PEON: unitcategory
    static readonly CATEGORY_SAPPER: unitcategory
    static readonly CATEGORY_TOWNHALL: unitcategory
    static readonly CATEGORY_ANCIENT: unitcategory
    static readonly CATEGORY_NEUTRAL: unitcategory
    static readonly CATEGORY_WARD: unitcategory
    static readonly CATEGORY_STANDON: unitcategory
    static readonly CATEGORY_TAUREN: unitcategory
    static convertCategory(i: integer): unitcategory
    static readonly TYPE_HERO: unittype
    static readonly TYPE_DEAD: unittype
    static readonly TYPE_STRUCTURE: unittype

    static readonly TYPE_FLYING: unittype
    static readonly TYPE_GROUND: unittype

    static readonly TYPE_ATTACKS_FLYING: unittype
    static readonly TYPE_ATTACKS_GROUND: unittype

    static readonly TYPE_MELEE_ATTACKER: unittype
    static readonly TYPE_RANGED_ATTACKER: unittype

    static readonly TYPE_GIANT: unittype
    static readonly TYPE_SUMMONED: unittype
    static readonly TYPE_STUNNED: unittype
    static readonly TYPE_PLAGUED: unittype
    static readonly TYPE_SNARED: unittype

    static readonly TYPE_UNDEAD: unittype
    static readonly TYPE_MECHANICAL: unittype
    static readonly TYPE_PEON: unittype
    static readonly TYPE_SAPPER: unittype
    static readonly TYPE_TOWNHALL: unittype
    static readonly TYPE_ANCIENT: unittype

    static readonly TYPE_TAUREN: unittype
    static readonly TYPE_POISONED: unittype
    static readonly TYPE_POLYMORPHED: unittype
    static readonly TYPE_SLEEPING: unittype
    static readonly TYPE_RESISTANT: unittype
    static readonly TYPE_ETHEREAL: unittype
    static readonly TYPE_MAGIC_IMMUNE: unittype
    static convertType(i: integer): unittype
    static readonly EVENT_DAMAGED: unitevent
    static readonly EVENT_DAMAGING: unitevent
    static readonly EVENT_DEATH: unitevent
    static readonly EVENT_DECAY: unitevent
    static readonly EVENT_DETECTED: unitevent
    static readonly EVENT_HIDDEN: unitevent
    static readonly EVENT_SELECTED: unitevent
    static readonly EVENT_DESELECTED: unitevent

    static readonly EVENT_STATE_LIMIT: unitevent

    static readonly EVENT_ACQUIRED_TARGET: unitevent
    static readonly EVENT_TARGET_IN_RANGE: unitevent
    static readonly EVENT_ATTACKED: unitevent
    static readonly EVENT_RESCUED: unitevent

    static readonly EVENT_CONSTRUCT_CANCEL: unitevent
    static readonly EVENT_CONSTRUCT_FINISH: unitevent

    static readonly EVENT_UPGRADE_START: unitevent
    static readonly EVENT_UPGRADE_CANCEL: unitevent
    static readonly EVENT_UPGRADE_FINISH: unitevent

    static readonly EVENT_TRAIN_START: unitevent
    static readonly EVENT_TRAIN_CANCEL: unitevent
    static readonly EVENT_TRAIN_FINISH: unitevent

    static readonly EVENT_RESEARCH_START: unitevent
    static readonly EVENT_RESEARCH_CANCEL: unitevent
    static readonly EVENT_RESEARCH_FINISH: unitevent

    static readonly EVENT_ISSUED_ORDER: unitevent
    static readonly EVENT_ISSUED_POINT_ORDER: unitevent
    static readonly EVENT_ISSUED_TARGET_ORDER: unitevent

    static readonly EVENT_HERO_LEVEL: unitevent
    static readonly EVENT_HERO_SKILL: unitevent

    static readonly EVENT_HERO_REVIVABLE: unitevent
    static readonly EVENT_HERO_REVIVE_START: unitevent
    static readonly EVENT_HERO_REVIVE_CANCEL: unitevent
    static readonly EVENT_HERO_REVIVE_FINISH: unitevent

    static readonly EVENT_SUMMON: unitevent

    static readonly EVENT_DROP_ITEM: unitevent
    static readonly EVENT_PICKUP_ITEM: unitevent
    static readonly EVENT_USE_ITEM: unitevent

    static readonly EVENT_LOADED: unitevent
    static readonly EVENT_SELL: unitevent
    static readonly EVENT_CHANGE_OWNER: unitevent
    static readonly EVENT_SELL_ITEM: unitevent
    static readonly EVENT_SPELL_CHANNEL: unitevent
    static readonly EVENT_SPELL_CAST: unitevent
    static readonly EVENT_SPELL_EFFECT: unitevent
    static readonly EVENT_SPELL_FINISH: unitevent
    static readonly EVENT_SPELL_ENDCAST: unitevent
    static readonly EVENT_PAWN_ITEM: unitevent
    static convertEvent(i: integer): unitevent
}

declare class UnitPool {
    static create(): unitpool
    static destroy(whichPool: unitpool): void
    static addType(whichPool: unitpool, unitId: integer, weight: real): void
    static removeType(whichPool: unitpool, unitId: integer): void
    static placeRandom(
        whichPool: unitpool,
        forWhichPlayer: player,
        x: real,
        y: real,
        facing: real
    ): unit
}

declare class WeatherEffect {
    static add(where: rect, effectID: integer): weathereffect
    static remove(whichEffect: weathereffect): void
    static enable(whichEffect: weathereffect, enable: boolean): void
}

// declare const EVENT_WIDGET_DEATH: widgetevent
// declare function ConvertWidgetEvent(i: integer): widgetevent

declare class Widget {
    static getLife(whichWidget: widget): real
    static setLife(whichWidget: widget, newLife: real): void
    static gettX(whichWidget: widget): real
    static getY(whichWidget: widget): real
    static triggered(): widget
    static addIndicator(
        whichWidget: widget,
        red: integer,
        green: integer,
        blue: integer,
        alpha: integer
    ): void
    static readonly EVENT_DEATH: widgetevent
    static convertEvent(i: integer): widgetevent
}

declare class AutomationTest {
    static setType(testType: string): void
    static start(testName: string): void
    static end(): void
    static finished(): void
}

declare class Blight {
    static set(whichPlayer: player, x: real, y: real, radius: real, addBlight: boolean): void
    static setRect(whichPlayer: player, r: rect, addBlight: boolean): void
    static setLoc(
        whichPlayer: player,
        whichLocation: location,
        radius: real,
        addBlight: boolean
    ): void
    static setPoint(whichPlayer: player, x: real, y: real, addBlight: boolean): void
    static isBlighted(x: real, y: real): boolean
}

declare class Camera {
    static setPosition(x: real, y: real): void
    static setQuickPosition(x: real, y: real): void
    static setBounds(
        x1: real,
        y1: real,
        x2: real,
        y2: real,
        x3: real,
        y3: real,
        x4: real,
        y4: real
    ): void
    static stop(): void
    static resetToGameCamera(duration: real): void
    static panTo(x: real, y: real): void
    static panToTimed(x: real, y: real, duration: real): void
    static panToWithZ(x: real, y: real, zOffsetDest: real): void
    static panToTimedWithZ(x: real, y: real, zOffsetDest: real, duration: real): void
    static setRotateMode(x: real, y: real, radiansToSweep: real, duration: real): void
    static setField(whichField: camerafield, value: real, duration: real): void
    static adjustCameraField(whichField: camerafield, offset: real, duration: real): void
    static setTargetController(
        whichUnit: unit,
        xoffset: real,
        yoffset: real,
        inheritOrientation: boolean
    ): void
    static setOrientController(whichUnit: unit, xoffset: real, yoffset: real): void
    static setTargetNoise(mag: real, velocity: real): void
    static setSourceNoise(mag: real, velocity: real): void
    static setTargetNoiseEx(mag: real, velocity: real, vertOnly: boolean): void
    static setSourceNoiseEx(mag: real, velocity: real, vertOnly: boolean): void
    static setSmoothingFactor(factor: real): void
    static setFocalDistance(distance: real): void
    static setDepthOfFieldScale(scale: real): void
    static getMargin(whichMargin: integer): real
    static getBoundMinX(): real
    static getBoundMinY(): real
    static getBoundMaxX(): real
    static getBoundMaxY(): real
    static getField(whichField: camerafield): real
    static getTargetPositionX(): real
    static getTargetPositionY(): real
    static getTargetPositionZ(): real
    static getTargetPositionLoc(): location
    static getEyePositionX(): real
    static getEyePositionY(): real
    static getEyePositionZ(): real
    static getEyePositionLoc(): location
    static convertBlendMode(i: integer): blendmode
    static convertCameraField(i: integer): camerafield
    static convertFogState(i: integer): fogstate
    static convertRarityControl(i: integer): raritycontrol
    static convertTexMapFlags(i: integer): texmapflags
}

declare class Campaign {
    static setTutorialCleared(cleared: boolean): void
    static setMissionAvailable(
        campaignNumber: integer,
        missionNumber: integer,
        available: boolean
    ): void
    static setAvailable(campaignNumber: integer, available: boolean): void
    static setOpCinematicAvailable(campaignNumber: integer, available: boolean): void
    static setEdCinematicAvailable(campaignNumber: integer, available: boolean): void
    static getDefaultDifficulty(): gamedifficulty
    static setDefaultDifficulty(g: gamedifficulty): void
    static setCustomCampaignButtonVisible(whichButton: integer, visible: boolean): void
    static getCustomCampaignButtonVisible(whichButton: integer): boolean
    static doNotSaveReplay(): void
}

declare class MapCheat {
    static cheat(cheatStr: string): void
    static isNoVictoryCheat(): boolean
    static isNoDefeatCheat(): boolean
}

declare class CineFilter {
    static setTexture(filename: string): void
    static setBlendMode(whichMode: blendmode): void
    static setTexMapFlags(whichFlags: texmapflags): void
    static setStartUV(minu: real, minv: real, maxu: real, maxv: real): void
    static setEndUV(minu: real, minv: real, maxu: real, maxv: real): void
    static setStartColor(red: integer, green: integer, blue: integer, alpha: integer): void
    static setEndColor(red: integer, green: integer, blue: integer, alpha: integer): void
    static setDuration(duration: real): void
    static display(flag: boolean): void
    static isDisplayed(): boolean
}

declare class Cinematic {
    static setCamera(cameraModelFile: string): void
    static setScene(
        portraitUnitId: integer,
        color: playercolor,
        speakerTitle: string,
        text: string,
        sceneDuration: real,
        voiceoverDuration: real
    ): void
    static endScene(): void
    static forceSubtitles(flag: boolean): void
    static setAudio(cinematicAudio: boolean): void
}

// declare const AI_DIFFICULTY_NEWBIE: aidifficulty
// declare const AI_DIFFICULTY_NORMAL: aidifficulty
// declare const AI_DIFFICULTY_INSANE: aidifficulty
// declare function ConvertAIDifficulty(i: integer): aidifficulty

declare class ComputerAI {
    static startMelee(num: player, script: string): void
    static startCampaign(num: player, script: string): void
    static command(num: player, command: integer, data: integer): void
    static pauseComp(p: player, pause: boolean): void
    static getDifficulty(num: player): aidifficulty
    static removeGuardPosition(hUnit: unit): void
    static recycleGuardPosition(hUnit: unit): void
    static removeAllGuardPositions(num: player): void
    static convertDifficulty(i: integer): aidifficulty
    static readonly DIFFICULTY_NEWBIE: aidifficulty
    static readonly DIFFICULTY_NORMAL: aidifficulty
    static readonly DIFFICULTY_INSANE: aidifficulty
    static convertDifficulty(i: integer): aidifficulty
}

declare class Fog {
    static setStateRect(
        forWhichPlayer: player,
        whichState: fogstate,
        where: rect,
        useSharedVision: boolean
    ): void
    static setStateRadius(
        forWhichPlayer: player,
        whichState: fogstate,
        centerX: real,
        centerY: real,
        radius: real,
        useSharedVision: boolean
    ): void
    static setStateRadiusLoc(
        forWhichPlayer: player,
        whichState: fogstate,
        center: location,
        radius: real,
        useSharedVision: boolean
    ): void
    static maskEnable(enable: boolean): void
    static isMaskEnabled(): boolean
    static enable(enable: boolean): void
    static isEnabled(): boolean
}

declare class GameSetup {
    static setPlacement(whichPlacementType: placement): void
    static setDifficulty(whichdifficulty: gamedifficulty): void
    static setSpeed(whichspeed: gamespeed): void
    static getPlacement(): placement
    static getSpeed(): gamespeed
    static getDifficulty(): gamedifficulty
}

declare function Deg2Rad(degrees: real): real
declare function Rad2Deg(radians: real): real
declare function Sin(radians: real): real
declare function Cos(radians: real): real
declare function Tan(radians: real): real
// Expect values between -1 and 1...returns 0 for invalid input
declare function Asin(y: real): real
declare function Acos(x: real): real
declare function Atan(x: real): real
// Returns 0 if x and y are both 0
declare function Atan2(y: real, x: real): real
// Returns 0 if x <= 0
declare function SquareRoot(x: real): real
// computes x to the y power
// y == 0.0             => 1
// x ==0.0 and y < 0    => 0
declare function Pow(x: real, power: real): real

//  BlzFourCC2S                                 takes integer value returns string
//  BlzS2FourCC                                 takes string value returns integer

// Bit Operations
declare function BlzBitOr(x: integer, y: integer): integer
declare function BlzBitAnd(x: integer, y: integer): integer
declare function BlzBitXor(x: integer, y: integer): integer

declare function GetRandomInt(lowBound: integer, highBound: integer): integer
declare function GetRandomReal(lowBound: real, highBound: real): real
declare function ChooseRandomCreep(level: integer): integer
declare function ChooseRandomNPBuilding(): integer
declare function ChooseRandomItem(level: integer): integer
declare function ChooseRandomItemEx(whichType: itemtype, level: integer): integer
declare function SetRandomSeed(seed: integer): void

// declare const RACE_PREF_HUMAN         : racepreference
// declare const RACE_PREF_ORC           : racepreference
// declare const RACE_PREF_NIGHTELF      : racepreference
// declare const RACE_PREF_UNDEAD        : racepreference
// declare const RACE_PREF_DEMON          : racepreference
// declare const RACE_PREF_RANDOM         : racepreference
// declare const RACE_PREF_USER_SELECTABLE: racepreference
// declare function ConvertRacePref(i: integer): racepreference
// declare const MAP_CONTROL_USER     : mapcontrol
// declare const MAP_CONTROL_COMPUTER : mapcontrol
// declare const MAP_CONTROL_RESCUABLE: mapcontrol
// declare const MAP_CONTROL_NEUTRAL  : mapcontrol
// declare const MAP_CONTROL_CREEP    : mapcontrol
// declare const MAP_CONTROL_NONE     : mapcontrol
// declare function ConvertMapControl(i: integer): mapcontrol
// declare const GAME_TYPE_MELEE           : gametype
// declare const GAME_TYPE_FFA             : gametype
// declare const GAME_TYPE_USE_MAP_SETTINGS: gametype
// declare const GAME_TYPE_BLIZ            : gametype
// declare const GAME_TYPE_ONE_ON_ONE      :  gametype
// declare const GAME_TYPE_TWO_TEAM_PLAY   :  gametype
// declare const GAME_TYPE_THREE_TEAM_PLAY :  gametype
// declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype
// declare function ConvertGameType(i: integer): gametype
// declare const MAP_FOG_HIDE_TERRAIN  : mapflag
// declare const MAP_FOG_MAP_EXPLORED  : mapflag
// declare const MAP_FOG_ALWAYS_VISIBLE: mapflag
// declare const MAP_USE_HANDICAPS: mapflag
// declare const MAP_OBSERVERS: mapflag
// declare const MAP_OBSERVERS_ON_DEATH: mapflag

// declare const MAP_FIXED_COLORS: mapflag
// declare const MAP_LOCK_RESOURCE_TRADING: mapflag
// declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag

// declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag
// declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag

// declare const MAP_CHEATS: mapflag
// declare const MAP_CHEATS_HIDDEN: mapflag

// declare const MAP_LOCK_SPEED: mapflag
// declare const MAP_LOCK_RANDOM_SEED: mapflag
// declare const MAP_SHARED_ADVANCED_CONTROL: mapflag
// declare const MAP_RANDOM_HERO: mapflag
// declare const MAP_RANDOM_RACES: mapflag
// declare const MAP_RELOADED: mapflag
// declare function ConvertMapFlag(i: integer): mapflag
// declare const MAP_PLACEMENT_RANDOM: placement
// declare const MAP_PLACEMENT_FIXED: placement
// declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement
// declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement
// declare function ConvertPlacement(i: integer): placement
// declare const MAP_LOC_PRIO_LOW : startlocprio
// declare const MAP_LOC_PRIO_HIGH: startlocprio
// declare const MAP_LOC_PRIO_NOT : startlocprio
// declare function ConvertStartLocPrio(i: integer): startlocprio
// declare const MAP_DENSITY_NONE  : mapdensity
// declare const MAP_DENSITY_LIGHT : mapdensity
// declare const MAP_DENSITY_MEDIUM: mapdensity
// declare const MAP_DENSITY_HEAVY : mapdensity
// declare function ConvertMapDensity(i: integer): mapdensity

declare class MapSetup {
    static setName(name: string): void
    static setDescription(description: string): void
    static setTeams(teamcount: integer): void
    static setPlayers(playercount: integer): void
    static setResourceDensity(whichdensity: mapdensity): void
    static setCreatureDensity(whichdensity: mapdensity): void
    static getTeams(): integer
    static getPlayers(): integer
    static isFlagSet(whichMapFlag: mapflag): boolean
    static convertControl(i: integer): mapcontrol
    static convertDensity(i: integer): mapdensity
    static convertFlag(i: integer): mapflag
    static setFlag(whichMapFlag: mapflag, value: boolean): void
    static convertPlacement(i: integer): placement
    static convertRacePref(i: integer): racepreference
    static convertStartLocPrio(i: integer): startlocprio
}

declare function I2R(i: integer): real
declare function R2I(r: real): integer
declare function I2S(i: integer): string
declare function R2S(r: real): string
declare function R2SW(r: real, width: integer, precision: integer): string
declare function S2I(s: string): integer
declare function S2R(s: string): real
declare function SubString(source: string, start: integer, ending: integer): string
declare function StringLength(s: string): integer
declare function StringCase(source: string, upper: boolean): string
declare function StringHash(s: string): integer

declare function GetLocalizedString(source: string): string
declare function GetLocalizedHotkey(source: string): integer

declare class Music {
    static setMap(musicName: string, random: boolean, index: integer): void
    static clearMap(): void
    static play(musicName: string): void
    static playEx(musicName: string, frommsecs: integer, fadeinmsecs: integer): void
    static stop(fadeOut: boolean): void
    static resume(): void
    static playThematic(musicFileName: string): void
    static playThematicEx(musicFileName: string, frommsecs: integer): void
    static endThematic(): void
    static setVolume(volume: integer): void
    static setPlayPosition(millisecs: integer): void
    static setThematicPlayPosition(millisecs: integer): void
}

declare function Preload(filename: string): void
declare function PreloadEnd(timeout: real): void
declare function PreloadStart(): void
declare function PreloadRefresh(): void
declare function PreloadEndEx(): void

declare function PreloadGenClear(): void
declare function PreloadGenStart(): void
declare function PreloadGenEnd(filename: string): void
declare function Preloader(filename: string): void

declare class StartLocation {
    static define(whichStartLoc: integer, x: real, y: real): void
    static defineLoc(whichStartLoc: integer, whichLocation: location): void
    static setPrioCount(whichStartLoc: integer, prioSlotCount: integer): void
    static setPrio(
        whichStartLoc: integer,
        prioSlotIndex: integer,
        otherStartLocIndex: integer,
        priority: startlocprio
    ): void
    static getPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): integer
    static getPrio(whichStartLoc: integer, prioSlotIndex: integer): startlocprio
    static getX(whichStartLocation: integer): real
    static getY(whichStartLocation: integer): real
    static getLoc(whichStartLocation: integer): location
    static convertPrio(i: integer): startlocprio
}

declare function BlzSendSyncData(prefix: string, data: string): boolean
declare function BlzGetTriggerSyncPrefix(): string
declare function BlzGetTriggerSyncData(): string

declare class Terrain {
    static getCliffLevel(x: real, y: real): integer
    static setWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer): void
    static setWaterDeforms(val: boolean): void
    static getTypeId(x: real, y: real): integer
    static getVariance(x: real, y: real): integer
    static setTypeId(
        x: real,
        y: real,
        terrainType: integer,
        variation: integer,
        area: integer,
        shape: integer
    ): void
    static isPathable(x: real, y: real, t: pathingtype): boolean
    static setPathable(x: real, y: real, t: pathingtype, flag: boolean): void
}

// declare const FALSE: boolean
// declare const TRUE: boolean
// declare const JASS_MAX_ARRAY_SIZE: integer
// declare const VERSION_REIGN_OF_CHAOS: version
// declare const VERSION_FROZEN_THRONE : version
// declare function ConvertVersion(i: integer): version
// declare const MAP_DIFFICULTY_EASY  : gamedifficulty
// declare const MAP_DIFFICULTY_NORMAL: gamedifficulty
// declare const MAP_DIFFICULTY_HARD  : gamedifficulty
// declare const MAP_DIFFICULTY_INSANE: gamedifficulty
// declare const MAP_SPEED_SLOWEST: gamespeed
// declare const MAP_SPEED_SLOW   : gamespeed
// declare const MAP_SPEED_NORMAL : gamespeed
// declare const MAP_SPEED_FAST   : gamespeed
// declare const MAP_SPEED_FASTEST: gamespeed
// declare function ConvertGameSpeed(i: integer): gamespeed
// declare const GAME_STATE_DIVINE_INTERVENTION: igamestate
// declare const GAME_STATE_DISCONNECTED       : igamestate
// declare const GAME_STATE_TIME_OF_DAY        : fgamestate
// declare function ConvertIGameState(i: integer): igamestate
// declare function ConvertFGameState(i: integer): fgamestate
// declare const EVENT_GAME_VICTORY  : gameevent
// declare const EVENT_GAME_END_LEVEL: gameevent

// declare const EVENT_GAME_VARIABLE_LIMIT: gameevent
// declare const EVENT_GAME_STATE_LIMIT   : gameevent

// declare const EVENT_GAME_TIMER_EXPIRED: gameevent

// declare const EVENT_GAME_ENTER_REGION: gameevent
// declare const EVENT_GAME_LEAVE_REGION: gameevent

// declare const EVENT_GAME_TRACKABLE_HIT  : gameevent
// declare const EVENT_GAME_TRACKABLE_TRACK: gameevent

// declare const EVENT_GAME_SHOW_SKILL   : gameevent
// declare const EVENT_GAME_BUILD_SUBMENU: gameevent
// declare function ConvertGameEvent(i: integer): gameevent

declare class Game {
    static convertDifficulty(i: integer): gamedifficulty
    static convertFState(i: integer): fgamestate
    static getEventState(): gamestate
    static convertIGameState(i: integer): igamestate
    static getEventState(): gamestate
    static convertType(i: integer): gametype
    static setTypeSupported(whichGameType: gametype, value: boolean): void
    static isTypeSupported(whichGameType: gametype): boolean
    static getTypeSelected(): gametype
    static convertOsKeyType(i: integer): oskeytype
    static convertRace(i: integer): race
    static convertVersion(i: integer): version
    static getSaveBasicFilename(): string
    static getTournamentScore(whichPlayer: player): integer
    static getTournamentFinishNowRule(): integer
    static getTournamentFinishNowPlayer(): player
    static getTournamentScore(whichPlayer: player): integer
    static getTournamentFinishSoonTimeRemaining(): real
    static readonly FALSE: boolean
    static readonly TRUE: boolean
    static readonly JASS_MAX_ARRAY_SIZE: integer
    static readonly VERSION_REIGN_OF_CHAOS: version
    static readonly VERSION_FROZEN_THRONE: version
    static convertVersion(i: integer): version
    static readonly DIFFICULTY_EASY: gamedifficulty
    static readonly DIFFICULTY_NORMAL: gamedifficulty
    static readonly DIFFICULTY_HARD: gamedifficulty
    static readonly DIFFICULTY_INSANE: gamedifficulty
    static readonly SPEED_SLOWEST: gamespeed
    static readonly SPEED_SLOW: gamespeed
    static readonly SPEED_NORMAL: gamespeed
    static readonly SPEED_FAST: gamespeed
    static readonly SPEED_FASTEST: gamespeed
    static convertGameSpeed(i: integer): gamespeed
    static readonly STATE_DIVINE_INTERVENTION: igamestate
    static readonly STATE_DISCONNECTED: igamestate
    static readonly STATE_TIME_OF_DAY: fgamestate
    static convertIntegerState(i: integer): igamestate
    static convertFloatState(i: integer): fgamestate
    static readonly EVENT_VICTORY: gameevent
    static readonly EVENT_END_LEVEL: gameevent

    static readonly EVENT_VARIABLE_LIMIT: gameevent
    static readonly EVENT_STATE_LIMIT: gameevent

    static readonly EVENT_TIMER_EXPIRED: gameevent

    static readonly EVENT_ENTER_REGION: gameevent
    static readonly EVENT_LEAVE_REGION: gameevent

    static readonly EVENT_TRACKABLE_HIT: gameevent
    static readonly EVENT_TRACKABLE_TRACK: gameevent

    static readonly EVENT_SHOW_SKILL: gameevent
    static readonly EVENT_BUILD_SUBMENU: gameevent
    static convertEvent(i: integer): gameevent
}

// declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield
// declare const CAMERA_FIELD_FARZ: camerafield
// declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield
// declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield
// declare const CAMERA_FIELD_ROLL: camerafield
// declare const CAMERA_FIELD_ROTATION: camerafield
// declare const CAMERA_FIELD_ZOFFSET: camerafield
// declare const CAMERA_FIELD_NEARZ: camerafield
// declare const CAMERA_FIELD_LOCAL_PITCH: camerafield
// declare const CAMERA_FIELD_LOCAL_YAW: camerafield
// declare const CAMERA_FIELD_LOCAL_ROLL: camerafield
// declare function ConvertCameraField(i: integer): camerafield

declare abstract class CameraField {
    static readonly TARGET_DISTANCE: camerafield
    static readonly FARZ: camerafield
    static readonly ANGLE_OF_ATTACK: camerafield
    static readonly FIELD_OF_VIEW: camerafield
    static readonly ROLL: camerafield
    static readonly ROTATION: camerafield
    static readonly ZOFFSET: camerafield
    static readonly NEARZ: camerafield
    static readonly LOCAL_PITCH: camerafield
    static readonly LOCAL_YAW: camerafield
    static readonly LOCAL_ROLL: camerafield
    static convert(i: integer): camerafield
}

// declare const BLEND_MODE_NONE: blendmode
// declare const BLEND_MODE_DONT_CARE: blendmode
// declare const BLEND_MODE_KEYALPHA: blendmode
// declare const BLEND_MODE_BLEND: blendmode
// declare const BLEND_MODE_ADDITIVE: blendmode
// declare const BLEND_MODE_MODULATE: blendmode
// declare const BLEND_MODE_MODULATE_2X: blendmode
// declare function ConvertRarityControl(i: integer): blendmode

declare abstract class BlendMode {
    static readonly NONE: blendmode
    static readonly DONT_CARE: blendmode
    static readonly KEY_ALPHA: blendmode
    static readonly BLEND: blendmode
    static readonly ADDITIVE: blendmode
    static readonly MODULATE: blendmode
    static readonly MODULATE_2X: blendmode
    static convert(i: integer): blendmode
}

// declare const RARITY_FREQUENT: raritycontrol
// declare const RARITY_RARE: raritycontrol
// declare function ConvertRarityControl(i: integer): raritycontrol

declare abstract class RarityControl {
    static readonly FREQUENT: raritycontrol
    static readonly RARE: raritycontrol
    static convert(i: integer): raritycontrol
}

// declare const TEXMAP_FLAG_NONE: texmapflags
// declare const TEXMAP_FLAG_WRAP_U: texmapflags
// declare const TEXMAP_FLAG_WRAP_V: texmapflags
// declare const TEXMAP_FLAG_WRAP_UV: texmapflags
// declare function ConvertTexMapFlags(i: integer): texmapflags

declare abstract class TexMapFlags {
    static readonly NONE: texmapflags
    static readonly WRAP_U: texmapflags
    static readonly WRAP_V: texmapflags
    static readonly WRAP_UV: texmapflags
    static convert(i: integer): texmapflags
}

// declare const FOG_OF_WAR_MASKED: fogstate
// declare const FOG_OF_WAR_FOGGED: fogstate
// declare const FOG_OF_WAR_VISIBLE: fogstate
// declare function ConvertFogState(i: integer): fogstate

declare abstract class FogState {
    static readonly MASKED: fogstate
    static readonly FOGGED: fogstate
    static readonly VISIBLE: fogstate
    static convert(i: integer): fogstate
}

// declare const CAMERA_MARGIN_LEFT: integer
// declare const CAMERA_MARGIN_RIGHT: integer
// declare const CAMERA_MARGIN_TOP: integer
// declare const CAMERA_MARGIN_BOTTOM: integer

declare abstract class CameraMargin {
    static readonly LEFT: integer
    static readonly RIGHT: integer
    static readonly TOP: integer
    static readonly BOTTOM: integer
}

// declare const EFFECT_TYPE_EFFECT: effecttype
// declare const EFFECT_TYPE_TARGET: effecttype
// declare const EFFECT_TYPE_CASTER: effecttype
// declare const EFFECT_TYPE_SPECIAL: effecttype
// declare const EFFECT_TYPE_AREA_EFFECT: effecttype
// declare const EFFECT_TYPE_MISSILE: effecttype
// declare const EFFECT_TYPE_LIGHTNING: effecttype
// declare function ConvertEffectType(i: integer): effecttype

declare abstract class EffectTypes {
    static readonly EFFECT: effecttype
    static readonly TARGET: effecttype
    static readonly CASTER: effecttype
    static readonly SPECIAL: effecttype
    static readonly AREA_EFFECT: effecttype
    static readonly MISSILE: effecttype
    static readonly LIGHTNING: effecttype
    static convert(i: integer): effecttype
}

// declare const ORIGIN_FRAME_GAME_UI              : originframetype
// declare const ORIGIN_FRAME_COMMAND_BUTTON       : originframetype
// declare const ORIGIN_FRAME_HERO_BAR             : originframetype
// declare const ORIGIN_FRAME_HERO_BUTTON          : originframetype
// declare const ORIGIN_FRAME_HERO_HP_BAR          : originframetype
// declare const ORIGIN_FRAME_HERO_MANA_BAR        : originframetype
// declare const ORIGIN_FRAME_HERO_BUTTON_INDICATOR: originframetype
// declare const ORIGIN_FRAME_ITEM_BUTTON          : originframetype
// declare const ORIGIN_FRAME_MINIMAP              : originframetype
// declare const ORIGIN_FRAME_MINIMAP_BUTTON       : originframetype
// declare const ORIGIN_FRAME_SYSTEM_BUTTON        : originframetype
// declare const ORIGIN_FRAME_TOOLTIP              : originframetype
// declare const ORIGIN_FRAME_UBERTOOLTIP          : originframetype
// declare const ORIGIN_FRAME_CHAT_MSG             : originframetype
// declare const ORIGIN_FRAME_UNIT_MSG             : originframetype
// declare const ORIGIN_FRAME_TOP_MSG              : originframetype
// declare const ORIGIN_FRAME_PORTRAIT             : originframetype
// declare const ORIGIN_FRAME_WORLD_FRAME          : originframetype
// declare function ConvertOriginFrameType(i: integer): originframetype

declare abstract class OriginFrameType {
    static readonly GAME_UI: originframetype
    static readonly COMMAND_BUTTON: originframetype
    static readonly HERO_BAR: originframetype
    static readonly HERO_BUTTON: originframetype
    static readonly HERO_HP_BAR: originframetype
    static readonly HERO_MANA_BAR: originframetype
    static readonly HERO_BUTTON_INDICATOR: originframetype
    static readonly ITEM_BUTTON: originframetype
    static readonly MINIMAP: originframetype
    static readonly MINIMAP_BUTTON: originframetype
    static readonly SYSTEM_BUTTON: originframetype
    static readonly TOOLTIP: originframetype
    static readonly UBERTOOLTIP: originframetype
    static readonly CHAT_MSG: originframetype
    static readonly UNIT_MSG: originframetype
    static readonly TOP_MSG: originframetype
    static readonly PORTRAIT: originframetype
    static readonly WORLD: originframetype
    static convert(i: integer): originframetype
}

// declare const FRAMEPOINT_TOPLEFT    : framepointtype
// declare const FRAMEPOINT_TOP        : framepointtype
// declare const FRAMEPOINT_TOPRIGHT   : framepointtype
// declare const FRAMEPOINT_LEFT       : framepointtype
// declare const FRAMEPOINT_CENTER     : framepointtype
// declare const FRAMEPOINT_RIGHT      : framepointtype
// declare const FRAMEPOINT_BOTTOMLEFT : framepointtype
// declare const FRAMEPOINT_BOTTOM     : framepointtype
// declare const FRAMEPOINT_BOTTOMRIGHT: framepointtype
// declare function ConvertFramePointType(i: integer): framepointtype

declare abstract class FramePointTypes {
    static readonly LEFT_TOP: framepointtype
    static readonly TOP: framepointtype
    static readonly TOP_RIGHT: framepointtype
    static readonly LEFT: framepointtype
    static readonly CENTER: framepointtype
    static readonly RIGHT: framepointtype
    static readonly LEFT_BOTTOM: framepointtype
    static readonly BOTTOM: framepointtype
    static readonly RIGHT_BOTTOM: framepointtype
    static convert(i: integer): framepointtype
}

// declare const TEXT_JUSTIFY_TOP   : textaligntype
// declare const TEXT_JUSTIFY_MIDDLE: textaligntype
// declare const TEXT_JUSTIFY_BOTTOM: textaligntype
// declare const TEXT_JUSTIFY_LEFT  : textaligntype
// declare const TEXT_JUSTIFY_CENTER: textaligntype
// declare const TEXT_JUSTIFY_RIGHT : textaligntype
// declare function ConvertTextAlignType(i: integer): textaligntype

declare abstract class TextAlignType {
    static readonly TOP: textaligntype
    static readonly MIDDLE: textaligntype
    static readonly BOTTOM: textaligntype
    static readonly LEFT: textaligntype
    static readonly CENTER: textaligntype
    static readonly RIGHT: textaligntype
    static convert(i: integer): textaligntype
}

// declare const FRAMEEVENT_CONTROL_CLICK        : frameeventtype
// declare const FRAMEEVENT_MOUSE_ENTER          : frameeventtype
// declare const FRAMEEVENT_MOUSE_LEAVE          : frameeventtype
// declare const FRAMEEVENT_MOUSE_UP             : frameeventtype
// declare const FRAMEEVENT_MOUSE_DOWN           : frameeventtype
// declare const FRAMEEVENT_MOUSE_WHEEL          : frameeventtype
// declare const FRAMEEVENT_CHECKBOX_CHECKED     : frameeventtype
// declare const FRAMEEVENT_CHECKBOX_UNCHECKED   : frameeventtype
// declare const FRAMEEVENT_EDITBOX_TEXT_CHANGED : frameeventtype
// declare const FRAMEEVENT_POPUPMENU_ITEM_CHANGED: frameeventtype
// declare const FRAMEEVENT_MOUSE_DOUBLECLICK     : frameeventtype
// declare const FRAMEEVENT_SPRITE_ANIM_UPDATE    : frameeventtype
// declare const FRAMEEVENT_SLIDER_VALUE_CHANGED  : frameeventtype
// declare const FRAMEEVENT_DIALOG_CANCEL         : frameeventtype
// declare const FRAMEEVENT_DIALOG_ACCEPT         : frameeventtype
// declare const FRAMEEVENT_EDITBOX_ENTER         : frameeventtype
// declare function ConvertFrameEventType(i: integer): frameeventtype

declare abstract class FrameEventType {
    static readonly CONTROL_CLICK: frameeventtype
    static readonly MOUSE_ENTER: frameeventtype
    static readonly MOUSE_LEAVE: frameeventtype
    static readonly MOUSE_UP: frameeventtype
    static readonly MOUSE_DOWN: frameeventtype
    static readonly MOUSE_WHEEL: frameeventtype
    static readonly CHECKBOX_CHECKED: frameeventtype
    static readonly CHECKBOX_UNCHECKED: frameeventtype
    static readonly EDITBOX_TEXT_CHANGED: frameeventtype
    static readonly POPUPMENU_ITEM_CHANGED: frameeventtype
    static readonly MOUSE_DOUBLE_CLICK: frameeventtype
    static readonly SPIRIT_ANIM_UPDATE: frameeventtype
    static readonly SLIDER_VALUE_CHANGED: frameeventtype
    static readonly DIALOG_CANCEL: frameeventtype
    static readonly DIALOG_ACCEPT: frameeventtype
    static readonly EDITBOX_CENTER: frameeventtype
    static convert(i: integer): frameeventtype
}

// declare const PLAYER_COLOR_RED       : playercolor
// declare const PLAYER_COLOR_BLUE      : playercolor
// declare const PLAYER_COLOR_CYAN      : playercolor
// declare const PLAYER_COLOR_PURPLE    : playercolor
// declare const PLAYER_COLOR_YELLOW    : playercolor
// declare const PLAYER_COLOR_ORANGE    : playercolor
// declare const PLAYER_COLOR_GREEN     : playercolor
// declare const PLAYER_COLOR_PINK      : playercolor
// declare const PLAYER_COLOR_LIGHT_GRAY: playercolor
// declare const PLAYER_COLOR_LIGHT_BLUE: playercolor
// declare const PLAYER_COLOR_AQUA       : playercolor
// declare const PLAYER_COLOR_BROWN      : playercolor
// declare const PLAYER_COLOR_MAROON     : playercolor
// declare const PLAYER_COLOR_NAVY       : playercolor
// declare const PLAYER_COLOR_TURQUOISE  : playercolor
// declare const PLAYER_COLOR_VIOLET     : playercolor
// declare const PLAYER_COLOR_WHEAT      : playercolor
// declare const PLAYER_COLOR_PEACH      : playercolor
// declare const PLAYER_COLOR_MINT       : playercolor
// declare const PLAYER_COLOR_LAVENDER   : playercolor
// declare const PLAYER_COLOR_COAL       : playercolor
// declare const PLAYER_COLOR_SNOW       : playercolor
// declare const PLAYER_COLOR_EMERALD    : playercolor
// declare const PLAYER_COLOR_PEANUT     : playercolor
// declare function ConvertPlayerColor(i: integer): playercolor

declare abstract class PlayerColor {
    static readonly RED: playercolor
    static readonly BLUE: playercolor
    static readonly CYAN: playercolor
    static readonly PURPLE: playercolor
    static readonly YELLOW: playercolor
    static readonly ORANGE: playercolor
    static readonly GREEN: playercolor
    static readonly PINK: playercolor
    static readonly LIGHT_GRAY: playercolor
    static readonly LIGHT_BLUE: playercolor
    static readonly AQUA: playercolor
    static readonly BROWN: playercolor
    static readonly MAROON: playercolor
    static readonly NAVY: playercolor
    static readonly TURQUOISE: playercolor
    static readonly VIOLET: playercolor
    static readonly WHEAT: playercolor
    static readonly PEACH: playercolor
    static readonly MINT: playercolor
    static readonly LAVENDER: playercolor
    static readonly COAL: playercolor
    static readonly SNOW: playercolor
    static readonly EMERALD: playercolor
    static readonly PEANUT: playercolor
    static convert(i: integer): playercolor
}

// declare const RACE_HUMAN   : race
// declare const RACE_ORC     : race
// declare const RACE_UNDEAD  : race
// declare const RACE_NIGHTELF: race
// declare const RACE_DEMON   : race
// declare const RACE_OTHER   : race
// declare function ConvertRace(i: integer): race

declare abstract class Race {
    static readonly HUMAN: race
    static readonly ORC: race
    static readonly UNDEAD: race
    static readonly NIGHT_ELF: race
    static readonly DEMON: race
    static readonly OTHER: race
    static convert(i: integer): race
}

// declare const PLAYER_GAME_RESULT_VICTORY: playergameresult
// declare const PLAYER_GAME_RESULT_DEFEAT : playergameresult
// declare const PLAYER_GAME_RESULT_TIE    : playergameresult
// declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult
// declare function ConvertPlayerGameResult(i: integer): playergameresult

declare abstract class PlayerGameResult {
    static readonly VICTORY: playergameresult
    static readonly DEFEAT: playergameresult
    static readonly TIE: playergameresult
    static readonly NEUTRAL: playergameresult
    static convert(i: integer): playergameresult
}

// declare const ALLIANCE_PASSIVE                : alliancetype
// declare const ALLIANCE_HELP_REQUEST           : alliancetype
// declare const ALLIANCE_HELP_RESPONSE          : alliancetype
// declare const ALLIANCE_SHARED_XP              : alliancetype
// declare const ALLIANCE_SHARED_SPELLS          : alliancetype
// declare const ALLIANCE_SHARED_VISION          : alliancetype
// declare const ALLIANCE_SHARED_CONTROL         : alliancetype
// declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype
// declare const ALLIANCE_RESCUABLE              : alliancetype
// declare const ALLIANCE_SHARED_VISION_FORCED   : alliancetype
// declare function ConvertAliianceType(i: integer): alliancetype

declare abstract class AllianceType {
    static readonly PASSIVE: alliancetype
    static readonly HELP_REQUEST: alliancetype
    static readonly HELP_RESPONSE: alliancetype
    static readonly SHARED_XP: alliancetype
    static readonly SHARED_SPELLS: alliancetype
    static readonly SHARED_VISION: alliancetype
    static readonly SHARED_CONTROL: alliancetype
    static readonly SHARED_ADVANCED_CONTROL: alliancetype
    static readonly RESCUABLE: alliancetype
    static readonly SHARED_VISION_FORCED: alliancetype
    static convert(i: integer): alliancetype
}

// declare const VERSION_REIGN_OF_CHAOS: version
// declare const VERSION_FROZEN_THRONE : version
// declare function ConvertVersion(i: integer): version

declare abstract class Version {
    static readonly REIGN_OF_CHAOS: version
    static readonly FROZEN_THRONE: version
    static convert(i: integer): version
}

// declare const ATTACK_TYPE_NORMAL: attacktype
// declare const ATTACK_TYPE_MELEE : attacktype
// declare const ATTACK_TYPE_PIERCE: attacktype
// declare const ATTACK_TYPE_SIEGE : attacktype
// declare const ATTACK_TYPE_MAGIC : attacktype
// declare const ATTACK_TYPE_CHAOS : attacktype
// declare const ATTACK_TYPE_HERO  : attacktype
// declare function ConvertAttackType(i: integer): attacktype

declare abstract class AttackType {
    static readonly NORMAL: attacktype
    static readonly MELEE: attacktype
    static readonly PIERCE: attacktype
    static readonly SIEGE: attacktype
    static readonly MAGIC: attacktype
    static readonly CHAOS: attacktype
    static readonly HERO: attacktype
    static convert(i: integer): attacktype
}

// declare const DAMAGE_TYPE_UNKNOWN   : damagetype
// declare const DAMAGE_TYPE_NORMAL    : damagetype
// declare const DAMAGE_TYPE_ENHANCED  : damagetype
// declare const DAMAGE_TYPE_FIRE      : damagetype
// declare const DAMAGE_TYPE_COLD      : damagetype
// declare const DAMAGE_TYPE_LIGHTNING  : damagetype
// declare const DAMAGE_TYPE_POISON     : damagetype
// declare const DAMAGE_TYPE_DISEASE    : damagetype
// declare const DAMAGE_TYPE_DIVINE     : damagetype
// declare const DAMAGE_TYPE_MAGIC      : damagetype
// declare const DAMAGE_TYPE_SONIC      : damagetype
// declare const DAMAGE_TYPE_ACID       : damagetype
// declare const DAMAGE_TYPE_FORCE      : damagetype
// declare const DAMAGE_TYPE_DEATH      : damagetype
// declare const DAMAGE_TYPE_MIND       : damagetype
// declare const DAMAGE_TYPE_PLANT      : damagetype
// declare const DAMAGE_TYPE_DEFENSIVE  : damagetype
// declare const DAMAGE_TYPE_DEMOLITION : damagetype
// declare const DAMAGE_TYPE_SLOW_POISON: damagetype
// declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype
// declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype
// declare const DAMAGE_TYPE_UNIVERSAL    : damagetype
// declare function ConvertDamageType(i: integer): damagetype

declare abstract class DamageType {
    static readonly UNKNOWN: damagetype
    static readonly NORMAL: damagetype
    static readonly ENHANCED: damagetype
    static readonly FIRE: damagetype
    static readonly COLD: damagetype
    static readonly LIGHTNING: damagetype
    static readonly POISON: damagetype
    static readonly DISEASE: damagetype
    static readonly DIVINE: damagetype
    static readonly MAGIC: damagetype
    static readonly SONIC: damagetype
    static readonly ACID: damagetype
    static readonly FORCE: damagetype
    static readonly DEATH: damagetype
    static readonly MIND: damagetype
    static readonly PLANT: damagetype
    static readonly DEFENSIVE: damagetype
    static readonly DEMOLITION: damagetype
    static readonly SLOW_POISON: damagetype
    static readonly SPIRIT_LINK: damagetype
    static readonly SHADOW_STRIKE: damagetype
    static readonly UNIVERSAL: damagetype
    static convert(i: integer): damagetype
}

// declare const WEAPON_TYPE_WHOKNOWS: weapontype
// declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype
// declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype
// declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype
// declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype
// declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype
// declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype
// declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype
// declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype
// declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype
// declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype
// declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype
// declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype
// declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype
// declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype
// declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype
// declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype
// declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype
// declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype
// declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype
// declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype
// declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype
// declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype
// declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype
// declare function ConvertWeaponType(i: integer): weapontype

declare abstract class WeaponType {
    static readonly WHOKNOWS: weapontype
    static readonly METAL_LIGHT_CHOP: weapontype
    static readonly METAL_MEDIUM_CHOP: weapontype
    static readonly METAL_HEAVY_CHOP: weapontype
    static readonly METAL_LIGHT_SLICE: weapontype
    static readonly METAL_MEDIUM_SLICE: weapontype
    static readonly METAL_HEAVY_SLICE: weapontype
    static readonly METAL_MEDIUM_BASH: weapontype
    static readonly METAL_HEAVY_BASH: weapontype
    static readonly METAL_MEDIUM_STAB: weapontype
    static readonly METAL_HEAVY_STAB: weapontype
    static readonly WOOD_LIGHT_SLICE: weapontype
    static readonly WOOD_MEDIUM_SLICE: weapontype
    static readonly WOOD_HEAVY_SLICE: weapontype
    static readonly WOOD_LIGHT_BASH: weapontype
    static readonly WOOD_MEDIUM_BASH: weapontype
    static readonly WOOD_HEAVY_BASH: weapontype
    static readonly WOOD_LIGHT_STAB: weapontype
    static readonly WOOD_MEDIUM_STAB: weapontype
    static readonly CLAW_LIGHT_SLICE: weapontype
    static readonly CLAW_MEDIUM_SLICE: weapontype
    static readonly CLAW_HEAVY_SLICE: weapontype
    static readonly AXE_MEDIUM_CHOP: weapontype
    static readonly ROCK_HEAVY_BASH: weapontype
    static convert(i: integer): weapontype
}

// declare const PATHING_TYPE_ANY               : pathingtype
// declare const PATHING_TYPE_WALKABILITY       : pathingtype
// declare const PATHING_TYPE_FLYABILITY        : pathingtype
// declare const PATHING_TYPE_BUILDABILITY      : pathingtype
// declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype
// declare const PATHING_TYPE_BLIGHTPATHING     : pathingtype
// declare const PATHING_TYPE_FLOATABILITY      : pathingtype
// declare const PATHING_TYPE_AMPHIBIOUSPATHING : pathingtype
// declare function ConvertPathingType(i: integer): pathingtype

declare abstract class PathingType {
    static readonly ANY: pathingtype
    static readonly WALK_ABILITY: pathingtype
    static readonly FLY_ABILITY: pathingtype
    static readonly BUILD_ABILITY: pathingtype
    static readonly PEON_HARVEST_PATHING: pathingtype
    static readonly BLIGHT_PATHING: pathingtype
    static readonly FLOAT_ABILITY: pathingtype
    static readonly AMPHIBIOUS_PATHING: pathingtype
    static convert(i: integer): pathingtype
}

// declare const MOUSE_BUTTON_TYPE_LEFT  : mousebuttontype
// declare const MOUSE_BUTTON_TYPE_MIDDLE: mousebuttontype
// declare const MOUSE_BUTTON_TYPE_RIGHT : mousebuttontype
// declare function ConvertMouseButtonType(i: integer): mousebuttontype

declare abstract class MouseButtonType {
    static readonly LEFT: mousebuttontype
    static readonly MIDDLE: mousebuttontype
    static readonly RIGHT: mousebuttontype
    static convert(i: integer): mousebuttontype
}

// declare const ANIM_TYPE_BIRTH    : animtype
// declare const ANIM_TYPE_DEATH    : animtype
// declare const ANIM_TYPE_DECAY    : animtype
// declare const ANIM_TYPE_DISSIPATE: animtype
// declare const ANIM_TYPE_STAND    : animtype
// declare const ANIM_TYPE_WALK     : animtype
// declare const ANIM_TYPE_ATTACK   : animtype
// declare const ANIM_TYPE_MORPH    : animtype
// declare const ANIM_TYPE_SLEEP    : animtype
// declare const ANIM_TYPE_SPELL    : animtype
// declare const ANIM_TYPE_PORTRAIT  : animtype
// declare function ConvertAnimType(i: integer): animtype

declare abstract class AnimType {
    static readonly BIRTH: animtype
    static readonly DEATH: animtype
    static readonly DECAY: animtype
    static readonly DISSIPATE: animtype
    static readonly STAND: animtype
    static readonly WALK: animtype
    static readonly ATTACK: animtype
    static readonly MORPH: animtype
    static readonly SLEEP: animtype
    static readonly SPELL: animtype
    static readonly PORTRAIT: animtype
    static convert(i: integer): animtype
}

// declare const SUBANIM_TYPE_ROOTED: subanimtype
// declare const SUBANIM_TYPE_ALTERNATE_EX: subanimtype
// declare const SUBANIM_TYPE_LOOPING: subanimtype
// declare const SUBANIM_TYPE_SLAM: subanimtype
// declare const SUBANIM_TYPE_THROW: subanimtype
// declare const SUBANIM_TYPE_SPIKED: subanimtype
// declare const SUBANIM_TYPE_FAST: subanimtype
// declare const SUBANIM_TYPE_SPIN: subanimtype
// declare const SUBANIM_TYPE_READY: subanimtype
// declare const SUBANIM_TYPE_CHANNEL: subanimtype
// declare const SUBANIM_TYPE_DEFEND: subanimtype
// declare const SUBANIM_TYPE_VICTORY: subanimtype
// declare const SUBANIM_TYPE_TURN: subanimtype
// declare const SUBANIM_TYPE_LEFT: subanimtype
// declare const SUBANIM_TYPE_RIGHT: subanimtype
// declare const SUBANIM_TYPE_FIRE: subanimtype
// declare const SUBANIM_TYPE_FLESH: subanimtype
// declare const SUBANIM_TYPE_HIT: subanimtype
// declare const SUBANIM_TYPE_WOUNDED: subanimtype
// declare const SUBANIM_TYPE_LIGHT: subanimtype
// declare const SUBANIM_TYPE_MODERATE: subanimtype
// declare const SUBANIM_TYPE_SEVERE: subanimtype
// declare const SUBANIM_TYPE_CRITICAL: subanimtype
// declare const SUBANIM_TYPE_COMPLETE: subanimtype
// declare const SUBANIM_TYPE_GOLD: subanimtype
// declare const SUBANIM_TYPE_LUMBER: subanimtype
// declare const SUBANIM_TYPE_WORK: subanimtype
// declare const SUBANIM_TYPE_TALK: subanimtype
// declare const SUBANIM_TYPE_FIRST: subanimtype
// declare const SUBANIM_TYPE_SECOND: subanimtype
// declare const SUBANIM_TYPE_THIRD: subanimtype
// declare const SUBANIM_TYPE_FOURTH: subanimtype
// declare const SUBANIM_TYPE_FIFTH: subanimtype
// declare const SUBANIM_TYPE_ONE: subanimtype
// declare const SUBANIM_TYPE_TWO: subanimtype
// declare const SUBANIM_TYPE_THREE: subanimtype
// declare const SUBANIM_TYPE_FOUR: subanimtype
// declare const SUBANIM_TYPE_FIVE: subanimtype
// declare const SUBANIM_TYPE_SMALL: subanimtype
// declare const SUBANIM_TYPE_MEDIUM: subanimtype
// declare const SUBANIM_TYPE_LARGE: subanimtype
// declare const SUBANIM_TYPE_UPGRADE: subanimtype
// declare const SUBANIM_TYPE_DRAIN: subanimtype
// declare const SUBANIM_TYPE_FILL: subanimtype
// declare const SUBANIM_TYPE_CHAINLIGHTNI: subanimtype
// declare const SUBANIM_TYPE_EATTREE: subanimtype
// declare const SUBANIM_TYPE_PUKE: subanimtype
// declare const SUBANIM_TYPE_FLAIL: subanimtype
// declare const SUBANIM_TYPE_OFF: subanimtype
// declare const SUBANIM_TYPE_SWIM: subanimtype
// declare const SUBANIM_TYPE_ENTANGLE: subanimtype
// declare const SUBANIM_TYPE_BERSERK: subanimtype
// declare function ConvertSubAnimType(i: integer): subanimtype

declare abstract class SubAnimType {
    static readonly ROOTED: subanimtype
    static readonly ALTERNATE_EX: subanimtype
    static readonly LOOPING: subanimtype
    static readonly SLAM: subanimtype
    static readonly THROW: subanimtype
    static readonly SPIKED: subanimtype
    static readonly FAST: subanimtype
    static readonly SPIN: subanimtype
    static readonly READY: subanimtype
    static readonly CHANNEL: subanimtype
    static readonly DEFEND: subanimtype
    static readonly VICTORY: subanimtype
    static readonly TURN: subanimtype
    static readonly LEFT: subanimtype
    static readonly RIGHT: subanimtype
    static readonly FIRE: subanimtype
    static readonly FLESH: subanimtype
    static readonly HIT: subanimtype
    static readonly WOUNDED: subanimtype
    static readonly LIGHT: subanimtype
    static readonly MODERATE: subanimtype
    static readonly SEVERE: subanimtype
    static readonly CRITICAL: subanimtype
    static readonly COMPLETE: subanimtype
    static readonly GOLD: subanimtype
    static readonly LUMBER: subanimtype
    static readonly WORK: subanimtype
    static readonly TALK: subanimtype
    static readonly FIRST: subanimtype
    static readonly SECOND: subanimtype
    static readonly THIRD: subanimtype
    static readonly FOURTH: subanimtype
    static readonly FIFTH: subanimtype
    static readonly ONE: subanimtype
    static readonly TWO: subanimtype
    static readonly THREE: subanimtype
    static readonly FOUR: subanimtype
    static readonly FIVE: subanimtype
    static readonly SMALL: subanimtype
    static readonly MEDIUM: subanimtype
    static readonly LARGE: subanimtype
    static readonly UPGRADE: subanimtype
    static readonly DRAIN: subanimtype
    static readonly FILL: subanimtype
    static readonly CHAINLIGHTNI: subanimtype
    static readonly EATTREE: subanimtype
    static readonly PUKE: subanimtype
    static readonly FLAIL: subanimtype
    static readonly OFF: subanimtype
    static readonly SWIM: subanimtype
    static readonly ENTANGLE: subanimtype
    static readonly BERSERK: subanimtype
    static convert(i: integer): subanimtype
}

// declare const PATHING_FLAG_UNWALKABLE  : pathingflag
// declare const PATHING_FLAG_UNFLYABLE   : pathingflag
// declare const PATHING_FLAG_UNBUILDABLE : pathingflag
// declare const PATHING_FLAG_UNPEONHARVEST: pathingflag
// declare const PATHING_FLAG_BLIGHTED     : pathingflag
// declare const PATHING_FLAG_UNFLOATABLE  : pathingflag
// declare const PATHING_FLAG_UNAMPHIBIOUS  : pathingflag
// declare const PATHING_FLAG_UNITEMPLACABLE: pathingflag
// declare function ConvertPathingFlag(i: integer): pathingflag

declare abstract class PathingFlag {
    static readonly UNWALKABLE: pathingflag
    static readonly UNFLYABLE: pathingflag
    static readonly UNBUILDABLE: pathingflag
    static readonly UNPEONHARVEST: pathingflag
    static readonly BLIGHTED: pathingflag
    static readonly UNFLOATABLE: pathingflag
    static readonly UNAMPHIBIOUS: pathingflag
    static readonly UNITEMPLACABLE: pathingflag
    static convert(i: integer): pathingflag
}

// declare const ITEM_TYPE_PERMANENT: itemtype
// declare const ITEM_TYPE_CHARGED: itemtype
// declare const ITEM_TYPE_POWERUP: itemtype
// declare const ITEM_TYPE_ARTIFACT: itemtype
// declare const ITEM_TYPE_PURCHASABLE: itemtype
// declare const ITEM_TYPE_CAMPAIGN: itemtype
// declare const ITEM_TYPE_MISCELLANEOUS: itemtype
// declare const ITEM_TYPE_UNKNOWN: itemtype
// declare const ITEM_TYPE_ANY: itemtype
// declare const ITEM_TYPE_TOME: itemtype
// declare function ConvertItemType(i: integer): itemtype

declare abstract class ItemType {
    static readonly PERMANENT: itemtype
    static readonly CHARGED: itemtype
    static readonly POWERUP: itemtype
    static readonly ARTIFACT: itemtype
    static readonly PURCHASABLE: itemtype
    static readonly CAMPAIGN: itemtype
    static readonly MISCELLANEOUS: itemtype
    static readonly UNKNOWN: itemtype
    static readonly ANY: itemtype
    //Deprecated, should use ITEM_TYPE_POWERUP
    static readonly TOME: itemtype
    static convert(i: integer): itemtype
}

// declare const RACE_PREF_HUMAN         : racepreference
// declare const RACE_PREF_ORC           : racepreference
// declare const RACE_PREF_NIGHTELF      : racepreference
// declare const RACE_PREF_UNDEAD        : racepreference
// declare const RACE_PREF_DEMON          : racepreference
// declare const RACE_PREF_RANDOM         : racepreference
// declare const RACE_PREF_USER_SELECTABLE: racepreference
// declare function ConvertRacePref(i: integer): racepreference

declare abstract class RacePref {
    static readonly HUMAN: racepreference
    static readonly ORC: racepreference
    static readonly NIGHTELF: racepreference
    static readonly UNDEAD: racepreference
    static readonly DEMON: racepreference
    static readonly RANDOM: racepreference
    static readonly USER_SELECTABLE: racepreference
    static convert(i: integer): racepreference
}

// declare const MAP_CONTROL_USER     : mapcontrol
// declare const MAP_CONTROL_COMPUTER : mapcontrol
// declare const MAP_CONTROL_RESCUABLE: mapcontrol
// declare const MAP_CONTROL_NEUTRAL  : mapcontrol
// declare const MAP_CONTROL_CREEP    : mapcontrol
// declare const MAP_CONTROL_NONE     : mapcontrol
// declare function ConvertMapControl(i: integer): mapcontrol

declare abstract class MapControl {
    static readonly USER: mapcontrol
    static readonly COMPUTER: mapcontrol
    static readonly RESCUABLE: mapcontrol
    static readonly NEUTRAL: mapcontrol
    static readonly CREEP: mapcontrol
    static readonly NONE: mapcontrol
    static convert(i: integer): mapcontrol
}

// declare const GAME_TYPE_MELEE           : gametype
// declare const GAME_TYPE_FFA             : gametype
// declare const GAME_TYPE_USE_MAP_SETTINGS: gametype
// declare const GAME_TYPE_BLIZ            : gametype
// declare const GAME_TYPE_ONE_ON_ONE      :  gametype
// declare const GAME_TYPE_TWO_TEAM_PLAY   :  gametype
// declare const GAME_TYPE_THREE_TEAM_PLAY :  gametype
// declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype
// declare function ConvertGameType(i: integer): gametype

declare abstract class GameType {
    static readonly MELEE: gametype
    static readonly FFA: gametype
    static readonly USE_MAP_SETTINGS: gametype
    static readonly BLIZ: gametype
    static readonly ONE_ON_ONE: gametype
    static readonly TWO_TEAM_PLAY: gametype
    static readonly THREE_TEAM_PLAY: gametype
    static readonly FOUR_TEAM_PLAY: gametype
    static convert(i: integer): gametype
}

// declare const MAP_FOG_HIDE_TERRAIN  : mapflag
// declare const MAP_FOG_MAP_EXPLORED  : mapflag
// declare const MAP_FOG_ALWAYS_VISIBLE: mapflag
// declare const MAP_USE_HANDICAPS: mapflag
// declare const MAP_OBSERVERS: mapflag
// declare const MAP_OBSERVERS_ON_DEATH: mapflag

// declare const MAP_FIXED_COLORS: mapflag
// declare const MAP_LOCK_RESOURCE_TRADING: mapflag
// declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag

// declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag
// declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag

// declare const MAP_CHEATS: mapflag
// declare const MAP_CHEATS_HIDDEN: mapflag

// declare const MAP_LOCK_SPEED: mapflag
// declare const MAP_LOCK_RANDOM_SEED: mapflag
// declare const MAP_SHARED_ADVANCED_CONTROL: mapflag
// declare const MAP_RANDOM_HERO: mapflag
// declare const MAP_RANDOM_RACES: mapflag
// declare const MAP_RELOADED: mapflag
// declare function ConvertMapFlag(i: integer): mapflag

declare abstract class MapFlag {
    static readonly HIDE_TERRAIN: mapflag
    static readonly MAP_EXPLORED: mapflag
    static readonly ALWAYS_VISIBLE: mapflag
    static readonly USE_HANDICAPS: mapflag
    static readonly OBSERVERS: mapflag
    static readonly OBSERVERS_ON_DEATH: mapflag

    static readonly FIXED_COLORS: mapflag
    static readonly LOCK_RESOURCE_TRADING: mapflag
    static readonly RESOURCE_TRADING_ALLIES_ONLY: mapflag

    static readonly LOCK_ALLIANCE_CHANGES: mapflag
    static readonly ALLIANCE_CHANGES_HIDDEN: mapflag

    static readonly CHEATS: mapflag
    static readonly CHEATS_HIDDEN: mapflag

    static readonly LOCK_SPEED: mapflag
    static readonly LOCK_RANDOM_SEED: mapflag
    static readonly SHARED_ADVANCED_CONTROL: mapflag
    static readonly RANDOM_HERO: mapflag
    static readonly RANDOM_RACES: mapflag
    static readonly RELOADED: mapflag
    static convert(i: integer): mapflag
}

// declare const MAP_PLACEMENT_RANDOM: placement
// declare const MAP_PLACEMENT_FIXED: placement
// declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement
// declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement
// declare function ConvertPlacement(i: integer): placement

declare abstract class MapPlacement {
    // random among all slots
    static readonly RANDOM: placement
    // player 0 in start loc 0...
    static readonly FIXED: placement
    // whatever was specified by the script
    static readonly USE_MAP_SETTINGS: placement
    // random with allies next to each other
    static readonly TEAMS_TOGETHER: placement
    static convert(i: integer): placement
}

// declare const MAP_LOC_PRIO_LOW : startlocprio
// declare const MAP_LOC_PRIO_HIGH: startlocprio
// declare const MAP_LOC_PRIO_NOT : startlocprio
// declare function ConvertStartLocPrio(i: integer): startlocprio

declare abstract class MapLocPrio {
    static readonly LOW: startlocprio
    static readonly HIGH: startlocprio
    static readonly NOT: startlocprio
    static convert(i: integer): startlocprio
}

// declare const MAP_DENSITY_NONE  : mapdensity
// declare const MAP_DENSITY_LIGHT : mapdensity
// declare const MAP_DENSITY_MEDIUM: mapdensity
// declare const MAP_DENSITY_HEAVY : mapdensity
// declare function ConvertMapDensity(i: integer): mapdensity

declare abstract class MapDensity {
    static readonly NONE: mapdensity
    static readonly LIGHT: mapdensity
    static readonly MEDIUM: mapdensity
    static readonly HEAVY: mapdensity
    static convert(i: integer): mapdensity
}

// declare const MAP_DIFFICULTY_EASY  : gamedifficulty
// declare const MAP_DIFFICULTY_NORMAL: gamedifficulty
// declare const MAP_DIFFICULTY_HARD  : gamedifficulty
// declare const MAP_DIFFICULTY_INSANE: gamedifficulty
// declare function ConvertGameDifficulty(i: integer): gamedifficulty

declare abstract class GameDifficulty {
    static readonly EASY: gamedifficulty
    static readonly NORMAL: gamedifficulty
    static readonly HARD: gamedifficulty
    static readonly INSANE: gamedifficulty
    static convert(i: integer): gamedifficulty
}

// declare const MAP_SPEED_SLOWEST: gamespeed
// declare const MAP_SPEED_SLOW   : gamespeed
// declare const MAP_SPEED_NORMAL : gamespeed
// declare const MAP_SPEED_FAST   : gamespeed
// declare const MAP_SPEED_FASTEST: gamespeed
// declare function ConvertGameSpeed(i: integer): gamespeed

declare abstract class GameSpeed {
    static readonly SLOWEST: gamespeed
    static readonly SLOW: gamespeed
    static readonly NORMAL: gamespeed
    static readonly FAST: gamespeed
    static readonly FASTEST: gamespeed
    static convert(i: integer): gamespeed
}

// declare const PLAYER_SLOT_STATE_EMPTY  : playerslotstate
// declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate
// declare const PLAYER_SLOT_STATE_LEFT   : playerslotstate
// declare function ConvertPlayerSlotState(i: integer): playerslotstate

declare abstract class PlayerSlotState {
    static readonly EMPTY: playerslotstate
    static readonly PLAYING: playerslotstate
    static readonly LEFT: playerslotstate
    static convert(i: integer): playerslotstate
}

// declare const OSKEY_BACKSPACE                      : oskeytype
// declare const OSKEY_TAB                            : oskeytype
// declare const OSKEY_CLEAR                          : oskeytype
// declare const OSKEY_RETURN                         : oskeytype
// declare const OSKEY_SHIFT                          : oskeytype
// declare const OSKEY_CONTROL                        : oskeytype
// declare const OSKEY_ALT                            : oskeytype
// declare const OSKEY_PAUSE                          : oskeytype
// declare const OSKEY_CAPSLOCK                       : oskeytype
// declare const OSKEY_KANA                           : oskeytype
// declare const OSKEY_HANGUL                         : oskeytype
// declare const OSKEY_JUNJA                          : oskeytype
// declare const OSKEY_FINAL                          : oskeytype
// declare const OSKEY_HANJA                          : oskeytype
// declare const OSKEY_KANJI                          : oskeytype
// declare const OSKEY_ESCAPE                         : oskeytype
// declare const OSKEY_CONVERT                        : oskeytype
// declare const OSKEY_NONCONVERT                     : oskeytype
// declare const OSKEY_ACCEPT                         : oskeytype
// declare const OSKEY_MODECHANGE                     : oskeytype
// declare const OSKEY_SPACE                          : oskeytype
// declare const OSKEY_PAGEUP                         : oskeytype
// declare const OSKEY_PAGEDOWN                       : oskeytype
// declare const OSKEY_END                            : oskeytype
// declare const OSKEY_HOME                           : oskeytype
// declare const OSKEY_LEFT                           : oskeytype
// declare const OSKEY_UP                             : oskeytype
// declare const OSKEY_RIGHT                          : oskeytype
// declare const OSKEY_DOWN                           : oskeytype
// declare const OSKEY_SELECT                         : oskeytype
// declare const OSKEY_PRINT                          : oskeytype
// declare const OSKEY_EXECUTE                        : oskeytype
// declare const OSKEY_PRINTSCREEN                    : oskeytype
// declare const OSKEY_INSERT                         : oskeytype
// declare const OSKEY_DELETE                         : oskeytype
// declare const OSKEY_HELP                           : oskeytype
// declare const OSKEY_0                              : oskeytype
// declare const OSKEY_1                              : oskeytype
// declare const OSKEY_2                              : oskeytype
// declare const OSKEY_3                              : oskeytype
// declare const OSKEY_4                              : oskeytype
// declare const OSKEY_5                              : oskeytype
// declare const OSKEY_6                              : oskeytype
// declare const OSKEY_7                              : oskeytype
// declare const OSKEY_8                              : oskeytype
// declare const OSKEY_9                              : oskeytype
// declare const OSKEY_A                              : oskeytype
// declare const OSKEY_B                              : oskeytype
// declare const OSKEY_C                              : oskeytype
// declare const OSKEY_D                              : oskeytype
// declare const OSKEY_E                              : oskeytype
// declare const OSKEY_F                              : oskeytype
// declare const OSKEY_G                              : oskeytype
// declare const OSKEY_H                              : oskeytype
// declare const OSKEY_I                              : oskeytype
// declare const OSKEY_J                              : oskeytype
// declare const OSKEY_K                              : oskeytype
// declare const OSKEY_L                              : oskeytype
// declare const OSKEY_M                              : oskeytype
// declare const OSKEY_N                              : oskeytype
// declare const OSKEY_O                              : oskeytype
// declare const OSKEY_P                              : oskeytype
// declare const OSKEY_Q                              : oskeytype
// declare const OSKEY_R                              : oskeytype
// declare const OSKEY_S                              : oskeytype
// declare const OSKEY_T                              : oskeytype
// declare const OSKEY_U                              : oskeytype
// declare const OSKEY_V                              : oskeytype
// declare const OSKEY_W                              : oskeytype
// declare const OSKEY_X                              : oskeytype
// declare const OSKEY_Y                              : oskeytype
// declare const OSKEY_Z                              : oskeytype
// declare const OSKEY_LMETA                          : oskeytype
// declare const OSKEY_RMETA                          : oskeytype
// declare const OSKEY_APPS                           : oskeytype
// declare const OSKEY_SLEEP                          : oskeytype
// declare const OSKEY_NUMPAD0                        : oskeytype
// declare const OSKEY_NUMPAD1                        : oskeytype
// declare const OSKEY_NUMPAD2                        : oskeytype
// declare const OSKEY_NUMPAD3                        : oskeytype
// declare const OSKEY_NUMPAD4                        : oskeytype
// declare const OSKEY_NUMPAD5                        : oskeytype
// declare const OSKEY_NUMPAD6                        : oskeytype
// declare const OSKEY_NUMPAD7                        : oskeytype
// declare const OSKEY_NUMPAD8                        : oskeytype
// declare const OSKEY_NUMPAD9                        : oskeytype
// declare const OSKEY_MULTIPLY                       : oskeytype
// declare const OSKEY_ADD                            : oskeytype
// declare const OSKEY_SEPARATOR                      : oskeytype
// declare const OSKEY_SUBTRACT                       : oskeytype
// declare const OSKEY_DECIMAL                        : oskeytype
// declare const OSKEY_DIVIDE                         : oskeytype
// declare const OSKEY_F1                             : oskeytype
// declare const OSKEY_F2                             : oskeytype
// declare const OSKEY_F3                             : oskeytype
// declare const OSKEY_F4                             : oskeytype
// declare const OSKEY_F5                             : oskeytype
// declare const OSKEY_F6                             : oskeytype
// declare const OSKEY_F7                             : oskeytype
// declare const OSKEY_F8                             : oskeytype
// declare const OSKEY_F9                             : oskeytype
// declare const OSKEY_F10                            : oskeytype
// declare const OSKEY_F11                            : oskeytype
// declare const OSKEY_F12                            : oskeytype
// declare const OSKEY_F13                            : oskeytype
// declare const OSKEY_F14                            : oskeytype
// declare const OSKEY_F15                            : oskeytype
// declare const OSKEY_F16                            : oskeytype
// declare const OSKEY_F17                            : oskeytype
// declare const OSKEY_F18                            : oskeytype
// declare const OSKEY_F19                            : oskeytype
// declare const OSKEY_F20                            : oskeytype
// declare const OSKEY_F21                            : oskeytype
// declare const OSKEY_F22                            : oskeytype
// declare const OSKEY_F23                            : oskeytype
// declare const OSKEY_F24                            : oskeytype
// declare const OSKEY_NUMLOCK                        : oskeytype
// declare const OSKEY_SCROLLLOCK                     : oskeytype
// declare const OSKEY_OEM_NEC_EQUAL                  : oskeytype
// declare const OSKEY_OEM_FJ_JISHO                   : oskeytype
// declare const OSKEY_OEM_FJ_MASSHOU                 : oskeytype
// declare const OSKEY_OEM_FJ_TOUROKU                 : oskeytype
// declare const OSKEY_OEM_FJ_LOYA                    : oskeytype
// declare const OSKEY_OEM_FJ_ROYA                    : oskeytype
// declare const OSKEY_LSHIFT                         : oskeytype
// declare const OSKEY_RSHIFT                         : oskeytype
// declare const OSKEY_LCONTROL                       : oskeytype
// declare const OSKEY_RCONTROL                       : oskeytype
// declare const OSKEY_LALT                           : oskeytype
// declare const OSKEY_RALT                           : oskeytype
// declare const OSKEY_BROWSER_BACK                   : oskeytype
// declare const OSKEY_BROWSER_FORWARD                : oskeytype
// declare const OSKEY_BROWSER_REFRESH                : oskeytype
// declare const OSKEY_BROWSER_STOP                   : oskeytype
// declare const OSKEY_BROWSER_SEARCH                 : oskeytype
// declare const OSKEY_BROWSER_FAVORITES              : oskeytype
// declare const OSKEY_BROWSER_HOME                   : oskeytype
// declare const OSKEY_VOLUME_MUTE                    : oskeytype
// declare const OSKEY_VOLUME_DOWN                    : oskeytype
// declare const OSKEY_VOLUME_UP                      : oskeytype
// declare const OSKEY_MEDIA_NEXT_TRACK               : oskeytype
// declare const OSKEY_MEDIA_PREV_TRACK               : oskeytype
// declare const OSKEY_MEDIA_STOP                     : oskeytype
// declare const OSKEY_MEDIA_PLAY_PAUSE               : oskeytype
// declare const OSKEY_LAUNCH_MAIL                    : oskeytype
// declare const OSKEY_LAUNCH_MEDIA_SELECT            : oskeytype
// declare const OSKEY_LAUNCH_APP1                    : oskeytype
// declare const OSKEY_LAUNCH_APP2                    : oskeytype
// declare const OSKEY_OEM_1                          : oskeytype
// declare const OSKEY_OEM_PLUS                       : oskeytype
// declare const OSKEY_OEM_COMMA                      : oskeytype
// declare const OSKEY_OEM_MINUS                      : oskeytype
// declare const OSKEY_OEM_PERIOD                     : oskeytype
// declare const OSKEY_OEM_2                          : oskeytype
// declare const OSKEY_OEM_3                          : oskeytype
// declare const OSKEY_OEM_4                          : oskeytype
// declare const OSKEY_OEM_5                          : oskeytype
// declare const OSKEY_OEM_6                          : oskeytype
// declare const OSKEY_OEM_7                          : oskeytype
// declare const OSKEY_OEM_8                          : oskeytype
// declare const OSKEY_OEM_AX                         : oskeytype
// declare const OSKEY_OEM_102                        : oskeytype
// declare const OSKEY_ICO_HELP                       : oskeytype
// declare const OSKEY_ICO_00                         : oskeytype
// declare const OSKEY_PROCESSKEY                     : oskeytype
// declare const OSKEY_ICO_CLEAR                      : oskeytype
// declare const OSKEY_PACKET                         : oskeytype
// declare const OSKEY_OEM_RESET                      : oskeytype
// declare const OSKEY_OEM_JUMP                       : oskeytype
// declare const OSKEY_OEM_PA1                        : oskeytype
// declare const OSKEY_OEM_PA2                        : oskeytype
// declare const OSKEY_OEM_PA3                        : oskeytype
// declare const OSKEY_OEM_WSCTRL                     : oskeytype
// declare const OSKEY_OEM_CUSEL                      : oskeytype
// declare const OSKEY_OEM_ATTN                       : oskeytype
// declare const OSKEY_OEM_FINISH                     : oskeytype
// declare const OSKEY_OEM_COPY                       : oskeytype
// declare const OSKEY_OEM_AUTO                       : oskeytype
// declare const OSKEY_OEM_ENLW                       : oskeytype
// declare const OSKEY_OEM_BACKTAB                    : oskeytype
// declare const OSKEY_ATTN                           : oskeytype
// declare const OSKEY_CRSEL                          : oskeytype
// declare const OSKEY_EXSEL                          : oskeytype
// declare const OSKEY_EREOF                          : oskeytype
// declare const OSKEY_PLAY                           : oskeytype
// declare const OSKEY_ZOOM                           : oskeytype
// declare const OSKEY_NONAME                         : oskeytype
// declare const OSKEY_PA1                            : oskeytype
// declare const OSKEY_OEM_CLEAR                      : oskeytype
// declare function ConvertOsKeyType(i: integer): oskeytype

declare abstract class OSKeyType {
    static readonly BACKSPACE: oskeytype
    static readonly TAB: oskeytype
    static readonly CLEAR: oskeytype
    static readonly RETURN: oskeytype
    static readonly SHIFT: oskeytype
    static readonly CONTROL: oskeytype
    static readonly ALT: oskeytype
    static readonly PAUSE: oskeytype
    static readonly CAPSLOCK: oskeytype
    static readonly KANA: oskeytype
    static readonly HANGUL: oskeytype
    static readonly JUNJA: oskeytype
    static readonly FINAL: oskeytype
    static readonly HANJA: oskeytype
    static readonly KANJI: oskeytype
    static readonly ESCAPE: oskeytype
    static readonly CONVERT: oskeytype
    static readonly NONCONVERT: oskeytype
    static readonly ACCEPT: oskeytype
    static readonly MODECHANGE: oskeytype
    static readonly SPACE: oskeytype
    static readonly PAGEUP: oskeytype
    static readonly PAGEDOWN: oskeytype
    static readonly END: oskeytype
    static readonly HOME: oskeytype
    static readonly LEFT: oskeytype
    static readonly UP: oskeytype
    static readonly RIGHT: oskeytype
    static readonly DOWN: oskeytype
    static readonly SELECT: oskeytype
    static readonly PRINT: oskeytype
    static readonly EXECUTE: oskeytype
    static readonly PRINTSCREEN: oskeytype
    static readonly INSERT: oskeytype
    static readonly DELETE: oskeytype
    static readonly HELP: oskeytype
    static readonly 0: oskeytype
    static readonly 1: oskeytype
    static readonly 2: oskeytype
    static readonly 3: oskeytype
    static readonly 4: oskeytype
    static readonly 5: oskeytype
    static readonly 6: oskeytype
    static readonly 7: oskeytype
    static readonly 8: oskeytype
    static readonly 9: oskeytype
    static readonly A: oskeytype
    static readonly B: oskeytype
    static readonly C: oskeytype
    static readonly D: oskeytype
    static readonly E: oskeytype
    static readonly F: oskeytype
    static readonly G: oskeytype
    static readonly H: oskeytype
    static readonly I: oskeytype
    static readonly J: oskeytype
    static readonly K: oskeytype
    static readonly L: oskeytype
    static readonly M: oskeytype
    static readonly N: oskeytype
    static readonly O: oskeytype
    static readonly P: oskeytype
    static readonly Q: oskeytype
    static readonly R: oskeytype
    static readonly S: oskeytype
    static readonly T: oskeytype
    static readonly U: oskeytype
    static readonly V: oskeytype
    static readonly W: oskeytype
    static readonly X: oskeytype
    static readonly Y: oskeytype
    static readonly Z: oskeytype
    static readonly LMETA: oskeytype
    static readonly RMETA: oskeytype
    static readonly APPS: oskeytype
    static readonly SLEEP: oskeytype
    static readonly NUMPAD0: oskeytype
    static readonly NUMPAD1: oskeytype
    static readonly NUMPAD2: oskeytype
    static readonly NUMPAD3: oskeytype
    static readonly NUMPAD4: oskeytype
    static readonly NUMPAD5: oskeytype
    static readonly NUMPAD6: oskeytype
    static readonly NUMPAD7: oskeytype
    static readonly NUMPAD8: oskeytype
    static readonly NUMPAD9: oskeytype
    static readonly MULTIPLY: oskeytype
    static readonly ADD: oskeytype
    static readonly SEPARATOR: oskeytype
    static readonly SUBTRACT: oskeytype
    static readonly DECIMAL: oskeytype
    static readonly DIVIDE: oskeytype
    static readonly F1: oskeytype
    static readonly F2: oskeytype
    static readonly F3: oskeytype
    static readonly F4: oskeytype
    static readonly F5: oskeytype
    static readonly F6: oskeytype
    static readonly F7: oskeytype
    static readonly F8: oskeytype
    static readonly F9: oskeytype
    static readonly F10: oskeytype
    static readonly F11: oskeytype
    static readonly F12: oskeytype
    static readonly F13: oskeytype
    static readonly F14: oskeytype
    static readonly F15: oskeytype
    static readonly F16: oskeytype
    static readonly F17: oskeytype
    static readonly F18: oskeytype
    static readonly F19: oskeytype
    static readonly F20: oskeytype
    static readonly F21: oskeytype
    static readonly F22: oskeytype
    static readonly F23: oskeytype
    static readonly F24: oskeytype
    static readonly NUMLOCK: oskeytype
    static readonly SCROLLLOCK: oskeytype
    static readonly OEM_NEC_EQUAL: oskeytype
    static readonly OEM_FJ_JISHO: oskeytype
    static readonly OEM_FJ_MASSHOU: oskeytype
    static readonly OEM_FJ_TOUROKU: oskeytype
    static readonly OEM_FJ_LOYA: oskeytype
    static readonly OEM_FJ_ROYA: oskeytype
    static readonly LSHIFT: oskeytype
    static readonly RSHIFT: oskeytype
    static readonly LCONTROL: oskeytype
    static readonly RCONTROL: oskeytype
    static readonly LALT: oskeytype
    static readonly RALT: oskeytype
    static readonly BROWSER_BACK: oskeytype
    static readonly BROWSER_FORWARD: oskeytype
    static readonly BROWSER_REFRESH: oskeytype
    static readonly BROWSER_STOP: oskeytype
    static readonly BROWSER_SEARCH: oskeytype
    static readonly BROWSER_FAVORITES: oskeytype
    static readonly BROWSER_HOME: oskeytype
    static readonly VOLUME_MUTE: oskeytype
    static readonly VOLUME_DOWN: oskeytype
    static readonly VOLUME_UP: oskeytype
    static readonly MEDIA_NEXT_TRACK: oskeytype
    static readonly MEDIA_PREV_TRACK: oskeytype
    static readonly MEDIA_STOP: oskeytype
    static readonly MEDIA_PLAY_PAUSE: oskeytype
    static readonly LAUNCH_MAIL: oskeytype
    static readonly LAUNCH_MEDIA_SELECT: oskeytype
    static readonly LAUNCH_APP1: oskeytype
    static readonly LAUNCH_APP2: oskeytype
    static readonly OEM_1: oskeytype
    static readonly OEM_PLUS: oskeytype
    static readonly OEM_COMMA: oskeytype
    static readonly OEM_MINUS: oskeytype
    static readonly OEM_PERIOD: oskeytype
    static readonly OEM_2: oskeytype
    static readonly OEM_3: oskeytype
    static readonly OEM_4: oskeytype
    static readonly OEM_5: oskeytype
    static readonly OEM_6: oskeytype
    static readonly OEM_7: oskeytype
    static readonly OEM_8: oskeytype
    static readonly OEM_AX: oskeytype
    static readonly OEM_102: oskeytype
    static readonly ICO_HELP: oskeytype
    static readonly ICO_00: oskeytype
    static readonly PROCESSKEY: oskeytype
    static readonly ICO_CLEAR: oskeytype
    static readonly PACKET: oskeytype
    static readonly OEM_RESET: oskeytype
    static readonly OEM_JUMP: oskeytype
    static readonly OEM_PA1: oskeytype
    static readonly OEM_PA2: oskeytype
    static readonly OEM_PA3: oskeytype
    static readonly OEM_WSCTRL: oskeytype
    static readonly OEM_CUSEL: oskeytype
    static readonly OEM_ATTN: oskeytype
    static readonly OEM_FINISH: oskeytype
    static readonly OEM_COPY: oskeytype
    static readonly OEM_AUTO: oskeytype
    static readonly OEM_ENLW: oskeytype
    static readonly OEM_BACKTAB: oskeytype
    static readonly ATTN: oskeytype
    static readonly CRSEL: oskeytype
    static readonly EXSEL: oskeytype
    static readonly EREOF: oskeytype
    static readonly PLAY: oskeytype
    static readonly ZOOM: oskeytype
    static readonly NONAME: oskeytype
    static readonly PA1: oskeytype
    static readonly OEM_CLEAR: oskeytype
    static convert(i: integer): oskeytype
}

// declare const SOUND_TYPE_EFFECT       : soundtype
// declare const SOUND_TYPE_EFFECT_LOOPED: soundtype
// declare function ConvertSoundType(i: integer): soundtype

declare abstract class SoundType {
    static readonly EFFECT: soundtype
    static readonly EFFECT_LOOPED: soundtype
    static convert(i: integer): soundtype
}

// declare const SOUND_VOLUMEGROUP_UNITMOVEMENT : volumegroup
// declare const SOUND_VOLUMEGROUP_UNITSOUNDS   : volumegroup
// declare const SOUND_VOLUMEGROUP_COMBAT       : volumegroup
// declare const SOUND_VOLUMEGROUP_SPELLS       : volumegroup
// declare const SOUND_VOLUMEGROUP_UI           : volumegroup
// declare const SOUND_VOLUMEGROUP_MUSIC        : volumegroup
// declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup
// declare const SOUND_VOLUMEGROUP_FIRE         : volumegroup
// declare function ConvertVolumeGroup(i: integer): volumegroup

declare abstract class VolumeGroup {
    static readonly UNITMOVEMENT: volumegroup
    static readonly UNITSOUNDS: volumegroup
    static readonly COMBAT: volumegroup
    static readonly SPELLS: volumegroup
    static readonly UI: volumegroup
    static readonly MUSIC: volumegroup
    static readonly AMBIENTSOUNDS: volumegroup
    static readonly FIRE: volumegroup
    static convert(i: integer): volumegroup
}

// declare const DIALOG_EVENT_BUTTON_CLICK: dialogevent
// declare const DIALOG_EVENT_DIALOG_CLICK: dialogevent

declare abstract class DialogEvent {
    static readonly BUTTON_CLICK: dialogevent
    static readonly DIALOG_CLICK: dialogevent
}

// declare const GAME_STATE_DIVINE_INTERVENTION: igamestate
// declare const GAME_STATE_DISCONNECTED       : igamestate
// declare const GAME_STATE_TIME_OF_DAY        : fgamestate
// declare function ConvertIGameState(i: integer): igamestate
// declare function ConvertFGameState(i: integer): fgamestate

declare abstract class GameState {
    static readonly DIVINE_INTERVENTION: igamestate
    static readonly DISCONNECTED: igamestate
    static readonly TIME_OF_DAY: fgamestate
    static convertInteger(i: integer): igamestate
    static convertFloat(i: integer): fgamestate
}

// declare const PLAYER_STATE_GAME_RESULT: playerstate
// declare const PLAYER_STATE_RESOURCE_GOLD       : playerstate
// declare const PLAYER_STATE_RESOURCE_LUMBER     : playerstate
// declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate
// declare const PLAYER_STATE_RESOURCE_FOOD_CAP   : playerstate
// declare const PLAYER_STATE_RESOURCE_FOOD_USED  : playerstate
// declare const PLAYER_STATE_FOOD_CAP_CEILING    : playerstate
// declare const PLAYER_STATE_GIVES_BOUNTY  : playerstate
// declare const PLAYER_STATE_ALLIED_VICTORY: playerstate
// declare const PLAYER_STATE_PLACED        : playerstate
// declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate
// declare const PLAYER_STATE_OBSERVER         : playerstate
// declare const PLAYER_STATE_UNFOLLOWABLE     : playerstate
// declare const PLAYER_STATE_GOLD_UPKEEP_RATE  : playerstate
// declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate
// declare const PLAYER_STATE_GOLD_GATHERED  : playerstate
// declare const PLAYER_STATE_LUMBER_GATHERED: playerstate
// declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate
// declare function ConvertPlayerState(i: integer): playerstate

declare abstract class PlayerState {
    static readonly GAME_RESULT: playerstate

    //current resource levels

    static readonly RESOURCE_GOLD: playerstate
    static readonly RESOURCE_LUMBER: playerstate
    static readonly RESOURCE_HERO_TOKENS: playerstate
    static readonly RESOURCE_FOOD_CAP: playerstate
    static readonly RESOURCE_FOOD_USED: playerstate
    static readonly FOOD_CAP_CEILING: playerstate

    static readonly GIVES_BOUNTY: playerstate
    static readonly ALLIED_VICTORY: playerstate
    static readonly PLACED: playerstate
    static readonly OBSERVER_ON_DEATH: playerstate
    static readonly OBSERVER: playerstate
    static readonly UNFOLLOWABLE: playerstate

    // taxation rate for each resource

    static readonly GOLD_UPKEEP_RATE: playerstate
    static readonly LUMBER_UPKEEP_RATE: playerstate

    // cumulative resources collected by the player during the mission

    static readonly GOLD_GATHERED: playerstate
    static readonly LUMBER_GATHERED: playerstate

    static readonly NO_CREEP_SLEEP: playerstate
    static convert(i: integer): playerstate
}

// declare const UNIT_STATE_LIFE    : unitstate
// declare const UNIT_STATE_MAX_LIFE: unitstate
// declare const UNIT_STATE_MANA    : unitstate
// declare const UNIT_STATE_MAX_MANA: unitstate
// declare function ConvertUnitState(i: integer): unitstate

declare abstract class UnitState {
    static readonly LIFE: unitstate
    static readonly MAX_LIFE: unitstate
    static readonly MANA: unitstate
    static readonly MAX_MANA: unitstate
    static convert(i: integer): unitstate
}

// declare const AI_DIFFICULTY_NEWBIE: aidifficulty
// declare const AI_DIFFICULTY_NORMAL: aidifficulty
// declare const AI_DIFFICULTY_INSANE: aidifficulty
// declare function ConvertAIDifficulty(i: integer): aidifficulty

declare abstract class AIDifficulty {
    static readonly NEWBIE: aidifficulty
    static readonly NORMAL: aidifficulty
    static readonly INSANE: aidifficulty
    static convert(i: integer): aidifficulty
}

// player score values
// declare const PLAYER_SCORE_UNITS_TRAINED: playerscore
// declare const PLAYER_SCORE_UNITS_KILLED : playerscore
// declare const PLAYER_SCORE_STRUCT_BUILT : playerscore
// declare const PLAYER_SCORE_STRUCT_RAZED : playerscore
// declare const PLAYER_SCORE_TECH_PERCENT : playerscore
// declare const PLAYER_SCORE_FOOD_MAXPROD : playerscore
// declare const PLAYER_SCORE_FOOD_MAXUSED : playerscore
// declare const PLAYER_SCORE_HEROES_KILLED: playerscore
// declare const PLAYER_SCORE_ITEMS_GAINED : playerscore
// declare const PLAYER_SCORE_MERCS_HIRED  : playerscore
// declare const PLAYER_SCORE_GOLD_MINED_TOTAL : playerscore
// declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore
// declare const PLAYER_SCORE_GOLD_LOST_UPKEEP : playerscore
// declare const PLAYER_SCORE_GOLD_LOST_TAX     : playerscore
// declare const PLAYER_SCORE_GOLD_GIVEN        : playerscore
// declare const PLAYER_SCORE_GOLD_RECEIVED     : playerscore
// declare const PLAYER_SCORE_LUMBER_TOTAL      : playerscore
// declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore
// declare const PLAYER_SCORE_LUMBER_LOST_TAX   : playerscore
// declare const PLAYER_SCORE_LUMBER_GIVEN      : playerscore
// declare const PLAYER_SCORE_LUMBER_RECEIVED   : playerscore
// declare const PLAYER_SCORE_UNIT_TOTAL        : playerscore
// declare const PLAYER_SCORE_HERO_TOTAL        : playerscore
// declare const PLAYER_SCORE_RESOURCE_TOTAL    : playerscore
// declare const PLAYER_SCORE_TOTAL             : playerscore
// declare function ConvertPlayerScore(i: integer): playerscore

declare abstract class PlayerScore {
    static readonly UNITS_TRAINED: playerscore
    static readonly UNITS_KILLED: playerscore
    static readonly STRUCT_BUILT: playerscore
    static readonly STRUCT_RAZED: playerscore
    static readonly TECH_PERCENT: playerscore
    static readonly FOOD_MAXPROD: playerscore
    static readonly FOOD_MAXUSED: playerscore
    static readonly HEROES_KILLED: playerscore
    static readonly ITEMS_GAINED: playerscore
    static readonly MERCS_HIRED: playerscore
    static readonly GOLD_MINED_TOTAL: playerscore
    static readonly GOLD_MINED_UPKEEP: playerscore
    static readonly GOLD_LOST_UPKEEP: playerscore
    static readonly GOLD_LOST_TAX: playerscore
    static readonly GOLD_GIVEN: playerscore
    static readonly GOLD_RECEIVED: playerscore
    static readonly LUMBER_TOTAL: playerscore
    static readonly LUMBER_LOST_UPKEEP: playerscore
    static readonly LUMBER_LOST_TAX: playerscore
    static readonly LUMBER_GIVEN: playerscore
    static readonly LUMBER_RECEIVED: playerscore
    static readonly UNIT_TOTAL: playerscore
    static readonly HERO_TOTAL: playerscore
    static readonly RESOURCE_TOTAL: playerscore
    static readonly TOTAL: playerscore
    static convert(i: integer): playerscore
}

// Move Type
// declare const MOVE_TYPE_UNKNOWN    : movetype
// declare const MOVE_TYPE_FOOT       : movetype
// declare const MOVE_TYPE_FLY        : movetype
// declare const MOVE_TYPE_HORSE      : movetype
// declare const MOVE_TYPE_HOVER      : movetype
// declare const MOVE_TYPE_FLOAT      :  movetype
// declare const MOVE_TYPE_AMPHIBIOUS :  movetype
// declare const MOVE_TYPE_UNBUILDABLE:  movetype
// declare function ConvertMoveType(i: integer): movetype

declare abstract class MoveType {
    static readonly UNKNOWN: movetype
    static readonly FOOT: movetype
    static readonly FLY: movetype
    static readonly HORSE: movetype
    static readonly HOVER: movetype
    static readonly FLOAT: movetype
    static readonly AMPHIBIOUS: movetype
    static readonly UNBUILDABLE: movetype
    static convert(i: integer): movetype
}

// Target Flag
// declare const TARGET_FLAG_NONE      : targetflag
// declare const TARGET_FLAG_GROUND    : targetflag
// declare const TARGET_FLAG_AIR       : targetflag
// declare const TARGET_FLAG_STRUCTURE : targetflag
// declare const TARGET_FLAG_WARD      :  targetflag
// declare const TARGET_FLAG_ITEM      :  targetflag
// declare const TARGET_FLAG_TREE      :  targetflag
// declare const TARGET_FLAG_WALL      : targetflag
// declare const TARGET_FLAG_DEBRIS    : targetflag
// declare const TARGET_FLAG_DECORATION: targetflag
// declare const TARGET_FLAG_BRIDGE    : targetflag
// declare function ConvertTargetFlag(i: integer): targetflag

declare abstract class TargetFlag {
    static readonly NONE: targetflag
    static readonly GROUND: targetflag
    static readonly AIR: targetflag
    static readonly STRUCTURE: targetflag
    static readonly WARD: targetflag
    static readonly ITEM: targetflag
    static readonly TREE: targetflag
    static readonly WALL: targetflag
    static readonly DEBRIS: targetflag
    static readonly DECORATION: targetflag
    static readonly BRIDGE: targetflag
    static convert(i: integer): targetflag
}

// defense type
// declare const DEFENSE_TYPE_LIGHT : defensetype
// declare const DEFENSE_TYPE_MEDIUM: defensetype
// declare const DEFENSE_TYPE_LARGE : defensetype
// declare const DEFENSE_TYPE_FORT  : defensetype
// declare const DEFENSE_TYPE_NORMAL: defensetype
// declare const DEFENSE_TYPE_HERO  : defensetype
// declare const DEFENSE_TYPE_DIVINE: defensetype
// declare const DEFENSE_TYPE_NONE  : defensetype
// declare function ConvertDefenseType(i: integer): defensetype

declare abstract class DefenseType {
    static readonly LIGHT: defensetype
    static readonly MEDIUM: defensetype
    static readonly LARGE: defensetype
    static readonly FORT: defensetype
    static readonly NORMAL: defensetype
    static readonly HERO: defensetype
    static readonly DIVINE: defensetype
    static readonly NONE: defensetype
    static convert(i: integer): defensetype
}

// Hero Attribute
// declare const HERO_ATTRIBUTE_STR: heroattribute
// declare const HERO_ATTRIBUTE_INT: heroattribute
// declare const HERO_ATTRIBUTE_AGI: heroattribute
// declare function ConvertHeroAttribute(i: integer): heroattribute

declare abstract class HeroAttribute {
    static readonly STR: heroattribute
    static readonly INT: heroattribute
    static readonly AGI: heroattribute
    static convert(i: integer): heroattribute
}

// Armor Type
// declare const ARMOR_TYPE_WHOKNOW: armortype
// declare const ARMOR_TYPE_FLESH  : armortype
// declare const ARMOR_TYPE_METAL  : armortype
// declare const ARMOR_TYPE_WOOD   : armortype
// declare const ARMOR_TYPE_ETHREAL: armortype
// declare const ARMOR_TYPE_STONE  : armortype
// declare function ConvertArmorType(i: integer): armortype

declare abstract class ArmorType {
    static readonly WHOKNOW: armortype
    static readonly FLESH: armortype
    static readonly METAL: armortype
    static readonly WOOD: armortype
    static readonly ETHREAL: armortype
    static readonly STONE: armortype
    static convert(i: integer): armortype
}

// Regeneration Type
// declare const REGENERATION_TYPE_NONE  : regentype
// declare const REGENERATION_TYPE_ALWAYS: regentype
// declare const REGENERATION_TYPE_BLIGHT: regentype
// declare const REGENERATION_TYPE_DAY   : regentype
// declare const REGENERATION_TYPE_NIGHT : regentype
// declare function ConvertRegenType(i: integer): regentype

declare abstract class RegenerationType {
    static readonly NONE: regentype
    static readonly ALWAYS: regentype
    static readonly BLIGHT: regentype
    static readonly DAY: regentype
    static readonly NIGHT: regentype
    static convert(i: integer): regentype
}

// Unit Category
// declare const UNIT_CATEGORY_GIANT     : unitcategory
// declare const UNIT_CATEGORY_UNDEAD    : unitcategory
// declare const UNIT_CATEGORY_SUMMONED  : unitcategory
// declare const UNIT_CATEGORY_MECHANICAL: unitcategory
// declare const UNIT_CATEGORY_PEON    : unitcategory
// declare const UNIT_CATEGORY_SAPPER  : unitcategory
// declare const UNIT_CATEGORY_TOWNHALL: unitcategory
// declare const UNIT_CATEGORY_ANCIENT: unitcategory
// declare const UNIT_CATEGORY_NEUTRAL: unitcategory
// declare const UNIT_CATEGORY_WARD   : unitcategory
// declare const UNIT_CATEGORY_STANDON: unitcategory
// declare const UNIT_CATEGORY_TAUREN : unitcategory
// declare function ConvertUnitCategory(i: integer): unitcategory

declare abstract class UnitCategory {
    static readonly GIANT: unitcategory
    static readonly UNDEAD: unitcategory
    static readonly SUMMONED: unitcategory
    static readonly MECHANICAL: unitcategory
    static readonly PEON: unitcategory
    static readonly SAPPER: unitcategory
    static readonly TOWNHALL: unitcategory
    static readonly ANCIENT: unitcategory
    static readonly NEUTRAL: unitcategory
    static readonly WARD: unitcategory
    static readonly STANDON: unitcategory
    static readonly TAUREN: unitcategory
    static convert(i: integer): unitcategory
}

// declare const UNIT_TYPE_HERO     : unittype
// declare const UNIT_TYPE_DEAD     : unittype
// declare const UNIT_TYPE_STRUCTURE: unittype

// declare const UNIT_TYPE_FLYING: unittype
// declare const UNIT_TYPE_GROUND: unittype

// declare const UNIT_TYPE_ATTACKS_FLYING: unittype
// declare const UNIT_TYPE_ATTACKS_GROUND: unittype

// declare const UNIT_TYPE_MELEE_ATTACKER : unittype
// declare const UNIT_TYPE_RANGED_ATTACKER: unittype

// declare const UNIT_TYPE_GIANT   : unittype
// declare const UNIT_TYPE_SUMMONED:  unittype
// declare const UNIT_TYPE_STUNNED :  unittype
// declare const UNIT_TYPE_PLAGUED :  unittype
// declare const UNIT_TYPE_SNARED  :  unittype

// declare const UNIT_TYPE_UNDEAD    : unittype
// declare const UNIT_TYPE_MECHANICAL: unittype
// declare const UNIT_TYPE_PEON      : unittype
// declare const UNIT_TYPE_SAPPER    : unittype
// declare const UNIT_TYPE_TOWNHALL  : unittype
// declare const UNIT_TYPE_ANCIENT   : unittype

// declare const UNIT_TYPE_TAUREN      : unittype
// declare const UNIT_TYPE_POISONED    : unittype
// declare const UNIT_TYPE_POLYMORPHED : unittype
// declare const UNIT_TYPE_SLEEPING    : unittype
// declare const UNIT_TYPE_RESISTANT   : unittype
// declare const UNIT_TYPE_ETHEREAL    : unittype
// declare const UNIT_TYPE_MAGIC_IMMUNE: unittype
// declare function ConvertUnitType(i: integer): unittype

declare abstract class UnitType {
    static readonly HERO: unittype
    static readonly DEAD: unittype
    static readonly STRUCTURE: unittype

    static readonly FLYING: unittype
    static readonly GROUND: unittype

    static readonly ATTACKS_FLYING: unittype
    static readonly ATTACKS_GROUND: unittype

    static readonly MELEE_ATTACKER: unittype
    static readonly RANGED_ATTACKER: unittype

    static readonly GIANT: unittype
    static readonly SUMMONED: unittype
    static readonly STUNNED: unittype
    static readonly PLAGUED: unittype
    static readonly SNARED: unittype

    static readonly UNDEAD: unittype
    static readonly MECHANICAL: unittype
    static readonly PEON: unittype
    static readonly SAPPER: unittype
    static readonly TOWNHALL: unittype
    static readonly ANCIENT: unittype

    static readonly TAUREN: unittype
    static readonly POISONED: unittype
    static readonly POLYMORPHED: unittype
    static readonly SLEEPING: unittype
    static readonly RESISTANT: unittype
    static readonly ETHEREAL: unittype
    static readonly MAGIC_IMMUNE: unittype
    static convert(i: integer): unittype
}

// declare const EVENT_GAME_VICTORY  : gameevent
// declare const EVENT_GAME_END_LEVEL: gameevent

// declare const EVENT_GAME_VARIABLE_LIMIT: gameevent
// declare const EVENT_GAME_STATE_LIMIT   : gameevent

// declare const EVENT_GAME_TIMER_EXPIRED: gameevent

// declare const EVENT_GAME_ENTER_REGION: gameevent
// declare const EVENT_GAME_LEAVE_REGION: gameevent

// declare const EVENT_GAME_TRACKABLE_HIT  : gameevent
// declare const EVENT_GAME_TRACKABLE_TRACK: gameevent

// declare const EVENT_GAME_SHOW_SKILL   : gameevent
// declare const EVENT_GAME_BUILD_SUBMENU: gameevent
// declare const EVENT_GAME_LOADED                : gameevent
// declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent
// declare const EVENT_GAME_TOURNAMENT_FINISH_NOW : gameevent
// declare const EVENT_GAME_SAVE                  : gameevent
// declare const EVENT_GAME_CUSTOM_UI_FRAME       : gameevent
// declare function ConvertGameEvent(i: integer): gameevent

declare abstract class GameEvent {
    static readonly VICTORY: gameevent
    static readonly END_LEVEL: gameevent

    static readonly VARIABLE_LIMIT: gameevent
    static readonly STATE_LIMIT: gameevent

    static readonly TIMER_EXPIRED: gameevent

    static readonly ENTER_REGION: gameevent
    static readonly LEAVE_REGION: gameevent

    static readonly TRACKABLE_HIT: gameevent
    static readonly TRACKABLE_TRACK: gameevent

    static readonly SHOW_SKILL: gameevent
    static readonly BUILD_SUBMENU: gameevent
    static readonly LOADED: gameevent
    static readonly TOURNAMENT_FINISH_SOON: gameevent
    static readonly TOURNAMENT_FINISH_NOW: gameevent
    static readonly SAVE: gameevent
    static readonly CUSTOM_UI_FRAME: gameevent
    static convert(i: integer): gameevent
}

// declare const EVENT_PLAYER_STATE_LIMIT     : playerevent
// declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent

// declare const EVENT_PLAYER_DEFEAT       : playerevent
// declare const EVENT_PLAYER_VICTORY      : playerevent
// declare const EVENT_PLAYER_LEAVE        : playerevent
// declare const EVENT_PLAYER_CHAT         : playerevent
// declare const EVENT_PLAYER_END_CINEMATIC: playerevent
// declare const EVENT_PLAYER_ARROW_LEFT_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_LEFT_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent
// declare const EVENT_PLAYER_ARROW_RIGHT_UP  : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_DOWN : playerevent
// declare const EVENT_PLAYER_ARROW_DOWN_UP   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_DOWN   : playerevent
// declare const EVENT_PLAYER_ARROW_UP_UP     : playerevent
// declare const EVENT_PLAYER_MOUSE_DOWN      : playerevent
// declare const EVENT_PLAYER_MOUSE_UP        : playerevent
// declare const EVENT_PLAYER_MOUSE_MOVE      : playerevent
// declare const EVENT_PLAYER_SYNC_DATA       : playerevent
// declare const EVENT_PLAYER_KEY             : playerevent
// declare const EVENT_PLAYER_KEY_DOWN        : playerevent
// declare const EVENT_PLAYER_KEY_UP          : playerevent
// declare function ConvertPlayerEvent(i: integer): playerevent

declare abstract class PlayerEvent {
    static readonly STATE_LIMIT: playerevent
    static readonly ALLIANCE_CHANGED: playerevent

    static readonly DEFEAT: playerevent
    static readonly VICTORY: playerevent
    static readonly LEAVE: playerevent
    static readonly CHAT: playerevent
    static readonly END_CINEMATIC: playerevent
    static readonly ARROW_LEFT_DOWN: playerevent
    static readonly ARROW_LEFT_UP: playerevent
    static readonly ARROW_RIGHT_DOWN: playerevent
    static readonly ARROW_RIGHT_UP: playerevent
    static readonly ARROW_DOWN_DOWN: playerevent
    static readonly ARROW_DOWN_UP: playerevent
    static readonly ARROW_UP_DOWN: playerevent
    static readonly ARROW_UP_UP: playerevent
    static readonly MOUSE_DOWN: playerevent
    static readonly MOUSE_UP: playerevent
    static readonly MOUSE_MOVE: playerevent
    static readonly SYNC_DATA: playerevent
    static readonly KEY: playerevent
    static readonly KEY_DOWN: playerevent
    static readonly KEY_UP: playerevent

    static convert(i: integer): playerevent
}

// declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent
// declare const EVENT_PLAYER_UNIT_RESCUED : playerunitevent

// declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent
// declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent

// declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent
// declare const EVENT_PLAYER_UNIT_HIDDEN  : playerunitevent

// declare const EVENT_PLAYER_UNIT_SELECTED  : playerunitevent
// declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent

// declare const EVENT_PLAYER_UNIT_CONSTRUCT_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_UPGRADE_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_TRAIN_START : playerunitevent
// declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent

// declare const EVENT_PLAYER_UNIT_RESEARCH_START     : playerunitevent
// declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL    : playerunitevent
// declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH    : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_ORDER       : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER : playerunitevent
// declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent

// declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent

// declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent
// declare const EVENT_PLAYER_HERO_SKILL: playerunitevent

// declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent

// declare const EVENT_PLAYER_HERO_REVIVE_START : playerunitevent
// declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent
// declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent
// declare const EVENT_PLAYER_UNIT_SUMMON       : playerunitevent
// declare const EVENT_PLAYER_UNIT_DROP_ITEM    : playerunitevent
// declare const EVENT_PLAYER_UNIT_PICKUP_ITEM  : playerunitevent
// declare const EVENT_PLAYER_UNIT_USE_ITEM     : playerunitevent

// declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent
// declare const EVENT_PLAYER_UNIT_DAMAGED : playerunitevent
// declare const EVENT_PLAYER_UNIT_DAMAGING: playerunitevent
// declare const EVENT_PLAYER_UNIT_SELL         : playerunitevent
// declare const EVENT_PLAYER_UNIT_CHANGE_OWNER : playerunitevent
// declare const EVENT_PLAYER_UNIT_SELL_ITEM    : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_CAST   : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_EFFECT : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_FINISH : playerunitevent
// declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent
// declare const EVENT_PLAYER_UNIT_PAWN_ITEM    : playerunitevent
// declare function ConvertPlayerUnitEvent(i: integer): playerunitevent

declare abstract class PlayerUnitEvent {
    static readonly ATTACKED: playerunitevent
    static readonly RESCUED: playerunitevent

    static readonly DEATH: playerunitevent
    static readonly DECAY: playerunitevent

    static readonly DETECTED: playerunitevent
    static readonly HIDDEN: playerunitevent

    static readonly SELECTED: playerunitevent
    static readonly DESELECTED: playerunitevent

    static readonly CONSTRUCT_START: playerunitevent
    static readonly CONSTRUCT_CANCEL: playerunitevent
    static readonly CONSTRUCT_FINISH: playerunitevent

    static readonly UPGRADE_START: playerunitevent
    static readonly UPGRADE_CANCEL: playerunitevent
    static readonly UPGRADE_FINISH: playerunitevent

    static readonly TRAIN_START: playerunitevent
    static readonly TRAIN_CANCEL: playerunitevent
    static readonly TRAIN_FINISH: playerunitevent

    static readonly RESEARCH_START: playerunitevent
    static readonly RESEARCH_CANCEL: playerunitevent
    static readonly RESEARCH_FINISH: playerunitevent
    static readonly ISSUED_ORDER: playerunitevent
    static readonly ISSUED_POINT_ORDER: playerunitevent
    static readonly ISSUED_TARGET_ORDER: playerunitevent
    // for compat
    static readonly ISSUED_UNIT_ORDER: playerunitevent

    static readonly HERO_LEVEL: playerunitevent
    static readonly HERO_SKILL: playerunitevent

    static readonly HERO_REVIVABLE: playerunitevent

    static readonly HERO_REVIVE_START: playerunitevent
    static readonly HERO_REVIVE_CANCEL: playerunitevent
    static readonly HERO_REVIVE_FINISH: playerunitevent
    static readonly SUMMON: playerunitevent
    static readonly DROP_ITEM: playerunitevent
    static readonly PICKUP_ITEM: playerunitevent
    static readonly USE_ITEM: playerunitevent

    static readonly LOADED: playerunitevent
    static readonly DAMAGED: playerunitevent
    static readonly DAMAGING: playerunitevent
    static readonly SELL: playerunitevent
    static readonly CHANGE_OWNER: playerunitevent
    static readonly SELL_ITEM: playerunitevent
    static readonly SPELL_CHANNEL: playerunitevent
    static readonly SPELL_CAST: playerunitevent
    static readonly SPELL_EFFECT: playerunitevent
    static readonly SPELL_FINISH: playerunitevent
    static readonly SPELL_ENDCAST: playerunitevent
    static readonly PAWN_ITEM: playerunitevent

    static convert(i: integer): playerunitevent
}

// declare const EVENT_UNIT_DAMAGED: unitevent
// declare const EVENT_UNIT_DAMAGING: unitevent
// declare const EVENT_UNIT_DEATH     : unitevent
// declare const EVENT_UNIT_DECAY     : unitevent
// declare const EVENT_UNIT_DETECTED  : unitevent
// declare const EVENT_UNIT_HIDDEN    : unitevent
// declare const EVENT_UNIT_SELECTED  : unitevent
// declare const EVENT_UNIT_DESELECTED: unitevent

// declare const EVENT_UNIT_STATE_LIMIT: unitevent

// declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent
// declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent
// declare const EVENT_UNIT_ATTACKED       : unitevent
// declare const EVENT_UNIT_RESCUED        : unitevent

// declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent
// declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent

// declare const EVENT_UNIT_UPGRADE_START : unitevent
// declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent
// declare const EVENT_UNIT_UPGRADE_FINISH: unitevent

// declare const EVENT_UNIT_TRAIN_START : unitevent
// declare const EVENT_UNIT_TRAIN_CANCEL: unitevent
// declare const EVENT_UNIT_TRAIN_FINISH: unitevent

// declare const EVENT_UNIT_RESEARCH_START : unitevent
// declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent
// declare const EVENT_UNIT_RESEARCH_FINISH: unitevent

// declare const EVENT_UNIT_ISSUED_ORDER       : unitevent
// declare const EVENT_UNIT_ISSUED_POINT_ORDER : unitevent
// declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent

// declare const EVENT_UNIT_HERO_LEVEL: unitevent
// declare const EVENT_UNIT_HERO_SKILL: unitevent

// declare const EVENT_UNIT_HERO_REVIVABLE    : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_START : unitevent
// declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent
// declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent

// declare const EVENT_UNIT_SUMMON: unitevent

// declare const EVENT_UNIT_DROP_ITEM  : unitevent
// declare const EVENT_UNIT_PICKUP_ITEM: unitevent
// declare const EVENT_UNIT_USE_ITEM   : unitevent

// declare const EVENT_UNIT_LOADED: unitevent
// declare const EVENT_UNIT_SELL         : unitevent
// declare const EVENT_UNIT_CHANGE_OWNER : unitevent
// declare const EVENT_UNIT_SELL_ITEM    : unitevent
// declare const EVENT_UNIT_SPELL_CHANNEL: unitevent
// declare const EVENT_UNIT_SPELL_CAST   : unitevent
// declare const EVENT_UNIT_SPELL_EFFECT : unitevent
// declare const EVENT_UNIT_SPELL_FINISH : unitevent
// declare const EVENT_UNIT_SPELL_ENDCAST: unitevent
// declare const EVENT_UNIT_PAWN_ITEM    : unitevent
// declare function ConvertUnitEvent(i: integer): unitevent

declare abstract class UnitEvent {
    static readonly DAMAGED: unitevent
    static readonly DAMAGING: unitevent
    static readonly DEATH: unitevent
    static readonly DECAY: unitevent
    static readonly DETECTED: unitevent
    static readonly HIDDEN: unitevent
    static readonly SELECTED: unitevent
    static readonly DESELECTED: unitevent

    static readonly STATE_LIMIT: unitevent

    // Events which may have a filter for the "other unit"

    static readonly ACQUIRED_TARGET: unitevent
    static readonly TARGET_IN_RANGE: unitevent
    static readonly ATTACKED: unitevent
    static readonly RESCUED: unitevent

    static readonly CONSTRUCT_CANCEL: unitevent
    static readonly CONSTRUCT_FINISH: unitevent

    static readonly UPGRADE_START: unitevent
    static readonly UPGRADE_CANCEL: unitevent
    static readonly UPGRADE_FINISH: unitevent

    // Events which involve the specified unit performing
    // training of other units

    static readonly TRAIN_START: unitevent
    static readonly TRAIN_CANCEL: unitevent
    static readonly TRAIN_FINISH: unitevent

    static readonly RESEARCH_START: unitevent
    static readonly RESEARCH_CANCEL: unitevent
    static readonly RESEARCH_FINISH: unitevent

    static readonly ISSUED_ORDER: unitevent
    static readonly ISSUED_POINT_ORDER: unitevent
    static readonly ISSUED_TARGET_ORDER: unitevent

    static readonly HERO_LEVEL: unitevent
    static readonly HERO_SKILL: unitevent

    static readonly HERO_REVIVABLE: unitevent
    static readonly HERO_REVIVE_START: unitevent
    static readonly HERO_REVIVE_CANCEL: unitevent
    static readonly HERO_REVIVE_FINISH: unitevent

    static readonly SUMMON: unitevent

    static readonly DROP_ITEM: unitevent
    static readonly PICKUP_ITEM: unitevent
    static readonly USE_ITEM: unitevent

    static readonly LOADED: unitevent
    static readonly SELL: unitevent
    static readonly CHANGE_OWNER: unitevent
    static readonly SELL_ITEM: unitevent
    static readonly SPELL_CHANNEL: unitevent
    static readonly SPELL_CAST: unitevent
    static readonly SPELL_EFFECT: unitevent
    static readonly SPELL_FINISH: unitevent
    static readonly SPELL_ENDCAST: unitevent
    static readonly PAWN_ITEM: unitevent

    static convert(i: integer): unitevent
}

// declare const EVENT_WIDGET_DEATH: widgetevent
// declare function ConvertWidgetEvent(i: integer): widgetevent

declare abstract class WidgetEvent {
    static readonly DEATH: widgetevent
    static convert(i: integer): widgetevent
}

declare const LESS_THAN            : limitop
declare const LESS_THAN_OR_EQUAL   : limitop
declare const EQUAL                : limitop
declare const GREATER_THAN_OR_EQUAL: limitop
declare const GREATER_THAN         : limitop
declare const NOT_EQUAL            : limitop
declare function ConvertLimitOp(i: integer): limitop

declare abstract class LimitOp {
    LESS_THAN            : limitop
    LESS_THAN_OR_EQUAL   : limitop
    EQUAL                : limitop
    GREATER_THAN_OR_EQUAL: limitop
    GREATER_THAN         : limitop
    NOT_EQUAL            : limitop
    static convert(i: integer): limitop
}

