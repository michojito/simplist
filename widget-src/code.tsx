/!* Michel Rodriguez ⓒ 2024 - SimpList */;
// Simplist is a simple To Do List for Figma and Figjam

const { widget } = figma;
const { useSyncedState, usePropertyMenu } = widget;

// Imports
import { ColorPalette } from "./constants";
import { iconLibrary } from "./models/IconLibrary";
import { EditPage } from "./pages/edit/EditPage";
import { MainPage } from "./pages/main/MainPage";
import { CompactPage } from "./pages/main/CompactPage";
import { PowerModePage } from "./pages/powerMode/PowerModePage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { ModalContainer } from "./views/containers/ModalContainer";
import { Task } from "./models/Task";

// Components

/* Main function that handle the whole Widget */
function Main() {
  // State Machine
  const [isHideCompleted, setHideCompleted] = useSyncedState(
    "isHideCompleted",
    false
  );
  const [powerMode, setPowerMode] = useSyncedState("powerMode", false);
  const [editModeOpen, setEditModeOpen] = useSyncedState("editModeOpen", false);
  const [settingsModalOpen, setSettingsModalOpen] = useSyncedState(
    "settingsModalOpen",
    false
  );
  const [infoModalOpen, setInfoModalOpen] = useSyncedState(
    "infoModalOpen",
    false
  );
  const [menuOpen, setMenuOpen] = useSyncedState("MenuOpen", false);
  const [colorModalOpen, setColorModalOpen] = useSyncedState(
    "ColorModalOpen",
    false
  );
  const [isCompactMode, setIsCompactMode] = useSyncedState(
    "isCompactMode",
    false
  );

  // Colors
  const [lightMode, setLightMode] = useSyncedState("lightMode", true);
  const [color, setColor] = useSyncedState(
    "color",
    new ColorPalette(lightMode)
  );
  const [customAccentColor, setCustomAccentColor] = useSyncedState(
    "customAccentColor",
    undefined as string | undefined
  );

  // Tasks
  const [tasks, setTasks] = useSyncedState("tasks", [] as Task[]);

  // Power Mode
  const [powerModeInput, setPowerModeInput] = useSyncedState(
    "powerModeInput",
    ""
  );
  const [powerModeInitialized, setPowerModeInitialized] = useSyncedState(
    "powerModeInitialized",
    false
  );

  // Open Setting View
  if (settingsModalOpen) {
    return (
      <SettingsPage
        setColor={setColor}
        customAccentColor={customAccentColor}
        color={color}
        lightMode={{
          current: lightMode,
          set: setLightMode,
        }}
        ModalState={settingsModalOpen}
        setModalState={setSettingsModalOpen}
        colorModalOpen={colorModalOpen}
        setColorModalOpen={setColorModalOpen}
        onColorChange={(newColor) => {
          setCustomAccentColor(newColor);
          setColor(new ColorPalette(lightMode, newColor));
        }}
      />
    );
  }
  // Open Edit View
  if (editModeOpen) {
    return (
      <EditPage
        color={color}
        ModalState={editModeOpen}
        setModalState={setEditModeOpen}
        tasks={tasks}
        setTask={setTasks}
        isHideCompleted={isHideCompleted}
      />
    );
  }
  // Open PowerMode View
  if (powerMode) {
    try {
      return (
        <PowerModePage
          color={color}
          ModalState={powerMode}
          setModalState={setPowerMode}
          tasks={tasks}
          setTasks={(newTasks) => {
            setTasks(newTasks);
          }}
          powerModeInput={powerModeInput}
          setPowerModeInput={setPowerModeInput}
          powerModeInitialized={powerModeInitialized}
          setPowerModeInitialized={setPowerModeInitialized}
        />
      );
    } catch (error) {
      console.error("Error rendering PowerModePage:", error);
      setPowerMode(false);
      return null; // or return a fallback UI
    }
  }

  usePropertyMenu(
    [
      {
        itemType: "action",
        icon: iconLibrary("bolt", "#FFF"),
        tooltip: "Power Mode",
        propertyName: "powerMode",
      },
      {
        itemType: "action",
        tooltip: "Compact Mode",
        propertyName: "compactMode",
        icon: iconLibrary(
          isCompactMode ? "chevron.down" : "chevron.up",
          "#FFF"
        ),
      },
    ],
    ({ propertyName }) => {
      if (propertyName === "powerMode") {
        setPowerMode(true);
      }
      // Ajout de la gestion du toggle compact
      if (propertyName === "compactMode") {
        setIsCompactMode(!isCompactMode);
      }
    }
  );

  try {
    if (isCompactMode) {
      return (
        <ModalContainer
          color={color}
          setTask={setTasks}
          isHideCompleted={isHideCompleted}
          setHideCompleted={setHideCompleted}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          editModeOpen={editModeOpen}
          setEditModeOpen={setEditModeOpen}
          infoModalOpen={infoModalOpen}
          setInfoModalOpen={setInfoModalOpen}
          settingsModalOpen={settingsModalOpen}
          setSettingsModalOpen={setSettingsModalOpen}
          colorModalOpen={colorModalOpen}
          setColorModalOpen={setColorModalOpen}
          setPowerModeInput={setPowerModeInput}
          setPowerModeInitialized={setPowerModeInitialized}
        >
          <CompactPage
            color={color}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            tasks={tasks}
          />
        </ModalContainer>
      );
    }
    return (
      <ModalContainer
        color={color}
        setTask={setTasks}
        isHideCompleted={isHideCompleted}
        setHideCompleted={setHideCompleted}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        editModeOpen={editModeOpen}
        setEditModeOpen={setEditModeOpen}
        infoModalOpen={infoModalOpen}
        setInfoModalOpen={setInfoModalOpen}
        settingsModalOpen={settingsModalOpen}
        setSettingsModalOpen={setSettingsModalOpen}
        colorModalOpen={colorModalOpen}
        setColorModalOpen={setColorModalOpen}
        setPowerModeInput={setPowerModeInput}
        setPowerModeInitialized={setPowerModeInitialized}
      >
        <MainPage
          color={color}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          tasks={tasks}
          setTask={setTasks}
          isHideCompleted={isHideCompleted}
        />
      </ModalContainer>
    );
  } catch (error) {
    console.error("Error rendering main UI:", error);
    return null; // or return a fallback UI
  }
}

widget.register(Main);
