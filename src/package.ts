import { getFilter, wait } from "./debug"

export const init = () => {
    wait(2)
    print(DoNothing)
    print(bj_ALLIANCE_ALLIED)
    const group = CreateGroup()
    GroupEnumUnitsOfPlayer(
        group,
        Player(0),
        getFilter(() => GetFilterUnit() == gg_unit_Hblm_0000)
    )
    print(BlzGroupGetSize(group))
    ForGroup(group, () => {
        print(GetUnitName(GetEnumUnit()))
    })
    DestroyGroup(group)
}
