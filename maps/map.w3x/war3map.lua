gg_trg_allocator = nil
gg_trg_test = nil
gg_unit_Hblm_0000 = nil
gg_trg_test2 = nil
function InitGlobals()
end

function CreateAllItems()
    local itemID
    CreateItem(FourCC("dkfw"), -634.4, -191.3)
    CreateItem(FourCC("k3m1"), 113.6, -3.3)
    CreateItem(FourCC("mgtk"), -496.8, 285.8)
    CreateItem(FourCC("woms"), 770.0, -340.0)
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    gg_unit_Hblm_0000 = CreateUnit(p, FourCC("Hblm"), 9.5, -348.0, 249.661)
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
end

function Trig_allocator_Actions()
    ShowUnitHide(gg_unit_Hblm_0000)
end

function InitTrig_allocator()
    gg_trg_allocator = CreateTrigger()
    TriggerAddAction(gg_trg_allocator, Trig_allocator_Actions)
end

function Trig_test2_Actions()
        EnumItemsInRect(bj_mapInitialPlayableArea, function() return true end, function() print(GetItemName(GetEnumItem())) end)
end

function InitTrig_test2()
    gg_trg_test2 = CreateTrigger()
    TriggerRegisterTimerEventSingle(gg_trg_test2, 0.00)
    TriggerAddAction(gg_trg_test2, Trig_test2_Actions)
end

function InitCustomTriggers()
    InitTrig_allocator()
    InitTrig_test2()
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(0), true)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
end

function main()
    SetCameraBounds(-3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllItems()
    CreateAllUnits()
    InitBlizzard()
    InitGlobals()
    InitCustomTriggers()
end

function config()
    SetMapName("TRIGSTR_001")
    SetMapDescription("TRIGSTR_003")
    SetPlayers(1)
    SetTeams(1)
    SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
    DefineStartLocation(0, 0.0, -384.0)
    InitCustomPlayerSlots()
    SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    InitGenericPlayerSlots()
end

