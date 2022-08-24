declare type integer = number
declare type real = number
declare type code = (() => void) | null
declare type codebool = boolexpr | conditionfunc | (() => boolean) | null
// declare type rawcode = integer | string
// declare type order = integer | string
// declare type Primitive = boolean | integer | real | string

declare function FourCC(str: string): integer
declare function OrderId(orderIdString: string): integer
declare function OrderId2String(orderId: integer): string

declare function UnitId(unitIdString: string): integer
declare function UnitId2String(unitId: integer): string

// Not currently working correctly...
declare function AbilityId(abilityIdString: string): integer
declare function AbilityId2String(abilityId: integer): string

declare function GetObjectName(objectId: integer): string

declare function Filter(func: code): boolexpr
declare function Condition(func: code): conditionfunc
declare function DestroyCondition(c: conditionfunc): void

declare function ExecuteFunc(funcName: string): void

declare abstract class handle {}
declare abstract class agent extends handle {
    __agent: never
}
declare abstract class event extends agent {
    __event: never
}
declare abstract class player extends agent {
    __player: never
}
declare abstract class widget extends agent {
    __widget: never
}
declare abstract class unit extends widget {
    __unit: never
}
declare abstract class destructable extends widget {
    __destructable: never
}
declare abstract class item extends widget {
    __item: never
}
declare abstract class ability extends agent {
    __ability: never
}
declare abstract class buff extends ability {
    __buff: never
}
declare abstract class force extends agent {
    __force: never
}
declare abstract class group extends agent {
    __group: never
}
declare abstract class trigger extends agent {
    __trigger: never
}
declare abstract class triggercondition extends agent {
    __triggercondition: never
}
declare abstract class triggeraction extends handle {
    __triggeraction: never
}
declare abstract class timer extends agent {
    __timer: never
}
declare abstract class location extends agent {
    __location: never
}
declare abstract class region extends agent {
    __region: never
}
declare abstract class rect extends agent {
    __rect: never
}
declare abstract class boolexpr extends agent {
    __boolexpr: never
}
declare abstract class sound extends agent {
    __sound: never
}
declare abstract class conditionfunc extends boolexpr {
    __conditionfunc: never
}
declare abstract class filterfunc extends boolexpr {
    __filterfunc: never
}
declare abstract class unitpool extends handle {
    __unitpool: never
}
declare abstract class itempool extends handle {
    __itempool: never
}
declare abstract class race extends handle {
    __race: never
}
declare abstract class alliancetype extends handle {
    __alliancetype: never
}
declare abstract class racepreference extends handle {
    __racepreference: never
}
declare abstract class gamestate extends handle {
    __gamestate: never
}
declare abstract class igamestate extends gamestate {
    __igamestate: never
}
declare abstract class fgamestate extends gamestate {
    __fgamestate: never
}
declare abstract class playerstate extends handle {
    __playerstate: never
}
declare abstract class playerscore extends handle {
    __playerscore: never
}
declare abstract class playergameresult extends handle {
    __playergameresult: never
}
declare abstract class unitstate extends handle {
    __unitstate: never
}
declare abstract class aidifficulty extends handle {
    __aidifficulty: never
}
declare abstract class eventid extends handle {
    __eventid: never
}
declare abstract class gameevent extends eventid {
    __gameevent: never
}
declare abstract class playerevent extends eventid {
    __playerevent: never
}
declare abstract class playerunitevent extends eventid {
    __playerunitevent: never
}
declare abstract class unitevent extends eventid {
    __unitevent: never
}
declare abstract class limitop extends eventid {
    __limitop: never
}
declare abstract class widgetevent extends eventid {
    __widgetevent: never
}
declare abstract class dialogevent extends eventid {
    __dialogevent: never
}
declare abstract class unittype extends handle {
    __unittype: never
}
declare abstract class gamespeed extends handle {
    __gamespeed: never
}
declare abstract class gamedifficulty extends handle {
    __gamedifficulty: never
}
declare abstract class gametype extends handle {
    __gametype: never
}
declare abstract class mapflag extends handle {
    __mapflag: never
}
declare abstract class mapvisibility extends handle {
    __mapvisibility: never
}
declare abstract class mapsetting extends handle {
    __mapsetting: never
}
declare abstract class mapdensity extends handle {
    __mapdensity: never
}
declare abstract class mapcontrol extends handle {
    __mapcontrol: never
}
declare abstract class minimapicon extends handle {
    __minimapicon: never
}
declare abstract class playerslotstate extends handle {
    __playerslotstate: never
}
declare abstract class volumegroup extends handle {
    __volumegroup: never
}
declare abstract class camerafield extends handle {
    __camerafield: never
}
declare abstract class camerasetup extends handle {
    __camerasetup: never
}
declare abstract class playercolor extends handle {
    __playercolor: never
}
declare abstract class placement extends handle {
    __placement: never
}
declare abstract class startlocprio extends handle {
    __startlocprio: never
}
declare abstract class raritycontrol extends handle {
    __raritycontrol: never
}
declare abstract class blendmode extends handle {
    __blendmode: never
}
declare abstract class texmapflags extends handle {
    __texmapflags: never
}
declare abstract class effect extends agent {
    __effect: never
}
declare abstract class effecttype extends handle {
    __effecttype: never
}
declare abstract class weathereffect extends handle {
    __weathereffect: never
}
declare abstract class terraindeformation extends handle {
    __terraindeformation: never
}
declare abstract class fogstate extends handle {
    __fogstate: never
}
declare abstract class fogmodifier extends agent {
    __fogmodifier: never
}
declare abstract class dialog extends agent {
    __dialog: never
}
declare abstract class button extends agent {
    __button: never
}
declare abstract class quest extends agent {
    __quest: never
}
declare abstract class questitem extends agent {
    __questitem: never
}
declare abstract class defeatcondition extends agent {
    __defeatcondition: never
}
declare abstract class timerdialog extends agent {
    __timerdialog: never
}
declare abstract class leaderboard extends agent {
    __leaderboard: never
}
declare abstract class multiboard extends agent {
    __multiboard: never
}
declare abstract class multiboarditem extends agent {
    __multiboarditem: never
}
declare abstract class trackable extends agent {
    __trackable: never
}
declare abstract class gamecache extends agent {
    __gamecache: never
}
declare abstract class version extends handle {
    __version: never
}
declare abstract class itemtype extends handle {
    __itemtype: never
}
declare abstract class texttag extends handle {
    __texttag: never
}
declare abstract class attacktype extends handle {
    __attacktype: never
}
declare abstract class damagetype extends handle {
    __damagetype: never
}
declare abstract class weapontype extends handle {
    __weapontype: never
}
declare abstract class soundtype extends handle {
    __soundtype: never
}
declare abstract class lightning extends handle {
    __lightning: never
}
declare abstract class pathingtype extends handle {
    __pathingtype: never
}
declare abstract class mousebuttontype extends handle {
    __mousebuttontype: never
}
declare abstract class animtype extends handle {
    __animtype: never
}
declare abstract class subanimtype extends handle {
    __subanimtype: never
}
declare abstract class image extends handle {
    __image: never
}
declare abstract class ubersplat extends handle {
    __ubersplat: never
}
declare abstract class hashtable extends agent {
    __hashtable: never
}
declare abstract class framehandle extends handle {
    __framehandle: never
}
declare abstract class originframetype extends handle {
    __originframetype: never
}
declare abstract class framepointtype extends handle {
    __framepointtype: never
}
declare abstract class textaligntype extends handle {
    __textaligntype: never
}
declare abstract class frameeventtype extends handle {
    __frameeventtype: never
}
declare abstract class oskeytype extends handle {
    __oskeytype: never
}
declare abstract class abilityintegerfield extends handle {
    __abilityintegerfield: never
}
declare abstract class abilityrealfield extends handle {
    __abilityrealfield: never
}
declare abstract class abilitybooleanfield extends handle {
    __abilitybooleanfield: never
}
declare abstract class abilitystringfield extends handle {
    __abilitystringfield: never
}
declare abstract class abilityintegerlevelfield extends handle {
    __abilityintegerlevelfield: never
}
declare abstract class abilityreallevelfield extends handle {
    __abilityreallevelfield: never
}
declare abstract class abilitybooleanlevelfield extends handle {
    __abilitybooleanlevelfield: never
}
declare abstract class abilitystringlevelfield extends handle {
    __abilitystringlevelfield: never
}
declare abstract class abilityintegerlevelarrayfield extends handle {
    __abilityintegerlevelarrayfield: never
}
declare abstract class abilityreallevelarrayfield extends handle {
    __abilityreallevelarrayfield: never
}
declare abstract class abilitybooleanlevelarrayfield extends handle {
    __abilitybooleanlevelarrayfield: never
}
declare abstract class abilitystringlevelarrayfield extends handle {
    __abilitystringlevelarrayfield: never
}
declare abstract class unitintegerfield extends handle {
    __unitintegerfield: never
}
declare abstract class unitrealfield extends handle {
    __unitrealfield: never
}
declare abstract class unitbooleanfield extends handle {
    __unitbooleanfield: never
}
declare abstract class unitstringfield extends handle {
    __unitstringfield: never
}
declare abstract class unitweaponintegerfield extends handle {
    __unitweaponintegerfield: never
}
declare abstract class unitweaponrealfield extends handle {
    __unitweaponrealfield: never
}
declare abstract class unitweaponbooleanfield extends handle {
    __unitweaponbooleanfield: never
}
declare abstract class unitweaponstringfield extends handle {
    __unitweaponstringfield: never
}
declare abstract class itemintegerfield extends handle {
    __itemintegerfield: never
}
declare abstract class itemrealfield extends handle {
    __itemrealfield: never
}
declare abstract class itembooleanfield extends handle {
    __itembooleanfield: never
}
declare abstract class itemstringfield extends handle {
    __itemstringfield: never
}
declare abstract class movetype extends handle {
    __movetype: never
}
declare abstract class targetflag extends handle {
    __targetflag: never
}
declare abstract class armortype extends handle {
    __armortype: never
}
declare abstract class heroattribute extends handle {
    __heroattribute: never
}
declare abstract class defensetype extends handle {
    __defensetype: never
}
declare abstract class regentype extends handle {
    __regentype: never
}
declare abstract class unitcategory extends handle {
    __unitcategory: never
}
declare abstract class pathingflag extends handle {
    __pathingflag: never
}
declare abstract class commandbuttoneffect extends handle {
    __commandbuttoneffect: never
}