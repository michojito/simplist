/!* Michel Rodriguez ⓒ 2024 - SimpList */
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma
const { useSyncedState, useEffect, usePropertyMenu, AutoLayout, Text } = widget


//Windows
import { InfoWindow } from "./windows/info"
import { MenuWindow } from "./windows/menu"

import { Task } from "./class/Task"
import { MainWindow } from "./windows/main"
import { EditWindow } from "./windows/edit"
import { color } from "./global"

function Main () {

  //usePropertyMenu()
  const initialValue : Task[] = []
  const [data, setData] = useSyncedState("data", initialValue)

  const [isEdit, setEdit] = useSyncedState('state', false)
  const [hasMenu, setMenu] = useSyncedState("hasMenu", false)
  const [hasInfo, setInfo] = useSyncedState("hasInfo", false)
  const [hideCompleted, setHideCompleted] = useSyncedState("hideCompleted", false)


  return (
    <AutoLayout
      name="Widget"
      overflow="visible"
      >
      { // Main Window
        !isEdit && 
        <MainWindow data={data} setData={setData} hasMenu={hasMenu} setMenu={setMenu} hideCompleted={hideCompleted} />
      }
      { // Edit Window
        isEdit && 
        <EditWindow data={data} setData={setData} isEdit={isEdit} setEdit={setEdit} />
      }

      {   // Info Window
          hasInfo && (
            <AutoLayout
            name="Info Container"
            positioning="absolute"
            x={{
              type: "left",
              offset: -260,
            }}
            y={{
              type: "top",
              offset: 0,
            }}>
            <InfoWindow setInfo={setInfo}/>
          </AutoLayout>
      )}
      {   // Menu
          hasMenu && (
            <AutoLayout
              name="Menu Container"
              positioning="absolute"
              x={{
                type: "right",
                offset: -157,
              }}
              y={50}>
              <MenuWindow setMenu={setMenu} setInfo={setInfo} data={setData} setEdit={setEdit} hideCompleted={hideCompleted} setHideCompleted={setHideCompleted}/>
            </AutoLayout>
      )}

    </AutoLayout>
  )
}

widget.register(Main)

